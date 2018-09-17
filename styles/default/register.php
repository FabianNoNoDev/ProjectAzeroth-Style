<?php exit; ?>
<div class="Divider Divider--ochoThin"></div>
<div class="layer layer--register-top"></div>
<div class="Divider Divider--ochoThickUp"></div>
<form method="post" action="./quest.php?name=ajax_register" autocomplete="on" id="register-do-form">    
<div class="layer--register-form layer layer--white">
<div class="container">
<div class="row">
<div class="col-lg-4 col-lg-push-4 col-md-6 col-sm-12">
<h2>Kevésbé fontos kérdések</h2>
<p>Itt nem számít mit jelölsz be, nem lehet jó vagy rossz választ megadni, pusztán a véleményetekre vagyunk kíváncsiak.</p>
<div class="form-group">
<div class="register-question">Melyik alkalmazást használva szeretsz beszélgetni ismerőseiddel/barátaiddal?</div>
<div class="radio">
<label><input name="referrer" required="" value="1" type="radio"> Discord</label></div>
<div class="radio">
<label><input name="referrer" required="" value="2" type="radio"> Teamspeak</label></div>
<div class="radio">
<label><input name="referrer" required="" value="3" type="radio"> Mumble</label></div>
<div class="radio">
<label><input name="referrer" required="" value="4" type="radio"> Skype</label></div></div>
<div class="form-group">
<div class="register-question">Mi ként találtál rá szerverünkre?</div>
<div class="radio">
<label><input name="interest" required="" value="1" type="radio"> Megtaláltam a facebook oldalatokat</label></div>
<div class="radio">
<label><input name="interest" required="" value="2" type="radio"> WoW törtszerverek csoportban</label></div>
<div class="radio">
<label><input name="interest" required="" value="3" type="radio"> Egyik ismerősöm mondta hogy vagytok</label></div>
<div class="radio">
<label><input name="interest" required="" value="4" type="radio"> Ide tévedtem a semmiből</label></div>
<div class="radio">
<label><input name="interest" required="" value="6" type="radio"> nme tomm én mtein2 játkéso vagyko!</label></div>
</div></div>
<div class="col-lg-4 col-lg-push-4 col-md-6 col-sm-12">
<div class="form-group">
<h2>Fontos kérdés</h2>
<p>Úgy gondoltuk hogy rátok bízzuk a szerver névadását, úgyhogy pár lehetséges alternatíva közül szavzhattok a számotokra legszimpatikusabbra!</p>
<div class="radio radio-big"><label>
<input name="gameplay" required="" value="1" type="radio">
<span class="title title--large">Project: Azeroth</span>
<span class="desc">Azerothot senkinek sem kell bemutatni, ez egy általános névválasztás lenne.</span></label></div><b>
<div class="radio radio-big"><label>
<input name="gameplay" required="" value="2" type="radio">
<span class="title title--large">Project: Anduin</span>
<span class="desc">Anduin Wrynn, a korábbi Alliance uralkodó gyermeke, aki apja nyomdokaiba lépett.</span></label></div><b>
<div class="radio radio-big"><label>
<input name="gameplay" required="" value="3" type="radio">
<span class="title title--large">Project: Sylvanas</span>
<span class="desc">Sylvanas Windrunner vezeti csatába a Hordát az Azerothért folytatott csatákban.</span></label></div><b>
<div class="radio radio-big"><label>
<input name="gameplay" required="" value="4" type="radio">
<span class="title title--large">Project: Kul Tiras</span>
<span class="desc">Kul Tiras egyike az új kontinenseknek, melynek korábbi uralkodója Jaina Proudmoore apja.</span></label></div><b>
<div class="radio radio-big"><label>
<input name="gameplay" required="" value="5" type="radio">
<span class="title title--large">Project: Zandalar</span>
<span class="desc">Zandalar egyike az új kontinenseknek, melyben megtalálható Azeroth legrégebbi városa, Zuldazar.</span></label></div><b></b>
<div class="register-sponsor">
<div class="form-group" id="sponsor-add-box"></div>
<div class="register-sponsor__users-link" id="sponsor-added-box" style="display: none;">
<div class="register-sponsor__users-link__avatar-container register-sponsor__users-link__avatar-container--left">
<img class="avatar js-current-avatar" src="/images/avatars/A127.jpg" alt=""></div>
<div class="register-sponsor__users-link__avatar-container register-sponsor__users-link__avatar-container--right">
<img class="avatar" src="" id="sponsor-avatar" alt=""></div>
<div class="register-sponsor__users-link__buttons">Liés
<a href="#" id="register-del-sponsor">Annuler</a>
</div></div></div></div></div>
<div class="col-lg-4 col-lg-pull-8 col-sm-12">
<h2>Regisztráció</h2><p>
Ebben a menüpontban tudsz regisztrálni a szerverünkre. Az itt megadott adatokkal tudsz majd később bejelentkezni a weboldalra és a játékba is, ugyhogy ügyelj arra hogy létező e-mail címet és általad könnyen megjegyezhető jelszót adj meg!</p>
<div class="form-group">
<div class="row">
<div class="col-xs-4">
<div class="radio-inline">
<label><input name="sex" required="" value="0" type="radio"> Férfi</label></div></div>
<div class="col-xs-4">
<div class="radio-inline">
<label><input name="sex" required="" value="1" type="radio"> Nő</label></div></div>
<div class="col-xs-4">
<div class="radio-inline">
<label><input name="sex" required="" value="2" type="radio"> Háááááát...</label></div></div></div></div>
<div class="form-group">
<input type="text" class="form-control" name="username" required placeholder="Felhasználónév" title="A felhasználónév minimum 4, maximum 16 karakterből állhat, nem tartlmazhat számokat és az Angol ABC karakterkészletét használja." value="" /></div>
<div class="form-group">
<div class="row">
<div class="col-xs-6">
<input type="email" class="form-control" name="email" required placeholder="E-mail" value="" /></div>
<div class="col-xs-6">
<input type="email" class="form-control" name="email_repeat" required placeholder="E-mail megerősítése" value="" />
</div></div></div>
<div class="form-group">
<div class="row">
<div class="col-xs-6">
<input type="password" class="form-control" name="password" required placeholder="Jelszó" title="A jelszó minimum 6, maximum 16 karakterből állhat, tartalmazhat számokat és az Angol ABC karakterkészletét használja." value="" /></div>
<div class="col-xs-6">
<input type="password" class="form-control" name="password_repeat" required placeholder="Jelszó megerősítése" value="" />
</div></div></div>
<div class="checkbox">
<label class="checkbox-inline">
<input name="rules_accept" required="" type="checkbox">Elolvastam és elfogadom a <a href="#" target="_blank" id="register-show-rules">Szerver Szabályzat</a>ot.</label><br><br>
<button type="submit" name="action" class="btn btn-warning btn--submit-register">Regisztráció</button>
</div></div></div></div></div>
<div class="Divider Divider--ochoThin"></div>
<div class="layer layer--register-submit">
</div></form>
<div class="Divider Divider--ochoThickDown"></div>
<footer class="l-footer text-xs-center text-sm-left">