<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\API\LoginController;
use App\Http\Controllers\API\RoleController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\GuestController;
use App\Models\Question;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('auth:sanctum')->get('/authenticated', function (Request $request) {
    return $request->user();
});


// Route::middleware('auth:sanctum')->get('/authenticated', function (Request $request) {
//     return true;
// });

Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [LoginController::class, 'index']);
Route::post('logout', [LoginController::class, 'logout']);


// Route::get('/get-roles', [RoleController::class, 'index'])->name('api.role.get');


Route::apiResources([
    'user' => UserController::class,
    'role' => RoleController::class,
    'guest' => GuestController::class,
]);

Route::get('/get/questions', function () {
    $data = Question::get();
    return $data;
});
