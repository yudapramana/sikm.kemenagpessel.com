<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;

class UnitRekapTahunan extends Model
{
    // use SoftDeletes;

    protected $table = "unit_rekap_tahunan";

    protected $primaryKey = 'id_unit_rekap_tahunan';
 
    protected $guarded = [];

    protected $with = ['unit'];

    public function unit() {
        return $this->belongsTo(UnitPengolah::class, 'id_unit_pengolah');
    }
   
}