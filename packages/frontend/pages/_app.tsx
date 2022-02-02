import '../styles/globals.css'
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import {setupStore} from '../lib/store/WorkSchedule'
import { Provider } from 'react-redux';


function MyApp({ Component, pageProps }:AppProps):JSX.Element {

  const store = setupStore();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
