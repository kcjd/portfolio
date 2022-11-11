import Image from 'next/image'
import Link from 'next/link'

import { Project } from '@prisma/client'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useState } from 'react'

import { spring } from 'lib/animations'

interface Props {
  project: Project
  isPrevious?: boolean
  isNext?: boolean
}

export default function ProjectNavLink({ project, isPrevious, isNext }: Props) {
  const [isHovered, setHovered] = useState(false)

  return (
    <Link
      href={`/project/${project.slug}`}
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
    </Link>
  )
}
