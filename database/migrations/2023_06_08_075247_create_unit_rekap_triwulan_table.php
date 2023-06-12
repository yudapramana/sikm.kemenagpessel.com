<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUnitRekapTriwulanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('unit_rekap_triwulan', function (Blueprint $table) {
            $table->id('id_unit_rekap_triwulan');
            $table->timestamps();

            $table->integer('tahun');
            $table->integer('triwulan');
            $table->unsignedInteger('id_unit_pengolah');
            $table->float('konversi', 5, 2)->default(0);
            $table->enum('mutu_pelayanan', [
                'A (Sangat Baik)', 
                'B (Baik)', 
                'C (Kurang Baik)', 
                'D (Buruk)'
                ])->default('A (Sangat Baik)');

            $table->float('total_average_individu', 8, 3)->default(0);
            $table->integer('jumlah_responden')->default(0);
            $table->float('index_pelayanan', 5, 3)->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('unit_rekap_triwulan');
    }
}
