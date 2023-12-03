import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { downloadFile, getFilesPaginate, removeFile, uploadFile } from '../actions/fileActions';
import { IFile, IFileResponseData } from '../../types/file';

export interface FileState {
  files: IFile[];
  isLoading: boolean;
  error: string;
}

const initialState: FileState = {
  files: [],
  isLoading: false,
  error: ''
};

const isLoading = (state: FileState) => {
  state.isLoading = true;
  state.error = '';
};
const error = (state: FileState, error: string) => {
  state.isLoading = false;
  state.error = error;
};

export const fileReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initFiles: (state: FileState, action: PayloadAction<IFile[]>) => {
      state.files = action.payload;
    },
  },
  extraReducers: {
    [getFilesPaginate.pending.type]: (state: FileState) => {
      isLoading(state);
    },
    [getFilesPaginate.rejected.type]: (state: FileState, action: PayloadAction<string>) => {
      error(state, action.payload);
    },
    [uploadFile.pending.type]: (state: FileState) => {
      isLoading(state);
    },
    [uploadFile.rejected.type]: (state: FileState, action: PayloadAction<string>) => {
      error(state, action.payload);
    },
    [removeFile.pending.type]: (state: FileState) => {
      isLoading(state);
    },
    [removeFile.rejected.type]: (state: FileState, action: PayloadAction<string>) => {
      error(state, action.payload);
    },
    [downloadFile.pending.type]: (state: FileState) => {
      isLoading(state);
    },
    [downloadFile.rejected.type]: (state: FileState, action: PayloadAction<string>) => {
      error(state, action.payload);
    },

    [getFilesPaginate.fulfilled.type]: (
      state: FileState,
      action: PayloadAction<IFileResponseData>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.files = action.payload.files.data;
    },
    [uploadFile.fulfilled.type]: (state: FileState, action: PayloadAction<IFile>) => {
      state.isLoading = false;
      state.error = '';
      state.files.unshift(action.payload);
    },
    [removeFile.fulfilled.type]: (state: FileState, action: PayloadAction<IFile>) => {
      state.isLoading = false;
      state.error = '';
      state.files = state.files.filter((file) => action.payload.id !== file.id);
    },
    [downloadFile.fulfilled.type]: (state: FileState) => {
      state.isLoading = false;
      state.error = '';
    }
  }
});

export const { initFiles } = fileReducer.actions

export default fileReducer.reducer;
