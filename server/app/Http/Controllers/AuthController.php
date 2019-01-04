<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\UserRegisterRequest;
use App\Http\Resources\User as UserResource;
use App\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(UserRegisterRequest $request)
    {
        // dd('go here');

        $user = User::create([
            'email' => $request->email,
            'name' => $request->name,
            'password' => bcrypt($request->password),
        ]);

        if (!$token = auth()->attempt($request->only(['email', 'password']))) {
            return abort(401);
        }

        return (new UserResource($request->user()))->additional([
            'meta' => [
                'token' => $token,
            ],
        ]);
    }

    public function login(UserLoginRequest $request)
    {

        if (!$token = auth()->attempt($request->only(['email', 'password']))) {
            return response()->json([
                'errors' => [
                    'email' => 'vui lòng kiểm tra lại email hoặc mật khẩu',
                ],
            ], 422);
        }
        // dd('go login');

        return (new UserResource($request->user()))->additional([
            'meta' => [
                'token' => $token,
            ],
        ]);
    }

    public function user(Request $request)
    {
        if ($request->user()) {
            return new UserResource($request->user());
        }
        return response()->json([
            'errors' => [
                'message' => 'Xin vui lòng đăng nhập lại',
            ],
        ]);
    }

    public function logout()
    {
        return auth()->logout();
    }
}
