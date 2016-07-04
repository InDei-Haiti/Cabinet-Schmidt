@extends('layout')
@section('content')
<div class="row center-xs chiffres">
  <div class="col-xs-12 chiffres__cover"></div>
  <div class="col-xs-12 chiffres__banner">
    <h1>Chiffres utiles</h1>
  </div>
  <div class="col-md-10 col-xs-12 gallery">
    <ul class="row center-xs filters">
      <li class="col-lg-2 col-md-2 col-sm-4 col-xs-6 filters__item {{ ($page == 'digit') ? 'filters__item--checked' : '' }}" data-filter="all"><a href="{{ URL::to('chiffres-utiles') }}"><span>Tous</span></a></li>
      <li class="col-lg-2 col-md-2 col-sm-4 col-xs-6 filters__item {{ ($page == 'Social') ? 'filters__item--checked' : '' }}" data-filter="Social"><a href="{{ URL::to('chiffres-utiles/rubrique/Social') }}"><span>Social</span></a></li>
      <li class="col-lg-2 col-md-2 col-sm-4 col-xs-6 filters__item {{ ($page == 'Fiscal') ? 'filters__item--checked' : '' }}" data-filter="Fiscal"><a href="{{ URL::to('chiffres-utiles/rubrique/Fiscal') }}"><span>Fiscal</span></a></li>
      <li class="col-lg-2 col-md-2 col-sm-4 col-xs-6 filters__item {{ ($page == 'Juridique') ? 'filters__item--checked' : '' }}" data-filter="Juridique"><a href="{{ URL::to('chiffres-utiles/rubrique/Juridique') }}"><span>Juridique</span></a></li>
    </ul>
    <section class="row center-xs gallery__list">
      @foreach($digitarticles as $article)
      <article class="col-md-4 col-sm-6 col-xs-12 col-custom gallery__wrapper {{$article->rubrique}}">
        <div class="gallery__item">
          <a href="/chiffres-utiles/{{$article->slug}}" class="row image" style="background-image: url('{{$article->image}}')">               
            <span class="article__category {{$article->rubrique}}">{{$article->rubrique}}</span>
          </a>
          <div class="row article">
            <div class="col-xs-12">
              <h3 class="row article__title"><a href="/chiffres-utiles/{{$article->slug}}">{{$article->title}}</a></h3>
              <p class="row article__body">
                @if(strlen($article->summary)>200)
                  {{substr($article->summary,0,200).'...'}}
                @else
                  {{$article->summary}}
                @endif
              </p>
            </div>
            <div class="col-xs-12 article__footer">
                <span class="article__date">{{$article->date}}</span>
                <a href="/chiffres-utiles/{{$article->slug}}" class="article__button">Lire +</a>
            </div>
          </div>
        </div>
      </article>
      @endforeach
    </section>
    <div class="row middle-xs center-xs gallery__pagination">
        @if ($digitarticles->lastPage() > 1)
          <ul class="pagination">
              <li class="{{ ($digitarticles->currentPage() == 1) ? ' disabled' : '' }}">
                  <a href="{{ $digitarticles->previousPageUrl() }}" rel="prev"><i class="material-icons">chevron_left</i></a>
               </li>
              @for ($i = 1; $i <= $digitarticles->lastPage(); $i++)
                  <?php
                  $half_total_links = floor(7 / 2);
                  $from = $digitarticles->currentPage() - $half_total_links;
                  $to = $digitarticles->currentPage() + $half_total_links;
                  if ($digitarticles->currentPage() < $half_total_links) {
                     $to += $half_total_links - $digitarticles->currentPage();
                  }
                  if ($digitarticles->lastPage() - $digitarticles->currentPage() < $half_total_links) {
                      $from -= $half_total_links - ($digitarticles->lastPage() - $digitarticles->currentPage()) - 1;
                  }
                  ?>
                  @if ($from < $i && $i < $to)
                      <li class="{{ ($digitarticles->currentPage() == $i) ? ' active' : '' }}">
                        @if($digitarticles->currentPage() == $i)
                          {{ $i }}
                        @else
                          <a href="{{ $digitarticles->url($i) }}">{{ $i }}</a>
                        @endif
                      </li>
                  @endif
              @endfor
              <li class="{{ ($digitarticles->currentPage() == $digitarticles->lastPage()) ? ' disabled' : '' }}">
                  <a href="{{ $digitarticles->nextPageUrl() }}" rel="next"><i class="material-icons">chevron_right</i></a>
              </li>
          </ul>
      @endif
    </div>
  </div>
</div>
@stop
