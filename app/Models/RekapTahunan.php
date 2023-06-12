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

    protected $appends = ['id_unit_pengolah'];


    public function layanan() {
        return $this->belongsTo(DaftarLayanan::class, 'id_layanan');
    }

    public function getIdUnitPengolahAttribute()
    {
        return $this->layanan->id_unit_pengolah;
    }
   
}