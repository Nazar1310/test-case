<?php

namespace App\Services;

use App\Models\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class FileService
{
    const STATUS_SUCCESS = 'success';
    const STATUS_ERROR = 'error';
    const DEFAULT_PAGINATE = 20;
    static function save($file) {
        $name = $file->getClientOriginalName();
        $mime_type = $file->getClientMimeType();
        $size = $file->getSize();
        $fileName = Str::random(12).'.'.$file->getClientOriginalExtension();
        $dir = "files";
        Storage::putFileAs("public/$dir",$file,$fileName);
        return File::create([
            'name' => $name,
            'mime_type' => $mime_type,
            'path' => "$dir/$fileName",
            'size' => $size,
        ]);
    }
}
