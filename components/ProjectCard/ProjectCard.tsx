import { Project } from '@prisma/client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { spring } from '../../lib/animations'
import Parallax from '../Parallax'

type Props = {
  project: Project
  toggleCursor: () => void
}

const ProjectCard = ({ project, toggleCursor }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    toggleCursor()
  }, [isHovered, toggleCursor])

  return (
    <article className="relative md:odd:translate-y-32">
      <Parallax offset={120}>
        <Link href={`/project/${project.slug}`} passHref>
          <a
            className="block cursor-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              animate={isHovered ? { scale: 0.95 } : ''}
              transition={spring}
              className={`block bg-${project.color}-50 overflow-hidden`}
            >
              <motion.div animate={isHovered ? { scale: 1.1 } : ''} transition={spring}>
                <Image
                  src={`/projects/${project.thumbnail}`}
                  width={1500}
                  height={1200}
                  layout="responsive"
                  alt={project.title}
                />
              </motion.div>
            </motion.div>
          </a>
        </Link>

        <div className="mt-8">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-lg text-gray-600">{project.subtitle}</p>
        </div>
      </Parallax>
    </article>
  )
}

export default ProjectCard
