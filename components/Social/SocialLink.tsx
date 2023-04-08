import { IconType } from "react-icons";

interface Props {
  href: string;
  label: string;
  icon: IconType;
}

export default function SocialLink({ href, label, icon: Icon }: Props) {
  return (
    <a
      className="w-6 h-6"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <Icon size={24} />
    </a>
  );
}
