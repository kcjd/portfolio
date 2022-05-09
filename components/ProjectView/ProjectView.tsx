import { Project } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'
import Container from '../Container'

type Props = {
  project: Project
}

const ProjectView = ({ project }: Props) => {
  return (
    <section className="pt-60 pb-24">
      <Container>
        <div className="max-w-3xl">
          <Link href="/#projects">
            <a className="flex justify-center items-center w-8 h-8 mb-6 rounded-full border border-gray-500 text-gray-500 ">
              <span className="material-symbols-sharp text-base">west</span>
            </a>
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="text-xl text-gray-500">{project.subtitle}</p>
          </div>

          <p className="mb-12 text-xl leading-normal">{project.body}</p>

          <h2 className="mb-4 text-xl font-bold">Technologies</h2>

          <ul className="flex flex-wrap gap-2 mb-20">
            {project.technologies.map((tech) => (
              <li key={tech} className={`py-1 px-4 rounded-full border-2 border-emerald-200`}>
                {tech}
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <Button as="a" href={project.link} target="_blank" rel="noreferrer" icon="north_east">
              Voir le projet
            </Button>

            <Button variant="secondary" as="a" href={project.repo} target="_blank" rel="noreferrer">
              Github
            </Button>
          </div>
        </div>
      </Container>

      <div className="flex flex-col gap-14 max-w-screen-xl mx-auto mt-24 lg:px-4">
        {project.images.map((image) => (
          <div key={image} className="bg-gray-900">
            <Image src={`/projects/${image}`} width={1500} height={1200} layout="responsive" alt="" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectView
