import { GetStaticProps } from "next";
import Head from "next/head";
import { Project } from "@prisma/client";
import About from "components/About";
import Contact from "components/Contact";
import Hero from "components/Hero";
import ProjectList from "components/ProjectList";
import { getProjects } from "lib/prisma";

interface Props {
  projects: Project[];
}

export default function HomePage({ projects }: Props) {
  return (
    <>
      <Head>
        <title>Kévin Colonjard — Développeur web</title>
        <meta
          name="description"
          content="Portfolio de Kévin Colonjard, développeur web à Lyon, spécialisé en JavaScript / React."
        />
      </Head>
      <Hero />
      <ProjectList projects={projects} />
      <About />
      <Contact />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
};
