<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;

class Survey extends Model
{
    // use SoftDeletes;

    protected $table = "data_surveys";

    protected $primaryKey = 'id_survey';
 
    protected $guarded = [];

    protected $appends = ['date_string'];

    protected $with = ['layanan'];

    public function getDateStringAttribute() {
        $date = substr($this->attributes['created_at'], 0, 10);
        return $date;
    }

    public function layanan() {
        return $this->belongsTo(DaftarLayanan::class, 'id_layanan');
    }
    
   
}