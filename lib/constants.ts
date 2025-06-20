import {
	AnimationProps,
	ContactInfo,
	NavLink,
	PageMetadata,
	Service,
	SocialLink,
	Work,
} from '@/types'

// Navigation links
export const NAV_LINKS: NavLink[] = [
	{
		name: 'home',
		path: '/',
	},
	{
		name: 'about',
		path: '/about',
	},
	{
		name: 'services',
		path: '/services',
	},
	{
		name: 'work',
		path: '/work',
	},
	{
		name: 'contact',
		path: '/contact',
	},
]

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
	{
		icon: 'instagram',
		path: 'https://www.instagram.com/iurii_rebryk/',
		label: 'Instagram',
	},
	{
		icon: 'github',
		path: 'https://github.com/gkirber',
		label: 'GitHub',
	},
	{
		icon: 'linkedin',
		path: 'https://www.linkedin.com/in/iurii-rebryk',
		label: 'LinkedIn',
	},
]

// Contact information
export const CONTACT_INFO: ContactInfo = {
	email: 'george.kirber@gmail.com',
	phone: '+48 518 370 768',
	location: 'Poland',
	social: {
		linkedin: 'https://www.linkedin.com/in/iurii-rebryk',
		github: 'https://github.com/gkirber',
	},
}

// Services data
export const SERVICES: Service[] = [
	{
		id: 'frontend',
		title: 'Frontend Development',
		description:
			'Modern, responsive web applications using React, Next.js, and TypeScript',
		icon: '/assets/services/frontend.svg',
		features: [
			'React/Next.js',
			'TypeScript',
			'TailwindCSS',
			'Responsive Design',
		],
	},
	{
		id: 'backend',
		title: 'Backend Development',
		description:
			'Robust server-side solutions with Node.js and modern databases',
		icon: '/assets/services/backend.svg',
		features: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
	},
	{
		id: 'design',
		title: 'UI/UX Design',
		description:
			'Beautiful and intuitive user interfaces with modern design principles',
		icon: '/assets/services/design.svg',
		features: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
	},
	{
		id: 'seo',
		title: 'SEO Optimization',
		description: 'Improve your website visibility and search engine rankings',
		icon: '/assets/services/seo.svg',
		features: [
			'Technical SEO',
			'Content Optimization',
			'Analytics',
			'Performance',
		],
	},
	{
		id: 'video',
		title: 'Video Production',
		description: 'Professional video content for marketing and branding',
		icon: '/assets/services/video.svg',
		features: [
			'Video Editing',
			'Motion Graphics',
			'Color Grading',
			'Sound Design',
		],
	},
]

// Work/Projects data
export const WORK_PROJECTS: Work[] = [
	{
		id: 'project-1',
		title: 'E-commerce Platform',
		description: 'Modern e-commerce solution with React and Node.js',
		image: '/assets/work/thumb1.png',
		category: 'Web Development',
		technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
		link: 'https://example.com',
	},
	{
		id: 'project-2',
		title: 'Portfolio Website',
		description: 'Personal portfolio with modern design and animations',
		image: '/assets/work/thumb2.png',
		category: 'Web Design',
		technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
		link: 'https://example.com',
	},
	{
		id: 'project-3',
		title: 'Mobile App',
		description: 'Cross-platform mobile application',
		image: '/assets/work/thumb3.png',
		category: 'Mobile Development',
		technologies: ['React Native', 'TypeScript', 'Firebase'],
		link: 'https://example.com',
	},
	{
		id: 'project-4',
		title: 'Dashboard',
		description: 'Analytics dashboard with real-time data',
		image: '/assets/work/thumb4.png',
		category: 'Web Development',
		technologies: ['Vue.js', 'D3.js', 'Socket.io', 'PostgreSQL'],
		link: 'https://example.com',
	},
	{
		id: 'project-5',
		title: 'Landing Page',
		description: 'High-converting landing page for SaaS product',
		image: '/assets/work/thumb5.png',
		category: 'Web Design',
		technologies: ['HTML', 'CSS', 'JavaScript', 'A/B Testing'],
		link: 'https://example.com',
	},
]

// Animation variants
export const ANIMATION_VARIANTS: Record<string, AnimationProps> = {
	hidden: { initial: { opacity: 0, y: 20 } },
	visible: { animate: { opacity: 1, y: 0 } },
	exit: { exit: { opacity: 0, y: -20 } },
}

// Page metadata
export const PAGE_METADATA: Record<string, PageMetadata> = {
	home: {
		title: 'Iurii Rebryk - Web Developer & Designer',
		description:
			'Professional web developer and designer creating modern, user-friendly websites and applications.',
		keywords: [
			'web developer',
			'web designer',
			'React',
			'Next.js',
			'TypeScript',
		],
	},
	about: {
		title: 'About - Iurii Rebryk',
		description:
			'Learn more about Iurii Rebryk, a passionate web developer and designer.',
		keywords: ['about', 'experience', 'skills', 'web development'],
	},
	services: {
		title: 'Services - Iurii Rebryk',
		description:
			'Comprehensive web development and design services including frontend, backend, and UI/UX design.',
		keywords: ['services', 'web development', 'design', 'frontend', 'backend'],
	},
	work: {
		title: 'Work - Iurii Rebryk',
		description:
			'Portfolio of web development and design projects showcasing modern solutions.',
		keywords: ['portfolio', 'projects', 'work', 'web development'],
	},
	contact: {
		title: 'Contact - Iurii Rebryk',
		description:
			'Get in touch with Iurii Rebryk for your next web development or design project.',
		keywords: ['contact', 'hire', 'web developer', 'web designer'],
	},
}
