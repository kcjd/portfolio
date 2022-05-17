import { Project } from '@prisma/client'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import ProjectNav from '../../components/ProjectNav'
import ProjectView from '../../components/ProjectView'
import { prisma } from '../../lib/prisma'

type Props = {
  project: Project
  previousProject?: Project
  nextProject?: Project
}

const Project: NextPage<Props> = ({ project, previousProject, nextProject }) => {
  return (
    <>
      <Head>
        <title>{project.title} | Kévin Colonjard</title>
        <meta
          name="description"
          content={`${project.title} - ${project.subtitle}. Projet réalisé par Kévin Colonjard, développeur web à Lyon.`}
        />
      </Head>

      <ProjectView project={project} />

      <ProjectNav previousProject={previousProject} nextProject={nextProject} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await prisma.project.findMany({
    where: {
      published: {
        equals: true
      }
    },
    select: {
      slug: true
    }
  })

  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = await prisma.project.findUnique({
    where: {
      slug: params?.slug as string
    }
  })

  const projects = await prisma.project.findMany({
    where: {
      published: {
        equals: true
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  const index = projects.findIndex((project) => project.slug === params?.slug)
  const previous = index > 0 ? projects[index - 1] : null
  const next = index < projects.length - 1 ? projects[index + 1] : null

  return {
    props: {
      project: {
        ...project,
        createdAt: project?.createdAt.toISOString()
      },
      previousProject: previous
        ? {
            ...previous,
            createdAt: previous.createdAt.toISOString()
          }
        : null,
      nextProject: next
        ? {
            ...next,
            createdAt: next.createdAt.toISOString()
          }
        : null
    }
  }
}

export default Project
