<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\API\LoginController;
use App\Http\Controllers\API\RoleController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\GuestController;
use App\Models\Question;
use App\Models\Survey;
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


Route::get('/controlcenter/', function () {

    $base_uri = URL::to('/');
    $arrayData = [
        [
            'named_route' => 'Synchronize Index',
            'route_uri' => '/api/sync/index',
            'full_uri' => $base_uri . '/api/sync/index',
            'button' => '<a target="_blank" href="' . $base_uri . '/api/sync/index' . '" class="center text-center btn btn-sm btn-primary">Go</a>'
        ],
        [
            'named_route' => 'Reset Recapitulation',
            'route_uri' => '/api/reset-recapitulation/' . date("Y"),
            'full_uri' => $base_uri . '/api/reset-recapitulation/' . date("Y"),
            'button' => '
            <a target="_blank" href="' . $base_uri . '/api/reset-recapitulation/2023" class="center text-center btn btn-sm btn-primary">2023</a>&nbsp
            <a target="_blank" href="' . $base_uri . '/api/reset-recapitulation/2024" class="center text-center btn btn-sm btn-primary">2024</a>
            '
        ],
        [
            'named_route' => 'Calculate IKM Recap Yearly',
            'route_uri' => '/api/calc-recap-year/ikm/' . date("Y"),
            'full_uri' => $base_uri . '/api/calc-recap-year/ikm/' . date("Y"),
            'button' => '
            <a target="_blank" href="' . $base_uri . '/api/calc-recap-year/ikm/2023" class="center text-center btn btn-sm btn-primary">2023</a>
            <a target="_blank" href="' . $base_uri . '/api/calc-recap-year/ikm/2024" class="center text-center btn btn-sm btn-primary">2024</a>
            '
        ],
        [
            'named_route' => 'Calculate IPK Recap Yearly',
            'route_uri' => '/api/calc-recap-year/ipk/' . date("Y"),
            'full_uri' => $base_uri . '/api/calc-recap-year/ipk/' . date("Y"),
            'button' => '
            <a target="_blank" href="' . $base_uri . '/api/calc-recap-year/ipk/2023" class="center text-center btn btn-sm btn-primary">2023</a>
            <a target="_blank" href="' . $base_uri . '/api/calc-recap-year/ipk/2024" class="center text-center btn btn-sm btn-primary">2024</a>
            '
        ],
        [
            'named_route' => 'Calculate IKM Recap Quarterly',
            'route_uri' => '/api/calc-recap-quarter/ikm/' . date("Y"),
            'full_uri' => $base_uri . '/api/calc-recap-quarter/ikm/' . date("Y"),
            'button' => '
            <a target="_blank" href="' . $base_uri . '/api/calc-recap-quarter/ikm/2023" class="center text-center btn btn-sm btn-primary">2023</a>
            <a target="_blank" href="' . $base_uri . '/api/calc-recap-quarter/ikm/2024" class="center text-center btn btn-sm btn-primary">2024</a>
            '
        ],
        [
            'named_route' => 'Calculate IPK Recap Quarterly',
            'route_uri' => '/api/calc-recap-quarter/ipk/' . date("Y"),
            'full_uri' => $base_uri . '/api/calc-recap-quarter/ipk/' . date("Y"),
            'button' => '
            <a target="_blank" href="' . $base_uri . '/api/calc-recap-quarter/ipk/2023" class="center text-center btn btn-sm btn-primary">2023</a>
            <a target="_blank" href="' . $base_uri . '/api/calc-recap-quarter/ipk/2024" class="center text-center btn btn-sm btn-primary">2024</a>
            '
        ],
        [
            'named_route' => 'Reset All to Submitted',
            'route_uri' => '/api/reset-to-submitted/' . date("Y"),
            'full_uri' => $base_uri . '/api/reset-to-submitted/' . date("Y"),
            'button' => '
            <a target="_blank" href="' . $base_uri . '/api/reset-to-submitted/2023" class="center text-center btn btn-sm btn-primary">2023</a>
            <a target="_blank" href="' . $base_uri . '/api/reset-to-submitted/2024" class="center text-center btn btn-sm btn-primary">2024</a>
            '
        ],
        [
            'named_route' => 'Push to Approved',
            'route_uri' => '/api/pull-to-approved/' . date("Y"),
            'full_uri' => $base_uri . '/pull-to-approved/' . date("Y"),
            'button' => '
            <a target="_blank" href="' . $base_uri . '/api/pull-to-approved/2023" class="center text-center btn btn-sm btn-primary">2023</a>
            <a target="_blank" href="' . $base_uri . '/api/pull-to-approved/2024" class="center text-center btn btn-sm btn-primary">2024</a>
            '
        ],
    ];
    return view('controlcenter', compact('arrayData'));
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

Route::get('/get/unsur', function (Request $request) {

    $surveys = \App\Models\Survey::get();

    // $unsur_sikm = \App\Models\Question::where('tipe', 'IKM')->get()
    //     ->map(function ($item, $key) {
    //         return [
    //             'key' => $key+1,
    //             'unsur' => $item->factor
    //         ];
    //     })
    //     ->all();

    // foreach ($unsur_sikm as $key => $item) {
    //     $summed = $surveys->sum('answer_' . $item['key']);
    //     $counted = $surveys->count('answer_' . $item['key']);
    //     $average = number_format($summed / $counted, 3);

    //     $unsur_sikm[$key]['summed'] = $summed;
    //     $unsur_sikm[$key]['counted'] = $counted;
    //     $unsur_sikm[$key]['average'] = $average;
    //     $unsur_sikm[$key]['weighted_average'] = number_format($average * (1 / 9), 2);
    // }

    // return $unsur_sikm;


    $gender = $surveys->sortBy('gender')->groupBy('gender')->map(function ($item) {
        return $item->count();
    });

    $age = $surveys->sortBy('age')->groupBy('age')->map(function ($item) {
        return $item->count();
    });

    $education = $surveys->sortBy('education')->groupBy('education')->map(function ($item) {
        return $item->count();
    });

    $work = $surveys->sortBy('work')->groupBy('work')->map(function ($item) {
        return $item->count();
    });

    return [
        'gender' => $gender,
        'age' => $age,
        'education' => $education,
        'work' => $work,
    ];
});

Route::get('/sync/index', function (Request $request) {
    $surveys = \App\Models\Survey::where('nilai_ikm', 0)->get();

    foreach ($surveys as $key => $survey) {
        $surveyIKM = [
            $survey->answer_1,
            $survey->answer_2,
            $survey->answer_3,
            $survey->answer_4,
            $survey->answer_5,
            $survey->answer_6,
            $survey->answer_7,
            $survey->answer_8,
            $survey->answer_9
        ];

        $surveyIPK = [
            $survey->answer_10,
            $survey->answer_11,
            $survey->answer_12,
            $survey->answer_13,
            $survey->answer_14,
            $survey->answer_15
        ];

        $avgIKM = number_format((array_sum($surveyIKM) / Count($surveyIKM)), 3);
        $avgIPK = number_format((array_sum($surveyIPK) / Count($surveyIPK)), 3);

        $survey->update([
            'nilai_ikm' => $avgIKM,
            'nilai_ipk' => $avgIPK,
        ]);
    }

    return 'done';
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

                $nJumlahResponden = $rJumlahResponden + 1;
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

                $nJumlahResponden = $rJumlahResponden + 1;
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


Route::get('/get/all_surveys', function () {
    $surveys = \App\Models\Survey::select('id_survey', 'submitted_at', 'id_layanan', 'average', 'improvement', 'feedback')
        ->where('feedback', '!=', '')
        ->orderBy('id_layanan')
        ->get()->map(function ($event) {
            return [
                'id_survey' => $event->id_survey,
                'nama_unit' => $event->nama_unit,
                'nama_layanan' => $event->nama_layanan,
                'average' => number_format($event->average, 2),
                'improvement' => $event->improvement,
                'feedback' => $event->feedback,
            ];
        });

    $groupByUnit = $surveys->groupBy('nama_unit');
    return $groupByUnit;
});

Route::get('/get/survey_by_unit/{id_unit}', function ($id_unit) {
    // return 'caper ang ma';
    $surveys = \App\Models\Survey::select('id_survey', 'submitted_at', 'id_layanan', 'average', 'improvement', 'feedback')
        ->whereHas('layanan.unit', function ($query) use ($id_unit) {
            $query->where('id_unit_pengolah', $id_unit);
        })

        ->where('feedback', '!=', '')
        ->orderBy('id_layanan')
        ->get()
        ->map(function ($event) {
            return [
                'id_survey' => $event->id_survey,
                'average' => number_format($event->average, 2),
                'nama_layanan' => $event->nama_layanan,
                'improvement' => $event->improvement,
                'feedback' => $event->feedback,
            ];
        });

    return $surveys;
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
">' . $sur->name . '</td>';
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
">' . $sur->address . '</td>';
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
">' . $sur->gender . '</td>';
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
">' . $sur->age . '</td>';
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
">' . $sur->work . '</td>';
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
">' . $sur->education . '</td>';
            $textHTML .= '</tr>';

            $textHTML .= '</table>';

            return $textHTML;
        })
        ->addColumn('aksi', function ($layanan) {
            $btn = '<a class="button-accept badge badge-primary nav-link text-white" style="cursor: pointer !important;">setujui</a>&nbsp;&nbsp;';
            $btn .= '<a class="button-reject badge badge-secondary nav-link text-white" style="cursor: pointer !important;">tolak</a>';

            return $btn;
        })
        ->editColumn('nilai_ikm', function ($layanan) {
            $btn = number_format($layanan->nilai_ikm, 3, '.', ',');
            return $btn;
        })
        ->editColumn('nilai_ipk', function ($layanan) {
            $btn = number_format($layanan->nilai_ipk, 3, '.', ',');
            return $btn;
        })
        ->rawColumns(['biodata', 'aksi'])

        ->make(true);
});

Route::get('/get/rekapitulasi/{tipe_survey}/{year}', function ($tipe_survey, $year) {

    $surveys = \App\Models\Survey::where('status', 'approved')
        ->whereYear('submitted_at', $year)
        ->get();

    $total_responden = $surveys->count();

    $unsur_sikm = \App\Models\Question::where('tipe', $tipe_survey)->get()
        ->map(function ($item, $key) use ($tipe_survey) {

            $adder = $tipe_survey == 'ikm' ? 1 : 10;
            return [
                'key' => $key + $adder,
                'unsur' => $item->factor
            ];
        })
        ->all();


    $nilai_sikm = 0;
    foreach ($unsur_sikm as $key => $item) {
        $summed = $surveys->sum('answer_' . $item['key']);
        $counted = $surveys->count('answer_' . $item['key']);
        $average = number_format($summed / $counted, 3);

        $unsur_sikm[$key]['summed'] = $summed;
        $unsur_sikm[$key]['counted'] = $counted;
        $unsur_sikm[$key]['average'] = $average;
        $divider = $tipe_survey == 'ikm' ? 9 : 6;
        $weighted_average = number_format($average * (1 / $divider), 3);
        $unsur_sikm[$key]['weighted_average'] = $weighted_average;
        $nilai_sikm += $weighted_average;
    }

    $mutuPelayanan = '';
    switch ($nilai_sikm) {
        case $nilai_sikm > 3.26:
            $mutuPelayanan = 'A (Sangat Baik)';
            break;

        case $nilai_sikm > 2.51 && $nilai_sikm <= 3.25:
            $mutuPelayanan = 'B (Baik)';
            break;

        case $nilai_sikm > 1.76 && $nilai_sikm <= 2.5:
            $mutuPelayanan = 'C (Kurang Baik)';
            break;

        case $nilai_sikm <= 1.75:
            $mutuPelayanan = 'D (Buruk)';
            break;

        default:
            # code...
            break;
    }

    // asd
    $genderArr = [
        'Laki-laki' => 0,
        'Perempuan' => 0
    ];
    $gender = $surveys->countBy('gender')->toArray();
    $genderMerged = array_merge_recursive_distinct($genderArr, $gender);

    $ageArr = [
        'Dibawah 20 Tahun' => 0,
        '21 s/d 30 Tahun' => 0,
        '31 s/d 40 Tahun' => 0,
        '41 s/d 50 Tahun' => 0,
        'Diatas 50 Tahun' => 0
    ];
    $age = $surveys->countBy('age')->toArray();
    $ageMerged = array_merge_recursive_distinct($ageArr, $age);

    $educationArr = [
        'SD' => 0,
        'SMP atau Sederajat' => 0,
        'SMA atau Sederajat' => 0,
        'Strata 1 (S1)' => 0,
        'Strata 2 (S2)' => 0,
        'Strata 3 (S3)' => 0,
    ];
    $education = $surveys->countBy('education')->toArray();
    $educationMerged = array_merge_recursive_distinct($educationArr, $education);

    $workArr = [
        'PNS / TNI / POLRI' => 0,
        'Pegawai Swasta' => 0,
        'Wiraswasta' => 0,
        'Tenaga Honor / Ahli / Kontrak' => 0,
        'Pelajar / Mahasiswa' => 0,
        'Lainnya' => 0
    ];
    $work = $surveys->countBy('work')->toArray();
    $workMerged = array_merge_recursive_distinct($workArr, $work);


    $rangkuman_responden =  [
        'total_responden' => $total_responden,
        'gender' => $genderMerged,
        'age' => $ageMerged,
        'education' => $educationMerged,
        'work' => $workMerged,
    ];
    // asd

    $rekap = \App\Models\RekapTahunan::where([
        'tahun' => $year,
        'tipe_survey' => $tipe_survey
    ])->get();

    $konversi = number_format((($nilai_sikm / 4) * 100), 2);


    return Datatables::of($rekap)
        ->addIndexColumn()
        ->addColumn('aksi', function ($layanan) {
            $btn = '<a class="badge badge-primary nav-link text-white">detail</a>&nbsp;&nbsp;';
            $btn .= '<a class="badge badge-secondary nav-link text-white">grafik</a>';

            return $btn;
        })
        ->rawColumns(['aksi'])
        ->with([
            'factored_recapitulation' => $unsur_sikm,
            'nilai_sikm' => number_format($nilai_sikm, 2),
            'konversi' => $konversi,
            'mutu_pelayanan' => $mutuPelayanan,
            'rangkuman_responden' => $rangkuman_responden,
        ])
        ->make(true);
});

Route::get('/get/rekapitulasi-triwulan/{tipe_survey}/{year}/{quarter}', function ($tipe_survey, $year, $quarter) {
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



    // Modified
    $surveys = \App\Models\Survey::where('status', 'approved')
        ->whereBetween('submitted_at', [$startDate->format('Y-m-d') . " 00:00:00", $endDate->format('Y-m-d') . " 23:59:59"])
        ->get();

    // return $startDate->format('Y-m-d') . " 00:00:00" . '    -   ' . $endDate->format('Y-m-d') . " 23:59:59";


    $total_responden = 0;
    $genderMerged = 0;
    $ageMerged = 0;
    $educationMerged = 0;
    $workMerged = 0;

    $unsur_sikm = 0;
    $nilai_sikm = 0;
    $konversi = 0;
    $mutuPelayanan = 0;
    $rangkuman_responden = 0;

    if (count($surveys)) {
        $total_responden = $surveys->count();

        $unsur_sikm = \App\Models\Question::where('tipe', $tipe_survey)->get()
            ->map(function ($item, $key) use ($tipe_survey) {

                $adder = $tipe_survey == 'ikm' ? 1 : 10;
                return [
                    'key' => $key + $adder,
                    'unsur' => $item->factor
                ];
            })
            ->all();

        $nilai_sikm = 0;
        foreach ($unsur_sikm as $key => $item) {
            $summed = $surveys->sum('answer_' . $item['key']);
            $counted = $surveys->count('answer_' . $item['key']);
            $average = number_format($summed / $counted, 3);

            $unsur_sikm[$key]['summed'] = $summed;
            $unsur_sikm[$key]['counted'] = $counted;
            $unsur_sikm[$key]['average'] = $average;
            $divider = $tipe_survey == 'ikm' ? 9 : 6;
            $weighted_average = number_format($average * (1 / $divider), 3);
            $unsur_sikm[$key]['weighted_average'] = $weighted_average;
            $nilai_sikm += $weighted_average;
        }

        $mutuPelayanan = '';
        switch ($nilai_sikm) {
            case $nilai_sikm > 3.26:
                $mutuPelayanan = 'A (Sangat Baik)';
                break;

            case $nilai_sikm > 2.51 && $nilai_sikm <= 3.25:
                $mutuPelayanan = 'B (Baik)';
                break;

            case $nilai_sikm > 1.76 && $nilai_sikm <= 2.5:
                $mutuPelayanan = 'C (Kurang Baik)';
                break;

            case $nilai_sikm <= 1.75:
                $mutuPelayanan = 'D (Buruk)';
                break;

            default:
                # code...
                break;
        }

        // asd
        $genderArr = [
            'Laki-laki' => 0,
            'Perempuan' => 0
        ];
        $gender = $surveys->countBy('gender')->toArray();
        $genderMerged = array_merge_recursive_distinct($genderArr, $gender);

        $ageArr = [
            'Dibawah 20 Tahun' => 0,
            '21 s/d 30 Tahun' => 0,
            '31 s/d 40 Tahun' => 0,
            '41 s/d 50 Tahun' => 0,
            'Diatas 50 Tahun' => 0
        ];
        $age = $surveys->countBy('age')->toArray();
        $ageMerged = array_merge_recursive_distinct($ageArr, $age);

        $educationArr = [
            'SD' => 0,
            'SMP atau Sederajat' => 0,
            'SMA atau Sederajat' => 0,
            'Strata 1 (S1)' => 0,
            'Strata 2 (S2)' => 0,
            'Strata 3 (S3)' => 0,
        ];
        $education = $surveys->countBy('education')->toArray();
        $educationMerged = array_merge_recursive_distinct($educationArr, $education);

        $workArr = [
            'PNS / TNI / POLRI' => 0,
            'Pegawai Swasta' => 0,
            'Wiraswasta' => 0,
            'Tenaga Honor / Ahli / Kontrak' => 0,
            'Pelajar / Mahasiswa' => 0,
            'Lainnya' => 0
        ];
        $work = $surveys->countBy('work')->toArray();
        $workMerged = array_merge_recursive_distinct($workArr, $work);


        $rangkuman_responden =  [
            'total_responden' => $total_responden,
            'gender' => $genderMerged,
            'age' => $ageMerged,
            'education' => $educationMerged,
            'work' => $workMerged,
        ];

        $konversi = number_format((($nilai_sikm / 4) * 100), 2);
    }


    // End of Modified

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
        ->with([
            'factored_recapitulation' => $unsur_sikm,
            'nilai_sikm' => number_format($nilai_sikm, 2),
            'konversi' => $konversi,
            'mutu_pelayanan' => $mutuPelayanan,
            'rangkuman_responden' => $rangkuman_responden,
        ])
        ->make(true);
});

Route::get('/reset-to-submitted/{year}', function ($year) {
    $surveys = \App\Models\Survey::whereYear('submitted_at', $year)->get();

    foreach ($surveys as $key => $survey) {
        $survey->status = 'submitted';
        $survey->save();
    }

    return 'survey rekap resetted';
});

Route::get('/pull-to-approved/{year}', function ($year) {
    // $surveys = \App\Models\Survey::whereYear('submitted_at', $year)->get();
    // $surveys = \App\Models\Survey::whereYear('submitted_at', $year)->update(['status' => 'approved']);
    $surveysApproved = \App\Models\Survey::whereYear('submitted_at', $year)
                ->where('average', '>', '3')->update(['status' => 'approved']);

    $surveysRejected = \App\Models\Survey::whereYear('submitted_at', $year)
                ->where('average', '<=', '3')->update(['status' => 'rejected']);


    // foreach ($surveys as $key => $survey) {
    //     $survey->status = 'approved';
    //     $survey->save();
    // }

    return 'survey rekap resetted';
});

Route::get('/reset-recapitulation/{year}', function ($year) {
    $surveys = \App\Models\Survey::whereYear('submitted_at', $year)->get();

    // foreach ($surveys as $key => $survey) {
    //     $survey->status = 'submitted';
    //     $survey->save();
    // }

    $rekapTahunan = \App\Models\RekapTahunan::where('tahun', $year)->delete();
    $rekapTriwulan = \App\Models\RekapTriwulan::where('tahun', $year)->delete();
    $unitTriwulan = \App\Models\UnitRekapTriwulan::where('tahun', $year)->delete();
    $unitTahunan = \App\Models\UnitRekapTahunan::where('tahun', $year)->delete();


    return 'survey rekap resetted';
});

Route::get('/calc-recap-year/{tipe_survey}/{year}', function ($tipe_survey, $year) {
    $allsurveys = \App\Models\Survey::whereYear('submitted_at', $year)->where('status', 'approved')->get();
    $grouped = $allsurveys->groupBy('id_layanan');

    $rekapTahunan = \App\Models\RekapTahunan::where([
        'tahun' => $year,
        'tipe_survey' => $tipe_survey
    ])->delete();

    // Untuk Tahunan
    foreach ($grouped as $id_layanan => $surveys) {
        $totalResponden = $surveys->count();
        $sumAvgs = $surveys->sum('nilai_' . $tipe_survey);
        $index_pelayanan = number_format($sumAvgs / $totalResponden, 2);

        $rekapTahunan = \App\Models\RekapTahunan::firstOrCreate([
            'tahun' => $year,
            'tipe_survey' => $tipe_survey,
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

    return 'Calculation has been done, click <a href="/">here</a> to return to home page';
});


Route::get('/calc-recap-quarter/{tipe_survey}/{year}', function ($tipe_survey, $year) {
    $allsurveys = \App\Models\Survey::whereYear('submitted_at', $year)->where('status', 'approved')->get();

    $rekapTriwulan = \App\Models\RekapTriwulan::where([
        'tahun' => $year,
        'tipe_survey' => $tipe_survey
    ])->delete();

    // Untuk Triwulan
    foreach ($allsurveys as $survey) {
        // Rekap Triwulan
        $created_at = Carbon::createFromFormat('Y-m-d H:i:s', $survey->submitted_at);
        $quarter = $created_at->quarter;

        $rekapTriwulan = \App\Models\RekapTriwulan::firstOrCreate([
            'tahun' => date('Y'),
            'tipe_survey' => $tipe_survey,
            'triwulan' => $quarter,
            'id_layanan' => $survey->id_layanan,
        ]);

        $rJumlahResponden = $rekapTriwulan->jumlah_responden;
        $rTotalAvgIndividu = $rekapTriwulan->total_average_individu;

        $nJumlahResponden = $rJumlahResponden + 1;

        $average = $tipe_survey == 'ikm' ? $survey->nilai_ikm : $survey->nilai_ipk;

        $nTotalAvgIndividu = $rTotalAvgIndividu + $average;
        $index_pelayanan = round($nTotalAvgIndividu / $nJumlahResponden, 2);


        $rekapTriwulan->jumlah_responden = $nJumlahResponden;
        $rekapTriwulan->total_average_individu = $nTotalAvgIndividu;
        $rekapTriwulan->index_pelayanan = $index_pelayanan;
        $rekapTriwulan->tipe_survey = $tipe_survey;

        $mutuPelayanan = null;

        switch ($index_pelayanan) {
            case $index_pelayanan > 3.25:
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

        // if($mutuPelayanan == null) {
        //     return $index_pelayanan;
        // }

        $rekapTriwulan->mutu_pelayanan = $mutuPelayanan;
        $rekapTriwulan->konversi = number_format((($index_pelayanan / 4) * 100), 2);
        $rekapTriwulan->save();
    }


    // Count Rekap Triwulan as Unit
    $rekapTriwulan = \App\Models\RekapTriwulan::where([
        'tahun' => $year,
        'tipe_survey' => $tipe_survey
    ])->get();

    $oldRekapTriwulan = \App\Models\UnitRekapTriwulan::where([
        'tahun' => $year,
        'tipe_survey' => $tipe_survey
    ])->delete();

    $grouped = $rekapTriwulan->groupBy('triwulan_id_unit');

    foreach ($grouped as $triwulan_id_unit => $rekapan) {
        $exp = explode('_', $triwulan_id_unit);
        $triwulan = $exp[0];
        $id_unit = $exp[1];

        $jumlahResponden = 0;
        $sumAverageInd = 0;
        foreach ($rekapan as $rekap) {
            $jumlahResponden += $rekap->jumlah_responden;
            $sumAverageInd += $rekap->total_average_individu;
        }

        $index_pelayanan = round($sumAverageInd / $jumlahResponden, 2);

        $unitRekapTriwulan = \App\Models\UnitRekapTriwulan::firstOrCreate([
            'tahun' => $year,
            'tipe_survey' => $tipe_survey,
            'triwulan' => $triwulan,
            'id_unit_pengolah' => $id_unit,
        ]);

        $unitRekapTriwulan->jumlah_responden = $jumlahResponden;
        $unitRekapTriwulan->total_average_individu = $sumAverageInd;
        $unitRekapTriwulan->index_pelayanan = $index_pelayanan;

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

        $unitRekapTriwulan->mutu_pelayanan = $mutuPelayanan;
        $unitRekapTriwulan->konversi = number_format((($index_pelayanan / 4) * 100), 2);
        $unitRekapTriwulan->save();
    }


    // Count Rekap Tahunan as Unit
    $rekapTahunan = \App\Models\RekapTahunan::where([
        'tahun' => $year,
        'tipe_survey' => $tipe_survey
    ])->get();

    $grouped = $rekapTahunan->groupBy('id_unit_pengolah');


    foreach ($grouped as $id_unit_pengolah => $rekapan) {

        $jumlahResponden = 0;
        $sumAverageInd = 0;
        foreach ($rekapan as $rekap) {
            $jumlahResponden += $rekap->jumlah_responden;
            $sumAverageInd += $rekap->total_average_individu;
        }

        $index_pelayanan = round($sumAverageInd / $jumlahResponden, 3);

        $unitRekapTahunan = \App\Models\UnitRekapTahunan::firstOrCreate([
            'tahun' => $year,
            'tipe_survey' => $tipe_survey,
            'id_unit_pengolah' => $id_unit_pengolah,
        ]);

        $unitRekapTahunan->jumlah_responden = $jumlahResponden;
        $unitRekapTahunan->total_average_individu = $sumAverageInd;
        $unitRekapTahunan->index_pelayanan = $index_pelayanan;

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

        $unitRekapTahunan->mutu_pelayanan = $mutuPelayanan;
        $unitRekapTahunan->konversi = number_format((($index_pelayanan / 4) * 100), 2);
        $unitRekapTahunan->save();
    }

    return 'calculation done';
});

Route::get('/unit-rekap-triwulan/{quarter}', function ($quarter) {

    $rekaps = \App\Models\UnitRekapTriwulan::where('triwulan', $quarter)
        ->get();

    return $rekaps;
});

Route::get('/unit-rekap-tahunan/{tipe_survey}/{year}', function ($tipe_survey, $year) {

    $rekaps = \App\Models\UnitRekapTahunan::where([
        'tahun' => $year,
        'tipe_survey' => $tipe_survey
    ])
        ->get();

    return $rekaps;
});

Route::get('/cetak_tabulasi/{tipe_survey}/{year}/{quarter?}', function ($tipe_survey, $year, $quarter =  null) {

    if ($quarter) {
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

        // Modified
        $surveys = \App\Models\Survey::where('status', 'approved')
            ->whereBetween('submitted_at', [$startDate->format('Y-m-d') . " 00:00:00", $endDate->format('Y-m-d') . " 23:59:59"])
            ->get();
    } else {
        $surveys = \App\Models\Survey::where('status', 'approved')
            ->whereYear('submitted_at', $year)
            ->get();
    }


    // Get Unsur SIKM
    $unsur_sikm = \App\Models\Question::where('tipe', $tipe_survey)->get()
        ->map(function ($item, $key) use ($tipe_survey) {

            $adder = $tipe_survey == 'ikm' ? 1 : 10;
            return [
                'key' => $key + $adder,
                'unsur' => $item->factor
            ];
        })
        ->all();

    $summedTotal = 0;
    $summedAvg = 0;
    $summedWeighted = 0;
    foreach ($unsur_sikm as $key => $item) {
        $summed = $surveys->sum('answer_' . $item['key']);
        $counted = $surveys->count('answer_' . $item['key']);
        $average = number_format($summed / $counted, 3);

        $unsur_sikm[$key]['summed'] = $summed;
        $summedTotal += $summed;
        $unsur_sikm[$key]['counted'] = $counted;
        $unsur_sikm[$key]['average'] = $average;
        $summedAvg += $average;
        $weighted = number_format((($average / 4) * 100), 2);
        $unsur_sikm[$key]['weighted'] = $weighted;
        $summedWeighted += $weighted;
    }

    

    $data = [
        'surveys' => $surveys,
        'unsur_sikm' => $unsur_sikm,
        'summed_total' => $summedTotal,
        'summed_avg' => number_format($summedAvg / 9, 5),
        'summed_weighted' => number_format($summedWeighted / 9, 5),
    ];

    return view('cetak_tabulasi', $data);

});

Route::get('/cetak_hasil/{tipe_survey}/{year}/{quarter?}', function ($tipe_survey, $year, $quarter =  null) {

    $total_responden = 0;
    $genderMerged = 0;
    $ageMerged = 0;
    $educationMerged = 0;
    $workMerged = 0;

    $unsur_sikm = 0;
    $nilai_sikm = 0;
    $konversi = 0;
    $mutuPelayanan = 0;
    $rangkuman_responden = 0;

    if ($quarter) {
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

        // Modified
        $surveys = \App\Models\Survey::where('status', 'approved')
            ->whereBetween('submitted_at', [$startDate->format('Y-m-d') . " 00:00:00", $endDate->format('Y-m-d') . " 23:59:59"])
            ->get();
    } else {
        $surveys = \App\Models\Survey::where('status', 'approved')
            ->whereYear('submitted_at', $year)
            ->get();
    }

    // Calculated

    $total_responden = $surveys->count();

    $unsur_sikm = \App\Models\Question::where('tipe', $tipe_survey)->get()
        ->map(function ($item, $key) use ($tipe_survey) {

            $adder = $tipe_survey == 'ikm' ? 1 : 10;
            return [
                'key' => $key + $adder,
                'unsur' => $item->factor
            ];
        })
        ->all();


    $nilai_sikm = 0;
    foreach ($unsur_sikm as $key => $item) {
        $summed = $surveys->sum('answer_' . $item['key']);
        $counted = $surveys->count('answer_' . $item['key']);
        $average = number_format($summed / $counted, 3);

        $unsur_sikm[$key]['summed'] = $summed;
        $unsur_sikm[$key]['counted'] = $counted;
        $unsur_sikm[$key]['average'] = $average;
        $divider = $tipe_survey == 'ikm' ? 9 : 6;
        $weighted_average = number_format($average * (1 / $divider), 3);
        $unsur_sikm[$key]['weighted_average'] = $weighted_average;
        $nilai_sikm += $weighted_average;
    }

    $mutuPelayanan = '';
    switch ($nilai_sikm) {
        case $nilai_sikm > 3.26:
            $mutuPelayanan = 'A (Sangat Baik)';
            break;

        case $nilai_sikm > 2.51 && $nilai_sikm <= 3.25:
            $mutuPelayanan = 'B (Baik)';
            break;

        case $nilai_sikm > 1.76 && $nilai_sikm <= 2.5:
            $mutuPelayanan = 'C (Kurang Baik)';
            break;

        case $nilai_sikm <= 1.75:
            $mutuPelayanan = 'D (Buruk)';
            break;

        default:
            # code...
            break;
    }

    // asd
    $genderArr = [
        'Laki-laki' => 0,
        'Perempuan' => 0
    ];
    $gender = $surveys->countBy('gender')->toArray();
    $genderMerged = array_merge_recursive_distinct($genderArr, $gender);

    $ageArr = [
        'Dibawah 20 Tahun' => 0,
        '21 s/d 30 Tahun' => 0,
        '31 s/d 40 Tahun' => 0,
        '41 s/d 50 Tahun' => 0,
        'Diatas 50 Tahun' => 0
    ];
    $age = $surveys->countBy('age')->toArray();
    $ageMerged = array_merge_recursive_distinct($ageArr, $age);

    $educationArr = [
        'SD' => 0,
        'SMP atau Sederajat' => 0,
        'SMA atau Sederajat' => 0,
        'Strata 1 (S1)' => 0,
        'Strata 2 (S2)' => 0,
        'Strata 3 (S3)' => 0,
    ];
    $education = $surveys->countBy('education')->toArray();
    $educationMerged = array_merge_recursive_distinct($educationArr, $education);

    $workArr = [
        'PNS / TNI / POLRI' => 0,
        'Pegawai Swasta' => 0,
        'Wiraswasta' => 0,
        'Tenaga Honor / Ahli / Kontrak' => 0,
        'Pelajar / Mahasiswa' => 0,
        'Lainnya' => 0
    ];
    $work = $surveys->countBy('work')->toArray();
    $workMerged = array_merge_recursive_distinct($workArr, $work);


    $rangkuman_responden =  [
        'total_responden' => $total_responden,
        'gender' => $genderMerged,
        'age' => $ageMerged,
        'education' => $educationMerged,
        'work' => $workMerged,
    ];

    $konversi = number_format((($nilai_sikm / 4) * 100), 2);

    // End of Calculated

    $response = [
        'factored_recapitulation' => $unsur_sikm,
        'nilai_sikm' => number_format($nilai_sikm, 2),
        'konversi' => $konversi,
        'mutu_pelayanan' => $mutuPelayanan,
        'rangkuman_responden' => $rangkuman_responden,
        'year' => $year,
        'tipe_survey' => $tipe_survey,
        'quarter' => $quarter
    ];

    // return $response;

    return view('cetak_hasil', $response);
    // return $response;

});



