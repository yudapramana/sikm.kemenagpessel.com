<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\API\LoginController;
use App\Http\Controllers\API\RoleController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\GuestController;
use App\Models\Question;
use PHPUnit\Framework\Constraint\Count;
use DataTables as DataTables;
use Carbon\Carbon;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('auth:sanctum')->get('/authenticated', function (Request $request) {
    return $request->user();
});


// Route::middleware('auth:sanctum')->get('/authenticated', function (Request $request) {
//     return true;
// });

Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [LoginController::class, 'index']);
Route::post('logout', [LoginController::class, 'logout']);


// Route::get('/get-roles', [RoleController::class, 'index'])->name('api.role.get');


Route::apiResources([
    'user' => UserController::class,
    'role' => RoleController::class,
    'guest' => GuestController::class,
]);

Route::get('/get/questions', function () {
    // $data = Question::take(3)->get();
    $data = Question::get();
    return $data;
});

Route::get('/get/layanan', function () {
    $layanans = \App\Models\DaftarLayanan::all();
    $data = [];
    foreach ($layanans as $key => $item) {
        $data[] = [
            'id' => $item->id_layanan,
            'text' => $item->unit->name . ' - ' . $item->name
        ];
    }
    return $data;
});


Route::post('/store/survey', function (Request $request) {
    $data = $request->input();

    $survey = \App\Models\Survey::create([
        'id_layanan' => $data['id_layanan'],
        'name' => $data['name'],
        'no_hp' => $data['no_hp'],
        'address' => $data['address'],
        'gender' => $data['gender'],
        'age' => $data['age'],
        'education' => $data['education'],
        'work' => $data['work'],
        'improvement' => $data['improvement'],
        'feedback' => $data['feedback'],
    ]);

    $survey->fresh();
    $answers = $data['answers'];
    $arrLength = Count($answers);
    $total = 0;
    foreach ($answers as $key => $item) {
        $param = 'answer_' . ($key + 1);

        $survey->$param = $answers[$key];
        $total += $answers[$key];
    }

    $average = number_format($total / $arrLength, 3);
    $survey->average = $average;

    $survey->save();
    $survey->fresh();



    $rekapTahunan = \App\Models\RekapTahunan::firstOrCreate([
        'tahun' => date('Y'),
        'id_layanan' => $data['id_layanan'],
    ]);

    $rJumlahResponden = $rekapTahunan->jumlah_responden;
    $rTotalAvgIndividu = $rekapTahunan->total_average_individu;

    $nJumlahResponden = $rJumlahResponden+1;
    $nTotalAvgIndividu = $rTotalAvgIndividu + $average;
    $index_pelayanan = round($nTotalAvgIndividu / $nJumlahResponden, 3);


    $rekapTahunan->jumlah_responden = $nJumlahResponden;
    $rekapTahunan->total_average_individu = $nTotalAvgIndividu;
    $rekapTahunan->index_pelayanan = $index_pelayanan;

    $mutuPelayanan = null;

    switch ($index_pelayanan) {
        case $index_pelayanan > 3.5:
            $mutuPelayanan = 'A (Sangat Baik)';
            break;

        case $index_pelayanan > 3.2 && $index_pelayanan <= 3.5:
            $mutuPelayanan = 'B (Baik)';
            break;

        case $index_pelayanan > 2.5 && $index_pelayanan <= 3.2:
            $mutuPelayanan = 'C (Kurang Baik)';
            break;

        case $index_pelayanan <= 2.5:
            $mutuPelayanan = 'D (Buruk)';
            break;

        default:
            # code...
            break;
    }

    $rekapTahunan->mutu_pelayanan = $mutuPelayanan;
    $rekapTahunan->konversi = number_format( ( ($index_pelayanan / 4) * 100 ), 2);

    $rekapTahunan->save();

    return $survey;
});


Route::get('/get/surveys', function () {
    $surveys = \App\Models\Survey::all();

    return Datatables::of($surveys)
                ->addIndexColumn()
                ->make(true);
});

Route::get('/get/rekapitulasi/{year}', function ($year) {
    $rekap = \App\Models\RekapTahunan::where('tahun', $year)->get();

    return Datatables::of($rekap)
                ->addIndexColumn()
                ->addColumn('aksi', function ($layanan) {
                    $btn = '<a class="badge badge-primary nav-link text-white">detail</a>&nbsp;&nbsp;';
                    $btn .= '<a class="badge badge-secondary nav-link text-white">grafik</a>';

                    return $btn;
                })
                ->rawColumns(['aksi'])
                ->make(true);
});

Route::get('/get/rekapitulasi-triwulan/{quarter}', function ($quarter) {
    $startDate = null;
    $endDate = null;

    switch ($quarter) {
        case '1':
            $startDate = Carbon::now()->month(1)->startOfQuarter();
            $endDate = Carbon::now()->month(1)->endOfQuarter();
            break;
        case '2':
            $startDate = Carbon::now()->month(4)->startOfQuarter();
            $endDate = Carbon::now()->month(4)->endOfQuarter();
            break;
        case '3':
            $startDate = Carbon::now()->month(7)->startOfQuarter();
            $endDate = Carbon::now()->month(7)->endOfQuarter();
            break;
        case '4':
            $startDate = Carbon::now()->month(10)->startOfQuarter();
            $endDate = Carbon::now()->month(10)->endOfQuarter();
            break;

        default:
            # code...
            break;
    }

    $rekap = \App\Models\RekapTahunan::whereBetween('created_at', [$startDate, $endDate])->get();

    return Datatables::of($rekap)
                ->addIndexColumn()
                ->addColumn('aksi', function ($layanan) {
                    $btn = '<a class="badge badge-primary nav-link text-white">detail</a>&nbsp;&nbsp;';
                    $btn .= '<a class="badge badge-secondary nav-link text-white">grafik</a>';

                    return $btn;
                })
                ->rawColumns(['aksi'])
                ->make(true);
});
