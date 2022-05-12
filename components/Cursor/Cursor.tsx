import { useEffect } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { CgArrowsExpandRight } from 'react-icons/cg'
import useMousePosition from '../../hooks/useMousePosition'
import { spring, zoomReveal } from '../../lib/animations'

type Props = {
  isVisible: boolean
}

const Cursor = ({ isVisible }: Props) => {
  const mousePosition = useMousePosition()
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const x = useSpring(cursorX, spring)
  const y = useSpring(cursorY, spring)

  useEffect(() => {
    cursorX.set(mousePosition.x - 40)
    cursorY.set(mousePosition.y - 40)
  }, [mousePosition])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={zoomReveal}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={spring}
          className="absolute top-0 left-0 z-50 flex justify-center items-center w-20 h-20 rounded-full bg-gray-900 text-white select-none pointer-events-none"
          style={{ x, y }}
        >
          <CgArrowsExpandRight size={28} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Cursor
