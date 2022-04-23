import { PropsWithChildren } from 'react'

type Props = {
  variant?: 'primary' | 'secondary'
}

const Button = ({ variant = 'primary', children }: PropsWithChildren<Props>) => {
  return (
    <a
      className={`inline-flex items-center h-16 px-8 rounded-md font-semibold uppercase tracking-wide cursor-pointer ${
        variant === 'primary' ? 'bg-gray-900 text-white' : ''
      } ${variant === 'secondary' ? 'border-2 border-current' : ''}`}
    >
      {children}
    </a>
  )
}

export default Button
