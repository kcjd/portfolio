import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
