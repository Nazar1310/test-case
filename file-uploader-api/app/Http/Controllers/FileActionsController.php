<?php

namespace App\Http\Controllers;

use App\Http\Requests\FileUploadRequest;
use App\Models\File;
use App\Services\FileService;
use Illuminate\Http\Request;

class FileActionsController extends Controller
{
    public function paginate(Request $request) {
        $paginate = $request->paginate ?? FileService::DEFAULT_PAGINATE;
        $files = File::orderBy('id','DESC')->paginate($paginate);
        return response()->json([
            'status' => FileService::STATUS_SUCCESS,
            'data' => [
                'files' => $files
            ]
        ]);
    }

    public function upload(FileUploadRequest $request) {
        if($request->hasfile('file')){
            $file = FileService::save($request->file);
            return response()->json([
                'status' => FileService::STATUS_SUCCESS,
                'data' => $file
            ]);
        }
        return response()->json([
            'status' => FileService::STATUS_ERROR,
            'message' => 'File notfound'
        ]);
    }

    public function remove(File $file) {
        $file->remove();
        return response()->json([
            'status' => FileService::STATUS_SUCCESS,
        ]);
    }

    public function download(File $file) {
        return response()->download($file->getFullPath(),$file->name);
    }
}
