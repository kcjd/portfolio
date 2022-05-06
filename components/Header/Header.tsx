import Image from 'next/image'
import Link from 'next/link'
import Container from '../Container'
import Nav from '../Nav'

const Header = () => {
  return (
    <header className="absolute left-0 top-0 right-0 z-10 py-6">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="w-6 h-6">
              <Image src="/logo.svg" width={1} height={1} layout="responsive" alt="" />
            </a>
          </Link>

          <Nav />
        </div>
      </Container>
    </header>
  )
}

export default Header
