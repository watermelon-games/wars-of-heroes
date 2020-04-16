<?php

namespace App\Http\Controllers\Api\Auth;

use App\Actions\CharactersAction;
use App\Actions\UserAction;
use App\Http\Controllers\Controller;

class ProfileController extends Controller
{
    private $action;

    private $charactersAction;

    public function __construct(UserAction $userAction, CharactersAction $charactersAction)
    {
        $this->action = $userAction;
        $this->charactersAction = $charactersAction;
    }

    public function __invoke()
    {
        $user = $this->action->getUserWithCharacter(auth()->id());

        $character = $this->charactersAction->findByUser(auth()->id());

        return $this->returnResponse([
            'user' => $user,
            'character' => $character,
        ], 200);
    }
}
