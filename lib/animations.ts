import { Transition, Variants } from 'framer-motion'

export const spring: Transition = {
  type: 'spring',
  stiffness: 100,
  mass: 0.2
}

export const skewInTop: Variants = {
  visible: {
    opacity: 1,
    skewY: 0,
    y: 0,
    transition: spring
  },
  hidden: {
    opacity: 0,
    skewY: 5,
    y: 200
  }
}

export const zoomIn: Variants = {
  visible: {
    opacity: 1,
    scale: 1
  },
  hidden: {
    opacity: 0,
    scale: 0
  }
}

export const rotate: Variants = {
  visible: {
    rotate: 360,
    transition: {
      duration: '20',
      ease: 'linear',
      repeat: Infinity
    }
  }
}
