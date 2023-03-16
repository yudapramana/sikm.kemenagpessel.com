<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use Illuminate\Support\Facades\Schema;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $questions = [
            [ #1
                'version' => '1',
                'text' => 'Informasi Pelayanan di Unit Layanan sangat Mudah diperoleh / di akses',
                'param'   => 'Mudah',
                'factor'  => 'Ketersediaan Informasi',
            ],
            [ #2
                'version' => '1',
                'text' => 'Persyaratan Pelayanan yang diinformasikan sudah sesuai dengan persyaratan yang ditetapkan pada saat permohonan / pengurusan layanan',
                'param'   => 'Sesuai',
                'factor'  => 'Persyaratan',
            ],
            [ #3
                'version' => '1',
                'text' => 'Prosedur dan Alur Pelayanan yang ditetapkan mudah diikuti / mudah dilakukan',
                'param'   => 'Mudah',
                'factor'  => 'Prosedur',
            ],
            [ #4
                'version' => '1',
                'text' => 'Jangka waktu penyelesaian pelayanan yang diterima sesuai dengan yang telah ditetapkan oleh Unit Layanan',
                'param'   => 'Sesuai',
                'factor'  => 'Waktu Pelayanan',
            ],
            [ #5
                'version' => '1',
                'text' => 'Tarif / Biaya Pelayanan yang dibayarkan pada Unit Layanan sesuai dengan yang telah ditetapkan',
                'param'   => 'Sesuai',
                'factor'  => 'Kesesuaian Biaya Pelayanan',
            ],
            [ #6
                'version' => '1',
                'text' => 'Saya merasa Puas dengan hasil dari Pelayanan yang telah diberikan Unit Pelayanan karena sesuai dengan yang tercantum dalam standar pelayanan',
                'param'   => 'Setuju',
                'factor'  => 'Produk Spesifikasi Jenis Pelayanan',
            ],
            [ #7
                'version' => '1',
                'text' => 'Sarana dan Prasarana (Sistem Pelayanan Online) Pendukung Pelayanan yang disediakan sudah mendukung kenyamanan dan kemudahan penggunaan dan sesuai dengan hasil',
                'param'   => 'Mudah',
                'factor'  => 'Sarana dan Prasarana',
            ],
            [ #8
                'version' => '1',
                'text' => 'Petugas Pelayanan / Sistem Pelayanan Daring (Online) pada Unit Layanan ini apakah merespon keperluan layanan dengan cepat',
                'param'   => 'Cepat',
                'factor'  => 'Kompetensi Pelaksana',
            ],
            [ #9
                'version' => '1',
                'text' => 'Petugas sudah memberikan pelayanan dengan ramah, sopan dan tidak diskriminatif',
                'param'   => 'Setuju',
                'factor'  => 'Perilaku Pelaksana',
            ],
            [ #10
                'version' => '1',
                'text' => 'Saya merasa puas terhadap penanganan, tindak lanjut, pengaduan, saran, dan masukan terhadap pelayanan oleh Unit Layanan',
                'param'   => 'Setuju',
                'factor'  => 'Penanganan Pengaduan, Saran dan Masukan',
            ],
            [ #11
                'version' => '1',
                'text' => 'Tidak ada pelayanan di luar prosedur/kecurangan pelayanan pada unit layanan ini',
                'param'   => 'Setuju',
                'factor'  => 'Kecurangan Pelayanan',
            ],
            [ #12
                'version' => '1',
                'text' => 'Tidak ada penerimaan imbalan uang/barang/fasilitas diluar ketentuan yang berlaku pada unit layanan ini',
                'param'   => 'Setuju',
                'factor'  => 'Kecurangan Pelayanan',
            ],
            [ #13
                'version' => '1',
                'text' => 'Tidak ada pelayanan di luar prosedur/kecurangan pelayanan pada unit layanan ini',
                'param'   => 'Setuju',
                'factor'  => 'Imbalan Pelayanan',
            ],
            [ #14
                'version' => '1',
                'text' => 'Tidak ada pungutan liar (pungli) pada unit layanan ini',
                'param'   => 'Setuju',
                'factor'  => 'Pungutan Liar',
            ],
            [ #15
                'version' => '1',
                'text' => 'Tidak ada percaloan/perantara tidak resmi pada unit layanan ini',
                'param'   => 'Setuju',
                'factor'  => 'Praktik Percaloan',
            ],
        ];


        DB::table('questions')->insert($questions);
    }
}
