<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
use App\User;
use App\Http\Requests\UserRegisterRequest;
use App\Http\Resources\User as UserResource;

class AuthController extends Controller
{
    public function register(UserRegisterRequest $request)
    {
        // dd('go here');

        $user = User::create([
            'email' => $request->email,
            'name' => $request->name,
            'password' => bcrypt($request->password)
        ]);

        return new UserResource($user);
    }
}
