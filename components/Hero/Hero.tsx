import Container from '../Container'

const Hero = () => {
  return (
    <section className="relative flex items-center min-h-[75vh] origin-top">
      <Container>
        <h1 className="max-w-2xl text-5xl md:text-6xl font-semibold leading-snug md:leading-tight">
          Kévin Colonjard Développeur Frontend à Lyon
        </h1>

        <div className="flex justify-end items-center mt-12 text-lg">
          Projets sélectionnés <span className="material-symbols-sharp ml-2 text-base">south</span>
        </div>
      </Container>

      <div className="absolute -z-10 inset-0 bg-mesh-gradient bg-no-repeat bg-cover opacity-50" />
    </section>
  )
}

export default Hero
