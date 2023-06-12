<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;

class RekapTriwulan extends Model
{
    // use SoftDeletes;

    protected $table = "rekap_triwulan";

    protected $primaryKey = 'id_rekap_triwulan';
 
    protected $guarded = [];

    protected $with = ['layanan'];

    protected $appends = ['triwulan_id_unit'];

    public function layanan() {
        return $this->belongsTo(DaftarLayanan::class, 'id_layanan');
    }

    public function getIdUnitAttribute(){
        return $this->layanan->id_unit_pengolah;
    }

    public function getTriwulanIdUnitAttribute()
    {
        return $this->attributes['triwulan'] . '_'.  $this->layanan->id_unit_pengolah;
    }
   
}