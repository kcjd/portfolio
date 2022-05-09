import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '../Container'
import { rotate, spring, zoomIn } from '../../lib/animations'

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => window.scrollTo({ top: window.innerHeight })

  return (
    <section className="bg-blue-50">
      <Container>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center gap-12 lg:gap-0 min-h-screen py-48">
          <div className="md:max-w-[75%]">
            <p className="mb-4 text-gray-600 text-xl">Kévin Colonjard</p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight lg:leading-none">
              Développeur <span className="underline underline-offset-4 decoration-emerald-200">Frontend</span> à Lyon
            </h1>
          </div>

          <button
            className="relative isolate flex justify-center items-center w-32 h-32"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
          >
            <motion.div
              variants={zoomIn}
              initial="hidden"
              animate={isHovered ? 'visible' : 'hidden'}
              transition={spring}
              className="absolute inset-0 -z-10 rounded-full bg-emerald-200"
            />
            <span className="material-symbols-sharp">south</span>
            <motion.div variants={rotate} animate="visible" className="absolute inset-2">
              <Image src="/hero-badge.svg" width={1} height={1} alt="" layout="responsive" />
            </motion.div>
          </button>
        </div>
      </Container>
    </section>
  )
}

export default Hero
