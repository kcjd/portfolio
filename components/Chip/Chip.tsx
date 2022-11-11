interface Props {
  children: React.ReactNode
}

export default function Chip({ children }: Props) {
  return (
    <li className="py-1 px-4 rounded-full border border-blue-600">
      {children}
    </li>
  )
}
