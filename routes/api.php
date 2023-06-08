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

Route::get('/get/layanan/{id_unit}', function ($id_unit) {
    $layanans = \App\Models\DaftarLayanan::where('id_unit_pengolah', $id_unit)->get();
    $data = [];
    foreach ($layanans as $key => $item) {
        $data[] = [
            'id' => $item->id_layanan,
            'text' => $item->name
        ];
    }
    return $data;
});

Route::get('/get/unit/', function () {
    $layanans = \App\Models\UnitPengolah::all();
    $data = [];
    foreach ($layanans as $key => $item) {
        $data[] = [
            'id' => $item->id_unit_pengolah,
            'text' => $item->name
        ];
    }
    return $data;
});


Route::post('/store/survey', function (Request $request) {
    $data = $request->input();  

    $submitted_at = Carbon::now();
    $submitted_at = $submitted_at->toDateTimeString();

    $survey = \App\Models\Survey::create([
        'submitted_at' => $submitted_at,
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



    // Rekap Tahunan
    // $rekapTahunan = \App\Models\RekapTahunan::firstOrCreate([
    //     'tahun' => date('Y'),
    //     'id_layanan' => $survey['id_layanan'],
    // ]);

    // $rJumlahResponden = $rekapTahunan->jumlah_responden;
    // $rTotalAvgIndividu = $rekapTahunan->total_average_individu;

    // $nJumlahResponden = $rJumlahResponden+1;
    // $nTotalAvgIndividu = $rTotalAvgIndividu + $average;
    // $index_pelayanan = round($nTotalAvgIndividu / $nJumlahResponden, 3);


    // $rekapTahunan->jumlah_responden = $nJumlahResponden;
    // $rekapTahunan->total_average_individu = $nTotalAvgIndividu;
    // $rekapTahunan->index_pelayanan = $index_pelayanan;

    // $mutuPelayanan = null;

    // switch ($index_pelayanan) {
    //     case $index_pelayanan > 3.26:
    //         $mutuPelayanan = 'A (Sangat Baik)';
    //         break;

    //     case $index_pelayanan > 2.51 && $index_pelayanan <= 3.25:
    //         $mutuPelayanan = 'B (Baik)';
    //         break;

    //     case $index_pelayanan > 1.76 && $index_pelayanan <= 2.5:
    //         $mutuPelayanan = 'C (Kurang Baik)';
    //         break;

    //     case $index_pelayanan <= 1.75:
    //         $mutuPelayanan = 'D (Buruk)';
    //         break;

    //     default:
    //         # code...
    //         break;
    // }

    // $rekapTahunan->mutu_pelayanan = $mutuPelayanan;
    // $rekapTahunan->konversi = number_format((($index_pelayanan / 4) * 100), 2);

    // $rekapTahunan->save();
    // End of Rekap Tahunan

    return $survey;
});

Route::get('/survey/{status}/{id_survey}', function ($status, $id_survey) {
    $survey = \App\Models\Survey::find($id_survey);
    
    if ($survey->status == 'submitted') {
        switch ($status) {
            case 'approved':

                $rekapTahunan = \App\Models\RekapTahunan::firstOrCreate([
                    'tahun' => date('Y'),
                    'id_layanan' => $survey->id_layanan,
                ]);

                $rJumlahResponden = $rekapTahunan->jumlah_responden;
                $rTotalAvgIndividu = $rekapTahunan->total_average_individu;

                $nJumlahResponden = $rJumlahResponden+1;
                $nTotalAvgIndividu = $rTotalAvgIndividu + $survey->average;
                $index_pelayanan = round($nTotalAvgIndividu / $nJumlahResponden, 3);


                $rekapTahunan->jumlah_responden = $nJumlahResponden;
                $rekapTahunan->total_average_individu = $nTotalAvgIndividu;
                $rekapTahunan->index_pelayanan = $index_pelayanan;

                $mutuPelayanan = null;

                switch ($index_pelayanan) {
                    case $index_pelayanan > 3.26:
                        $mutuPelayanan = 'A (Sangat Baik)';
                        break;

                    case $index_pelayanan > 2.51 && $index_pelayanan <= 3.25:
                        $mutuPelayanan = 'B (Baik)';
                        break;

                    case $index_pelayanan > 1.76 && $index_pelayanan <= 2.5:
                        $mutuPelayanan = 'C (Kurang Baik)';
                        break;

                    case $index_pelayanan <= 1.75:
                        $mutuPelayanan = 'D (Buruk)';
                        break;

                    default:
                        # code...
                        break;
                }

                $rekapTahunan->mutu_pelayanan = $mutuPelayanan;
                $rekapTahunan->konversi = number_format((($index_pelayanan / 4) * 100), 2);

                $rekapTahunan->save();


                // Rekap Triwulan
                $created_at = Carbon::createFromFormat('Y-m-d H:i:s', $survey->submitted_at);
                $quarter = $created_at->quarter;

                $rekapTriwulan = \App\Models\RekapTriwulan::firstOrCreate([
                    'tahun' => date('Y'),
                    'triwulan' => $quarter,
                    'id_layanan' => $survey->id_layanan,
                ]);

                $rJumlahResponden = $rekapTriwulan->jumlah_responden;
                $rTotalAvgIndividu = $rekapTriwulan->total_average_individu;

                $nJumlahResponden = $rJumlahResponden+1;
                $nTotalAvgIndividu = $rTotalAvgIndividu + $survey->average;
                $index_pelayanan = round($nTotalAvgIndividu / $nJumlahResponden, 3);


                $rekapTriwulan->jumlah_responden = $nJumlahResponden;
                $rekapTriwulan->total_average_individu = $nTotalAvgIndividu;
                $rekapTriwulan->index_pelayanan = $index_pelayanan;

                $mutuPelayanan = null;

                switch ($index_pelayanan) {
                    case $index_pelayanan > 3.26:
                        $mutuPelayanan = 'A (Sangat Baik)';
                        break;

                    case $index_pelayanan > 2.51 && $index_pelayanan <= 3.25:
                        $mutuPelayanan = 'B (Baik)';
                        break;

                    case $index_pelayanan > 1.76 && $index_pelayanan <= 2.5:
                        $mutuPelayanan = 'C (Kurang Baik)';
                        break;

                    case $index_pelayanan <= 1.75:
                        $mutuPelayanan = 'D (Buruk)';
                        break;

                    default:
                        # code...
                        break;
                }

                $rekapTriwulan->mutu_pelayanan = $mutuPelayanan;
                $rekapTriwulan->konversi = number_format((($index_pelayanan / 4) * 100), 2);
                $rekapTriwulan->save();

                break;

            case 'rejected':

                break;

            default:
                # code...
                break;
        }
    }

    $survey->status = $status;
    $survey->save();
    return $survey;
});

Route::get('/get/surveys/{status}', function ($status) {
    $surveys = \App\Models\Survey::where('status', $status)->get();

    return Datatables::of($surveys)
                ->addIndexColumn()
                ->addColumn('biodata', function ($sur) {
                    $textHTML = '<table class="insidetable table table-borderless" style="background:transparent;">';
                    $textHTML .= '<tr>';
                    $textHTML .= '<td style="
    padding: 0 !important;
    margin: 0 !important;
">nama_lengkap</td> <td style="
    padding: 0 !important;
    margin: 0 !important;
">:&nbsp;&nbsp;</td>  <td style="
    padding: 0 !important;
    margin: 0 !important;
">'.$sur->name.'</td>';
                    $textHTML .= '</tr>';
                    $textHTML .= '<tr>';
                    $textHTML .= '<td style="
    padding: 0 !important;
    margin: 0 !important;
">alamat</td> <td style="
    padding: 0 !important;
    margin: 0 !important;
">:&nbsp;&nbsp;</td>  <td style="
    padding: 0 !important;
    margin: 0 !important;
">'.$sur->address.'</td>';
                    $textHTML .= '</tr>';
                    $textHTML .= '<tr>';
                    $textHTML .= '<td style="
    padding: 0 !important;
    margin: 0 !important;
">jenis_kelamin</td> <td style="
    padding: 0 !important;
    margin: 0 !important;
">:&nbsp;&nbsp;</td>  <td style="
    padding: 0 !important;
    margin: 0 !important;
">'.$sur->gender.'</td>';
                    $textHTML .= '</tr>';
                    $textHTML .= '<tr>';
                    $textHTML .= '<td style="
    padding: 0 !important;
    margin: 0 !important;
">umur</td> <td style="
    padding: 0 !important;
    margin: 0 !important;
">:&nbsp;&nbsp;</td>  <td style="
    padding: 0 !important;
    margin: 0 !important;
">'.$sur->age.'</td>';
                    $textHTML .= '</tr>';
                    $textHTML .= '<tr>';
                    $textHTML .= '<td style="
    padding: 0 !important;
    margin: 0 !important;
">pekerjaan</td> <td style="
    padding: 0 !important;
    margin: 0 !important;
">:&nbsp;&nbsp;</td>  <td style="
    padding: 0 !important;
    margin: 0 !important;
">'.$sur->work.'</td>';
                    $textHTML .= '</tr>';
                    $textHTML .= '<tr>';
                    $textHTML .= '<td style="
    padding: 0 !important;
    margin: 0 !important;
">pendidikan</td> <td style="
    padding: 0 !important;
    margin: 0 !important;
">:&nbsp;&nbsp;</td>  <td style="
    padding: 0 !important;
    margin: 0 !important;
">'.$sur->education.'</td>';
                    $textHTML .= '</tr>';

                    $textHTML .= '</table>';

                    return $textHTML;
                })
                ->addColumn('aksi', function ($layanan) {
                    $btn = '<a class="button-accept badge badge-primary nav-link text-white" style="cursor: pointer !important;">setujui</a>&nbsp;&nbsp;';
                    $btn .= '<a class="button-reject badge badge-secondary nav-link text-white" style="cursor: pointer !important;">tolak</a>';

                    return $btn;
                })
                ->rawColumns(['biodata', 'aksi'])

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

    // return $startDate->toDateTimeString() . '     -    ' . $endDate->toDateTimeString();

    $rekap = \App\Models\RekapTriwulan::where([
        'tahun' => date('Y'),
        'triwulan' => $quarter
    ])->get();

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


Route::get('/calc-recap-year/{year}', function($year) {
    $allsurveys = \App\Models\Survey::whereYear('submitted_at', $year)->where('status', 'approved')->get();
    $grouped = $allsurveys->groupBy('id_layanan');

    $rekapTahunan = \App\Models\RekapTahunan::where('tahun', $year)->delete();

    // Untuk Tahunan
    foreach ($grouped as $id_layanan => $surveys) {
        $totalResponden = $surveys->count();
        $sumAvgs = $surveys->sum('average');
        $index_pelayanan = round($sumAvgs / $totalResponden);

        $rekapTahunan = \App\Models\RekapTahunan::firstOrCreate([
            'tahun' => $year,
            'id_layanan' => $id_layanan,
            'jumlah_responden' => $totalResponden,
            'total_average_individu' => $sumAvgs,
            'index_pelayanan' => $index_pelayanan
        ]);

        $mutuPelayanan = null;
        switch ($index_pelayanan) {
            case $index_pelayanan > 3.26:
                $mutuPelayanan = 'A (Sangat Baik)';
                break;

            case $index_pelayanan > 2.51 && $index_pelayanan <= 3.25:
                $mutuPelayanan = 'B (Baik)';
                break;

            case $index_pelayanan > 1.76 && $index_pelayanan <= 2.5:
                $mutuPelayanan = 'C (Kurang Baik)';
                break;

            case $index_pelayanan <= 1.75:
                $mutuPelayanan = 'D (Buruk)';
                break;

            default:
                # code...
                break;
        }

        $rekapTahunan->mutu_pelayanan = $mutuPelayanan;
        $rekapTahunan->konversi = number_format((($index_pelayanan / 4) * 100), 2);
        $rekapTahunan->save();
        
    }
});


Route::get('/calc-recap-quarter/{year}', function($year) {
    $allsurveys = \App\Models\Survey::whereYear('submitted_at', $year)->where('status', 'approved')->get();

    $rekapTriwulan = \App\Models\RekapTriwulan::where('tahun', $year)->delete();

    // Untuk Triwulan
    foreach ($allsurveys as $survey) {
        // Rekap Triwulan
        $created_at = Carbon::createFromFormat('Y-m-d H:i:s', $survey->submitted_at);
        $quarter = $created_at->quarter;

        $rekapTriwulan = \App\Models\RekapTriwulan::firstOrCreate([
            'tahun' => date('Y'),
            'triwulan' => $quarter,
            'id_layanan' => $survey->id_layanan,
        ]);

        $rJumlahResponden = $rekapTriwulan->jumlah_responden;
        $rTotalAvgIndividu = $rekapTriwulan->total_average_individu;

        $nJumlahResponden = $rJumlahResponden+1;
        $nTotalAvgIndividu = $rTotalAvgIndividu + $survey->average;
        $index_pelayanan = round($nTotalAvgIndividu / $nJumlahResponden, 3);


        $rekapTriwulan->jumlah_responden = $nJumlahResponden;
        $rekapTriwulan->total_average_individu = $nTotalAvgIndividu;
        $rekapTriwulan->index_pelayanan = $index_pelayanan;

        $mutuPelayanan = null;

        switch ($index_pelayanan) {
            case $index_pelayanan > 3.26:
                $mutuPelayanan = 'A (Sangat Baik)';
                break;

            case $index_pelayanan > 2.51 && $index_pelayanan <= 3.25:
                $mutuPelayanan = 'B (Baik)';
                break;

            case $index_pelayanan > 1.76 && $index_pelayanan <= 2.5:
                $mutuPelayanan = 'C (Kurang Baik)';
                break;

            case $index_pelayanan <= 1.75:
                $mutuPelayanan = 'D (Buruk)';
                break;

            default:
                # code...
                break;
        }

        $rekapTriwulan->mutu_pelayanan = $mutuPelayanan;
        $rekapTriwulan->konversi = number_format((($index_pelayanan / 4) * 100), 2);
        $rekapTriwulan->save();

    }

    return 'calculation done';
});