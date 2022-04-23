import { useCallback, useEffect, useState } from 'react'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: MouseEvent) => setMousePosition({ x: e.pageX, y: e.pageY }), [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return mousePosition
}

export default useMousePosition
