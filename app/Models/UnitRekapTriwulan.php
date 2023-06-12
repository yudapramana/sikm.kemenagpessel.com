<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;

class UnitRekapTriwulan extends Model
{
    // use SoftDeletes;

    protected $table = "unit_rekap_triwulan";

    protected $primaryKey = 'id_unit_rekap_triwulan';
 
    protected $guarded = [];

    protected $with = ['unit'];

    public function unit() {
        return $this->belongsTo(UnitPengolah::class, 'id_unit_pengolah');
    }
   
}