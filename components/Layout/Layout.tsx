import { PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import Footer from '../Footer'
import Header from '../Header'
import ScrollTop from '../ScrollTop'
import { spring3 } from '../../lib/animations'

const pageTransition: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    skewY: 0
  },
  hidden: {
    opacity: 0,
    y: 600,
    scale: 1.1,
    skewY: 5
  },
  exit: {
    opacity: 0
  }
}

const Layout = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter()

  return (
    <>
      <Header />

      <AnimatePresence onExitComplete={() => window.scrollTo({ top: 0 })} exitBeforeEnter>
        <motion.main
          key={router.asPath}
          variants={pageTransition}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={spring3}
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
