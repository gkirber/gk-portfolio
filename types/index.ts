// Navigation types
export interface NavLink {
	name: string
	path: string
}

// Component props
export interface NavLinksProps {
	containerStyles: string
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
