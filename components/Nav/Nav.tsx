import { Variants, motion } from 'framer-motion'
import { MouseEventHandler, useState } from 'react'
import { CgClose, CgMenu } from 'react-icons/cg'

import Social from 'components/Social'

import { skewReveal, spring } from 'lib/animations'

import NavLink from './NavLink'

export const navVariants: Variants = {
  visible: {
    x: 0,
  },
  hidden: {
    x: '-100%',
  },
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick: MouseEventHandler = (e) => {
    if (e.target instanceof Element && e.target.closest('a')) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <button
        className="md:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="Menu"
      >
        <CgMenu size={24} />
      </button>
      <motion.div
        variants={navVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        transition={{ ...spring, when: 'beforeChildren', staggerChildren: 0.1 }}
        className="fixed inset-0 z-50 flex md:contents flex-col justify-between py-6 px-4 bg-blue-50"
        onClick={handleClick}
      >
        <button
          className="self-end md:hidden"
          onClick={() => setIsOpen(false)}
          aria-label="Fermer"
        >
          <CgClose size={24} />
        </button>
        <nav className="flex flex-col items-start md:flex-row gap-8 md:gap-12">
          <NavLink href="/#projects">Projets</NavLink>
          <NavLink href="/#about">À Propos</NavLink>
          <NavLink href="/#contact">Contact</NavLink>
        </nav>
        <motion.div
          variants={skewReveal}
          transition={spring}
          className="md:hidden"
        >
          <Social />
        </motion.div>
      </motion.div>
    </>
  )
}
