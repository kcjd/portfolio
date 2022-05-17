import { IconType } from 'react-icons'
import socialLinks from './socialLinks'

type Props = {
  href: string
  label: string
  icon: IconType
}

const SocialLink = ({ href, label, icon: Icon }: Props) => {
  return (
    <a className="w-6 h-6" href={href} target="_blank" rel="noreferrer" aria-label={label}>
      <Icon size={24} />
    </a>
  )
}

const Social = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ href, label, icon }) => (
        <SocialLink key={href} href={href} label={label} icon={icon} />
      ))}
    </div>
  )
}

export default Social
