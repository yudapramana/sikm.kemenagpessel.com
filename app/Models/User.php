<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;
    use HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'username',
        'email',
        'password',
        'last_login_at',
        'last_login_ip',
        'no_hp',
        'profile_photo_id',
        'profile_photo_url'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'plain_password'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = ['age', 'name_phone', 'role_ids'];

    public function getAgeAttribute()
    {
        $rawBD = strlen($this->attributes['username']) == 18 ? substr($this->attributes['username'], 0, 8) : null;
        if ($rawBD) {
            $birthDate = substr($rawBD, 0, 4) . '-' . substr($rawBD, 4, 2) . '-' . substr($rawBD, 6, 2) . ' 00:00:00';
            $interval = date_diff(date_create(), date_create($birthDate));
            return $interval->format("%Y Tahun, %M Bulan, %d Hari");
        }
        return 'undetected';
    }

    public function getNamePhoneAttribute()
    {
        return $this->attributes['name'] . '_'.  $this->attributes['no_hp'];
    }

    public function getRoleIdsAttribute()
    {
        $roles = $this->roles();
        $role_ids = $roles->pluck('id');
        return $role_ids;
    }
}
