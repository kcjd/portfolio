import { useEffect, useState } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { spring } from '../../lib/animations'

const scrollTop: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: spring
  },
  hidden: {
    opacity: 0,
    y: 64,
    scale: 0
  },
  hover: {
    scale: 1.1
  },
  tap: {
    y: 16,
    scale: 0.95
  }
}

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > window.innerHeight)
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => window.scrollTo({ top: 0 })

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          variants={scrollTop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          whileHover="hover"
          whileTap="tap"
          className="fixed right-4 bottom-4 flex justify-center items-center w-14 h-14 rounded-full bg-gray-900"
          onClick={handleClick}
          aria-label="Retour en haut de page"
        >
          <span className="material-symbols-sharp text-white text-lg">north</span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollTop
