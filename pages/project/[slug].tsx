import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { Project } from '@prisma/client'

import ProjectNav from 'components/ProjectNav'
import ProjectView from 'components/ProjectView'

import { getProject, getProjects } from 'lib/prisma'

interface Props {
  project: Project
  projects: Project[]
}

export default function ProjectPage({ project, projects }: Props) {
  return (
    <>
      <Head>
        <title>{project.title} — Kévin Colonjard</title>
        <meta
          name="description"
          content={`${project.title} - ${project.subtitle}. Projet réalisé par Kévin Colonjard, développeur web à Lyon.`}
        />
      </Head>
      <ProjectView project={project} />
      <ProjectNav projects={projects} currentProject={project} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getProjects()

  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = await getProject(params?.slug as string)
  const projects = await getProjects()

  return {
    props: {
      project,
      projects,
    },
  }
}
