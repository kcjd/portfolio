import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export function getProjects() {
  return prisma.project.findMany({
    where: {
      published: {
        equals: true,
      },
    },
    orderBy: {
      id: "desc",
    },
  });
}

export function getProject(slug: string) {
  return prisma.project.findUnique({
    where: {
      slug,
    },
  });
}
