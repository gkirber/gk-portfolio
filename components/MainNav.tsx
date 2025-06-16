import React from 'react'
import NavLinks from './NavLinks'

const MainNav: React.FC = () => {
	return (
		<nav>
			<NavLinks containerStyles='flex flex-col gap-6' />
		</nav>
	)
}

export default MainNav
