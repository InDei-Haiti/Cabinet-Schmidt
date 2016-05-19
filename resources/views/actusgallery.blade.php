@extends('layout')
@section('content')
  <div class="row center-xs actualites">
    <div class="col-xs-12 actualites__cover"></div>
    <div class="col-xs-12 actualites__banner">
      <h1>L'actualité que nous vous partageons</h1>
    </div>
    <div class="col-xs-12 actualites__preview">
      @include('home.actus')
    </div>
    <div class="col-md-10 col-xs-12 gallery">
      <header class="row center-xs gallery__head">
        <h2>Toute l'actualité des tpe & pme</h2>
      </header>
      <ul class="row center-xs filters">
        <li class="col-lg col-md col-sm-4 col-xs-6 filters__item filters__item--checked" data-filter="all"><span>tous</span></li>
        <li class="col-lg col-md col-sm-4 col-xs-6 filters__item" data-filter="social"><span>Social</span></li>
        <li class="col-lg col-md col-sm-4 col-xs-6 filters__item" data-filter="fiscal"><span>Fiscal</span></li>
        <li class="col-lg col-md col-sm-4 col-xs-6 filters__item" data-filter="innovation"><span>innovation</span></li>
        <li class="col-lg col-md col-sm-4 col-xs-6 filters__item" data-filter="gestion"><span>gestion</span></li>
        <li class="col-lg col-md col-sm-4 col-xs-6 filters__item" data-filter="juridique"><span>juridique</span></li>
      </ul>
      <section class="row center-xs gallery__list">
        <article class="col-md-4 col-sm-6 col-xs-12 col-custom gallery__wrapper">
          <div class="gallery__item">
            <div class="row image" style="background-image: url('http://img.actucine.com/wp-content/uploads/2016/02/game.jpe')"></div>
            <div class="row article">
              <div class="col-xs-12">
                <h3 class="row article__title">Prélevement sur le salaire des pensions alimentaires non versées</h3>
                <p class="row article__body">
                  Pudding wafer brownie cookie marzipan oat cake marshmallow. Sweet brownie sweet roll gingerbread cake jelly beans marshmallow caramels.
                </p>
              </div>
              <div class="col-xs-12 article__footer">
                  <span class="article__date">Publié le mercredi 14 avril</span>
                  <span class="article__button">Lire +</span>
              </div>
            </div>
          </div>
        </article>
        <article class="col-md-4 col-sm-6 col-xs-12 col-custom gallery__wrapper">
          <div class="gallery__item">
            <div class="row image" style="background-image: url('http://img.actucine.com/wp-content/uploads/2016/02/game.jpe')"></div>
            <div class="row article">
              <div class="col-xs-12">
                <h3 class="row article__title">Prélevement sur le salaire des pensions alimentaires non versées</h3>
                <p class="row article__body">
                  Pudding wafer brownie cookie marzipan oat cake marshmallow. Sweet brownie sweet roll gingerbread cake jelly beans marshmallow caramels.
                </p>
              </div>
              <div class="col-xs-12 article__footer">
                  <span class="article__date">Publié le mercredi 14 avril</span>
                  <span class="article__button">Lire +</span>
              </div>
            </div>
          </div>
        </article>
        <article class="col-md-4 col-sm-6 col-xs-12 col-custom gallery__wrapper">
          <div class="gallery__item">
            <div class="row image" style="background-image: url('http://img.actucine.com/wp-content/uploads/2016/02/game.jpe')"></div>
            <div class="row article">
              <div class="col-xs-12">
                <h3 class="row article__title">Prélevement sur le salaire des pensions alimentaires non versées</h3>
                <p class="row article__body">
                  Pudding wafer brownie cookie marzipan oat cake marshmallow. Sweet brownie sweet roll gingerbread cake jelly beans marshmallow caramels.
                </p>
              </div>
              <div class="col-xs-12 article__footer">
                  <span class="article__date">Publié le mercredi 14 avril</span>
                  <span class="article__button">Lire +</span>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  </div>
@stop