import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

export const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export const getProjects = () =>
  prisma.project.findMany({
    where: {
      published: {
        equals: true,
      },
    },
    orderBy: {
      id: 'desc',
    },
  })

export const getProject = (slug: string) =>
  prisma.project.findUnique({
    where: {
      slug,
    },
  })
