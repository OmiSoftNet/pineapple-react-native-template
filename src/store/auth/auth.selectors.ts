import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../index';

const authState = (state: RootState) => state.auth;

export const selectIsAuthenticated = createSelector(
  authState,
  ({isAuthenticated}) => isAuthenticated,
);
