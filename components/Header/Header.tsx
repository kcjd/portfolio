import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import Container from '../Container'
import useToggle from '../../hooks/useToggle'

const navLinks = [
  { href: '/#projects', label: 'Projets' },
  { href: '/#about', label: 'À Propos' },
  { href: '/#contact', label: 'Contact' }
]

const socialLinks = [
  { href: 'https://github.com/kcjd', label: 'GitHub', icon: '/icon-github.svg' },
  { href: 'https://www.linkedin.com/in/kevincj', label: 'LinkedIn', icon: '/icon-linkedin.svg' }
]

const Header = () => {
  const [isNavOpen, toggleNavOpen] = useToggle()
  const tl = useRef<GSAPTimeline | null>(null)
  const wrapperRef = useRef(null)
  const navRef = useRef(null)
  const socialRef = useRef(null)

  useEffect(() => {
    tl.current = gsap
      .timeline({ paused: true })
      .from(wrapperRef.current, {
        x: '-100%',
        y: '8rem',
        duration: 0.4,
        ease: 'expo.out'
      })
      .from([navRef.current, socialRef.current], {
        opacity: 0,
        y: '6rem',
        skewY: 5,
        duration: 0.4,
        ease: 'power4.out'
      })
  }, [])

  useEffect(() => {
    if (tl.current) {
      isNavOpen ? tl.current.play() : tl.current.reverse()
    }
  }, [isNavOpen])

  return (
    <header className="absolute left-0 top-0 right-0 z-10 py-6">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="w-8 h-8">
              <Image src="/logo.svg" width={1} height={1} layout="responsive" alt="" />
            </a>
          </Link>

          <button className="md:hidden" onClick={toggleNavOpen}>
            <span className="material-symbols-sharp">menu</span>
          </button>

          <div
            ref={wrapperRef}
            className="fixed inset-0 flex md:contents flex-col justify-between py-6 px-4 bg-teal-50"
          >
            <button className="self-end md:hidden" onClick={toggleNavOpen}>
              <span className="material-symbols-sharp">close</span>
            </button>

            <div ref={navRef} className="md:contents">
              <nav className="flex flex-col items-start md:flex-row gap-8 md:gap-12">
                {navLinks.map(({ href, label }) => (
                  <Link key={href} href={href}>
                    <a className="text-4xl md:text-lg font-semibold md:font-medium" onClick={toggleNavOpen}>
                      {label}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>

            <div ref={socialRef} className="flex gap-4 md:hidden">
              {socialLinks.map(({ href, label, icon }) => (
                <a key={href} className="w-7 h-7" href={href} target="_blank" rel="noreferrer">
                  <Image src={icon} width={1} height={1} layout="responsive" alt={label} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
