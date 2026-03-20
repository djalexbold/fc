<?php

namespace App\Http\Controllers;

use Inertia\Inertia;


final class AiController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Ai');
    }
}
