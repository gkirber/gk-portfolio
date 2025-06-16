import { cn } from '@/lib/utils'
import { ImageProps } from '@/types'
import NextImage from 'next/image'
import React from 'react'

const Image: React.FC<ImageProps> = ({
	src,
	alt,
	width,
	height,
	className,
	...props
}) => {
	return (
		<NextImage
			src={src}
			alt={alt}
			width={width || 500}
			height={height || 300}
			className={cn('object-cover', className)}
			{...props}
		/>
	)
}

export default Image
