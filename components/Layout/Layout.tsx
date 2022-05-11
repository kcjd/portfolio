import { PropsWithChildren } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import ScrollTop from '../ScrollTop'

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />

      <ScrollTop />
    </>
  )
}

export default Layout
