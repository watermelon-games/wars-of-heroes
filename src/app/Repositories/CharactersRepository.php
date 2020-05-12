<?php

namespace App\Repositories;

use App\Models\Characters;

class CharactersRepository
{
    /** @var $model Characters */
    private $model = Characters::class;

    public function findByUser(int $userId): ?Characters
    {
        return $this->model::where('user_id', $userId)->with('stats', 'inventory', 'inventory.description')->first();
    }

    public function find(int $id): ?Characters
    {
        return $this->model::where('id', $id)->first();
    }

    public function create(array $data): Characters
    {
        /** @var $model Characters */
        $model = new $this->model();

        $model->user_id = auth()->id();
        $model->nickname = $data['nickname'];
        $model->gender = $data['gender'];
        $model->money = 0;
        $model->level = 1;
        $model->experience = 0;
        $model->next_level = 100;
        $model->wins = 0;
        $model->lost = 0;
        $model->npc_victories = 0;
        $model->npc_losses = 0;
        $model->fatigue = 0;
        $model->points_per_hit = 30;
        $model->available_stats = 15;

        $model->save();

        return $model;
    }

    public function updateAvailableStats(int $id, int $stats): void
    {
        /** @var $character Characters */
        $character = self::find($id);

        $character->available_stats = $stats;

        $character->save();
    }
}
