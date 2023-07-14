<?php

use App\Http\Controllers\ProfileController;
use Appp\Http\Controllers\UsersController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
Route::get('/dashboard', function () {
    return Inertia::render('Prototype/Dashboard/DashboardPage/Index');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::redirect("/", "/prototype/homepage");

Route::prefix('prototype')->name('prototype.')->group(function () {
    Route::get('/homepage', function () {
        return Inertia::render('Prototype/Homepage/Index');
    })->name('homepage');

    Route::get('/courses', function () {
        return Inertia::render('Prototype/Courses/Index');
    })->name('courses');
    
    Route::get('/courseShow', function () {
        return Inertia::render('Prototype/CourseShow/Show');
    })->name('courseShow');

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

    Route::get('/checkout', function () {
        return Inertia::render('Prototype/Checkout');
    })->name('checkout');

    Route::get('/community', function () {
        return Inertia::render('Pages/Prototype/Dashboard/Community/Index');
    })->name('community');

    Route::get('/profile', function () {
        return Inertia::render('Prototype/Dashboard/Profile/Index');
    })->name('profile');

});

Route::resource('users', UsersController::class)
->only(['index', 'store'])
->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
