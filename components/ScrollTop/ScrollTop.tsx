import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slideReveal, spring } from '../../lib/animations'

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > window.innerHeight)
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          variants={slideReveal}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={spring}
          className="fixed right-4 bottom-4 z-50 flex justify-center items-center w-14 h-14 rounded-full bg-gray-900"
          onClick={handleClick}
          aria-label="Haut de page"
        >
          <span className="material-symbols-sharp text-white text-lg" aria-hidden>
            north
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollTop
