<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cetak Hasil</title>

    <style>
        body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            background-color: #FAFAFA;
            font: 12pt "Tahoma";
        }

        * {
            box-sizing: border-box;
            -moz-box-sizing: border-box;
        }

        .page {
            width: 210mm;
            min-height: 297mm;
            padding: 15mm;
            margin: 10mm auto;
            border: 1px #D3D3D3 solid;
            border-radius: 5px;
            background: white;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }

        .subpage {
            /* padding: 1cm; */
            /* border: 5px red solid; */
            height: 257mm;
            outline: 1.5cm #ffffff solid;
        }

        @page {
            size: A4;
            margin: 0;
        }

        @media print {

            html,
            body {
                width: 210mm;
                height: 297mm;
            }

            .page {
                margin: 0;
                border: initial;
                border-radius: initial;
                width: initial;
                min-height: initial;
                box-shadow: initial;
                background: initial;
                page-break-after: always;
                -webkit-print-color-adjust: exact;
            }

            .abu-abu-gelap {
                background-color: silver !important;
            }

            .abu-abu {
                background-color: whitesmoke !important;
            }
        }
    </style>

    <style>
        .content-wrapper {
            margin-left: 0 !important;
        }

        .marginpadding-minimal {
            padding: 5px !important;
            margin: 5px !important;
        }

        .marginpadding-minimal th {
            padding: 5px !important;
            margin: 5px !important;
        }

        .centered {
            text-align: center;
            vertical-align: middle;
        }

        .table thead th {
            vertical-align: middle !important;
        }

        .abu-abu-gelap {
            background-color: silver !important;
        }

        .abu-abu {
            background-color: whitesmoke !important;
        }

        .righted {
            text-align: right;
            vertical-align: middle;
        }

        .main-footer {
            margin-left: 0 !important;
        }

        .main-header {
            margin-left: 0 !important;
        }

        .main-header {
            --bs-navbar-padding-x: 1rem !important;
        }

        .fontsmaller {
            font-size: x-small !important;
        }

        .smallfont {
            font-size: x-small !important;
        }
    </style>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}" type="text/css">
</head>

