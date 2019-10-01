import App from 'next/app'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import withApolloClient from '../lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo'

const theme = {
  colors: {
    primary: '#eeffcc'
  }
}

class MyApp extends App {
  render () {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default withApolloClient(MyApp)
