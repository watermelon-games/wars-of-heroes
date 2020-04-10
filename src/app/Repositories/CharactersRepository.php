<?php

namespace App\Repositories;

use App\Models\Characters;

class CharactersRepository
{
    protected $model = Characters::class;

    public function findByUser(): Characters
    {
        return $this->model::where('user_id', auth()->id())->with('stats')->first();
    }

    public function create(array $request): Characters
    {
        /** @var $model Characters */
        $model = new $this->model();

        $model->user_id = auth()->id();
        $model->nickname = $request['nickname'];
        $model->gender = $request['gender'];
        $model->money = 0;
        $model->experience = 0;
        $model->next_level = 100;
        $model->wins = 0;
        $model->lost = 0;
        $model->npc_victories = 0;
        $model->npc_losses = 0;
        $model->fatigue = 0;
        $model->points_per_hit = 30;

        $model->save();

        return $model;
    }
}
