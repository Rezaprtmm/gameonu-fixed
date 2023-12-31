<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Courses extends Model
{
    use HasFactory;

    protected $fillable = ['levels', 'title', 'price', 'rating', 'member', 'image', 'about1', 'about2', 'about3'];
}
