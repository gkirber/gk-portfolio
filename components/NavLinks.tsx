'use client'

import { NavLinksProps } from '@/types'
import { NAV_LINKS } from '@/lib/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLinks: React.FC<NavLinksProps> = ({ containerStyles }) => {
	const pathname = usePathname()

	return (
		<ul className={containerStyles}>
			{NAV_LINKS.map((link, index) => {
				// determine if the current link matches the active route
				const isActive = pathname === link.path
				// calculate the number of characters in the link name
				const charLength = link.name.length
				// set the line with based on character length
				const lineWidth = charLength > 5 ? 'after:w-[120%]' : 'after:w-[90%]'
				console.log(charLength)
				return (
					<Link
						href={link.path}
						key={index}
						className={`relative text-lg uppercase text-white ${
							isActive &&
							`after:content-[''] after:block after:absolute after:left-0 after:top-1/2 ${lineWidth} after:h-[4px] after:bg-accent after:-translate-y-1/2 after:z-0`
						}`}
					>
						<span className='relative z-10'>{link.name}</span>
					</Link>
				)
			})}
		</ul>
	)
}

export default NavLinks
