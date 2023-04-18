<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FruitController extends Controller
{
    public function index()
    {
        return "sssss";  
    }
    public function store(Request $request)
    {
       
        return response()->json('Product created!');
    }
    public function show($id)
    {
         
        return response()->json("sssss");
    }
    public function update($id, Request $request)
    {
        
        return response()->json('Product updated!');
    }
    public function destroy($id)
    {
        
        return response()->json('Product deleted!');
    }
}
