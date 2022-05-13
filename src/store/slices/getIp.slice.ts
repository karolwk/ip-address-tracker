import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface IpSliceState {
  ip: string;
  error: string | null;
  loading: 'idle' | 'pending' | 'succeded' | 'failed';
}

const initialState: IpSliceState = { loading: 'idle', ip: '', error: null };

export const fetchUserIP = createAsyncThunk('userIp/fetchUserIp', async () => {
  const response = await axios.get('https://api.ipify.org?format=text');

  return response.data;
});

export const getIpSlice = createSlice({
  name: 'userIp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserIP.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchUserIP.fulfilled, (state, action) => {
        state.loading = 'succeded';
        state.ip = action.payload;
      })
      .addCase(fetchUserIP.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message as string;
      });
  },
});

export default getIpSlice.reducer;
