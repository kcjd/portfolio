import { Project } from '@prisma/client'
import { useEffect, useState } from 'react'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { spring } from '../../lib/animations'

type Props = {
  project: Project
  toggleCursor: () => void
}

const wrapper: Variants = {
  hover: {
    scale: 0.95,
    transition: spring
  }
}

const image: Variants = {
  hover: {
    scale: 1.1,
    transition: spring
  }
}

const ProjectCard = ({ project, toggleCursor }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    toggleCursor()
  }, [isHovered, toggleCursor])

  return (
    <article className="relative md:odd:translate-y-32">
      <Link href={`/project/${project.slug}`} passHref>
        <a className="block">
          <motion.div
            variants={wrapper}
            whileHover="hover"
            className={`bg-${project.color} overflow-hidden cursor-none`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div variants={image}>
              <Image src={`/${project.thumbnail}`} width={1500} height={1200} layout="responsive" alt="" />
            </motion.div>
          </motion.div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-lg text-gray-500">{project.subtitle}</p>
          </div>
        </a>
      </Link>
    </article>
  )
}

export default ProjectCard
