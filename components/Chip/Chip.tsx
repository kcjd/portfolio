import { PropsWithChildren } from 'react'

const Chip = ({ children }: PropsWithChildren<{}>) => {
  return (
    <li className="py-1 px-4 rounded-full border border-blue-600">
      {children}
    </li>
  )
}

export default Chip
