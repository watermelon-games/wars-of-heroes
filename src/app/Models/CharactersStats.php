<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 *
 * @property integer $character_id
 *
 * @property integer $strength
 * @property integer $dexterity
 * @property integer $luck
 * @property integer $wisdom
 * @property integer $health
 * @property integer $knowledge
 *
 * @property string $created_at
 * @property string $updated_at
 */
class CharactersStats extends Model
{
    protected $table = 'characters_stats';

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
        'created_at',
        'updated_at',
    ];
}
