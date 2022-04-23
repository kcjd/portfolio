import { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import '../styles/globals.css'

gsap.registerPlugin(ScrollTrigger)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <Header />

      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App
