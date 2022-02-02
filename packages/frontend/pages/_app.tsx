import '../styles/globals.css'
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import UseStore from '../lib/data/redux/store/WorkSchedule/WorkScheduleStore';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }:AppProps):JSX.Element {
  const store = UseStore()
  const persistor = persistStore(store)
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
