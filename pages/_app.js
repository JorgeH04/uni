import '../styles/globals.css'
import { TransactionProvider } from '../context/TransactionContext'
import React, { Component } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <TransactionProvider>
      <Component {...pageProps} />
    </TransactionProvider>
  )
}
export default MyApp