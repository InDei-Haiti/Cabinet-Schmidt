<?php $__env->startSection('content'); ?>
<div class="row temoignages-list">
  <?php foreach($temoignages as $temoignage): ?>
    <div class="col-sm-6 col-xs-12 temoignage">
      <div class="row center-xs temoignage__image">
        <img src="<?php echo e($temoignage->logo); ?>" alt="" />
      </div>
      <div class="row center-xs" style="margin-top: 5px">
        <strong><span><?php echo e($temoignage->person_identity); ?></span></strong>
      </div>
      <div class="row center-xs temoignage__job" style="margin-bottom: 5px">
        <span><?php echo e($temoignage->person_job); ?></span>
      </div>
      <div class="row center-xs temoignage__content">
        <span><?php echo e($temoignage->description); ?></span>
      </div>
      <form class="row center-xs temoignage__form" action="/admin/temoignage/delete/<?php echo e($temoignage->id); ?>" method="post">
        <?php echo e(method_field('DELETE')); ?>

        <?php echo e(csrf_field()); ?>

        <a class="edit" href="/admin/temoignage/edit/<?php echo e($temoignage->id); ?>"><span>Éditer</span></a>
        <input type="submit" class="delete" value="Supprimer">
      </form>
    </div>
  <?php endforeach; ?>
</div>
<a href="/admin/temoignage/create" class="row center-xs article-add"><span>Ajouter un témoignage</span></a>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.dashboard-layout', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>