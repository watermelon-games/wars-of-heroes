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
        $model->strength = 1;
        $model->dexterity = 1;
        $model->luck = 1;
        $model->health = 1;
        $model->knowledge = 1;
        $model->wisdom = 1;

        $model->theft = 0;
        $model->trade = 0;
        $model->artisan = 0;
        $model->fishing = 0;
        $model->hunting = 0;

        $model->save();
    }
}
