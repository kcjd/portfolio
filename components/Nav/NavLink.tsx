import Link from "next/link";
import { motion } from "framer-motion";
import { skewReveal, spring } from "lib/animations";

interface Props extends React.PropsWithChildren {
  href: string;
}

export default function NavLink({ href, children }: Props) {
  return (
    <motion.div
      variants={skewReveal}
      transition={spring}
      className="md:contents"
    >
      <Link
        href={href}
        className="relative text-4xl md:text-lg font-bold md:font-medium after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-current after:scale-x-0 hover:after:scale-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300"
      >
        {children}
      </Link>
    </motion.div>
  );
}
