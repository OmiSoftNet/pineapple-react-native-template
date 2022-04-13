import {AUTH_ENDPOINTS} from '~config/api';
import {LoginCredentials, RegisterCredentials} from '~types/auth';
import api from '..';

const {LOGIN, REGISTER} = AUTH_ENDPOINTS;

const authApi = api.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<unknown, LoginCredentials>({
      query: data => ({url: LOGIN, method: 'POST', data}),
    }),
    register: build.mutation<unknown, RegisterCredentials>({
      query: data => ({url: REGISTER, method: 'POST', data}),
    }),
  }),
  overrideExisting: true,
});

export default authApi;
