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

            $table->boolean('more_power')->default(false);
            $table->boolean('more_agility')->default(false);
            $table->boolean('more_luck')->default(false);
            $table->boolean('more_knowledge')->default(false);
            $table->boolean('more_health')->default(false);

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
