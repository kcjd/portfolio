/* eslint-disable react/display-name */
import { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react'
import clsx from 'clsx'

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

    return (
      <Component
        ref={ref}
        className={clsx(
          'inline-flex items-center h-16 px-8 rounded-md font-bold uppercase tracking-wide cursor-pointer',
          variant === 'primary' && 'bg-gray-900 text-white',
          variant === 'secondary' && 'border-2 border-current text-gray-900'
        )}
        {...props}
      >
        {children}

        {icon && (
          <span className="material-symbols-sharp ml-4 text-lg" aria-hidden>
            {icon}
          </span>
        )}
      </Component>
    )
  }
)

export default Button
