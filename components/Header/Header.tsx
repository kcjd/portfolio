import Image from 'next/image'
import Link from 'next/link'
import Nav from '../Nav'

const Header = () => {
  return (
    <header className="container absolute left-0 top-0 right-0 z-10 flex justify-between items-center py-6">
      <Link href="/">
        <a className="w-6 h-6">
          <Image src="/logo.svg" width={1} height={1} layout="responsive" alt="Kévin Colonjard" />
        </a>
      </Link>

      <Nav />
    </header>
  )
}

export default Header
