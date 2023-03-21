<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;

class RekapTahunan extends Model
{
    // use SoftDeletes;

    protected $table = "rekap_tahunan";

    protected $primaryKey = 'id_rekap_tahunan';
 
    protected $guarded = [];

    protected $with = ['layanan'];

    public function layanan() {
        return $this->belongsTo(DaftarLayanan::class, 'id_layanan');
    }
   
}