import { motion, Variants } from 'framer-motion'
import SocialLinks from '../SocialLinks'
import { MouseEventHandler, useState } from 'react'
import NavLink from './NavLink'
import { skewInTop, spring } from '../../lib/animations'

export const wrapper: Variants = {
  visible: {
    x: 0,
    scale: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      ...spring
    }
  },
  hidden: {
    x: '-100%',
    scale: 0.9
  }
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick: MouseEventHandler = (e) => {
    if (e.target instanceof Element && e.target.closest('a')) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <button className="md:hidden" onClick={() => setIsOpen(true)}>
        <span className="material-symbols-sharp">menu</span>
      </button>

      <motion.div
        variants={wrapper}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className="fixed inset-0 flex md:contents flex-col justify-between py-6 px-4 bg-blue-50"
        onClick={handleClick}
      >
        <button className="self-end md:hidden" onClick={() => setIsOpen(false)}>
          <span className="material-symbols-sharp">close</span>
        </button>

        <nav className="flex flex-col items-start md:flex-row gap-8 md:gap-12">
          <NavLink href="/#projects">Projets</NavLink>

          <NavLink href="/#about">À Propos</NavLink>

          <NavLink href="/#contact">Contact</NavLink>
        </nav>

        <motion.div variants={skewInTop} className="md:hidden">
          <SocialLinks />
        </motion.div>
      </motion.div>
    </>
  )
}

export default Nav
