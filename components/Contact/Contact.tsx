import Container from '../Container'
import { socialLinks } from '../SocialLinks/SocialLinks'

const Contact = () => {
  return (
    <section className="py-32 bg-orange-50" id="contact">
      <Container>
        <h2 className="mb-16 text-3xl font-bold underline underline-offset-4 decoration-4 decoration-orange-200">
          Contact
        </h2>

        <p className="max-w-3xl mb-16 text-xl leading-normal">
          Mon profil vous intéresse, vous avez des questions sur mon travail ? Je suis actuellement à la recherche d’un
          nouveau challenge professionnel, alors n’hésitez pas à me contacter !
        </p>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div>
            <h3 className="mb-8 text-lg">Email</h3>

            <a
              className="text-2xl font-bold underline underline-offset-4 decoration-orange-200"
              href="mailto:kevincj@outlook.fr"
            >
              kevincj@outlook.fr
            </a>
          </div>

          <div>
            <h3 className="mb-8 text-lg">Réseaux</h3>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              {socialLinks.map(({ href, label }) => (
                <a
                  key={href}
                  className="text-2xl font-bold underline underline-offset-4 decoration-orange-200"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
