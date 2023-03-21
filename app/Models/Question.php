<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{

    protected $table = "questions";

    protected $primaryKey = 'id_question';
 
    protected $guarded = [];

    protected $appends = ['responses'];

    // public function getReponsesAttribute(){
    //     $param = $this->attributes['param'];

    //     $responses = [
    //         [ 'text' => 'Tidak ' . $param ],
    //         [ 'text' => 'Kurang ' . $param ],
    //         [ 'text' => $param ],
    //         [ 'text' => 'Sangat ' . $param ],
    //     ];

    //     return $responses;
    // }


    public function getResponsesAttribute(){
        // return '20';
        $param = $this->attributes['param'];

        $responses = [
            [ 'text' => 'Tidak ' . $param ],
            [ 'text' => 'Kurang ' . $param ],
            [ 'text' => $param ],
            [ 'text' => 'Sangat ' . $param ],
        ];

        return $responses;
    }
   
}