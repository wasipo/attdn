import '../styles/globals.css'
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
