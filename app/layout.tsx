import type { Metadata } from 'next'
import { Sometype_Mono } from 'next/font/google'
import React from 'react'
import './globals.css'
// components
import MainNav from '@/components/MainNav'
import PageTransition from '@/components/PageTransition'
import RectanglesTransition from '@/components/RectanglesTransition'
import Gradient from '@/components/Gradient'
import Header from '@/components/Header'

const sometypeMono = Sometype_Mono({
	variable: '--font-sometype-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Iurii Rebryk - Portfolio',
	description: 'Frontend Developer',
}

interface RootLayoutProps {
	children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
	return (
		<html lang='en'>
			<body
				className={`${sometypeMono.variable} antialiased overflow-hidden relative`}
			>
				<Gradient />
				<RectanglesTransition />
				<PageTransition>
					<div className='flex'>
						{/* main nav */}
						<div className='hidden 2xl:flex w-[285px] h-screen bg-secondary'>
							<MainNav />
						</div>
						<div className='w-full max-w-[1130px] px-[15px] mx-auto'>
							<Header />
							<div>{children}</div>
						</div>
					</div>
				</PageTransition>
			</body>
		</html>
	)
}

export default RootLayout
