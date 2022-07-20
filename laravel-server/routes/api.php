<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\FavoriteController;


Route::group(['prefix' => 'v1'], function(){

    Route::group(['prefix' => 'user'], function(){
        Route::group(['middleware' => 'api'], function($router) {
            Route::post('/register', [UserController::class, 'register'])->name('register');
            Route::post('/login', [UserController::class, 'login'])->name('login');
            Route::post('/logout', [UserController::class, 'logout'])->name('logout');
            Route::post('/refresh', [UserController::class, 'refresh'])->name('refresh');
            Route::post('/profile', [UserController::class, 'profile'])->name('profile');

            Route::post('/setfavorite', [FavoriteController::class, 'setFavorite'])->middleware('auth');
        });
    });

    Route::group(['prefix' => 'admin'], function(){
        Route::post('/login', [UserController::class, 'login'])->name('login');
    });

    Route::group(['prefix' => 'item'], function(){
        Route::get('/allitems', [ItemController::class, 'getItems']);
        Route::get('/item/{id}', [ItemController::class, 'getItemById']);
        Route::post('/additem', [ItemController::class, 'addItem']);
    });

    Route::group(['prefix' => 'category'], function(){
        Route::get('/getCategories', [ItemController::class, 'getCategories']);
        Route::get('/addCategory', [ItemController::class, 'addCategory']);
    });

    Route::group(['prefix' => 'favorite'], function(){
        Route::post('/removefavorite', [FavoriteController::class, 'removeFavorite']);
        Route::get('/getfavoritesById', [FavoriteController::class, 'getFavoritesById']);
    });
   
});


