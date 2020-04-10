<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;

class ProfileController extends Controller
{
    public function __invoke()
    {
        return $this->returnResponse([
            'user' => auth()->user()
        ], 200);
    }
}
