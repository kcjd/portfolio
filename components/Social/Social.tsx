import SocialLink from "./SocialLink";
import socialLinks from "./socialLinks";

export default function Social() {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ href, label, icon }) => (
        <SocialLink key={href} href={href} label={label} icon={icon} />
      ))}
    </div>
  );
}
