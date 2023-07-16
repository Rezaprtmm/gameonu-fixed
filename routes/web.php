<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CoursesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/ 

Route::redirect("/", "/prototype/homepage");


Route::get('/dashboard', function () {
    return Inertia::render('Prototype/Dashboard/DashboardPage/Index');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::prefix('prototype')->name('prototype.')->group(function () {
    Route::get('/homepage', function () {
        return Inertia::render('Prototype/Homepage/Index');
    })->name('homepage');

    Route::get('/courses', function () {
        return Inertia::render('Prototype/Courses/Index');
    })->name('courses');
    
    Route::get('/courseShow/{slug}', function () {
        return Inertia::render('Prototype/CourseShow/Show');
    })->name('courseShow.show');

    Route::get('/roadmap/newbie', function () {
        return Inertia::render('Prototype/Roadmap/Newbie/Index');
    })->name('roadmap.newbie');

    Route::get('/roadmap/intermediate', function () {
        return Inertia::render('Prototype/Roadmap/Intermediate/Index');
    })->name('roadmap.intermediate');

    Route::get('/roadmap/advanced', function () {
        return Inertia::render('Prototype/Roadmap/Advanced/Index');
    })->name('roadmap.advanced');

    Route::get('/dashboard', function () {
        return Inertia::render('Prototype/Dashboard/DashboardPage/Index');
    })->name('dashboard');

    Route::get('/login', function () {
        return Inertia::render('Login');
    })->name('login');

    Route::get('/register', function () {
        return Inertia::render('Register');
    })->name('register');

    Route::get('/checkout/{slug}', function () {
        return Inertia::render('Prototype/Checkout');
    })->middleware(['auth', 'verified'])->name('checkout.show');

    Route::get('/community', function () {
        return Inertia::render('Prototype/Dashboard/Community/Index');
    })->name('community');

    Route::get('/success', function () {
        return Inertia::render('Prototype/Success');
    })->name('success');

    Route::get('/profile', function () {
        return Inertia::render('Prototype/Dashboard/Profile/Index');
    })->name('profile');

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
