<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 *
 * @property int $user_id
 *
 * @property string $nickname
 * @property string $gender
 * @property string $avatar
 * @property string $character
 *
 * @property float $money
 * @property integer $level
 * @property integer $experience
 * @property integer $next_level
 * @property integer $wins
 * @property integer $lost
 * @property integer $npc_victories
 * @property integer $npc_losses
 *
 * @property integer $fatigue
 * @property integer $points_per_hit
 * @property integer $available_stats
 *
 * @property string $created_at
 * @property string $updated_at
 *
 * @property CharactersStats $stats
 * @property CharactersInventory $inventory
 */
class Characters extends Model
{
    protected $table = 'characters';

    /**
     * @var array
     */
    protected $fillable = [
        'id',
        'user_id',
        'nickname',
        'gender',
        'avatar',
        'character',
        'money',
        'level',
        'experience',
        'next_level',
        'wins',
        'lost',
        'npc_victories',
        'npc_losses',
        'fatigue',
        'points_per_hit',
        'available_stats',
        'created_at',
        'updated_at',
    ];

    public function stats()
    {
        return $this->hasOne('App\Models\CharactersStats', 'character_id');
    }

    public function inventory()
    {
        return $this->hasMany('App\Models\CharactersInventory', 'character_id');
    }
}
