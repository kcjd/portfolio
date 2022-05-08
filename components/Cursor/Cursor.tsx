import { AnimatePresence, motion, Variants } from 'framer-motion'
import useMousePosition from '../../hooks/useMousePosition'

type Props = {
  isVisible: boolean
}

const Cursor = ({ isVisible }: Props) => {
  const mousePosition = useMousePosition()

  const variants: Variants = {
    visible: {
      opacity: 1,
      scale: 1,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      transition: {
        type: 'spring',
        mass: 0.2
      }
    },
    hidden: {
      opacity: 0,
      scale: 0,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="absolute top-0 left-0 z-50 flex justify-center items-center w-20 h-20 rounded-full bg-gray-900 select-none pointer-events-none"
        >
          <span className="material-symbols-sharp text-white">open_in_full</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Cursor
