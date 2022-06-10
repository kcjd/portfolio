import Image from 'next/image'
import Link from 'next/link'

import { Project } from '@prisma/client'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useState } from 'react'

import { spring } from 'lib/animations'

type ProjectNavProps = {
  previousProject?: Project
  nextProject?: Project
}

type ProjectNavLinkProps = {
  project: Project
  isPrevious?: boolean
  isNext?: boolean
}

const ProjectNavLink = ({
  project,
  isPrevious,
  isNext,
}: ProjectNavLinkProps) => {
  const [isHovered, setHovered] = useState(false)

  return (
    <Link href={`/project/${project.slug}`} passHref>
      <a
        className={clsx(
          'flex items-center gap-6',
          isNext && 'flex-row-reverse ml-auto'
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          animate={isHovered ? { x: isPrevious ? -8 : 8, y: -4 } : ''}
          transition={spring}
          className={`w-40 bg-${project.color}-50`}
        >
          <Image
            src={`/projects/${project.slug}-thumb.png`}
            width={1500}
            height={1200}
            layout="responsive"
            alt=""
          />
        </motion.div>
        <motion.div
          animate={isHovered ? { x: isPrevious ? 8 : -8 } : ''}
          transition={spring}
          className={clsx(isNext && 'text-right')}
        >
          <p className="text-lg text-gray-600">
            {isPrevious ? 'Précédent' : 'Suivant'}
          </p>
          <h3 className="text-2xl font-bold">{project.title}</h3>
        </motion.div>
      </a>
    </Link>
  )
}

const ProjectNav = ({ previousProject, nextProject }: ProjectNavProps) => {
  return (
    <section className="container flex flex-col md:flex-row gap-16 py-12">
      {previousProject && (
        <ProjectNavLink project={previousProject} isPrevious />
      )}
      {nextProject && <ProjectNavLink project={nextProject} isNext />}
    </section>
  )
}

export default ProjectNav
