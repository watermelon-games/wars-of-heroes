<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCharactersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('characters', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->integer('user_id');

            $table->string('nickname');
            $table->string('gender');
            $table->string('avatar')->nullable();
            $table->string('character')->nullable();

            $table->string('class')->nullable();
            $table->string('rise')->nullable();

            $table->integer('level')->default(1);
            $table->decimal('money', 10, 6)->default(0.0);
            $table->integer('available_stats')->default(15);

            $table->integer('experience')->default(0);
            $table->integer('next_level')->default(100);

            $table->integer('wins')->default(0);
            $table->integer('lost')->default(0);
            $table->integer('npc_victories')->default(0);
            $table->integer('npc_losses')->default(0);

            $table->integer('fatigue')->default(0);
            $table->integer('points_per_hit')->default(35);

            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('characters');
    }
}
