import Parallax from '../Parallax'
import { socialLinks } from '../Social/socialLinks'

const Contact = () => {
  return (
    <section className="container py-24" id="contact">
      <Parallax offset={40}>
        <h2 className="mb-16 text-3xl font-bold">Contact</h2>
      </Parallax>

      <Parallax>
        <p className="max-w-3xl mb-16 text-xl leading-normal">
          Vous souhaitez en savoir plus sur moi, ou me poser une question ? N’hésitez pas à me contacter par mail ou
          message privé ! Vous pouvez aussi suivre mon travail sur mes réseaux.
        </p>
      </Parallax>

      <Parallax>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div>
            <h3 className="mb-8 text-lg text-gray-600">Email</h3>

            <a
              className="text-2xl font-bold underline underline-offset-4 decoration-blue-400"
              href="mailto:kevincj@outlook.fr"
            >
              kevincj@outlook.fr
            </a>
          </div>

          <div>
            <h3 className="mb-8 text-lg text-gray-600">Réseaux</h3>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              {socialLinks.map(({ href, label }) => (
                <a
                  key={href}
                  className="text-2xl font-bold underline underline-offset-4 decoration-blue-400"
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
      </Parallax>
    </section>
  )
}

export default Contact
