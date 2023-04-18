<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genus extends Model
{
    use HasFactory;

    protected $table = 'fruit_genus';

    protected $fillable = ['name'];

    public function fruits()
    {
        return $this->hasMany(Fruit::class);
    }
}
