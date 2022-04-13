import {createSlice} from '@reduxjs/toolkit';
import {AuthSliceState} from './types';
import authApi from '~services/api/auth';

const {login, register} = authApi.endpoints;

const initialState: AuthSliceState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticateUser: state => {
      state.isAuthenticated = true;
    },
    removeAuthentication: state => {
      state.isAuthenticated = false;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(login.matchFulfilled, (state, {payload}) => {
      // Do something on successful login
    });
    builder.addMatcher(register.matchFulfilled, (state, {payload}) => {
      // Do something on successful registration
    });
  },
});

export const {authenticateUser, removeAuthentication} = authSlice.actions;

export default authSlice;
