<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>A4 landscape</title>

    <!-- Normalize or reset CSS with your favorite library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">

    <!-- Load paper.css for happy printing -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/paper-css/0.4.1/paper.css">

    <!-- Set page size here: A5, A4 or A3 -->
    <!-- Set also "landscape" if you need -->
    <style>
        @page {
            size: A4 portrait;
        }

        .sheet {
            overflow: visible;
            height: auto !important;
        }
    </style>

    <style>
        .content-wrapper {
            margin-left: 0 !important;
        }

        .marginpadding-minimal {
            padding: 3px !important;
            margin: 3px !important;
        }

        .marginpadding-minimal th {
            padding: 3px !important;
            margin: 3px !important;
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

        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        td,
        th {
            border: 1px solid #dddddd;
            text-align: center;
            padding: 8px;
        }
    </style>

    {{--
    <link rel="stylesheet" href="{{ asset('css/app.css') }}" type="text/css"> --}}
    {{--
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}" type="text/css"> --}}
</head>

<!-- Set "A5", "A4" or "A3" for class name -->
<!-- Set also "landscape" if you need -->

<body class="A4">

    <!-- Each sheet element should have the class "sheet" -->
    <!-- "padding-**mm" is optional: you can set 10, 15, 20 or 25 -->
    <section class="sheet padding-10mm">

        <!-- Write HTML just like a web page -->
        <article class="centered" style="text-transform: uppercase !important; margin-bottom:23pt; font-size:15pt;">
            <span style="font-weight: bolder;">Tabulasi Data Survey</span> <br>
            &nbsp;
            <table class="table table-hover table-bordered well wells dataTable no-footer"
                style="font-size: small; width:100%; height:100%">
                <thead>
                    <tr>
                        <th rowspan="2" class="fontsmaller" width="15%">Responden</th>
                        <th colspan="9" class="fontsmaller">Unsur Pertanyaan dan Jawaban</th>
                        <th rowspan="2" class="fontsmaller" width="10%">KET</th>

                    </tr>
                    <tr>
                        <th class="fontsmaller marginpadding-minimal">Q1</th>
                        <th class="fontsmaller marginpadding-minimal">Q2</th>
                        <th class="fontsmaller marginpadding-minimal">Q3</th>
                        <th class="fontsmaller marginpadding-minimal">Q4</th>
                        <th class="fontsmaller marginpadding-minimal">Q5</th>
                        <th class="fontsmaller marginpadding-minimal">Q6</th>
                        <th class="fontsmaller marginpadding-minimal">Q7</th>
                        <th class="fontsmaller marginpadding-minimal">Q8</th>
                        <th class="fontsmaller marginpadding-minimal">Q9</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($surveys as $key => $survey)
                    <tr>
                        <td class="fontsmaller marginpadding-minimal">{{ $key+1 }}</td>
                        <td class="fontsmaller marginpadding-minimal">{{ $survey->answer_1 }}</td>
                        <td class="fontsmaller marginpadding-minimal">{{ $survey->answer_2 }}</td>
                        <td class="fontsmaller marginpadding-minimal">{{ $survey->answer_3 }}</td>
                        <td class="fontsmaller marginpadding-minimal">{{ $survey->answer_4 }}</td>
                        <td class="fontsmaller marginpadding-minimal">{{ $survey->answer_5 }}</td>
                        <td class="fontsmaller marginpadding-minimal">{{ $survey->answer_6 }}</td>
                        <td class="fontsmaller marginpadding-minimal">{{ $survey->answer_7 }}</td>
                        <td class="fontsmaller marginpadding-minimal">{{ $survey->answer_8 }}</td>
                        <td class="fontsmaller marginpadding-minimal">{{ $survey->answer_9 }}</td>
                        <td class="fontsmaller marginpadding-minimal">-</td>

                    </tr>
                    @endforeach

                    <tr>
                        <td class="fontsmaller marginpadding-minimal">Jumlah</td>
                        @foreach ($unsur_sikm as $item)
                        <td class="fontsmaller marginpadding-minimal">{{ $item['summed'] }}</td>
                        @endforeach

                        <td class="fontsmaller marginpadding-minimal">{{ $summed_total }}</td>
                    </tr>

                    <tr>
                        <td class="fontsmaller marginpadding-minimal">Nilai Rata-Rata (NRR)</td>
                        @foreach ($unsur_sikm as $item)
                        <td class="fontsmaller marginpadding-minimal">{{ $item['average'] }}</td>
                        @endforeach

                        <td class="fontsmaller marginpadding-minimal">{{ $summed_avg }}</td>
                    </tr>

                    <tr>
                        <td class="fontsmaller marginpadding-minimal">NRR Tertimbang</td>
                        @foreach ($unsur_sikm as $item)
                        <td class="fontsmaller marginpadding-minimal">{{ $item['weighted'] }}</td>
                        @endforeach

                        <td class="fontsmaller marginpadding-minimal">{{ $summed_weighted }}</td>
                    </tr>
                </tbody>
            </table>
        </article>


    </section>

</body>

</html>