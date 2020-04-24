<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCharactersInventoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('characters_inventory', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->integer('character_id');
            $table->integer('item_id');
            $table->boolean('is_equipped_item')->default(false);

            $table->timestamps();

            $table->foreign('character_id')->references('id')->on('characters');
            $table->foreign('item_id')->references('id')->on('items');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('characters_inventory');
    }
}
