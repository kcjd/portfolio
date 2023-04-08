import Link, { LinkProps } from "next/link";
import clsx from "clsx";
import { IconType } from "react-icons";

interface Props extends LinkProps, React.PropsWithChildren {
  variant?: "primary" | "secondary";
  icon?: IconType;
}

export default function Button({
  variant = "primary",
  icon: Icon,
  children,
  ...props
}: Props) {
  return (
    <Link
      className={clsx(
        "inline-flex items-center gap-2 h-16 px-8 rounded-md font-bold uppercase tracking-wide cursor-pointer",
        variant === "primary" && "bg-gray-900 text-white",
        variant === "secondary" && "border border-gray-900 text-gray-900"
      )}
      {...props}
    >
      {children}
      {Icon && <Icon size={24} />}
    </Link>
  );
}
