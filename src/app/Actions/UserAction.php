<?php

namespace App\Actions;

use App\Repositories\UserRepository;
use App\User;

class UserAction
{
    /** @var UserRepository */
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function getUserWithCharacter(int $userId): User
    {
        return $this->userRepository->findUserWithCharacter($userId);
    }
}
