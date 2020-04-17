<?php

namespace App\Actions;

use App\Models\Characters;
use App\Repositories\CharactersRepository;
use App\Repositories\CharactersStatsRepository;

class CharactersAction
{
    /** @var CharactersRepository */
    private $charactersRepository;

    /** @var CharactersStatsRepository */
    private $charactersStatsRepository;

    public function __construct(
        CharactersRepository $charactersRepository,
        CharactersStatsRepository $charactersStatsRepository
    )
    {
        $this->charactersRepository = $charactersRepository;
        $this->charactersStatsRepository = $charactersStatsRepository;
    }

    public function create(array $data, int $userId): Characters
    {
        $check = $this->findByUser($userId);

        if ($check) {
            return $check;
        }

        $character = $this->charactersRepository->create($data);

        $this->charactersStatsRepository->create($character->id);

        return $this->findByUser($userId);
    }

    public function updateStats(array $data, int $userId): Characters
    {
        $this->charactersStatsRepository->update($data['stats']);

        $this->charactersRepository->updateAvailableStats($data['id'], $data['available_stats']);

        return $this->findByUser($userId);
    }

    public function findByUser(int $userId): ?Characters
    {
        return $this->charactersRepository->findByUser($userId);
    }
}
