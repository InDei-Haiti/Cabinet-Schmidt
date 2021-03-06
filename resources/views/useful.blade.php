@extends('layout')

@section('title')
Liens utiles pour entreprendre
@stop

@section('description')
Découvrez la sélection des liens utiles faite par le cabinet Schmidt !
@stop

@section('content')
  <div class="row center-xs useful-sites">
    <div class="col-xs-12 useful-sites__cover"></div>
    <div class="col-xs-12 useful-sites__banner">
      <h1>Le cabinet vous partage ses sites utiles</h1>
    </div>
    @if(!$partenaires_shown->isEmpty())
    <section class="col-xs-12 useful-sites__main-nav">
      <div class="row center-xs">
        @include('useful.list-partners')
        {{--in this list there're articles classes col-sm-5 col-custom col-xs-12 partner --}}
      </div>
    </section>
    @endif
    <nav class="col-md-11 col-xs-12 useful-sites__second-nav">
      <h2 class="row center-xs">D'autres sites utiles pour les créateurs d'entreprise</h2>
      <div class="row center-xs">
      @include('useful.list-links')
      {{--in this list there're links classes col-sm-6 col-custom link --}}
      </div>
    </nav>
    <nav class="col-xs-12 useful-sites__third-nav">
      <div class="row center-xs">
      @include('useful.list-gouv')
      {{--in this list there're links classes col-sm-6 col-custom link --}}
      </div>
    </nav>
  </div>
@stop
