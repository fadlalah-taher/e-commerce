<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function getItems(){
        $items = Item::all();
        return response()->json([
            "success" => true,
            "items" => $items
        ], 200);
    }
}
