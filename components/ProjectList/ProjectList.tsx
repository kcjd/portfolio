"use client";

import { Project } from "@prisma/client";
import ProjectCard from "components/ProjectCard";
import ProjectListCursor from "components/ProjectList/ProjectListCursor";
import useToggle from "hooks/useToggle";

interface Props {
  projects: Project[];
}

export default function ProjectList({ projects }: Props) {
  const [isCursorVisible, toggleCursorVisible] = useToggle();

  return (
    <section className="container py-24 md:pt-12 md:pb-56" id="projects">
      <h2 className="sr-only">Projets</h2>
      <div className="grid md:grid-cols-2 gap-24">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            toggleCursor={toggleCursorVisible}
          />
        ))}
      </div>
      <ProjectListCursor isVisible={isCursorVisible} />
    </section>
  );
}
