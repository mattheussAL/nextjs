import Head from 'next/head';
import { GlobalStyles } from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
