import { cn } from '@/lib/utils'
import { ButtonProps } from '@/types'
import React from 'react'

const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'primary',
	size = 'md',
	disabled = false,
	className,
	type = 'button',
	handleClick,
	handleKeyDown,
	...props
}) => {
	const baseStyles =
		'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background'

	const variants = {
		primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
		secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
		outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
	}

	const sizes = {
		sm: 'h-9 px-3 text-sm',
		md: 'h-10 py-2 px-4',
		lg: 'h-11 px-8',
	}

	const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (handleClick) {
			handleClick(event)
		}
	}

	const handleButtonKeyDown = (
		event: React.KeyboardEvent<HTMLButtonElement>
	) => {
		if (handleKeyDown) {
			handleKeyDown(event)
		}
	}

	return (
		<button
			type={type}
			className={cn(baseStyles, variants[variant], sizes[size], className)}
			disabled={disabled}
			onClick={handleButtonClick}
			onKeyDown={handleButtonKeyDown}
			tabIndex={0}
			aria-label={typeof children === 'string' ? children : 'Button'}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