<body onload="window.print()">
    <div class="book">
        <div class="page">
            <div class="subpage">

                <div class="row justify-content-md-center" style="margin-bottom: 22pt;">

                    <div class="col-lg">

                        {{-- <div class="card">

                            <div class="card-body"> --}}

                        <div class="col-12 text-center justify-content-center" style="margin-bottom: 15pt;">
                            <h4 style="text-transform: uppercase; margin: 0 !important; font-weight:bolder; font-size: 15pt">
                                @if ($tipe_survey === 'ikm')
                                    <span v-if="tipe_survey === 'ikm'">Indeks Kepuasan Masyarakat</span>
                                @else
                                    <span v-if="tipe_survey === 'ipk'" style="color: maroon;">Indeks Persepsi
                                        Korupsi</span>
                                @endif
                            </h4>
                            <h4 style="text-transform: uppercase; margin: 0 !important; font-weight:bolder; font-size: 15pt">
                                KANTOR KEMENTERIAN AGAMA KABUPATEN PESISIR SELATAN <br>TAHUN {{ $year }}
                                @if (isset($quarter))
                                    TRIWULAN {{ $quarter }}
                                @endif
                            </h4>

                        </div>

                        <div class="col-12">

                            <table class="table table-hover table-bordered well wells dataTable no-footer" style="font-size: small;">
                                <thead>
                                    <tr>
                                        <th colspan="4" class="text-center text-uppercase abu-abu-gelap" style="padding:5px;">
                                            <h4 style="margin:0">Jenis Pelayanan yang dinilai</h4>
                                        </th>
                                        <th colspan="3" class="text-center text-uppercase abu-abu" style="padding:5px;">
                                            <h6 style="margin:0">
                                                {{ $unit_name ? $unit_name : 'Semua Jenis Pelayanan' }}

                                            </h6>
                                        </th>

                                    </tr>

                                    <tr>
                                        <th colspan="4" class="text-center text-uppercase abu-abu-gelap" style="padding:5px;">
                                            <h4 style="margin:0">Tahun Penilaian</h4>
                                        </th>
                                        <th colspan="3" class="text-center text-uppercase abu-abu" style="padding:5px;">
                                            <h4 style="margin:0">{{ $year }}</h4>
                                        </th>
                                    </tr>

                                    <tr>
                                        <th rowspan="9" colspan="4" class="text-center text-uppercase centered" style="padding:5px; margin:0 auto;">
                                            <h1 style="margin:0; font-size: 47pt !important;">{{ $konversi }}
                                            </h1>
                                            <h4 style="margin:0">{{ $mutu_pelayanan }}</h4>
                                        </th>
                                        <th colspan="3" class="text-center text-uppercase abu-abu-gelap" style="padding:5px;">
                                            Ringkasan Responden</th>
                                    </tr>

                                    <tr>
                                        <th class="marginpadding-minimal centered fontsmaller abu-abu-gelap">
                                            Jumlah
                                            Responden</th>
                                        <th class="marginpadding-minimal centered fontsmaller" colspan="2">{{ $rangkuman_responden['total_responden'] }} orang</th>
                                    </tr>

                                    @foreach ($rangkuman_responden['gender'] as $key => $item)
                                        <tr>

                                            @if ($key == 'Laki-laki')
                                                <th class="marginpadding-minimal centered fontsmaller abu-abu-gelap" rowspan="2">
                                                    Jenis Kelamin</th>
                                            @endif
                                            <th class="marginpadding-minimal abu-abu fontsmaller">{{ $key }}</th>
                                            <th class="marginpadding-minimal righted fontsmaller">{{ $item }} orang
                                            </th>
                                        </tr>
                                    @endforeach


                                    @foreach ($rangkuman_responden['age'] as $key => $item)
                                        <tr>

                                            @if ($key == 'Dibawah 20 Tahun')
                                                <th class="marginpadding-minimal centered fontsmaller abu-abu-gelap" rowspan="5">
                                                    Umur</th>
                                            @endif
                                            <th class="marginpadding-minimal abu-abu fontsmaller">{{ $key }}</th>
                                            <th class="marginpadding-minimal righted fontsmaller">{{ $item }} orang
                                            </th>
                                        </tr>
                                    @endforeach


                                    <tr>
                                        <th class="centered fontsmaller marginpadding-minimal abu-abu-gelap" rowspan="2">
                                            Pekerjaan
                                        </th>
                                        @foreach ($rangkuman_responden['work'] as $key => $item)
                                            <th class="centered fontsmaller marginpadding-minimal abu-abu">
                                                {{ $key }}
                                            </th>
                                        @endforeach
                                    </tr>

                                    <tr>

                                        @foreach ($rangkuman_responden['work'] as $key => $item)
                                            <th class="centered fontsmaller marginpadding-minimal">
                                                {{ $item }} orang
                                            </th>
                                        @endforeach
                                    </tr>



                                    <tr>
                                        <th class="centered fontsmaller marginpadding-minimal abu-abu-gelap" rowspan="2">
                                            Pendidikan
                                        </th>
                                        @foreach ($rangkuman_responden['education'] as $key => $item)
                                            <th class="centered fontsmaller marginpadding-minimal abu-abu">
                                                {{ $key }}
                                            </th>
                                        @endforeach
                                    </tr>

                                    <tr>

                                        @foreach ($rangkuman_responden['education'] as $key => $item)
                                            <th class="centered fontsmaller marginpadding-minimal">
                                                {{ $item }} orang
                                            </th>
                                        @endforeach
                                    </tr>


                                </thead>



                            </table>

                        </div>

                        {{--
                            </div>
                        </div> --}}

                    </div>


                </div>

                <div class="row justify-content-md-center">

                    <div class="col-lg">

                        {{-- <div class="card">

                            <div class="card-body"> --}}

                        <div class="col-12 text-center justify-content-center" style="margin-bottom: 15pt;">
                            <h4 style="text-transform: uppercase; margin: 0 !important; font-weight:bolder; font-size: 15pt">
                                Rangkuman per unsur
                                @if ($tipe_survey === 'ikm')
                                    <span v-if="tipe_survey === 'ikm'">Indeks Kepuasan Masyarakat</span>
                                @else
                                    <span v-if="tipe_survey === 'ipk'" style="color: maroon;">Indeks Persepsi
                                        Korupsi</span>
                                @endif
                            </h4>
                            <h4 style="text-transform: uppercase; margin: 0 !important; font-weight:bolder; font-size: 15pt">
                                KANTOR KEMENTERIAN AGAMA KABUPATEN PESISIR SELATAN <br>TAHUN {{ $year }}
                                @if (isset($quarter))
                                    TRIWULAN {{ $quarter }}
                                @endif
                            </h4>

                        </div>

                        <div class="col-12">

                            <table class="table table-hover table-bordered well wells dataTable no-footer" style="font-size: small;">
                                <thead>
                                    <tr>
                                        <th class="centered fontsmaller marginpadding-minimal">No</th>
                                        <th class="centered fontsmaller marginpadding-minimal">Unsur</th>
                                        <th class="centered fontsmaller marginpadding-minimal">Jumlah Pertanyaan
                                        </th>
                                        <th class="centered fontsmaller marginpadding-minimal">Total Nilai</th>
                                        <th class="centered fontsmaller marginpadding-minimal">Nilai Rerata
                                            Unsur</th>
                                        <th class="centered fontsmaller marginpadding-minimal">Nilai Rerata
                                            Tertimbang
                                            Unsur</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    @foreach ($factored_recapitulation as $key => $item)
                                        <tr>
                                            <td class="text-center centered fontsmaller marginpadding-minimal">{{ $item['key'] }}</td>
                                            <td class="fontsmaller marginpadding-minimal">{{ $item['unsur'] }}</td>
                                            <td class="text-center centered fontsmaller marginpadding-minimal">1
                                            </td>
                                            <td class="text-center centered fontsmaller marginpadding-minimal">{{ $item['summed'] }}</td>
                                            <td class="text-center centered fontsmaller marginpadding-minimal">{{ $item['average'] }}</td>
                                            <td class="text-center centered fontsmaller marginpadding-minimal">{{ $item['weighted_average'] }}</td>
                                        </tr>
                                    @endforeach


                                    <tr>
                                        <td colspan="5" class="text-right font-weight-bold centered fontsmaller marginpadding-minimal">
                                            Indeks Survey
                                            Kepuasan
                                            Masyarakat</td>
                                        <td class="text-center centered fontsmaller marginpadding-minimal font-weight-bold">
                                            {{ $nilai_sikm }}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="5" class="text-right font-weight-bold centered marginpadding-minimal">
                                            Konversi</td>
                                        <td class="text-center centered marginpadding-minimal font-weight-bold">
                                            {{ $konversi }}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="5" class="text-right font-weight-bold centered  marginpadding-minimal">
                                            Mutu Pelayanan</td>
                                        <td class="text-center centered  marginpadding-minimal font-weight-bold">
                                            {{ $mutu_pelayanan }}</td>
                                    </tr>
                                </tbody>

                            </table>

                        </div>

                        {{--
                            </div>
                        </div> --}}

                    </div>


                </div>


            </div>
        </div>
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
