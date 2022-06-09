<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ItemController;


//Route::group(['prefix' => 'v1'], function(){
    //Route::group(['prefix' => 'user'], function(){
        Route::group(['middleware' => 'api'], function($router) {
            //Route::get('/hi', [UserController::class, 'sayHi']);
            Route::post('/register', [UserController::class, 'register']);
            Route::post('/login', [UserController::class, 'login'])->name('login');
            Route::post('/logout', [UserController::class, 'logout'])->name('logout');
            Route::post('/refresh', [UserController::class, 'refresh']);
            Route::post('/profile', [UserController::class, 'profile']);
        });
   // });
   Route::get('/allitems', [ItemController::class, 'getItems']);
   Route::post('/item', [ItemController::class, 'getItemById']);
//});


