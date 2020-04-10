<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;

class LoginController extends Controller
{
    public function __invoke(LoginRequest $request)
    {
        $token = auth()->attempt($request->all());

        if (!$token) {
            return $this->returnResponse([
                'error' => 'Sorry we couldn\'t sign you in with those details.'
            ], 422);
        }

        return $this->returnResponse([
            'user' => new UserResource($request->user()),
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ], 200);
    }
}
