<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\Item;

class ItemController extends Controller
{
    public function sayHii(){
        echo 'ItemController';
    }

    public function getItems(){
        $items = Item::all();
        return response()->json([
            "success" => true,
            "items" => $items
        ], 200);
    }

    public function getItemById($id){
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
        $item->price = $request->price;
        $item->image = $request->image;
        $item->category_id = $request->category_id;
        $item->save();
        
        return response()->json([
            "status" => "Success",
            "message" => $item
        ], 200);
    }

    // Category

    public function getCategories(){
        $categories = Category::all();
        return response()->json([
            "success" => true,
            "items" => $categories
        ], 200);
    }

    public function addCategory(Request $request){
        
        $category = new Category;
        $category->name = $request->name;
        $category->save();

        return response()->json([
            "success" => true,
        ], 200);
    }
    
}
