import Image from 'next/image'
import Link from 'next/link'
import Container from '../Container'

const Header = () => {
  return (
    <header className="absolute left-0 top-0 right-0 z-10 py-6">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="w-8 h-8">
              <Image src="/logo.svg" width={1} height={1} layout="responsive" alt="" />
            </a>
          </Link>

          <button>
            <span className="material-symbols-sharp lg:hidden">menu</span>
          </button>

          <nav className="hidden lg:flex gap-12">
            <Link href="/#projects">
              <a className="text-lg">Projets</a>
            </Link>

            <Link href="/">
              <a className="text-lg">À Propos</a>
            </Link>

            <Link href="/">
              <a className="text-lg">Contact</a>
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
