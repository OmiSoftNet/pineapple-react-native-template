import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from '~utils/api/axiosBaseQuery';
import {AuthTags} from '~services/api/auth/types';

const authTags = Object.values(AuthTags);

const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery(),
  tagTypes: [...authTags],
  endpoints: () => ({}),
});

export default api;
