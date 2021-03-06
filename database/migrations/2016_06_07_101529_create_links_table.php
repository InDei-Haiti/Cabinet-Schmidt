<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLinksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('digitarticles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('article_id');
            $table->string('image');
            $table->string('auteur');
            $table->string('date');
            $table->longText('summary');
            $table->longText('content');
            $table->string('title');
            $table->string('rubrique');
            $table->string('slug');
            $table->longText('table_html')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('links');
    }
}
