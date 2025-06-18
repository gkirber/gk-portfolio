import { SOCIAL_LINKS } from '@/lib/constants'
import { SocialsProps } from '@/types'
import {
	BiLogoGithub,
	BiLogoInstagramAlt,
	BiLogoLinkedin,
} from 'react-icons/bi'

const socialIcons = {
	instagram: <BiLogoInstagramAlt />,
	github: <BiLogoGithub />,
	linkedin: <BiLogoLinkedin />,
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
	return (
		<div className={containerStyles}>
			{SOCIAL_LINKS.map((item, index) => {
				const IconComponent = socialIcons[item.icon as keyof typeof socialIcons]
				return (
					<a
						key={index}
						href={item.path}
						target='_blank'
						rel='noopener noreferrer'
						className={iconStyles}
						aria-label={item.label}
					>
						{IconComponent}
					</a>
				)
			})}
		</div>
	)
}

export default Socials
