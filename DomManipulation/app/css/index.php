<!doctype html>
<!--[if lt IE 9]><html class="lt-ie9" itemscope itemtype="http://schema.org/Movie"><![endif]-->
<!--[if IE 9]><html class="ie" itemscope itemtype="http://schema.org/Movie"><![endif]-->
<!--[if gt IE 9]><!--><html itemscope itemtype="http://schema.org/Movie"><!--<![endif]-->

    <head>   
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        
        <meta property="og:title" content=""/>
        <meta property="og:description" content=""/>
        <meta property="og:site_name" content=""/>
        <meta itemprop="name" content="" />
        <title></title>
        
        <link rel="apple-touch-icon-precomposed" sizes="57x57" href="images/favicon/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/favicon/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/favicon/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/favicon/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon-precomposed" sizes="60x60" href="images/favicon/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon-precomposed" sizes="120x120" href="images/favicon/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon-precomposed" sizes="76x76" href="images/favicon/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="images/favicon/apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" href="images/favicon/favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="images/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="images/favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="images/favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="images/favicon/favicon-128.png" sizes="128x128" />
        <meta name="application-name" content="&nbsp;"/>
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="images/favicon/mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="images/favicon/mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="images/favicon/mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="images/favicon/mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="images/favicon/mstile-310x310.png" />
        
        <script>

            var env = 'dev'; // set to 'prod' to turn off console logs

            function parsePath(){
                var base = window.location.protocol+"//"+window.location.host;
                if(window.location.port && window.location.port != '')path += ':'+window.location.port;

                var path = window.location.pathname;
                if(path.indexOf('.') >= 0) path = path.substring(0, path.lastIndexOf('/')+1);
                else if (path.indexOf('?') >= 0) path = path.substring(0, path.lastIndexOf('?'));

                return base + path;
            }

            window.FLOCK = window.FLOCK || {};
            FLOCK.settings = FLOCK.settings || {};
            FLOCK.settings.base_path = parsePath();
            FLOCK.settings.base_url = '';
            FLOCK.settings.deeplink = '<?php echo $deeplink; ?>';
            FLOCK.settings.mode = '<?php if ( isset( $_GET["mode"] ) ) echo $_GET["mode"] ?>';
            FLOCK.settings.instaLoad = '<?php echo $instaload ?>';

        </script>


        <link href='http://fonts.googleapis.com/css?family=Open+Sans:600&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="css/main.css">
        
        <!-- build:js js/modernizr.js -->
        <script src="bower_components/modernizr/modernizr.js"></script>   
        <!-- /build -->
        
    </head>
    <!-- build:[class]:dist prod -->
    <body class="dev">
    <!-- /build -->
        <script>
        if (document.body.className.match('prod')) {
            env = 'prod';
        }
        </script>
        
        <!-- build:js js/main.js -->
        <script data-main="js/main" src="bower_components/requirejs/require.js"></script>
        <!-- /build -->
        
        
    </body>
</html>