import { PropsWithChildren } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { skewInTop } from '../../lib/animations'

type Props = {
  href: string
}

const NavLink = ({ href, children }: PropsWithChildren<Props>) => {
  return (
    <motion.div variants={skewInTop} className="md:contents">
      <Link href={href}>
        <a className="relative text-4xl md:text-lg font-bold md:font-medium after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-current after:scale-x-0 hover:after:scale-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300">
          {children}
        </a>
      </Link>
    </motion.div>
  )
}

export default NavLink
