import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'
import Container from '../Container'

const About = () => {
  return (
    <section className="py-24" id="about">
      <Container>
        <h2 className="mb-24 py-4 border-t-2 border-current text-3xl font-semibold">À Propos</h2>

        <div className="md:flex flex-row-reverse justify-between items-center mb-12">
          <div className="w-48 h-48 mb-12 md:mb-0">
            <Image className="rounded-full" src="/me.webp" width={1440} height={1440} layout="responsive" alt="" />
          </div>

          <div className="max-w-2xl">
            <p className="text-2xl leading-normal">
              Je suis un développeur web créatif et sensible à l’UI / UX grâce à mon expérience de 4 ans dans le domaine
              du design. Curieux et passionné, je cherche toujours à m’améliorer et acquérir de nouvelles connaissances.
            </p>
          </div>
        </div>

        <Link href="/" passHref>
          <Button>Voir mon CV</Button>
        </Link>

        <h3 className="mt-24 text-2xl font-semibold">Mes compétences</h3>

        <ul className="grid md:grid-cols-2 gap-x-24 text-xl">
          <li className="py-6 border-b">HTML</li>
          <li className="py-6 border-b">CSS</li>
          <li className="py-6 border-b">JavaScript</li>
          <li className="py-6 border-b">React</li>
          <li className="py-6 border-b">NodeJS</li>
          <li className="py-6 border-b">Express</li>
          <li className="py-6 border-b">MongoDB</li>
          <li className="py-6 border-b">MySQL</li>
        </ul>
      </Container>
    </section>
  )
}

export default About
