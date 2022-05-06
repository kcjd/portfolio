import { gsap } from 'gsap'

export const skewIn = (target: GSAPTweenTarget, vars?: GSAPTweenVars) =>
  gsap.from(target, {
    opacity: 0,
    y: '6rem',
    skewY: 5,
    duration: 0.6,
    ease: 'power4.out',
    ...vars
  })

export const zoomIn = (target: GSAPTweenTarget, vars?: GSAPTweenVars) =>
  gsap.from(target, {
    scale: 0,
    duration: 0.4,
    ease: 'power4.out'
  })

export const rotate = (target: GSAPTweenTarget, vars?: GSAPTweenVars) =>
  gsap.to(target, {
    rotate: 360,
    duration: 60,
    repeat: -1,
    ease: 'none'
  })
