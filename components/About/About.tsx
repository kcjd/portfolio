import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'
import Chip from '../Chip'
import { skewReveal, spring2 } from '../../lib/animations'

const About = () => {
  return (
    <section id="about">
      <motion.div
        variants={skewReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={spring2}
        className="container py-24"
        id="about"
      >
        <h2 className="mb-24 text-3xl font-bold">À Propos</h2>

        <div className="flex flex-col md:flex md:flex-row-reverse justify-between gap-12 mb-16">
          <div className="flex-none w-48 h-48 md:mb-0">
            <Image className="rounded-full" src="/me.webp" width={1440} height={1440} layout="responsive" alt="" />
          </div>

          <div className="flex flex-col gap-4 max-w-3xl text-xl leading-normal">
            <p>Hello ! ✌️</p>
            <p>
              Après un parcours enrichissant dans le design, durant lequel j’ai pu (re)découvrir l’univers du
              développement, j’ai décidé de suivre une formation chez OpenClassrooms, que j’ai validée avec succès !
            </p>
            <p>
              Véritable passionné de tech avec un goût pour le challenge, j’aime apporter des solutions simples et
              efficaces, avec une bonne expérience utilisateur.
            </p>
            <p>
              Je suis en quête d’un poste de développeur frontend à Lyon, alors si mon profil vous intéresse, n’hésitez
              pas à me contacter !
            </p>
          </div>
        </div>

        <div className="mb-16">
          <Link href="/#contact" passHref>
            <Button>Me contacter</Button>
          </Link>
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
      </motion.div>
    </section>
  )
}

export default About
