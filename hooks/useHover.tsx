import { RefObject, useEffect, useState } from 'react'

function useHover<T extends HTMLElement = HTMLElement>(elementRef: RefObject<T>): boolean {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  useEffect(() => {
    const element = elementRef.current

    element?.addEventListener('mouseenter', handleMouseEnter)
    element?.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element?.removeEventListener('mouseenter', handleMouseEnter)
      element?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [elementRef])

  return isHovered
}

export default useHover
