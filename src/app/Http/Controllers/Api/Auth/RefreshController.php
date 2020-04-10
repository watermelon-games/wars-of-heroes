<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;

class RefreshController extends Controller
{
    public function __invoke()
    {
        $token = auth()->refresh();

        return $this->returnResponse([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ], 200);

    }
}
