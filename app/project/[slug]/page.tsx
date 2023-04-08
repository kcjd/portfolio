import { notFound } from "next/navigation";
import { Metadata } from "next/types";
import ProjectNav from "components/ProjectNav";
import ProjectView from "components/ProjectView";
import { getProject, getProjects } from "lib/prisma";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProject(params.slug);

  return {
    title: `${project?.title} — Kévin Colonjard`,
    description: `${project?.title} - ${project?.subtitle}. Projet réalisé par Kévin Colonjard, développeur web à Lyon.`,
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({ params }: Props) {
  const projects = await getProjects();
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectView project={project} />
      <ProjectNav currentProject={project} projects={projects} />
    </>
  );
}
