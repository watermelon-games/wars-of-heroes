<?php

namespace App\Repositories;

use App\Models\CharactersStats;

class CharactersStatsRepository
{
    private $model = CharactersStats::class;

    public function create(int $id): void
    {
        /** @var $model CharactersStats */
        $model = new $this->model();

        $model->character_id = $id;
        $model->strength = 0;
        $model->dexterity = 0;
        $model->luck = 0;
        $model->health = 0;
        $model->knowledge = 0;
        $model->wisdom = 0;
        $model->theft = 0;
        $model->trade = 0;
        $model->artisan = 0;
        $model->fishing = 0;
        $model->hunting = 0;

        $model->save();
    }
}
