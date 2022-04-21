import React from 'react'
import Head from 'next/head'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import adapter from 'webrtc-adapter'
import axios from 'axios'
import qs from 'qs'
import type { AppProps } from 'next/app'
// external module css
import '@styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'
import { ModalContainer } from '@src/containers'
import { ThemeProvider } from 'next-themes'
import NextNprogress from 'nextjs-progressbar'
import { AnimatePresence } from 'framer-motion'
import { wrapper } from '../store'

import Analytics from '@components/analytics'
import siteMetadata from '@data/siteMetadata'

axios.defaults.withCredentials = process.env.NODE_ENV === 'production'
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params)
}

function App({ Component, pageProps, router }: AppProps): JSX.Element {
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
      <Analytics />
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <ModalContainer />
        <ToastContainer />
        <NextNprogress />
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(App)
