import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'
import Container from '../Container'

const skills = [
  'HTML',
  'CSS',
  'Sass',
  'Tailwind CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Node.js',
  'Express',
  'Prisma',
  'MongoDB',
  'MySQL'
]

const About = () => {
  return (
    <section className="py-24" id="about">
      <Container>
        <h2 className="mb-24 text-3xl font-bold underline underline-offset-4 decoration-emerald-200">À Propos</h2>

        <div className="mb-24">
          <div className="flex flex-col md:flex md:flex-row-reverse justify-between md:items-center gap-12 mb-12">
            <div className="flex-none w-48 h-48 md:mb-0">
              <Image className="rounded-full" src="/me.webp" width={1440} height={1440} layout="responsive" alt="" />
            </div>

            <p className="max-w-3xl text-xl leading-normal">
              Hello ! ✌️ <br /> Je suis un développeur web créatif avec 4 ans d’expérience dans le domaine du design.
              Curieux et passionné, j’aime sortir de ma zone de confort et apprendre de nouvelles technologies.
            </p>
          </div>

          <Button icon="north_east">Voir mon CV</Button>
        </div>

        <h2 className="mb-4 text-xl font-bold">Mes compétences</h2>

        <ul className="flex flex-wrap gap-2 max-w-xl mb-20">
          {skills.map((skill) => (
            <li key={skill} className={`py-1 px-4 rounded-full border-2 border-emerald-200`}>
              {skill}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default About
