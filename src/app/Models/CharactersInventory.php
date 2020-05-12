<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 *
 * @property integer $character_id
 * @property integer $item_id
 * @property boolean $is_equipped_item
 *
 * @property string $created_at
 * @property string $updated_at
 *
 * @property Items $description
 */
class CharactersInventory extends Model
{
    protected $table = 'characters_inventory';

    /**
     * @var array
     */
    protected $fillable = [
        'id',
        'character_id',
        'item_id',
        'is_equipped_item',
        'created_at',
        'updated_at',
    ];

    public function description()
    {
        return $this->hasOne('App\Models\Items', 'id');
    }
}
