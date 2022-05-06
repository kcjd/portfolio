import { Project } from '@prisma/client'
import Container from '../Container'
import ProjectCard from '../ProjectCard'
import Cursor from '../Cursor'
import useToggle from '../../hooks/useToggle'

type Props = {
  projects: Project[]
}

const ProjectList = ({ projects }: Props) => {
  const [isCursorVisible, toggleCursorVisible] = useToggle()

  return (
    <section className="pt-24 pb-24 md:pb-56" id="projects">
      <Container>
        <h2 className="mb-12 text-3xl font-bold underline underline-offset-4 decoration-4 decoration-emerald-200">
          Projets
        </h2>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} toggleCursor={toggleCursorVisible} />
          ))}
        </div>
      </Container>

      <Cursor isVisible={isCursorVisible} />
    </section>
  )
}

export default ProjectList
