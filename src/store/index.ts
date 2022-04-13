import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth/auth.slice';
import api from '~services/api';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware => {
    let middlewares = getDefaultMiddleware().concat(api.middleware);

    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      middlewares = middlewares.concat(createDebugger());
    }

    return middlewares;
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkState = {state: RootState};
