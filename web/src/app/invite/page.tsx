import Image from 'next/image'

import { InviteLinkInput } from './components/invite-link-input'
import { Ranking } from './components/ranking'
import { Stats } from './components/stats'

import logo from '@/assets/logo.svg'

export default function InvitePage() {
	const inviteLink = 'https://devstage.com/123131313123123'
	return (
		<div className="flex min-h-dvh flex-col items-center justify-between gap-16 md:flex-row">
			<div className="flex w-full max-w-137.5 flex-col justify-center gap-10">
				<Image src={logo} alt="Dev stage" width={138.5} height={30} />

				<div className="space-y-2">
					<h1 className="font-heading font-semibold text-4xl text-gray-100 leading-none">
						Inscrição confirmada!
					</h1>
					<p className="text-gray-300 text-sm leading-relaxed">
						Para entrar no evento, acesse o link enviado para seu e-mail.
					</p>
				</div>

				<div className="space-y-6">
					<div className="space-y-3">
						<h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
							Indique e Ganhe
						</h2>
						<p className="text-gray-300 text-sm leading-relaxed">
							Convide mais pessoas para o evento e concorra a prêmios
							exclusivos! É só compartilhar o link abaixo e acompanhar as
							inscrições:
						</p>
					</div>

					<InviteLinkInput link={inviteLink} />

					<Stats />
				</div>
			</div>
			<Ranking />
		</div>
	)
}
