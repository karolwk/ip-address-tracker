import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API_KEY } from '../../shared/api';
import { IpifyApiResponse } from '../../shared/types';

interface IpDataSliceState {
  loading: 'idle' | 'pending' | 'succeded' | 'failed';
  error: string | null;
  data: {} | IpifyApiResponse;
}

const initialState: IpDataSliceState = {
  loading: 'idle',
  error: null,
  data: {},
};

export const fetchIpData = createAsyncThunk(
  'ipData/fetchIpData',
  async (data: string) => {
    let params;
    // Check if provided data is domain, else treat it like IP address
    if (data.match(/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/)) {
      params = {
        apiKey: API_KEY,
        domain: data,
      };
    } else {
      params = {
        apiKey: API_KEY,
        ipAddress: data,
      };
    }

    const respone = await axios.get(
      'https://geo.ipify.org/api/v2/country,city',
      {
        params,
      }
    );

    return respone.data as IpifyApiResponse;
  }
);

export const getIpSlice = createSlice({
  name: 'ipData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIpData.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchIpData.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.loading = 'failed';
      })
      .addCase(fetchIpData.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = 'succeded';
      });
  },
});

export default getIpSlice.reducer;
