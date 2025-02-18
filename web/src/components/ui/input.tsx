import type { ComponentProps } from 'react'

import { forwardRef } from 'react'

interface InputRootProps extends ComponentProps<'div'> {
	error?: boolean
}

interface InputIconProps extends ComponentProps<'span'> {
	side?: 'left' | 'right'
}

interface InputFieldProps extends ComponentProps<'input'> {}

const InputRoot = forwardRef<HTMLInputElement, InputRootProps>(
	({ error = false, ...props }, ref) => {
		return (
			<div
				ref={ref}
				data-error={error}
				className="group flex items-center gap-2 rounded-xl border border-gray-600 bg-gray-800 p-2 transition-colors duration-300 focus-within:border-gray-100 data-[error=true]:border-danger"
				{...props}
			/>
		)
	}
)

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
	({ ...props }, ref) => {
		return (
			<input
				ref={ref}
				className="peer order-2 flex-1 bg-transparent outline-0 placeholder:text-gray-400"
				{...props}
			/>
		)
	}
)

const InputIcon = forwardRef<HTMLSpanElement, InputIconProps>(
	({ side = 'left', ...props }, ref) => {
		return (
			<span
				ref={ref}
				data-side={side}
				className="text-gray-400 transition-colors duration-300 group-focus-within:text-gray-100 data-[side=left]:order-1 data-[side=right]:order-3 group-data-[error=true]:text-danger peer-not-placeholder-shown:group-data-[error=false]:text-gray-100"
				{...props}
			/>
		)
	}
)

InputIcon.displayName = 'InputIcon'
InputField.displayName = 'InputField'
InputRoot.displayName = 'InputRoot'
export { InputField, InputIcon, InputRoot }
