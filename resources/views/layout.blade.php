<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <title>Cabinet Schmidt - @yield('title')</title>
    <meta name="description" content="@yield('description')">
    <meta name="author" content="Cabinet Schmidt">
    @yield('robots')


    <link rel="icon" type="image/png" href="/favicon.png">
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
    <link rel="stylesheet" type="text/css" href="/css/tools.css">
    <link rel="stylesheet" href="/css/app.css" media="screen">
  </head>
  <body>
    @include('layout.header')
    @yield('content')
    @include('layout.popup')
    {{-- @unless(isset($remove_footer)) --}}
      @include('layout.footer')
    {{-- @endunless --}}
    @include('layout.toolbox')
    <script   src="https://code.jquery.com/jquery-2.2.3.min.js"   integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo="   crossorigin="anonymous"></script>
    <script type="text/javascript" src="/js/Classes.js"></script>
    @if (isset($check))
        <script type="text/javascript" src="/js/map.js"></script>
        <script type="text/javascript" async src="https://maps.google.com/maps/api/js?v3.exp&key=AIzaSyCXezNBO39ejsNwTN-4Lxj-d-gzh866rLY&callback=initMaps"></script>
    @endif
    <script type="text/javascript" src="/js/script.js"></script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-80937433-1', 'auto');
      ga('send', 'pageview');
    </script>
  </body>
</html>
