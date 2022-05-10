import { motion } from 'framer-motion'
import { slideReveal, spring2 } from '../../lib/animations'
import { socialLinks } from '../Social/socialLinks'

const Contact = () => {
  return (
    <motion.section
      variants={slideReveal}
      initial="hidden"
      whileInView="visible"
      transition={spring2}
      className="container py-24"
      id="contact"
    >
      <h2 className="mb-16 text-3xl font-bold underline underline-offset-4 decoration-emerald-200">Contact</h2>

      <p className="max-w-3xl mb-16 text-xl leading-normal">
        Vous souhaitez en savoir plus sur moi, ou me poser une question ? N’hésitez pas à me contacter par mail ou
        message privé ! Vous pouvez aussi suivre mon travail sur mes réseaux.
      </p>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div>
          <h3 className="mb-8 text-lg">Email</h3>

          <a
            className="text-2xl font-bold underline underline-offset-4 decoration-emerald-200"
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
                className="text-2xl font-bold underline underline-offset-4 decoration-emerald-200"
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
    </motion.section>
  )
}

export default Contact
