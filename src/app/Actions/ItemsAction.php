<?php

namespace App\Actions;

use App\Repositories\CharactersRepository;
use App\Repositories\CharactersStatsRepository;

class ItemsAction
{
    /** @var CharactersRepository */
    private $charactersRepository;

    public function __construct(
        CharactersStatsRepository $charactersStatsRepository
    )
    {
        $this->charactersStatsRepository = $charactersStatsRepository;
    }
}
