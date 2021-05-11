import React from 'react'
import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      {/* <link rel="preconnect" href="https://fonts.gstatic.com"> */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700;900&display=swap" rel="stylesheet"> */}
    </Head>

    <Component {...pageProps} />
  </>
}

export default MyApp
