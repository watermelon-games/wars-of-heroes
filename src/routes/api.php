<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::prefix('v1')->group(function () {
    Route::prefix('auth')->group(function () {
        Route::namespace('Api\Auth')->group(function () {
            Route::middleware(['guest:api'])->group(function () {
                Route::post('login', 'LoginController')->name('login');
                Route::post('register', 'RegisterController')->name('register');
            });

            Route::middleware(['auth:api'])->group(function () {
                Route::post('logout', 'LogoutController')->name('logout');
                Route::post('refresh', 'RefreshController')->name('refresh');
                Route::get('profile', 'ProfileController')->name('profile');
            });
        });
    });

    Route::prefix('characters')->group(function () {
        Route::namespace('Api')->group(function () {
            Route::middleware(['auth:api'])->group(function () {
                Route::post('create', 'CharactersController@create')->name('characters.create');
            });
        });
    });
});
