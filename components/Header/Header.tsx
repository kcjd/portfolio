import Link from 'next/link'
import Nav from '../Nav'

const Header = () => {
  return (
    <header className="container flex justify-between items-center py-6">
      <Link href="/">
        <a className="font-bold text-lg">Kévin Colonjard</a>
      </Link>

      <Nav />
    </header>
  )
}

export default Header
