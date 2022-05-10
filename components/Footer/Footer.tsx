import Social from '../Social'

const Footer = () => {
  return (
    <footer className="container flex flex-col md:flex-row justify-between items-center gap-4 mt-20 py-20 border-t">
      <p className="text-lg">
        <span className="font-bold">Kévin Colonjard</span>
        <span className="text-gray-500"> | Portfolio 2022</span>
      </p>

      <Social />
    </footer>
  )
}

export default Footer
