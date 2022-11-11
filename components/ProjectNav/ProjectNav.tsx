import { Project } from '@prisma/client'

import ProjectNavLink from './ProjectNavLink'

interface Props {
  projects: Project[]
  currentProject: Project
}

export default function ProjectNav({ projects, currentProject }: Props) {
  const index = projects.findIndex((p) => p.slug == currentProject.slug)
  const previousProject = index > 0 ? projects[index - 1] : null
  const nextProject = index < projects.length - 1 ? projects[index + 1] : null

  return (
    <section className="container flex flex-col md:flex-row gap-16 py-12">
      {previousProject && (
        <ProjectNavLink project={previousProject} isPrevious />
      )}
      {nextProject && <ProjectNavLink project={nextProject} isNext />}
    </section>
  )
}
