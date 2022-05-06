import Container from '../Container'
import SocialLinks from '../SocialLinks'

const Footer = () => {
  return (
    <footer className="py-16">
      <Container>
        <div className="flex justify-between items-center">
          <p className="md:text-lg">
            <span className="font-bold">Kévin Colonjard</span>
            <span className="text-gray-500"> | Portfolio 2022</span>
          </p>

          <SocialLinks />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
