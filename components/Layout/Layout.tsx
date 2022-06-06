import { PropsWithChildren } from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'
import ScrollTop from 'components/ScrollTop'

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
