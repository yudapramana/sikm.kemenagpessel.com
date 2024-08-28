<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">

<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-JRQC3TRN25"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-JRQC3TRN25');
    </script>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <link rel="stylesheet" href="{{ asset('css/app.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}" type="text/css">
    <style>
        #footer {
            position: fixed !important;
            bottom: 0 !important;
        }
    </style>

    <title>SIKM KemenagPessel - Sistem Indeks Kepuasan Masyarakat</title>

    <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script>
</head>

<body class="hold-transition sidebar-mini">
    <div class="wrapper" id="app">

    </div>

    <!-- REQUIRED SCRIPTS -->
    <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>

    <script src="{{ asset('js/app.js') }}"></script>

    <script defer>
        document.addEventListener('load', function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://widget.equally.ai/equally-widget.min.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'equallyWidget'));
        !window.EQUALLY_AI_API_KEY && (window.EQUALLY_AI_API_KEY = "Pd3zEXpVDjkEOuUWmk7R", intervalId = setInterval(function() {
            window.EquallyAi && (clearInterval(intervalId), window.EquallyAi = new EquallyAi)
        }, 500));
    </script>

</body>

</html>
