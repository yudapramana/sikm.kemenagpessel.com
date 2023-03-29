<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EditSurveysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('data_surveys', function (Blueprint $table) {
            
            $table->enum('status', [
                'submitted',
                'approved',
                'rejected',
            ])->default('submitted');
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
