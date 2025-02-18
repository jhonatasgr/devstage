import { cn } from '@/components/utils/cn'

import { type VariantProps, cva } from 'class-variance-authority'

import { type ComponentProps, type ReactNode, forwardRef } from 'react'

type ButtonSize = 'default' | 'icon'

const buttonVariants = cva(
	[
		'flex items-center justify-between',
		'cursor-pointer font-semibold',
		'transition-colors duration-300',
		'bg-gray-500 text-blue',
		'hover:bg-blue hover:text-gray-900',
	],
	{
		variants: {
			size: {
				default: 'h-12 w-full px-5 rounded-xl',
				icon: 'p-1.5 rounded-md',
			} satisfies Record<ButtonSize, string>,
		},
		defaultVariants: {
			size: 'default',
		},
	}
)

interface ButtonBaseProps
	extends ComponentProps<'button'>,
		VariantProps<typeof buttonVariants> {
	children?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonBaseProps>(
	({ size, className, ...props }, ref) => {
		const variantClasses = buttonVariants({ size })

		return (
			<button ref={ref} className={cn(variantClasses, className)} {...props} />
		)
	}
)

Button.displayName = 'Button'

export { Button }
export type { ButtonBaseProps, ButtonSize }
