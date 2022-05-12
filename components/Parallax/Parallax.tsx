import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion'

type Props = {
  offset?: number
}

const Parallax = ({ offset = 60, children }: PropsWithChildren<Props>) => {
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const elementRef = useRef<HTMLDivElement | null>(null)
  const { scrollY } = useViewportScroll()

  const initial = elementTop - clientHeight
  const intermediate = elementTop - clientHeight * 0.8
  const final = elementTop + offset

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset])
  const y = useSpring(yRange, { stiffness: 400, damping: 90 })

  const opacityRange = useTransform(scrollY, [initial, intermediate, final], [0, 1, 1])
  const opacity = useSpring(opacityRange, { stiffness: 400, damping: 90 })

  useEffect(() => {
    const onResize = () => {
      if (!elementRef.current) return
      setElementTop(elementRef.current.getBoundingClientRect().top + window.scrollY || window.pageYOffset)
      setClientHeight(window.innerHeight)
    }

    onResize()
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [elementRef])

  return (
    <motion.div ref={elementRef} style={{ y, opacity }}>
      {children}
    </motion.div>
  )
}

export default Parallax
