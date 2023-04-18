<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fruit extends Model
{
    use HasFactory;

    protected $table = 'fruits';

    protected $fillable = ['name','carbohydrates','fat','sugar','protein','calories'];

    public function order()
    {
        return $this->belongsTo(Order::class,'order_id');
    }

    public function family()
    {
        return $this->belongsTo(Family::class,'family_id');
    }

    public function genus()
    {
        return $this->belongsTo(Genus::class,'genus_id');
    }
}
