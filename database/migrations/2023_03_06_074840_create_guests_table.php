<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGuestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('guests', function (Blueprint $table) {
            $table->id('id_guest');
            $table->timestamps();
            $table->softDeletes();

            $table->date('date');
            $table->string('name');
            $table->enum('gender', ['L', 'P']);
            $table->string('no_hp')->nullable();
            $table->string('email')->nullable();
            $table->text('address')->nullable();
            $table->string('organisasi');
            $table->string('jabatan');
            $table->string('keperluan');
            $table->string('tujuan');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('guests');
    }
}
