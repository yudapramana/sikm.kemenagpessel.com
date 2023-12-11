<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->id('id_question');
            $table->timestamps();
            $table->integer('version');
            $table->text('text');
            $table->string('param', 15);
            $table->string('factor', 60);
            $table->enum('tipe', ['IKM', 'IPK'])->default('IKM');
            $table->enum('status', [1, 0])->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('questions');
    }
}
