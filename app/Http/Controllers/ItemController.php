<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Items;

class ItemController extends Controller
{
    public function getItems(){
        $items = Item::all();
        return response()->json([
            "success" => true,
            "items" => $items
        ], 200);
    }

    public function getItemById(Request $request){
        $id = $request->id;
        $item = Item::find($id);
       
        return response()->json([
            "success" => true,
            "item" => $item
        ], 200);
    }

    public function addItem(Request $request){
        $item = new Item;
        $item->name = $request->name;
        $item->description = $request->description;
        $item->image = $request->image;
        $item->save();
        
        return response()->json([
            "status" => "Success",
            "message" => $item
        ], 200);
    }
}
