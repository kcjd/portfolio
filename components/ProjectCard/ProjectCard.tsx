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
  const scrollTl = useRef<GSAPTimeline | null>(null)
  const hoverTl = useRef<GSAPTimeline | null>(null)

  const container = useRef(null)
  const thumbnailWrapper = useRef(null)
  const thumbnail = useRef(null)

  const isHover = useHover(thumbnailWrapper)

  useEffect(() => {
    scrollTl.current = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        end: 'top 50%'
      }
    })

    scrollTl.current.fromTo(
      container.current,
      {
        y: 200,
        scale: 0.9
      },
      {
        y: 0,
        scale: 1
      }
    )

    hoverTl.current = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.3,
        ease: 'sine.inOut'
      }
    })

    hoverTl.current.to(thumbnailWrapper.current, {
      scale: 0.95
    })

    hoverTl.current.to(
      thumbnail.current,
      {
        scale: 1.1
      },
      0
    )
  }, [])

  useEffect(() => {
    if (hoverTl.current) {
      isHover ? hoverTl.current.play() : hoverTl.current.reverse()
    }

    toggleCursor()
  }, [isHover, toggleCursor])

  return (
    <article className="relative md:odd:translate-y-32">
      <Link href={`/projects/${project.slug}`}>
        <a ref={container} className="block">
          <div
            ref={thumbnailWrapper}
            className="overflow-hidden cursor-none"
            style={{ backgroundColor: project.color }}
          >
            <div ref={thumbnail}>
              <Image src={`/${project.thumbnail}`} width={1500} height={1200} layout="responsive" alt="" />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-lg text-gray-500">{project.subtitle}</p>
          </div>
        </a>
      </Link>
    </article>
  )
}

export default ProjectCard
