import {createAsyncThunk} from '@reduxjs/toolkit';
import {storage} from '~helpers/storage';
import {removeAuthentication} from './auth.slice';
import {ThunkState} from '~store/index';

export const authLogout = createAsyncThunk<void, void, ThunkState>(
  'auth/logout',
  async (_, {dispatch, rejectWithValue}) => {
    try {
      await storage.token.clear();
      dispatch(removeAuthentication());
    } catch (err) {
      return rejectWithValue(err.error);
    }
  },
);
