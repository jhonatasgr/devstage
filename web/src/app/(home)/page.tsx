import Image from 'next/image'

import logo from '@/assets/logo.svg'
import { Live, Pointer } from '@/components/ui/icons'
import { SubscriptionForm } from './components/subscription-form'

export default function Home() {
	return (
		<div className="flex min-h-dvh flex-col justify-center gap-16 ">
			<div className="flex w-full max-w-137.5 flex-col items-center gap-8 md:items-start">
				<Image src={logo} alt="Dev stage" width={138.5} height={30} />
				<h1 className="flex flex-col text-center font-heading font-medium text-4xl leading-none md:text-left md:text-7xl">
					<span className="text-blue">CodeCraft</span> Summit 2025
				</h1>
			</div>
			<div className="flex flex-col items-stretch gap-5 md:flex-row ">
				<div className=" flex-1 space-y-6 rounded-2xl border border-gray-600 bg-gray-700 p-8">
					<div className="flex items-center justify-between">
						<h2 className="font-heading font-semibold text-2xl text-gray-200">
							Sobre o evento
						</h2>
						<span className="flex items-center gap-2 font-semibold text-purple text-xs">
							<div className="relative flex ">
								<Live className="size-3 animate-ping" />
								<Pointer className="-translate-x-1/2 -translate-y-1/2 absolute top-3/5 left-[55%] mt-0.1 ml-0.1 size-4 " />
							</div>
							<span className="animate-pulse">AO VIVO</span>
						</span>
					</div>
					<div className="space-y-4 text-gray-300 text-sm leading-relaxed md:text-base">
						<p>
							Um evento feito por e para pessoas desenvolvedoras apaixonadas por
							criar soluções inovadoras e compartilhar conhecimento. Vamos
							mergulhar nas tendências mais recentes em desenvolvimento de
							software, arquitetura de sistemas e tecnologias emergentes, com
							palestras, workshops e hackathons.
						</p>
						<span>
							Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
						</span>
					</div>
				</div>
				<SubscriptionForm />
			</div>
		</div>
	)
}
