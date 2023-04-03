<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use Illuminate\Support\Facades\Schema;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0');

        $this->call(UsersTableSeeder::class);
        $this->call(RolesTableSeeder::class);
        $this->call(QuestionSeeder::class);

        Schema::drop('users');
        $path = public_path('sql/users_ptsp.sql');
        $sql = file_get_contents($path);
        DB::unprepared($sql);


        Schema::drop('role_has_permissions');
        $path = public_path('sql/role_has_permissions_ptsp.sql');
        $sql = file_get_contents($path);
        DB::unprepared($sql);

        Schema::drop('role_has_permissions');
        $path = public_path('sql/daftar_layanan_dan_turunannya.sql');
        $sql = file_get_contents($path);
        DB::unprepared($sql);

        // Schema::drop('data_surveys');
        // $path = public_path('sql/data_surveys.sql');
        // $sql = file_get_contents($path);
        // DB::unprepared($sql);

        DB::statement('SET FOREIGN_KEY_CHECKS=1');
    }
}
