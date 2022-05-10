import { PropsWithChildren } from 'react'

const Chip = ({ children }: PropsWithChildren<{}>) => {
  return <li className="py-1 px-4 rounded-full border-2 border-emerald-200">{children}</li>
}

export default Chip
