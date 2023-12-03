<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class File extends Model
{
    protected $table = 'files';
    protected $fillable = ['name', 'mime_type', 'path', 'size'];
    protected $guarded = ['id'];

    public function remove() {
        if(Storage::exists("public/$this->path")){
            Storage::delete("public/$this->path");
        }
        $this->delete();
    }
    public function getFullPath() {
        return storage_path("app/public/$this->path");
    }
}
