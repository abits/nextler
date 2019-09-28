import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
  }
  body {
    margin: 0;
    scroll-snap-type: y mandatory;
  }
`;

export default class MyCustomDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags } // return styles collected
  }

  render () {
    return (
      <html>
        <Head>
          {this.props.styleTags}
        </Head>
        <GlobalStyle />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
