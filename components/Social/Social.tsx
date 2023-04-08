import SocialLink from "components/Social/SocialLink";
import socialLinks from "components/Social/socialLinks";

export default function Social() {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ href, label, icon }) => (
        <SocialLink key={href} href={href} label={label} icon={icon} />
      ))}
    </div>
  );
}
