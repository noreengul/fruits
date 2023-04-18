<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Family extends Model
{
    use HasFactory;

    protected $table = 'fruit_family';

    protected $fillable = ['name'];

    public function fruits()
    {
        return $this->hasMany(Fruit::class);
    }
}
