import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/fileReducer';

export const store = configureStore({
  reducer: {
    file: counterReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
