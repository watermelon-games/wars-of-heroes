<?php

namespace App\Http\Controllers\Api;

use App\Actions\CharactersAction;

class ItemsController
{
    private $action;

    public function __construct(CharactersAction $inventoryAction)
    {
        $this->action = $inventoryAction;
    }
}
