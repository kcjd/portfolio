import { Project } from '@prisma/client'
import ProjectCard from '../ProjectCard'
import Cursor from '../Cursor'
import useToggle from '../../hooks/useToggle'

type Props = {
  projects: Project[]
}

const ProjectList = ({ projects }: Props) => {
  const [isCursorVisible, toggleCursorVisible] = useToggle()

  return (
    <section className="container py-24 md:pt-12 md:pb-56" id="projects">
      <h2 className="sr-only">Projets</h2>

      <div className="grid md:grid-cols-2 gap-24">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} toggleCursor={toggleCursorVisible} />
        ))}
      </div>

      <Cursor isVisible={isCursorVisible} />
    </section>
  )
}

export default ProjectList
