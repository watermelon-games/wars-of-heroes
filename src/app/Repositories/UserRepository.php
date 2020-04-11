<?php

namespace App\Repositories;

use App\User;

class UserRepository
{
    private $model = User::class;

    public function findUserWithCharacter(int $userId): User
    {
        return $this->model::where('id', $userId)->first();
    }
}
