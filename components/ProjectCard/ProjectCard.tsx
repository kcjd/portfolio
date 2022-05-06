import { Project } from '@prisma/client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import useHover from '../../hooks/useHover'

type Props = {
  project: Project
  toggleCursor: () => void
}

const ProjectCard = ({ project, toggleCursor }: Props) => {
  const containerRef = useRef(null)
  const thumbnailWrapperRef = useRef(null)
  const thumbnailRef = useRef(null)

  const isHover = useHover(thumbnailWrapperRef)

  useEffect(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        end: 'top 25%',
        toggleActions: 'restart none none reverse'
      },
      y: 200,
      scale: 0.9
    })
  }, [])

  useEffect(() => {
    gsap.to(thumbnailWrapperRef.current, {
      scale: isHover ? 0.95 : 1,
      duration: 0.3,
      ease: 'sine.inOut'
    })

    gsap.to(thumbnailRef.current, {
      scale: isHover ? 1.1 : 1,
      duration: 0.3,
      ease: 'sine.inOut'
    })
  }, [isHover])

  useEffect(() => {
    toggleCursor()
  }, [isHover, toggleCursor])

  return (
    <article className="relative md:odd:translate-y-32">
      <Link href={`/project/${project.slug}`}>
        <a ref={containerRef} className="block">
          <div ref={thumbnailWrapperRef} className={`bg-${project.color} overflow-hidden cursor-none`}>
            <div ref={thumbnailRef}>
              <Image src={`/${project.thumbnail}`} width={1500} height={1200} layout="responsive" alt="" />
            </div>
          </div>

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
