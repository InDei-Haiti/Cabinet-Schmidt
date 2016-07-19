@extends('admin.dashboard-layout')
@section('content')
  <div class="article-create">
    <form class="row center-xs" action="/admin/article/store" method="post">
      {{csrf_field()}}
      <div class="col-xs">
        <div class="row center-xs article__field">
          <div class="col-md-8 col-sm-10 col-xs-12">
            <span>Titre de l'article</span>
            <input type="text" name="title">
          </div>
        </div>
        <div class="row center-xs article__field">
          <div class="col-md-8 col-sm-10 col-xs-12">
            <span>Contenu de l'article</span>
            <textarea id="cabinet-article" name="content"></textarea>
          </div>
        </div>
        <div class="count">255 caratères restants</div>
        <input type="submit" class="article__save" value="Enregistrer">
      </div>
    </form>
  </div>
@stop
