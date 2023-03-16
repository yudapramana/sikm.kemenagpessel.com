<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return User::with('roles')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        dd("Store Controller");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string',
            'username' => 'required|string|max:20',
            'email' => 'required|email',
            'no_hp' => 'required|numeric',
            'block' => 'required',
            'status' => 'required',
        ], [
            'required' => 'Kolom :attribute wajib diisi.',
            'email' => ':attribute harus berupa alamat surel yang valid.',
            'numeric' => ':attribute harus berupa angka.'
        ]);


        $data = $request->input();

        $user = User::create([
            'name' => $data['name'],
            'username' => $data['username'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'no_hp' => $data['no_hp'],
            'block' => $data['block'],
            'status' => $data['status'],
            'profile_photo_url' => $data['profile_photo_url'],
        ]);

        // 'profile_photo_id' => isset($data['profile_photo_id']) ? $data['profile_photo_id'] : '',

        $user->fresh();
        $user->syncRoles($data['role_ids']);

        return $user;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required|string',
            'username' => 'required|string|max:20',
            'email' => 'required|email',
            'no_hp' => 'required|numeric',
            'block' => 'required',
            'status' => 'required',
        ]);

        $data = $request->input();
        $dataUser = [
            'name' => $data['name'],
            'username' => $data['username'],
            'email' => $data['email'],
            'no_hp' => $data['no_hp'],
            'block' => $data['block'],
            'status' => $data['status'],
            'profile_photo_url' => $data['profile_photo_url'],
        ];

        // 'profile_photo_id' => isset($data['profile_photo_id']) ? $data['profile_photo_id'] : ''


        if (isset($data['password'])) {
            $dataUser['password'] = Hash::make($data['password']);
        }

        $user = User::findOrFail($data['id']);

        $user->update($dataUser);

        $user->fresh();
        $user->syncRoles($data['role_ids']);

        return $user;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
    }
}
