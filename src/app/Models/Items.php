<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 *
 * @property string $name
 * @property string $description
 * @property object $effects
 * @property string $type
 * @property integer $price
 * @property integer $available
 * @property string $image
 *
 * @property string $created_at
 * @property string $updated_at
 */
class Items extends Model
{
    protected $table = 'items';

    /**
     * @var array
     */
    protected $fillable = [
        'id',
        'name',
        'description',
        'effects',
        'type',
        'price',
        'available',
        'image',
        'created_at',
        'updated_at',
    ];
}
