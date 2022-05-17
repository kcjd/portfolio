import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CgArrowDown } from 'react-icons/cg'
import { slideReveal, spring2, zoomReveal } from '../../lib/animations'

const Hero = () => {
  return (
    <section className="flex lg:items-center pt-48">
      <div className="container">
        <motion.div variants={slideReveal} initial="hidden" animate="visible" transition={spring2} className="mb-12">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-none">
            Kévin Colonjard, <br /> Développeur web <br /> à Lyon.
          </h1>
        </motion.div>

        <Link href="#projects" passHref>
          <motion.a
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
              <Image src="/hero-badge.svg" width={1} height={1} alt="" layout="responsive" />
            </motion.div>
          </motion.a>
        </Link>
      </div>
    </section>
  )
}

export default Hero
