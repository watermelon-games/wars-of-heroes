<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;

class LogoutController extends Controller
{
    public function __invoke()
    {
        auth()->logout();

        return $this->returnResponse([
            'message' => 'Successfully logged out'
        ], 200);

    }
}
