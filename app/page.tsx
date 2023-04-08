import About from "components/About";
import Contact from "components/Contact";
import Hero from "components/Hero";
import ProjectList from "components/ProjectList";
import { getProjects } from "lib/prisma";

export default async function Page() {
  const projects = await getProjects();

  return (
    <>
      <Hero />
      <ProjectList projects={projects} />
      <About />
      <Contact />
    </>
  );
}
