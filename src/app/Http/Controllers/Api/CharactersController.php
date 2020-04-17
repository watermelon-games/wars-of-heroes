<?php

namespace App\Http\Controllers\Api;

use App\Actions\CharactersAction;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CharactersController extends Controller
{
    private $action;

    public function __construct(CharactersAction $charactersAction)
    {
        $this->action = $charactersAction;
    }

    public function create(Request $request)
    {
        $character = $this->action->create($request->all(), auth()->id());

        return $this->returnResponse([
            'created' => true,
            'character' => $character,
        ], 201);
    }

    public function updateStats(Request $request)
    {
        $character = $this->action->updateStats($request->all(), auth()->id());

        return $this->returnResponse([
            'updated' => true,
            'character' => $character,
        ], 200);
    }
}
