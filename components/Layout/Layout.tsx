import { PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import Footer from '../Footer'
import Header from '../Header'
import ScrollTop from '../ScrollTop'
import { skewReveal, spring2 } from '../../lib/animations'

const Layout = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter()

  return (
    <>
      <Header />

      <AnimatePresence onExitComplete={() => window.scrollTo({ top: 0 })} exitBeforeEnter>
        <motion.main
          key={router.asPath}
          variants={skewReveal}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          transition={spring2}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />

      <ScrollTop />
    </>
  )
}

export default Layout
