import { forwardRef, HTMLProps, PropsWithChildren } from 'react'
import clsx from 'clsx'
import { IconType } from 'react-icons'

type Props = HTMLProps<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary'
  icon?: IconType
}

const Button = forwardRef<HTMLAnchorElement, PropsWithChildren<Props>>(
  ({ variant = 'primary', icon: Icon, children, ...props }, ref?: any) => {
    return (
      <a
        ref={ref}
        className={clsx(
          'inline-flex items-center gap-2 h-16 px-8 rounded-md font-bold uppercase tracking-wide cursor-pointer',
          variant === 'primary' && 'bg-gray-900 text-white',
          variant === 'secondary' && 'border border-gray-900 text-gray-900'
        )}
        {...props}
      >
        {children}

        {Icon && <Icon size={24} />}
      </a>
    )
  }
)

Button.displayName = 'Button'

export default Button
