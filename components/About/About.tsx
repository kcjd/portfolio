import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'
import Container from '../Container'

const About = () => {
  return (
    <section className="py-24" id="about">
      <Container>
        <div className="mb-24">
          <h2 className="mb-24 text-3xl font-bold underline underline-offset-4 decoration-4 decoration-emerald-200">
            À Propos
          </h2>

          <div className="flex flex-col md:flex md:flex-row-reverse justify-between md:items-center gap-12 mb-12">
            <div className="flex-none w-48 h-48 md:mb-0">
              <Image className="rounded-full" src="/me.webp" width={1440} height={1440} layout="responsive" alt="" />
            </div>

            <p className="max-w-3xl text-xl leading-normal">
              Hello ! ✌️ <br /> Je suis un développeur web créatif avec 4 ans d’expérience dans le domaine du design.
              Curieux et passionné, j’aime sortir de ma zone de confort et apprendre de nouvelles technologies.
            </p>
          </div>

          <Link href="/" passHref>
            <Button icon="north_east">Voir mon CV</Button>
          </Link>
        </div>

        <h3 className="mb-8 text-2xl font-bold">Mes compétences</h3>

        <ul className="grid md:grid-cols-2 gap-x-16 max-w-3xl text-lg">
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
