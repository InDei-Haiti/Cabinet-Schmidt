<header class="row header">
  <div class="col-xs header__logo">
    <a href="<?php echo e(URL::to('/')); ?>"> <?php echo $__env->make('layout.logo', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?></a>
  </div>
  <div class="col-xs header__right">
    <div class="row full-row">
      <div class="col-xs-12 head-upper">
        <div class="row end-xs">
          <div class="socials">
            <div class="socials__text">
              <span>rejoignez nous sur les réseaux sociaux !</span>
            </div>
            <div class="socials__icon">
              <a target="_blank" href="https://www.linkedin.com/company/cabinet-schmidt---conseil-audit-et-r%C3%A9vision"><i class="fa fa-linkedin"></i></a>
            </div>
            <div class="socials__icon">
              <a target="_blank" href="https://www.facebook.com/cabinetSchmidt"><i class="fa fa-facebook"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 head-nav">
        <div class="row full-row middle-xs end-xs">
            <div class="responsive-menu">
              <span class="responsive-menu__text">MENU</span>
              <span class="responsive-menu__icons"></span>
            </div>
            <nav class="col-xs main-nav">
              <ul class="row main-nav__list">
                <li class="col-xs main-nav__item"><a data-hover="Accueil" href="<?php echo e(URL::to('/')); ?>">Accueil</a></li>
                <li class="col-xs main-nav__item"><a data-hover="À propos" href="<?php echo e(URL::to('a-propos')); ?>">À propos</a></li>
                <li class="col-xs main-nav__item"><a data-hover="Actualité" href="<?php echo e(URL::to('actualites-cabinet')); ?>">Actualité</a></li>
                <li class="col-xs main-nav__item"><a data-hover="Témoignages" href="<?php echo e(URL::to('temoignages')); ?>">Témoignages</a></li>
                <li class="col-xs main-nav__item"><a data-hover="Contact" href="<?php echo e(URL::to('contact')); ?>">Contact</a></li>
              </ul>
            </nav>
        </div>
      </div>
    </div>
  </div>
  <nav class="header__secondary-nav">
    <ul class="row secondary-nav__list">
      <li class="col-xs-12 secondary-nav__item"><a href="<?php echo e(URL::to('/')); ?>">Accueil</a></li>
      <li class="col-xs-12 secondary-nav__item"><a href="<?php echo e(URL::to('a-propos')); ?>">À propos</a></li>
      <li class="col-xs-12 secondary-nav__item"><a href="<?php echo e(URL::to('actualites-cabinet')); ?>">Actualité</a></li>      
      <li class="col-xs-12 secondary-nav__item"><a href="<?php echo e(URL::to('temoignages')); ?>">Témoignages</a></li>
      <li class="col-xs-12 secondary-nav__item"><a href="<?php echo e(URL::to('contact')); ?>">Contact</a></li>
    </ul>
  </nav>
</header>
