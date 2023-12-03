<?php

namespace App\Http\Requests;

use App\Services\FileService;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\ValidationException;

class FileUploadRequest extends FormRequest
{
    public function rules()
    {
        return [
            'file'=> 'required|mimes:jpg,jpeg,png,pdf|max:2048',
        ];
    }

    /**
     * @param Validator $validator
     * @return void
     */
    protected function failedValidation(Validator $validator)
    {
        $message = (new ValidationException($validator))->getMessage();

        throw new HttpResponseException(response()->json([
            'status' => FileService::STATUS_ERROR,
            'message' => $message
        ]));
    }

}
