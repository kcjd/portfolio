import Image from 'next/image'

export const socialLinks = [
  {
    href: 'https://github.com/kcjd',
    label: 'GitHub',
    icon: '/icon-github.svg'
  },
  {
    href: 'https://codepen.io/kevincj',
    label: 'CodePen',
    icon: '/icon-codepen.svg'
  },
  {
    href: 'https://www.linkedin.com/in/kevincj',
    label: 'LinkedIn',
    icon: '/icon-linkedin.svg'
  }
]

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ href, label, icon }) => (
        <a key={href} className="w-6 h-6" href={href} target="_blank" rel="noreferrer">
          <Image src={icon} width={1} height={1} layout="responsive" alt={label} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
