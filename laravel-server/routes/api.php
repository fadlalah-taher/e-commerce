<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\ItemController;

Route::get('/hi', [UserController::class, 'sayHi']);//->name('say-Hi');
Route::get('/hii', [ItemController::class, 'sayHii']);
//Route::group(['prefix' => 'v1'], function(){
    //Route::group(['prefix' => 'user'], function(){
        Route::group(['middleware' => 'api'], function($router) {
            Route::post('/register', [UserController::class, 'register'])->name('register');
            Route::post('/login', [UserController::class, 'login'])->name('login');
            Route::post('/logout', [UserController::class, 'logout'])->name('logout');
            Route::post('/refresh', [UserController::class, 'refresh'])->name('refresh');
            Route::post('/profile', [UserController::class, 'profile'])->name('profile');
        });
    //});
   Route::get('/allitems', [ItemController::class, 'getItems']);
   Route::post('/item', [ItemController::class, 'getItemById']);
   Route::post('/additem', [ItemController::class, 'addItem']);
//});

