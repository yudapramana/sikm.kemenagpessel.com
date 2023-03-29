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

    public function layanan() {
        return $this->belongsTo(DaftarLayanan::class, 'id_layanan');
    }
   
}