<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDataSurveysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data_surveys', function (Blueprint $table) {
            $table->id('id_survey');
            $table->timestamps();

            $table->dateTime('submitted_at');
            $table->unsignedInteger('id_layanan');
            $table->string('name');
            $table->string('no_hp');
            $table->string('address');

            $table->enum('gender', [
                'Laki-laki',
                'Perempuan',
            ]);

            $table->enum('age', [
                'Dibawah 20 Tahun',
                '21 s/d 30 Tahun',
                '31 s/d 40 Tahun',
                '41 s/d 50 Tahun',
                'Diatas 50 Tahun',
                ])->default('21 s/d 30 Tahun');

            $table->enum('education', [
                'SD',
                'SMP atau Sederajat',
                'SMA atau Sederajat',
                'Strata 1 (S1)',
                'Strata 2 (S2)',
                'Strata 3 (S3)',
            ]);

            $table->enum('work', [
                'PNS / TNI / POLRI',
                'Pegawai Swasta',
                'Wiraswasta',
                'Tenaga Honor / Ahli / Kontrak',
                'Pelajar / Mahasiswa',
                'Lainnya',
            ]);

            $table->text('improvement');
            $table->text('feedback')->nullable();

            $table->enum('answer_0', [1, 2, 3, 4])->nullable();
            $table->enum('answer_1', [1, 2, 3, 4])->nullable();
            $table->enum('answer_2', [1, 2, 3, 4])->nullable();
            $table->enum('answer_3', [1, 2, 3, 4])->nullable();
            $table->enum('answer_4', [1, 2, 3, 4])->nullable();
            $table->enum('answer_5', [1, 2, 3, 4])->nullable();
            $table->enum('answer_6', [1, 2, 3, 4])->nullable();
            $table->enum('answer_7', [1, 2, 3, 4])->nullable();
            $table->enum('answer_8', [1, 2, 3, 4])->nullable();
            $table->enum('answer_9', [1, 2, 3, 4])->nullable();
            $table->enum('answer_10', [1, 2, 3, 4])->nullable();
            $table->enum('answer_11', [1, 2, 3, 4])->nullable();
            $table->enum('answer_12', [1, 2, 3, 4])->nullable();
            $table->enum('answer_13', [1, 2, 3, 4])->nullable();
            $table->enum('answer_14', [1, 2, 3, 4])->nullable();
            $table->enum('answer_15', [1, 2, 3, 4])->nullable();
            $table->float('average', 5, 3)->default(0);

            // $table->enum('status', [
            //     'submitted',
            //     'approved',
            //     'rejected',
            // ])->default('submitted');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('data_surveys');
    }
}
