import { Project } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CgArrowLeft, CgArrowTopRight } from 'react-icons/cg'
import Button from '../Button'
import Chip from '../Chip'
import { slideReveal, spring2 } from '../../lib/animations'

type Props = {
  project: Project
}

const ProjectView = ({ project }: Props) => {
  return (
    <section className="pt-60 pb-24">
      <div className="container">
        <motion.div
          key={project.slug}
          variants={slideReveal}
          initial="hidden"
          animate="visible"
          transition={spring2}
          className="max-w-3xl"
        >
          <Link href="/#projects">
            <a
              className="flex justify-center items-center w-10 h-10 mb-6 rounded-full border border-gray-300 text-gray-600"
              aria-label="Retour"
            >
              <CgArrowLeft size={20} />
            </a>
          </Link>

          <div className="mb-12">
            <h1 className="mb-1 text-4xl font-bold">{project.title}</h1>
            <p className="text-xl text-gray-600">{project.subtitle}</p>
          </div>

          <p className="mb-12 text-lg leading-normal">{project.body}</p>

          <h2 className="mb-6 text-xl font-bold">Technologies</h2>

          <ul className="flex flex-wrap gap-2 mb-20">
            {project.technologies.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </ul>

          <div className="flex gap-4">
            <Button href={project.link} target="_blank" rel="noreferrer" icon={CgArrowTopRight}>
              {project.link.includes('youtu.be') ? 'Vidéo' : 'Visiter'}
            </Button>

            <Button variant="secondary" href={project.repo} target="_blank" rel="noreferrer">
              Github
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col gap-16 max-w-screen-xl mx-auto mt-24 lg:px-4">
        {project.images.map((image) => (
          <motion.div
            variants={slideReveal}
            initial="hidden"
            whileInView="visible"
            transition={spring2}
            viewport={{ once: true }}
            key={image}
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
