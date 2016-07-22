@extends('admin.dashboard-layout')
@section('content')
  <div class="row center-xs article">
    <div class="col-xs">
      <form class="row center-xs" method="post" action="/admin/article/update/{{$article->id}}">
        {{ method_field('PATCH') }}
        {{csrf_field()}}
        <div class="col-xs">
          <div class="row center-xs article__field">
            <div class="col-md-8 col-sm-10 col-xs-12">
              <span>Titre de l'article</span>
              <input class="large-field" type="text" name="title" value="{{$article->title}}">
            </div>
          </div>
          <div class="row center-xs article__field">
            <div class="col-md-8 col-sm-10 col-xs-12">
              <span>Contenu de l'article</span>
              <textarea class="large-field text-field" id="cabinet-article" name="content">{{$article->content}}</textarea>
            </div>
          </div>
          <div class="row center-xs article__field">
            <div class="col-md-8 col-sm-10 col-xs-12">
              <span></span>
              <div class="count">255 caratères restants</div>
            </div>
          </div>
          <input type="submit" class="article__save" value="Enregistrer">
        </div>
      </form>
    </div>
  </div>
@stop
