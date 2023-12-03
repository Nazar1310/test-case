import { createAsyncThunk } from '@reduxjs/toolkit';
import { ResponseStatus } from '../../types/response';
import { IFile, IFileResponseData } from '../../types/file';
import { getRequest, deleteRequest, postRequest, downloadRequest } from '../requestHelper';

type FetchPaginate = {
  page: number;
  paginate: number;
};

const defaultErrorMessage = 'Something went wrong';

export const getFilesPaginate = createAsyncThunk(
  'file/paginate',
  async (data: FetchPaginate, thunkApi) => {
    const response = await getRequest<IFileResponseData>('/file/paginate', data);
    if (response.status === ResponseStatus.Success) {
      return response.data;
    } else if (response.status === ResponseStatus.Error) {
      return thunkApi.rejectWithValue(response.message ?? defaultErrorMessage);
    }
  }
);

export const uploadFile = createAsyncThunk('file/upload', async (file: File, thunkApi) => {
  const response = await postRequest<IFile>(
    '/file/upload',
    { file },
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  );
  if (response.status === ResponseStatus.Success) {
    return response.data;
  } else if (response.status === ResponseStatus.Error) {
    return thunkApi.rejectWithValue(response.message ?? defaultErrorMessage);
  }
});

export const removeFile = createAsyncThunk('file/remove', async (file: IFile, thunkApi) => {
  const response = await deleteRequest<IFile>('/file/remove/' + file.id);
  if (response.status === ResponseStatus.Success) {
    return file;
  } else if (response.status === ResponseStatus.Error) {
    return thunkApi.rejectWithValue(response.message ?? defaultErrorMessage);
  }
});

export const downloadFile = createAsyncThunk('file/download', async (file: IFile, thunkApi) => {
  const response = await downloadRequest('/file/download/' + file.id, file.name);
  if (response.status === ResponseStatus.Error) {
    return thunkApi.rejectWithValue(response.message ?? defaultErrorMessage);
  }
});
