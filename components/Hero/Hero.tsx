import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'
import { CgArrowDown } from 'react-icons/cg'

import { slideReveal, spring2, zoomReveal } from 'lib/animations'

export default function Hero() {
  const MotionLink = motion(Link)

  return (
    <section className="container pt-28">
      <motion.div
        variants={slideReveal}
        initial="hidden"
        animate="visible"
        transition={spring2}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
          Kévin Colonjard, <br /> Développeur web <br /> à Lyon.
        </h1>
      </motion.div>
      <MotionLink
        href="#projects"
        variants={zoomReveal}
        initial="hidden"
        animate="visible"
        transition={spring2}
        className="relative flex justify-center items-center w-32 h-32"
        aria-label="Mes projets"
      >
        <CgArrowDown size={28} />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: '20', ease: 'linear', repeat: Infinity }}
          className="absolute inset-2"
        >
          <Image src="/hero-badge.svg" width={500} height={500} alt="" />
        </motion.div>
      </MotionLink>
    </section>
  )
}
