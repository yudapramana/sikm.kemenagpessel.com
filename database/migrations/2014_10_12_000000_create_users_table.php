<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('jabatan', 100)->nullable();
            $table->string('username')->unique();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('plain_password')->nullable();
            $table->text('profile_photo_url')->nullable();
            $table->string('profile_photo_id', 100)->default('');
            $table->string('no_hp')->nullable();
            $table->enum('block', ['no', 'yes'])->default('no');
            $table->enum('status', ['inactive', 'active'])->default('active');
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes('deleted_at', 0);
            $table->string('created_by')->default('');
            $table->string('updated_by')->default('');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
