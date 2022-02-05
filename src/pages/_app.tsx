import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import qs from 'qs'
import type { AppProps } from 'next/app'
// external module css
import 'react-toastify/dist/ReactToastify.css'
import '@css/tailwind.scss'

import { ToastContainer } from 'react-toastify'
import { ModalContainer } from '@src/containers'
import { ModalProvider } from '@src/context/ModalContext'
import { UserAuthProvider } from '@src/context/UserAuthContext'
import { Composer } from '@components/common'

axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params)
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_TITLE}</title>
        <link rel="icon" href="/logo.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <Composer components={[UserAuthProvider, ModalProvider]}>
        <Component {...pageProps} />
        <ModalContainer />
        <ToastContainer />
      </Composer>
    </>
  )
}
