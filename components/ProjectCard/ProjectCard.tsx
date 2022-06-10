import Image from 'next/image'
import Link from 'next/link'

import { Project } from '@prisma/client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import Parallax from 'components/Parallax'

import { slideReveal, spring, spring2 } from 'lib/animations'

type Props = {
  project: Project
  toggleCursor: () => void
}

const ProjectCard = ({ project, toggleCursor }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    toggleCursor()
  }, [isHovered])

  return (
    <article className="relative md:odd:translate-y-32">
      <Parallax>
        <motion.div
          variants={slideReveal}
          initial="hidden"
          whileInView="visible"
          transition={spring2}
          viewport={{ once: true }}
        >
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
                <motion.div
                  animate={isHovered ? { scale: 1.1 } : ''}
                  transition={spring}
                >
                  <Image
                    src={`/projects/${project.slug}-thumb.png`}
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
        </motion.div>
      </Parallax>
    </article>
  )
}

export default ProjectCard
