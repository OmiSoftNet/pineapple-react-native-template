import axios from 'axios';
import {API_URL} from '~config/api';
import {keychain} from '~helpers/keychain';

const defaultConfig = {
  baseURL: API_URL,
};

export const axiosApi = axios.create(defaultConfig);

axiosApi.interceptors.request.use(async config => {
  const tokens = await keychain.token.get();

  if (tokens) {
    config.headers!.authorization = `Bearer ${tokens.accessToken}`;
  }

  return config;
});

axiosApi.interceptors.response.use(
  res => res,
  async err => {
    if (err.response.status === 401) {
      await keychain.token.clear();
    }

    return Promise.reject(err.response?.data ?? err.message);
  },
);
