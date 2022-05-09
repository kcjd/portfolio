import { useState } from 'react'
import { Project } from '@prisma/client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { spring } from '../../lib/animations'
import Container from '../Container'

type Props = {
  previousProject?: Project
  nextProject?: Project
}

const ProjectNav = ({ previousProject, nextProject }: Props) => {
  const [isPreviousHovered, setIsPreviousHovered] = useState(false)
  const [isNextHovered, setIsNextHovered] = useState(false)

  return (
    <section className="py-32 bg-blue-50">
      <Container>
        <div className="flex flex-col md:flex-row gap-16">
          {previousProject && (
            <Link href={`/project/${previousProject.slug}`} passHref>
              <a
                className="flex items-center gap-6"
                onMouseEnter={() => setIsPreviousHovered(true)}
                onMouseLeave={() => setIsPreviousHovered(false)}
              >
                <motion.div
                  animate={isPreviousHovered ? { x: -8, y: -4 } : ''}
                  transition={spring}
                  className="w-40 bg-white"
                >
                  <Image
                    src={`/projects/${previousProject.thumbnail}`}
                    width={1500}
                    height={1200}
                    layout="responsive"
                    alt=""
                  />
                </motion.div>

                <motion.div animate={isPreviousHovered ? { x: 8 } : ''} transition={spring}>
                  <p className="text-lg text-gray-600">Projet précédent</p>
                  <p className="text-2xl font-bold">{previousProject.title}</p>
                </motion.div>
              </a>
            </Link>
          )}

          {nextProject && (
            <Link href={`/project/${nextProject.slug}`} passHref>
              <a
                className="flex items-center gap-6 ml-auto"
                onMouseEnter={() => setIsNextHovered(true)}
                onMouseLeave={() => setIsNextHovered(false)}
              >
                <motion.div animate={isNextHovered ? { x: -8 } : ''} transition={spring} className="text-right">
                  <p className="text-lg text-gray-600">Projet suivant</p>
                  <p className="text-2xl font-bold">{nextProject.title}</p>
                </motion.div>

                <motion.div
                  animate={isNextHovered ? { x: 8, y: -4 } : ''}
                  transition={spring}
                  className="w-40 bg-white"
                >
                  <Image
                    src={`/projects/${nextProject.thumbnail}`}
                    width={1500}
                    height={1200}
                    layout="responsive"
                    alt=""
                  />
                </motion.div>
              </a>
            </Link>
          )}
        </div>
      </Container>
    </section>
  )
}

export default ProjectNav
