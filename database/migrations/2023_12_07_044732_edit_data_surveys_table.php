<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EditDataSurveysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('data_surveys', function (Blueprint $table) {
            $table->float('nilai_ikm', 5, 3)->default(0);
            $table->float('nilai_ipk', 5, 3)->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('data_surveys', function (Blueprint $table) {
            //
        });
    }
}
