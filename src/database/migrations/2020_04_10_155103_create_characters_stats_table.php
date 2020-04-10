<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCharactersStatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('characters_stats', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->integer('character_id');

            $table->integer('strength')->default(1);
            $table->integer('dexterity')->default(1);
            $table->integer('luck')->default(1);
            $table->integer('health')->default(1);
            $table->integer('knowledge')->default(1);
            $table->integer('wisdom')->default(1);

            $table->integer('theft')->default(0);
            $table->integer('trade')->default(0);
            $table->integer('artisan')->default(0);
            $table->integer('fishing')->default(0);
            $table->integer('hunting')->default(0);

            $table->timestamps();

            $table->foreign('character_id')->references('id')->on('characters');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('characters_stats');
    }
}
