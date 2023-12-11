<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Survey Control Center</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <style>
        .table__head {
            color: #FFF;
            font-weight: 700;
            background: #9b4085;
            background: -moz-linear-gradient(-45deg, #9b4085 0%, #608590 100%);
            background: -webkit-linear-gradient(-45deg, #9b4085 0%, #608590 100%);
            background: linear-gradient(135deg, #9b4085 0%, #608590 100%);
            white-space: nowrap;
        }

        .table-bordered td,
        .table-bordered th {
            border: 0px solid #FFF;
        }

        .coin {
            width: 8%;
            margin-left: 5px;
            -webkit-animation: spin 4s linear infinite;
            -moz-animation: spin 4s linear infinite;
            animation: spin 4s linear infinite;
        }

        @-moz-keyframes spin {
            100% {
                -moz-transform: rotate(360deg);
            }
        }

        @-webkit-keyframes spin {
            100% {
                -webkit-transform: rotate(360deg);
            }
        }

        @keyframes spin {
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }

        .winner__table {
            white-space: nowrap;
        }

        @media screen and (max-width: 567px) {

            .winner__table {
                font-size: 12px;
            }

            .coin {
                width: 15%;
                margin-left: 2px;
            }
        }
    </style>
</head>

<body>

    <div class="container">
        <div class="table-responsive">
            <table class="table table-bordered   table-striped" style="margin-top:100px">
                <thead class="table__head">
                    <tr class="winner__table">
                        <th>S/N</th>
                        <th><i class="fa fa-user" aria-hidden="true"></i> Named Route</th>
                        <th><i class="fa fa-map-marker" aria-hidden="true"></i> Route URI</th>
                        {{-- <th> <i class="fa fa-phone" aria-hidden="true"></i> Full URI</th> --}}
                        <th><i class="fa fa-trophy" aria-hidden="true"></i> Go to URI</th>
                    </tr>
                </thead>
                <tbody>

                    @foreach ($arrayData as $key => $item)
                    <tr class="winner__table">
                        <td>{{ $key+1 }}</td>
                        <td>{{ $item['named_route'] }}</td>
                        <td>{{ $item['route_uri'] }}</td>
                        {{-- <td>{{ $item['full_uri'] }}</td> --}}
                        <td class="center text-center">{!! $item['button'] !!}</td>
                    </tr>
                    @endforeach

                </tbody>
            </table>
        </div>
    </div>

</body>

</html>