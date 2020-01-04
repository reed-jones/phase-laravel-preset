<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use ReedJones\Phase\Facades\Phase;
use ReedJones\Vuexcellent\Facades\Vuex;

class CounterController extends Controller
{
    public function CounterPage($count)
    {
        Vuex::module('app', [
            'count' => (int) $count,
        ]);

        return Phase::view();
    }

    public function SetCount(Request $request)
    {
        Vuex::module('app', [
            'count' => $request->count,
        ]);

        return response()->vuex();
    }
}
