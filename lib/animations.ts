import { Variants } from 'framer-motion'

export const spring = {
  type: 'spring',
  stiffness: 100,
  mass: 0.2
}

export const slideReveal: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.6
  }
}

export const skewReveal: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0
  },
  hidden: {
    skewY: 5,
    opacity: 0,
    y: 60
  }
}

export const zoomReveal: Variants = {
  visible: {
    opacity: 1,
    scale: 1
  },
  hidden: {
    opacity: 0,
    scale: 0
  }
}
