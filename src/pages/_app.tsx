import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import type { AppProps } from 'next/app'
// external module css
import 'mapbox-gl/dist/mapbox-gl.css'
import '@styles/main.scss'

import { ModalContainer } from '@src/containers'
import { ModalProvider } from '@src/context/ModalContext'

axios.defaults.withCredentials = Boolean(process.env.NEXT_PUBLIC_API_WITH_CRED === 'true')
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>template</title>
        <link rel="icon" href="/images/favicon.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <ModalProvider>
        <Component {...pageProps} />
        <ModalContainer />
      </ModalProvider>
    </>
  )
}
