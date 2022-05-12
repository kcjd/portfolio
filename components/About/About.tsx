import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'
import Chip from '../Chip'
import Parallax from '../Parallax'

const About = () => {
  return (
    <section className="container py-24" id="about">
      <Parallax offset={40}>
        <h2 className="mb-24 text-3xl font-bold">À Propos</h2>
      </Parallax>

      <div className="flex flex-col md:flex md:flex-row-reverse justify-between gap-12 mb-16">
        <Parallax offset={120}>
          <div className="flex-none w-48 h-48 md:mb-0">
            <Image className="rounded-full" src="/me.webp" width={1440} height={1440} layout="responsive" alt="" />
          </div>
        </Parallax>

        <Parallax>
          <div className="max-w-3xl mb-16">
            <div className="flex flex-col gap-4 mb-12 text-xl leading-normal">
              <p>Hello ! ✌️</p>
              <p>
                Après un parcours enrichissant dans le design, durant lequel j’ai pu (re)découvrir l’univers du
                développement, j’ai décidé de suivre une formation chez OpenClassrooms, que j’ai validée avec succès !
              </p>
              <p>
                Véritable passionné de tech avec un goût pour le challenge, j’aime apporter des solutions simples et
                efficaces, avec une bonne expérience utilisateur.
              </p>
              <p>
                Je suis en quête d’un poste de développeur frontend à Lyon, alors si mon profil vous intéresse,
                n’hésitez pas à me contacter !
              </p>
            </div>

            <Link href="/#contact" passHref>
              <Button>Me contacter</Button>
            </Link>
          </div>
        </Parallax>
      </div>

      <Parallax>
        <h2 className="mb-6 text-xl font-bold">Mes compétences</h2>

        <ul className="flex flex-wrap gap-2 max-w-xl">
          <Chip>HTML</Chip>
          <Chip>CSS</Chip>
          <Chip>Sass</Chip>
          <Chip>JavaScript</Chip>
          <Chip>TypeScript</Chip>
          <Chip>React</Chip>
          <Chip>Next.js</Chip>
          <Chip>Redux</Chip>
          <Chip>Node.js</Chip>
          <Chip>Express</Chip>
          <Chip>Prisma</Chip>
          <Chip>MongoDB</Chip>
          <Chip>MySQL</Chip>
          <Chip>Git</Chip>
          <Chip>Figma</Chip>
        </ul>
      </Parallax>
    </section>
  )
}

export default About
