import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import useToggle from '../../hooks/useToggle'
import SocialLinks from '../SocialLinks'
import { skewIn } from '../../lib/animations'

const navLinks = [
  {
    href: '/#projects',
    label: 'Projets'
  },
  {
    href: '/#about',
    label: 'À Propos'
  },
  {
    href: '/#contact',
    label: 'Contact'
  }
]

const Nav = () => {
  const [isOpen, toggleOpen] = useToggle()
  const tl = useRef<GSAPTimeline>()
  const wrapperRef = useRef(null)
  const navRef = useRef(null)
  const socialRef = useRef(null)

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true })
    tl.current
      ?.from(wrapperRef.current, {
        x: '-100%',
        y: '8rem',
        duration: 0.4,
        ease: 'expo.out'
      })
      .add(skewIn([navRef.current, socialRef.current], { duration: 0.4, stagger: 0.1 }))
  }, [tl])

  useEffect(() => {
    if (tl.current) {
      isOpen ? tl.current.play() : tl.current.reverse()
    }
  }, [isOpen])

  return (
    <>
      <button className="md:hidden" onClick={toggleOpen}>
        <span className="material-symbols-sharp">menu</span>
      </button>

      <div ref={wrapperRef} className="fixed inset-0 flex md:contents flex-col justify-between py-6 px-4 bg-blue-50">
        <button className="self-end md:hidden" onClick={toggleOpen}>
          <span className="material-symbols-sharp">close</span>
        </button>

        <div ref={navRef} className="md:contents">
          <nav className="flex flex-col items-start md:flex-row gap-8 md:gap-12">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                <a
                  className="relative text-4xl md:text-lg font-bold md:font-medium after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-current after:scale-x-0 hover:after:scale-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300"
                  onClick={toggleOpen}
                >
                  {label}
                </a>
              </Link>
            ))}
          </nav>
        </div>

        <div ref={socialRef} className="md:hidden">
          <SocialLinks />
        </div>
      </div>
    </>
  )
}

export default Nav
