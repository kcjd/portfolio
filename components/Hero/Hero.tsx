import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import Container from '../Container'
import Link from 'next/link'
import useHover from '../../hooks/useHover'

const Hero = () => {
  const tl = useRef<GSAPTimeline>()
  const container = useRef(null)
  const heading = useRef(null)
  const badge = useRef(null)
  const badgeBg = useRef(null)
  const badgeText = useRef(null)
  const isHover = useHover(badge)

  useEffect(() => {
    tl.current = gsap
      .timeline({
        delay: 0.5,
        defaults: {
          ease: 'power3.out'
        }
      })
      .from(container.current, {
        scaleY: 0,
        skewY: -10,
        duration: 0.8
      })
      .from(heading.current, {
        x: -64,
        opacity: 0,
        duration: 0.6
      })
      .from(badge.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.4
      })
      .to(badgeText.current, {
        rotate: 360,
        duration: 18,
        repeat: -1,
        ease: 'none'
      })
  }, [])

  useEffect(() => {
    gsap.to(badgeBg.current, {
      scale: isHover ? 1 : 0,
      opacity: isHover ? 1 : 0,
      duration: 0.4,
      ease: 'power4.out'
    })
  }, [isHover])

  return (
    <section ref={container} className="bg-blue-50">
      <Container>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start lg:items-center gap-12 lg:gap-40 lg:min-h-screen py-48">
          <div ref={heading}>
            <p className="mb-4 text-gray-600 text-xl">Kévin Colonjard</p>

            <h1 className="max-w-5xl text-6xl lg:text-9xl font-bold leading-tight lg:leading-none">
              Développeur <span className="underline underline-offset-2 decoration-emerald-200">Frontend</span> à Lyon
            </h1>
          </div>

          <Link href="#projects">
            <a ref={badge} className="relative flex justify-center items-center w-32 h-32">
              <div ref={badgeBg} className="absolute inset-0 -z-10 rounded-full bg-emerald-200" />
              <span className="material-symbols-sharp">south</span>
              <div ref={badgeText} className="absolute inset-2">
                <Image src="/hero-badge.svg" width={1} height={1} alt="" layout="responsive" />
              </div>
            </a>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default Hero
