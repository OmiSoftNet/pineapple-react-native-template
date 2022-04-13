import {AxiosError, AxiosRequestConfig} from 'axios';
import {BaseQueryFn} from '@reduxjs/toolkit/query';
import {axiosApi} from './axiosApi';

export const axiosBaseQuery =
  (): BaseQueryFn<AxiosRequestConfig, unknown, unknown> => async config => {
    try {
      const result = await axiosApi(config);

      return {data: result.data};
    } catch (apiErr) {
      const err = apiErr as AxiosError;

      return {
        error: {status: err.response?.status, data: err.response?.data},
      };
    }
  };
