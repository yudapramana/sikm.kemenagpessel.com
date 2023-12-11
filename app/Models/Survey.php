<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;
use Carbon\Carbon;

class Survey extends Model
{
    // use SoftDeletes;

    protected $table = "data_surveys";

    protected $primaryKey = 'id_survey';
 
    protected $guarded = [];

    protected $appends = ['date_string', 'nama_layanan', 'nama_unit'];

    protected $with = ['layanan'];

    public function getDateStringAttribute() {
        // $date = substr($this->attributes['created_at'], 0, 10) . substr($this->attributes['created_at'], 10, 8);
        // return $date;
       $date =  Carbon::createFromDate($this->attributes['submitted_at']);
       $datestring = $date->toDateTimeString();
       return $datestring;
    }

    public function layanan() {
        return $this->belongsTo(DaftarLayanan::class, 'id_layanan');
    }

    public function getNamaLayananAttribute() {
        return $this->layanan->name;
    }

    public function getNamaUnitAttribute() {
        return $this->layanan->unit->name;
    }
    
   
}