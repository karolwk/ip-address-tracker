import React, { ReactElement } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rest } from 'msw';
import { API_KEY } from './api';
import ipDataReducer from '../store/slices/getIpData.slice';
import userIpReducer from '../store/slices/getIp.slice';
import { myTheme } from '../App.styles';
import { ThemeProvider } from 'styled-components';
interface WrapperProps {
  children: React.ReactElement;
}

// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen from here as well

function render(
  ui: ReactElement,
  {
    //@ts-ignore
    preloadedState,
    store = configureStore({
      reducer: { userIp: userIpReducer, ipData: ipDataReducer },
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: WrapperProps) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// Mock JSON API response

export const jsonResponse = {
  ip: '127.0.0.1',
  location: {
    country: 'Good Response',
    region: '',
    city: '',
    lat: 0,
    lng: 0,
    postalCode: '',
    timezone: '',
  },
  isp: 'SUPERISP (RFC1122, Section 3.2.1.3)',
};

// Custom handlers for API requests that will be used in tests

export const handlers = [
  // Provide request handlers

  rest.get('https://api.ipify.org', (req, res, ctx) => {
    const param = req.url.searchParams;

    if (param.get('format') === 'text') {
      return res(ctx.body('127.0.0.1'));
    }
    return res(ctx.status(400));
  }),
  rest.get(`https://geo.ipify.org/api/v2/country,city`, (req, res, ctx) => {
    let params = req.url.searchParams;

    if (
      params.get('apiKey') === API_KEY &&
      params.get('ipAddress') === '127.0.0.1'
    ) {
      return res(ctx.json(jsonResponse));
    }

    if (
      params.get('apiKey') === API_KEY &&
      params.get('domain') === 'example.com'
    ) {
      return res(
        ctx.json({ ...jsonResponse, ip: '128.0.0.1', isp: 'ExampleISP' })
      );
    }

    return res(ctx.status(400));
  }),
];

export * from '@testing-library/react';
export { render };
