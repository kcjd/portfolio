import Container from '../Container'
import SocialLinks from '../SocialLinks'

const Footer = () => {
  return (
    <footer className="py-20">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-lg">
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
