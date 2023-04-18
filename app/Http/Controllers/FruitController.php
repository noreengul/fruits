<?php

namespace App\Http\Controllers;

use App\Models\Fruit;
use Illuminate\Http\Request;

class FruitController extends Controller
{
    public function index()
    {
        $data = Fruit::with(["order","family","genus"])->paginate(10);

        return response()->json($data);

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
