<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    public function index()
    {
        return User::select('id', 'name', 'email', 'course')->get();
    }

    public function store(Request $request, User $users)
    {
        $users->fill($request->post())->update();
        $courseId = $request->course;
        // if ($request->user()->isDirty('email')) {
        //     $request->user()->email_verified_at = null;
        // }
        $users->course = $courseId;
        $users->save();

    }
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    // public function update(Request $request, User $users)
    // {
    //     $users->fill($request->post())->update();
    //     $users->course = $request->input('course');
    //     $users->save();

    // }
    public function update(Request $request, $id)
    {

        // Proses pembaruan field dalam database
        $user = User::findOrFail($id);
        $user->fill($request->post());
        $user->course = $request->input('course');
        $user->save();

        // Response berhasil pembaruan
        return response()->json(['success' => true]);
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
