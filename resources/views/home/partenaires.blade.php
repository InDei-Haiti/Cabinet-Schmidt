<div class="col-xs-12 home__partenaires">
  <div class="row">
    <header class="col-xs-12 partenaires-header">
      <h2 class="partenaires-header__title">Nous travaillons ensemble</h2>
      <h3 class="partenaires-header__label">Découvrez aussi <a href="/sites-utiles">les liens utiles</a></h3>
    </header>
    <div class="col-xs-12 center-xs partenaires-list">
      <div class="row">
        @foreach ($partenaires as $partenaire)
          <div class="col-md-3 col-sm-4 col-xs-12 partenaires-logo">
            <a href="http://{{$partenaire->link}}" target="_blank"><img src="{{$partenaire->logo}}" alt title="{{$partenaire->name}}" /></a>
          </div>
        @endforeach
      </div>
    </div>
  </div>
</div>
