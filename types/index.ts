// Navigation types
export interface NavLink {
	name: string
	path: string
}

// Component props
export interface NavLinksProps {
	containerStyles: string
}

// Socials component types
export interface SocialsProps {
	containerStyles: string
	iconStyles: string
}

// Blob component types
export interface BlobProps {
	containerStyles: string
}

// Logo component types (може бути розширено в майбутньому)
export interface LogoProps {
	className?: string
}

// Header component types (може бути розширено в майбутньому)
export interface HeaderProps {
	className?: string
}

// Pattern component types
export interface PatternProps {
	className?: string
}

// Gradient component types
export interface GradientProps {
	className?: string
}

// Rectangle component types
export interface RectangleProps {
	className?: string
}

// RectanglesTransition component types
export interface RectanglesTransitionProps {
	className?: string
}

// PageTransition component types
export interface PageTransitionProps {
	children: React.ReactNode
	className?: string
}

// Event handler types
export interface EventHandlers {
	handleClick?: (event: React.MouseEvent<HTMLElement>) => void
	handleKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void
	handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
	handleChange?: (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void
}

// Service types
export interface Service {
	id: string
	title: string
	description: string
	icon: string
	features: string[]
}

// Work/Project types
export interface Work {
	id: string
	title: string
	description: string
	image: string
	category: string
	technologies: string[]
	link?: string
}

// Contact information types
export interface ContactInfo {
	email: string
	phone?: string
	location?: string
	social: {
		linkedin?: string
		github?: string
		twitter?: string
	}
}

// Metadata types
export interface PageMetadata {
	title: string
	description: string
	keywords?: string[]
}

// Animation types
export interface AnimationProps {
	initial?: object
	animate?: object
	exit?: object
	transition?: object
}

// Theme types
export interface Theme {
	mode: 'light' | 'dark'
	primary: string
	secondary: string
	accent: string
	background: string
	text: string
}

// SEO types
export interface SEOProps {
	title: string
	description: string
	keywords?: string[]
	ogImage?: string
	canonical?: string
}

// Loading states
export interface LoadingState {
	isLoading: boolean
	error?: string | null
}

// API Response types
export interface ApiResponse<T> {
	data: T
	success: boolean
	message?: string
	error?: string
}

// Utility types
export type ClassValue = string | number | boolean | undefined | null
export type ClassArray = ClassValue[]
export type ClassObject = { [id: string]: any }
export type ClassInput = ClassValue | ClassArray | ClassObject

// Image types
export interface ImageProps {
	src: string
	alt: string
	width?: number
	height?: number
	className?: string
}

// Button types
export interface ButtonProps extends EventHandlers {
	children: React.ReactNode
	variant?: 'primary' | 'secondary' | 'outline'
	size?: 'sm' | 'md' | 'lg'
	disabled?: boolean
	className?: string
	type?: 'button' | 'submit' | 'reset'
}

// Form types
export interface FormField {
	name: string
	label: string
	type: 'text' | 'email' | 'textarea' | 'tel'
	required?: boolean
	placeholder?: string
	validation?: {
		pattern?: RegExp
		minLength?: number
		maxLength?: number
	}
}

export interface FormProps {
	fields: FormField[]
	onSubmit: (data: Record<string, string>) => void
	submitText?: string
	className?: string
}

// Skills component types
export interface Skill {
	icon: React.ReactNode
	name: string
}

export interface SkillsProps {
	className?: string
}

// Stats component types
export interface Stat {
	value: number
	label: string
	suffix?: string
}

export interface StatsProps {
	className?: string
}

// Journey/Experience types
export interface JourneyItem {
	years: string
	role: string
	institution: string
}

export interface JourneyProps {
	className?: string
}

// Testimonial types
export interface TestimonialItem {
	message: string
	name: string
}

export interface TestimonialProps {
	className?: string
}

// Social links types
export interface SocialLink {
	icon: string
	path: string
	label: string
}

// CountUp component props
export interface CountUpProps {
	end: number
	duration?: number
	delay?: number
	className?: string
}
