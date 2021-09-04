import { AppProps } from 'next/dist/shared/lib/router/router';
import React from 'react';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps } :AppProps): JSX.Element {
  return <React.Fragment>
    <Head>
      <title>Next by course</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </React.Fragment>;
}

export default MyApp;
