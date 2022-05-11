import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { spring, zoomReveal } from '../../lib/animations'

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })

  return (
    <section className="relative flex items-center min-h-screen py-48 bg-gradient-to-bl from-rose-50 via-blue-100 to-blue-300">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />

      <div className="relative container flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-60">
        <div>
          <p className="mb-4 text-gray-600 text-xl md:text-2xl lg:text-3xl">Kévin Colonjard</p>

          <h1 className="text-5xl md:text-8xl xl:text-9xl font-bold leading-none">
            Développeur <br /> Frontend
          </h1>
        </div>

        <button
          className="relative isolate flex justify-center items-center w-32 h-32"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
          aria-label="Mes projets"
        >
          <motion.div
            variants={zoomReveal}
            initial="hidden"
            animate={isHovered ? 'visible' : 'hidden'}
            transition={spring}
            className="absolute inset-0 -z-10 rounded-full bg-blue-300"
          />
          <span className="material-symbols-sharp" aria-hidden>
            south
          </span>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: '20', ease: 'linear', repeat: Infinity }}
            className="absolute inset-2"
          >
            <Image src="/hero-badge.svg" width={1} height={1} alt="" layout="responsive" />
          </motion.div>
        </button>
      </div>
    </section>
  )
}

export default Hero
