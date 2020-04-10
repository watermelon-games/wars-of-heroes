<?php

namespace App\Http\Controllers\Api\Auth;

use App\User;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;

class RegisterController extends Controller
{
    public function __invoke(RegisterRequest $request)
    {
        User::create([
            'email' => $request->get('email'),
            'name' => $request->get('name'),
            'password' => bcrypt($request->get('password')),
            'country' => geoip()->getLocation()->country,
            'city' => geoip()->getLocation()->city
        ]);

        $token = auth()->attempt($request->only(['email', 'password']));

        if (!$token) {
            return abort(401);
        }

        return $this->returnResponse([
            'user' => new UserResource($request->user()),
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ], 201);
    }
}
