import Image from 'next/image'
import Link from 'next/link'

import { Project } from '@prisma/client'
import { motion } from 'framer-motion'
import { CgArrowLeft, CgArrowTopRight } from 'react-icons/cg'

import Button from 'components/Button'
import Chip from 'components/Chip'

import { slideReveal, spring2 } from 'lib/animations'

type Props = {
  project: Project
}

const ProjectView = ({ project }: Props) => {
  return (
    <section className="pt-40 pb-24">
      <div className="container">
        <motion.div
          key={project.slug}
          variants={slideReveal}
          initial="hidden"
          animate="visible"
          transition={spring2}
          className="max-w-3xl"
        >
          <Link href="/">
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
            {project.link && (
              <Button
                href={project.link}
                target="_blank"
                rel="noreferrer"
                icon={CgArrowTopRight}
              >
                Visiter
              </Button>
            )}
            {project.youtube && (
              <Button
                href={project.youtube}
                target="_blank"
                rel="noreferrer"
                icon={CgArrowTopRight}
              >
                Vidéo
              </Button>
            )}
            {project.repo && (
              <Button
                variant="secondary"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </Button>
            )}
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col gap-16 max-w-screen-xl mx-auto mt-24 lg:px-4">
        {[...Array(3)].map((_, i) => (
          <motion.div
            variants={slideReveal}
            initial="hidden"
            whileInView="visible"
            transition={spring2}
            viewport={{ once: true }}
            key={project.slug + i}
            className="bg-gray-900"
          >
            <Image
              src={`/projects/${project.slug}-0${i + 1}.png`}
              width={1500}
              height={1200}
              layout="responsive"
              alt=""
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ProjectView
