import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface Props {
  offset?: number
  children: React.ReactNode
}

export default function Parallax({ offset = 50, children }: Props) {
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const elementRef = useRef<HTMLDivElement | null>(null)
  const { scrollY } = useScroll()

  const initial = elementTop - clientHeight
  const final = elementTop + offset

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset])
  const y = useSpring(yRange, { stiffness: 400, damping: 90 })

  useEffect(() => {
    const onResize = () => {
      if (!elementRef.current) return
      setElementTop(
        elementRef.current.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      )
      setClientHeight(window.innerHeight)
    }

    onResize()
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [elementRef])

  return (
    <motion.div ref={elementRef} className="contents lg:block" style={{ y }}>
      {children}
    </motion.div>
  )
}
