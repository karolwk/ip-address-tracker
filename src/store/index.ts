import { configureStore } from '@reduxjs/toolkit';
import ipReducer from './slices/getIp.slice';
import ipDataReducer from './slices/getIpData.slice';

const store = configureStore({
  reducer: { userIp: ipReducer, ipData: ipDataReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
