<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Favorite;

class FavoriteController extends Controller
{
    public function setFavorite(Request $request){
        
        $favorite = new Favorite;
        $favorite->user_id = $request->user_id;
        $favorite->item_id = $request->item_id;
        $favorite->save();
        
        return response()->json([
            "success" => true,
        ], 200);
    }

    public function removeFavorite(Request $request){
        Favorite::where('user_id',$request->user_id)
        ->where('item_id',$request->item_id)
        ->delete();
       
        return response()->json([
            "success" => true,
        ], 200);
    }

    public function getFavoritesById(Request $request){
        $favortes = Favorite::all()->where('user_id',$request->user_id);
       
        return response()->json([
            "success" => true,
            "item" => $favortes
        ], 200);
    }
}
