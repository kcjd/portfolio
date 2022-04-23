import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import useMousePosition from '../../hooks/useMousePosition'

type Props = {
  isVisible: boolean
}

const Cursor = ({ isVisible }: Props) => {
  const tl = useRef<GSAPTimeline | null>(null)

  const cursor = useRef(null)

  const mousePosition = useMousePosition()

  const setX = gsap.quickTo(cursor.current, 'x', {
    duration: 0.6,
    ease: 'expo'
  })

  const setY = gsap.quickTo(cursor.current, 'y', {
    duration: 0.6,
    ease: 'expo'
  })

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.3,
        ease: 'sine.inOut'
      }
    })

    tl.current.fromTo(
      cursor.current,
      {
        opacity: 0,
        scale: 0
      },
      {
        opacity: 1,
        scale: 1
      }
    )
  }, [])

  useEffect(() => {
    setX(mousePosition.x)
    setY(mousePosition.y)
  }, [mousePosition, setX, setY])

  useEffect(() => {
    if (tl.current) {
      isVisible ? tl.current.play() : tl.current.reverse()
    }
  }, [isVisible])

  return (
    <div
      ref={cursor}
      className="absolute top-0 left-0 z-50 flex justify-center items-center w-20 h-20 rounded-full bg-gray-900 opacity-0 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
    >
      <span className="material-symbols-sharp text-white">open_in_full</span>
    </div>
  )
}

export default Cursor
