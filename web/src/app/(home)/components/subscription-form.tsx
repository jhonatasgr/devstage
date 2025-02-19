'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, User } from '@/components/ui/icons'
import { InputField, InputIcon, InputRoot } from '@/components/ui/input'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { subscribeToEvent } from '@/http/api'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

const subscribeSchema = z.object({
	name: z.string().min(2, { message: 'Nome completo é obrigatório' }),
	email: z.string().email({ message: 'E-mail inválido' }),
})

type SubscribeSchema = z.infer<typeof subscribeSchema>

export function SubscriptionForm() {
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SubscribeSchema>({
		resolver: zodResolver(subscribeSchema),
	})

	const searchParams = useSearchParams()

	const onSubscribe = async ({ name, email }: SubscribeSchema) => {
		const { subscriberId } = await subscribeToEvent({
			name,
			email,
			referrer: searchParams.get('referrer'),
		})

		router.push(`/invite/${subscriberId}`)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubscribe)}
			className="w-full space-y-6 rounded-2xl border border-gray-600 bg-gray-700 p-8 md:max-w-110 "
		>
			<h2 className="font-heading font-semibold text-2xl text-gray-200">
				Inscrição
			</h2>
			<div className="space-y-3 ">
				<div className="space-y-2">
					<InputRoot>
						<InputIcon>
							<User />
						</InputIcon>
						<InputField
							type="text"
							placeholder="Nome completo"
							{...register('name')}
						/>
					</InputRoot>
					{errors.name && (
						<p className="font-semibold text-danger text-xs">
							{errors.name.message}
						</p>
					)}
				</div>
				<div className="space-y-2">
					<InputRoot>
						<InputIcon>
							<Mail />
						</InputIcon>
						<InputField
							type="email"
							placeholder="E-mail"
							{...register('email')}
						/>
					</InputRoot>
					{errors.email && (
						<p className="font-semibold text-danger text-xs">
							{errors.email.message}
						</p>
					)}
				</div>
			</div>
			<Button type="submit">
				Inscreva-se <ArrowRight className="size-4" />
			</Button>
		</form>
	)
}
