<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('name');
            $table->string('description');
            $table->enum('type', ['helmet', 'armor', 'shoes', 'weapon', 'shield', 'gloves', 'ring', 'jewelery']);
            $table->json('effects');

            $table->integer('health')->default(0);
            $table->integer('attack')->default(0);
            $table->integer('defence')->default(0);
            $table->integer('magic')->default(0);

            $table->integer('price')->default(0);
            $table->boolean('available')->default(false);
            $table->string('image')->nullable();

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
        Schema::dropIfExists('items');
    }
}
