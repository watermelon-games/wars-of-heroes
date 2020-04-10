<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 *
 * @property integer $character_id
 * @property integer $strength
 * @property integer $dexterity
 * @property integer $luck
 * @property integer $health
 * @property integer $knowledge
 * @property integer $wisdom
 *
 * @property integer $theft
 * @property integer $trade
 * @property integer $artisan
 * @property integer $fishing
 * @property integer $hunting
 *
 * @property string $created_at
 * @property string $updated_at
 */
class CharactersStats extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'id',
        'character_id',
        'strength',
        'dexterity',
        'luck',
        'health',
        'knowledge',
        'wisdom',
        'theft',
        'trade',
        'artisan',
        'fishing',
        'hunting',
        'created_at',
        'updated_at',
    ];
}
