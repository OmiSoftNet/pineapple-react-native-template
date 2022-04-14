import {createAsyncThunk} from '@reduxjs/toolkit';
import {removeAuthentication} from './auth.slice';
import {ThunkState} from '~store/index';
import {keychain} from '~helpers/keychain';

export const authLogout = createAsyncThunk<void, void, ThunkState>(
  'auth/logout',
  async (_, {dispatch, rejectWithValue}) => {
    try {
      await keychain.token.clear();
      dispatch(removeAuthentication());
    } catch (err) {
      return rejectWithValue(err.error);
    }
  },
);
