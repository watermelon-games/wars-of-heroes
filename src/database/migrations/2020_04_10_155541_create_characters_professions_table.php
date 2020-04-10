<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCharactersProfessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('characters_professions', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->integer('character_id');

            $table->boolean('theft')->default(false);
            $table->boolean('trade')->default(false);
            $table->boolean('artisan')->default(false);
            $table->boolean('fishing')->default(false);
            $table->boolean('hunting')->default(false);

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
        Schema::dropIfExists('characters_professions');
    }
}
