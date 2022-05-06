import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const ScrollTop = () => {
  const [isVisible, setVisible] = useState(false)
  const scrollTop = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    gsap.to(scrollTop.current, {
      y: isVisible ? 0 : 64,
      scale: isVisible ? 1 : 0,
      duration: 0.4,
      ease: 'power3.out'
    })
  }, [isVisible])

  const handleClick = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <button
      ref={scrollTop}
      className="fixed right-8 bottom-8 flex justify-center items-center w-14 h-14 rounded-full bg-gray-900"
      onClick={handleClick}
      aria-label="Retour en haut de page"
    >
      <span className="material-symbols-sharp text-white text-lg">north</span>
    </button>
  )
}

export default ScrollTop
