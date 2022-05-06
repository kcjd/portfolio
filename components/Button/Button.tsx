import { ComponentPropsWithoutRef, ElementType } from 'react'

type Props<T extends ElementType> = {
  as?: T
  variant?: 'primary' | 'secondary'
}

const Button = <T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  children,
  ...props
}: Props<T> & ComponentPropsWithoutRef<T>) => {
  const Component = as || 'button'

  return (
    <Component
      className={`inline-flex items-center h-16 px-8 rounded-md font-bold uppercase tracking-wide cursor-pointer ${
        variant === 'primary' ? 'bg-gray-900 text-white' : ''
      } ${variant === 'secondary' ? 'border-2 border-current' : ''}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button
