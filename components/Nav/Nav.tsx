import { motion, Variants } from 'framer-motion'
import { MouseEventHandler, useState } from 'react'
import NavLink from './NavLink'
import Social from '../Social'
import { skewReveal, spring2 } from '../../lib/animations'

export const navVariants: Variants = {
  visible: {
    x: 0
  },
  hidden: {
    x: '-100%'
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
      <button className="md:hidden" onClick={() => setIsOpen(true)} aria-label="Menu">
        <span className="material-symbols-sharp" aria-hidden>
          menu
        </span>
      </button>

      <motion.div
        variants={navVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        transition={{ ...spring2, when: 'beforeChildren', staggerChildren: 0.1 }}
        className="fixed inset-0 flex md:contents flex-col justify-between py-6 px-4 bg-blue-50"
        onClick={handleClick}
      >
        <button className="self-end md:hidden" onClick={() => setIsOpen(false)} aria-label="Fermer">
          <span className="material-symbols-sharp" aria-hidden>
            close
          </span>
        </button>

        <nav className="flex flex-col items-start md:flex-row gap-8 md:gap-12">
          <NavLink href="/#projects">Projets</NavLink>

          <NavLink href="/#about">À Propos</NavLink>

          <NavLink href="/#contact">Contact</NavLink>
        </nav>

        <motion.div variants={skewReveal} className="md:hidden">
          <Social />
        </motion.div>
      </motion.div>
    </>
  )
}

export default Nav
