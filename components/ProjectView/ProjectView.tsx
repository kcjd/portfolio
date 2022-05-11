import { Project } from '@prisma/client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { skewReveal, slideReveal, spring2 } from '../../lib/animations'
import Button from '../Button'
import Chip from '../Chip'

type Props = {
  project: Project
}

const ProjectView = ({ project }: Props) => {
  return (
    <section className="pt-60 pb-24">
      <motion.div
        variants={skewReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={spring2}
        className="container"
      >
        <div className="max-w-3xl">
          <Link href="/#projects">
            <a
              className="flex justify-center items-center w-10 h-10 mb-6 rounded-full border-2 border-gray-200 text-gray-600"
              aria-label="Retour"
            >
              <span className="material-symbols-sharp text-base" aria-hidden>
                west
              </span>
            </a>
          </Link>

          <div className="mb-12">
            <h1 className="mb-1 text-4xl font-bold">{project.title}</h1>
            <p className="text-xl text-gray-600">{project.subtitle}</p>
          </div>

          <p className="mb-12 text-xl leading-normal">{project.body}</p>

          <h2 className="mb-6 text-xl font-bold">Technologies</h2>

          <ul className="flex flex-wrap gap-2 mb-20">
            {project.technologies.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </ul>

          <div className="flex gap-4">
            <Button as="a" href={project.link} target="_blank" rel="noreferrer" icon="north_east">
              Voir le projet
            </Button>

            <Button variant="secondary" as="a" href={project.repo} target="_blank" rel="noreferrer">
              Github
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col gap-14 max-w-screen-xl mx-auto mt-24 lg:px-4">
        {project.images.map((image) => (
          <motion.div
            key={image}
            variants={slideReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={spring2}
            className="bg-gray-900"
          >
            <Image src={`/projects/${image}`} width={1500} height={1200} layout="responsive" alt="" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ProjectView
