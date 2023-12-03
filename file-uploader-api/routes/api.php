<?php

use App\Http\Controllers\FileActionsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['prefix' => '/file'], function(){
    Route::get('/paginate', [FileActionsController::class, 'paginate']);
    Route::post('/upload', [FileActionsController::class, 'upload']);
    Route::get('/download/{file}', [FileActionsController::class, 'download']);
    Route::delete('/remove/{file}', [FileActionsController::class, 'remove']);
});
