<?php exit; ?><!DOCTYPE html>
<html>
<head>
<title>{title}</title>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=0.7, maximum-scale=0.8, user-scalable=no, minimal-ui" />
<meta name="description" content="" />
<meta name="keywords" content="" />
<link rel="icon" type="image/png" href="./favicon.png" />
<link rel="stylesheet" type="text/css" href="./assets/css/projectazeroth_main.css" />
<link rel="stylesheet" type="text/css" href="./assets/css/projectazeroth_custom.css" />
<link rel="stylesheet" type="text/css" href="./assets/css/sweet-alert.css" />
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
</head>
<body>
<div class="notify-wrapper" id="notify">
</div>
<header class="l-header">
<div class="container position-relative">
<div class="l-header__brand">
<a href="./">
<img src="./images/logo_header.png" alt="Logo" class="l-header__brand__logo wow" />
<div class="pull-left">
<span class="l-header__brand__title">Project: Azeroth</span>
<span class="l-header__brand__legend">A háború köde újra leszállt</span>
</div></a></div>
<div class="l-header__mini-mgr">{acc_menu}</div>        
<nav class="l-header__nav">
<ul class="l-header__nav__link-list hidden-xs hidden-sm">
<li><a href="./">Főoldal</a></li>
<li><a href="./quest.php?name=bugtracker">Bugtracker</a></li>
<li><a href="" class="js-header-bignav-toggle" data-bignav="bignav-content-serv">Szerver Információk</a></li>
<li><a href="./quest.php?name=connection"><span class="color-green">Csatlakozás</span></a></li>
{register/account}
{login/logout}
</ul>
</nav>
<div class="l-header__bignav">
<div class="l-header__bignav__content js-header-bignav" id="bignav-content-serv" style="display: none">
<div class="row">
<div class="col-lg-2 visible-lg">
<img src="./images/bignav-img.jpg" alt="" class="img-responsive" />
</div>
<div class="col-lg-4 col-md-5 hidden-sm hidden-xs">
<div class="title-nav">Szerver Információk</div>
<p>
<font color="#888888">
Ez a legördülő menü hozzáférést biztosít a webhelyen elérhető különféle szolgáltatásokhoz, valamint itt találjátok meg az összes általános tudnivalót a szerverünkről és weboldalunkról.
</font>
</p>
</div>
<div class="col-lg-6 col-md-7 col-xs-12">
<div class="row">
<div class="col-xs-6">
<div class="title-nav">Szerver hivatkozások</div>
<ul class="link-list">
<li><a href="https://tawk.to/chat/5a0648c9bb0c3f433d4c880e/default/?$_tawk_popout=true">Ügyfélszolgálat</a></li>
<li><a href="./quest.php?name=changelog">Changelog</a></li>
<li><a href="./quest.php?name=toplists">Toplisták</a></li>
<li><a href="./quest.php?name=statistics">Statisztikák</a></li>
</ul></div>
<div class="col-xs-6">
<div class="title-nav">Battle for Azeroth</div>
<ul class="link-list">
<li><a href="./quest.php?name=lore">Történet</a></li>
<li><a href="./quest.php?name=changes">Változtatások</a></li>
<li><a href="./quest.php?name=pvpcontents">PvP tartalmak</a></li>
<li><a href="./quest.php?name=pvecontents">PvE tartalmak</a></li>
<li><a href="./quest.php?name=zones">Új zónák</a></li>
<li><a href="./quest.php?name=races">Szövetséges fajok</a></li>
</ul></div></div></div></div></div></div></div>
</header>
<!-- Header -->
