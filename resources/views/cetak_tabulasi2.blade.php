<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>A4</title>

    <!-- Normalize or reset CSS with your favorite library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">

    <!-- Load paper.css for happy printing -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/paper-css/0.4.1/paper.css">

    <!-- Set page size here: A5, A4 or A3 -->
    <!-- Set also "landscape" if you need -->
    <style>
        @page {
            size: A4
        }

        .sheet {
            overflow: visible;
            height: auto !important;
        }
    </style>
</head>

<!-- Set "A5", "A4" or "A3" for class name -->
<!-- Set also "landscape" if you need -->

<body class="A4">

    <!-- Each sheet element should have the class "sheet" -->
    <!-- "padding-**mm" is optional: you can set 10, 15, 20 or 25 -->
    <section class="sheet padding-10mm">

        <!-- Write HTML just like a web page -->
        <article class="centered"
            style="text-transform: uppercase !important; font-weight:bolder; margin-bottom:13pt; font-size:15pt;">
            Tabulasi Data Survey

            <table class="table table-hover table-bordered well wells dataTable no-footer"
                style="font-size: small; width:100%; height:100%">
                <thead>
                    <tr>
                        <th rowspan="2" class="fontsmaller" width="15%">Resp</th>
                        <th colspan="9" class="fontsmaller">Unsur Pertanyaan dan Jawaban</th>
                        <th rowspan="2" class="fontsmaller" width="20%">KET</th>

                    </tr>
                    <tr>
                        <th class="fontsmaller">Q1</th>
                        <th class="fontsmaller">Q2</th>
                        <th class="fontsmaller">Q3</th>
                        <th class="fontsmaller">Q4</th>
                        <th class="fontsmaller">Q5</th>
                        <th class="fontsmaller">Q6</th>
                        <th class="fontsmaller">Q7</th>
                        <th class="fontsmaller">Q8</th>
                        <th class="fontsmaller">Q9</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($surveys as $key => $survey)
                    <tr>
                        <td>{{ $key+1 }}</td>
                        <td>{{ $survey->answer_1 }}</td>
                        <td>{{ $survey->answer_2 }}</td>
                        <td>{{ $survey->answer_3 }}</td>
                        <td>{{ $survey->answer_4 }}</td>
                        <td>{{ $survey->answer_5 }}</td>
                        <td>{{ $survey->answer_6 }}</td>
                        <td>{{ $survey->answer_7 }}</td>
                        <td>{{ $survey->answer_8 }}</td>
                        <td>{{ $survey->answer_9 }}</td>
                        <td>-</td>

                    </tr>
                    @endforeach
                </tbody>
            </table>
        </article>

    </section>

</body>

</html>