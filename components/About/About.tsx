import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '../Button'
import Chip from '../Chip'
import Parallax from '../Parallax'
import { spring2, slideReveal } from '../../lib/animations'

const About = () => {
  return (
    <section className="container py-24" id="about">
      <h2 className="mb-24 text-3xl font-bold">À Propos</h2>

      <div className="flex flex-col md:flex md:flex-row-reverse justify-between gap-12 mb-16">
        <Parallax>
          <motion.div
            variants={slideReveal}
            initial="hidden"
            whileInView="visible"
            transition={spring2}
            viewport={{ once: true }}
            className="flex-none w-48 h-48 md:mb-0"
          >
            <Image className="rounded-full" src="/me.webp" width={1440} height={1440} layout="responsive" alt="" />
          </motion.div>
        </Parallax>

        <div className="max-w-3xl">
          <div className="flex flex-col gap-4 mb-12 text-lg leading-normal">
            <p>Hello ! ✌️</p>
            <p>
              Après un parcours enrichissant dans le design, durant lequel j’ai pu (re)découvrir l’univers du
              développement, j’ai décidé de suivre une formation chez OpenClassrooms, que j’ai validée avec succès !
            </p>
            <p>
              Spécialisé en développement JavaScript / React, j’aime apporter des solutions simples et efficaces, et
              créer de bonnes expériences utilisateur. Je recherche un poste de développeur front-end junior en CDI, à
              Lyon ou en remote.
            </p>
            <p>Si mon profil vous intéresse, n’hésitez pas à me contacter !</p>
          </div>

          <Link href="/#contact" passHref>
            <Button>Me contacter</Button>
          </Link>
        </div>
      </div>

      <h2 className="mb-6 text-xl font-bold">Mes compétences</h2>

      <ul className="flex flex-wrap gap-2 max-w-xl">
        <Chip>HTML</Chip>
        <Chip>CSS</Chip>
        <Chip>Sass</Chip>
        <Chip>JavaScript</Chip>
        <Chip>TypeScript</Chip>
        <Chip>React</Chip>
        <Chip>Next.js</Chip>
        <Chip>Redux</Chip>
        <Chip>Node.js</Chip>
        <Chip>Express</Chip>
        <Chip>Prisma</Chip>
        <Chip>MongoDB</Chip>
        <Chip>MySQL</Chip>
        <Chip>Git</Chip>
        <Chip>Figma</Chip>
      </ul>
    </section>
  )
}

export default About
