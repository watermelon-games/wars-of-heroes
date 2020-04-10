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
        $character = $this->action->create($request->all());

        return $this->returnResponse([
            'character' => $character,
        ], 201);
    }
}
