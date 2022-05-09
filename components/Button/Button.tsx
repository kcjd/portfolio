/* eslint-disable react/display-name */
import { motion } from 'framer-motion'
import { ComponentPropsWithoutRef, ElementType, forwardRef, useState } from 'react'
import { spring } from '../../lib/animations'

type Props<T extends ElementType> = {
  as?: T
  variant?: 'primary' | 'secondary'
  icon?: string
}

const Button = forwardRef(
  <T extends ElementType = 'button'>(
    { as, variant = 'primary', icon, children, ...props }: Props<T> & ComponentPropsWithoutRef<T>,
    ref?: any
  ) => {
    const Component = as || 'button'

    const [isHovered, setIsHovered] = useState(false)

    return (
      <Component
        ref={ref}
        className={`inline-flex items-center h-16 px-8 rounded-md font-bold uppercase tracking-wide cursor-pointer transition-colors ${
          variant === 'primary' ? 'bg-gray-900 hover:bg-gray-800 text-white' : ''
        } ${variant === 'secondary' ? 'border-2 border-current' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <motion.span
          animate={isHovered ? { opacity: [1, 0, 0, 1], y: [0, -16, 16, 0] } : ''}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.span>

        {icon && (
          <motion.span
            animate={isHovered ? { x: 4, y: -4 } : ''}
            transition={spring}
            className="material-symbols-sharp ml-4 text-lg"
          >
            {icon}
          </motion.span>
        )}
      </Component>
    )
  }
)

export default Button
