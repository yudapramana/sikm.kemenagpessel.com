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
        // $questionsold = [
        //     [ #1
        //         'version' => '1',
        //         'text' => 'Informasi Pelayanan di Unit Layanan sangat Mudah diperoleh / di akses',
        //         'param'   => 'Mudah',
        //         'factor'  => 'Ketersediaan Informasi',
        //     ],
        //     [ #2
        //         'version' => '1',
        //         'text' => 'Persyaratan Pelayanan yang diinformasikan sudah sesuai dengan persyaratan yang ditetapkan pada saat permohonan / pengurusan layanan',
        //         'param'   => 'Sesuai',
        //         'factor'  => 'Persyaratan',
        //     ],
        //     [ #3
        //         'version' => '1',
        //         'text' => 'Prosedur dan Alur Pelayanan yang ditetapkan mudah diikuti / mudah dilakukan',
        //         'param'   => 'Mudah',
        //         'factor'  => 'Prosedur',
        //     ],
        //     [ #4
        //         'version' => '1',
        //         'text' => 'Jangka waktu penyelesaian pelayanan yang diterima sesuai dengan yang telah ditetapkan oleh Unit Layanan',
        //         'param'   => 'Sesuai',
        //         'factor'  => 'Waktu Pelayanan',
        //     ],
        //     [ #5
        //         'version' => '1',
        //         'text' => 'Tarif / Biaya Pelayanan yang dibayarkan pada Unit Layanan sesuai dengan yang telah ditetapkan',
        //         'param'   => 'Sesuai',
        //         'factor'  => 'Kesesuaian Biaya Pelayanan',
        //     ],
        //     [ #6
        //         'version' => '1',
        //         'text' => 'Saya merasa Puas dengan hasil dari Pelayanan yang telah diberikan Unit Pelayanan karena sesuai dengan yang tercantum dalam standar pelayanan',
        //         'param'   => 'Setuju',
        //         'factor'  => 'Produk Spesifikasi Jenis Pelayanan',
        //     ],
        //     [ #7
        //         'version' => '1',
        //         'text' => 'Sarana dan Prasarana (Sistem Pelayanan Online) Pendukung Pelayanan yang disediakan sudah mendukung kenyamanan dan kemudahan penggunaan dan sesuai dengan hasil',
        //         'param'   => 'Mudah',
        //         'factor'  => 'Sarana dan Prasarana',
        //     ],
        //     [ #8
        //         'version' => '1',
        //         'text' => 'Petugas Pelayanan / Sistem Pelayanan Daring (Online) pada Unit Layanan ini apakah merespon keperluan layanan dengan cepat',
        //         'param'   => 'Cepat',
        //         'factor'  => 'Kompetensi Pelaksana',
        //     ],
        //     [ #9
        //         'version' => '1',
        //         'text' => 'Petugas sudah memberikan pelayanan dengan ramah, sopan dan tidak diskriminatif',
        //         'param'   => 'Setuju',
        //         'factor'  => 'Perilaku Pelaksana',
        //     ],
        //     [ #10
        //         'version' => '1',
        //         'text' => 'Saya merasa puas terhadap penanganan, tindak lanjut, pengaduan, saran, dan masukan terhadap pelayanan oleh Unit Layanan',
        //         'param'   => 'Setuju',
        //         'factor'  => 'Penanganan Pengaduan, Saran dan Masukan',
        //     ],
        //     [ #11
        //         'version' => '1',
        //         'text' => 'Tidak ada pelayanan di luar prosedur/kecurangan pelayanan pada unit layanan ini',
        //         'param'   => 'Setuju',
        //         'factor'  => 'Kecurangan Pelayanan',
        //     ],
        //     [ #12
        //         'version' => '1',
        //         'text' => 'Tidak ada penerimaan imbalan uang/barang/fasilitas diluar ketentuan yang berlaku pada unit layanan ini',
        //         'param'   => 'Setuju',
        //         'factor'  => 'Kecurangan Pelayanan',
        //     ],
        //     [ #13
        //         'version' => '1',
        //         'text' => 'Tidak ada pelayanan di luar prosedur/kecurangan pelayanan pada unit layanan ini',
        //         'param'   => 'Setuju',
        //         'factor'  => 'Imbalan Pelayanan',
        //     ],
        //     [ #14
        //         'version' => '1',
        //         'text' => 'Tidak ada pungutan liar (pungli) pada unit layanan ini',
        //         'param'   => 'Setuju',
        //         'factor'  => 'Pungutan Liar',
        //     ],
        //     [ #15
        //         'version' => '1',
        //         'text' => 'Tidak ada percaloan/perantara tidak resmi pada unit layanan ini',
        //         'param'   => 'Setuju',
        //         'factor'  => 'Praktik Percaloan',
        //     ],
        // ];


        $questions = [
            [ #1
                'version' => '1',
                'text' => 'Bagaimana pendapat Saudara tentang kesesuaian persyaratan pelayanan  dengan jenis pelayanannya',
                'param'   => 'Sesuai',
                'tipe'    => 'IKM',
                'factor'  => 'Persyaratan',
            ],
            [ #2
                'version' => '1',
                'text' => 'Bagaimana  pemahaman Saudara tentang kemudahan prosedur pelayanan di unit ini',
                'param'   => 'Mudah',
                'tipe'    => 'IKM',
                'factor'  => 'Sistem, Mekanisme, dan Prosedur',
            ],
            [ #3
                'version' => '1',
                'text' => 'Bagaimana pendapat Saudara tentang kecepatan waktu dalam memberikan pelayanan',
                'param'   => 'Cepat',
                'tipe'    => 'IKM',
                'factor'  => 'Waktu Penyelesaian',
            ],
            [ #4
                'version' => '1',
                'text' => 'Bagaimana pendapat Saudara tentang kewajaran biaya/tarif dalam pelayanan',
                'param'   => 'Wajar',
                'tipe'    => 'IKM',
                'factor'  => 'Biaya/Tarif',
            ],
            [ #5
                'version' => '1',
                'text' => 'Bagaimana pendapat Saudara tentang kesesuaian produk pelayanan antara yang tercantum dalam standar pelayanan dengan hasil yang diberikan',
                'param'   => 'Sesuai',
                'tipe'    => 'IKM',
                'factor'  => 'Produk Spesifikasi jenis pelayanan',
            ],
            [ #6
                'version' => '1',
                'text' => 'Bagaimana pendapat Saudara tentang kompetensi/kemampuan petugas dalam pelayanan.',
                'param'   => 'Kompeten',
                'tipe'    => 'IKM',
                'factor'  => 'Kompetensi pelaksana',
            ],
            [ #7
                'version' => '1',
                'text' => 'Bagamana pendapat saudara perilaku petugas dalam pelayanan terkait kesopanan dan keramahan',
                'param'   => 'sopan dan ramah',
                'tipe'    => 'IKM',
                'factor'  => 'Perilaku pelaksana',
            ],
            [ #8
                'version' => '1',
                'text' => 'Bagaimana pendapat Saudara tentang  kualitas sarana dan prasarana',
                'param'   => 'Puas',
                'tipe'    => 'IKM',
                'factor'  => 'Penanganan Pengaduan, Saran dan Masukan',
            ],
            [ #9
                'version' => '1',
                'text' => 'Bagaimana pendapat Saudara tentang penanganan pengaduan pengguna layanan',
                'param'   => 'Puas',
                'tipe'    => 'IKM',
                'factor'  => 'Sarana dan Prasarana',
            ],
            [ #10
                'version' => '1',
                'text' => 'Petugas sudah memberikan pelayanan dengan ramah, sopan dan tidak diskriminatif',
                'param'   => 'Setuju',
                'tipe'    => 'IPK',
                'factor'  => 'Perilaku Pelaksana',
            ],
            [ #11
                'version' => '1',
                'text' => 'Tidak ada pelayanan di luar prosedur/kecurangan pelayanan pada unit layanan ini',
                'param'   => 'Puas',
                'tipe'    => 'IPK',
                'factor'  => 'Perbuatan Curang',
            ],
            [ #12
                'version' => '1',
                'text' => 'Tidak ada penerimaan imbalan uang/barang/fasilitas diluar ketentuan yang berlaku pada unit layanan ini',
                'param'   => 'Setuju',
                'tipe'    => 'IPK',
                'factor'  => 'Imbalan Pelayanan',
            ],
            [ #13
                'version' => '1',
                'text' => 'Tidak ada pungutan liar (pungli) pada unit layanan ini',
                'param'   => 'Setuju',
                'tipe'    => 'IPK',
                'factor'  => 'Pungutan Liar',
            ],
            [ #14
                'version' => '1',
                'text' => 'Tidak ada percaloan/perantara tidak resmi pada unit layanan ini',
                'param'   => 'Setuju',
                'tipe'    => 'IPK',
                'factor'  => 'Praktik Percaloan',
            ],
            [ #15
                'version' => '1',
                'text' => 'Saya tidak pernah menemukan layanan yang dilakukan diluar jam pelayanan',
                'param'   => 'Setuju',
                'tipe'    => 'IPK',
                'factor'  => 'Transaksi Rahasia',
            ],
        ];


        DB::table('questions')->insert($questions);
    }
}
