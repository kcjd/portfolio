import Link from "next/link";
import Nav from "components/Nav";

export default function Header() {
  return (
    <header className="container flex justify-between items-center py-6">
      <Link href="/" className="font-bold text-lg">
        Kévin Colonjard
      </Link>
      <Nav />
    </header>
  );
}
