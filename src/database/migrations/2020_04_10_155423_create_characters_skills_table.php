<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCharactersSkillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('characters_skills', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->integer('character_id');

            $table->integer('power_shot')->default(false);
            $table->integer('backstage')->default(false);

            $table->integer('fire_ball')->default(false);
            $table->integer('heal')->default(false);

            $table->integer('shield_bash')->default(false);
            $table->integer('power_attack')->default(false);

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
        Schema::dropIfExists('characters_skills');
    }
}
