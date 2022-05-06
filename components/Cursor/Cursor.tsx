import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import useMousePosition from '../../hooks/useMousePosition'

type Props = {
  isVisible: boolean
}

const Cursor = ({ isVisible }: Props) => {
  const tl = useRef<GSAPTimeline | null>(null)

  const cursorRef = useRef(null)

  const mousePosition = useMousePosition()

  useEffect(() => {
    tl.current = gsap
      .timeline({
        paused: true,
        defaults: {
          duration: 0.3,
          ease: 'sine.inOut'
        }
      })
      .from(cursorRef.current, {
        opacity: 0,
        scale: 0
      })
  }, [])

  useEffect(() => {
    const setX = gsap.quickTo(cursorRef.current, 'x', {
      duration: 0.6,
      ease: 'expo'
    })

    const setY = gsap.quickTo(cursorRef.current, 'y', {
      duration: 0.6,
      ease: 'expo'
    })

    setX(mousePosition.x)
    setY(mousePosition.y)
  }, [mousePosition])

  useEffect(() => {
    if (tl.current) {
      isVisible ? tl.current.play() : tl.current.reverse()
    }
  }, [isVisible])

  return (
    <div
      ref={cursorRef}
      className="absolute top-0 left-0 z-50 flex justify-center items-center w-20 h-20 rounded-full bg-gray-900 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
    >
      <span className="material-symbols-sharp text-white">open_in_full</span>
    </div>
  )
}

export default Cursor
