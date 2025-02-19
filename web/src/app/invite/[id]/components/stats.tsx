import { Click, Confirmed, Medal } from '@/components/ui/icons'
import {
	getSubscriberInviteClicks,
	getSubscriberInviteCount,
	getSubscriberRankingPosition,
} from '@/http/api'

export async function Stats({ subscriberId }: { subscriberId: string }) {
	const { count: accessCount } = await getSubscriberInviteClicks(subscriberId)
	const { count: confirmedCount } = await getSubscriberInviteCount(subscriberId)
	const { position } = await getSubscriberRankingPosition(subscriberId)

	return (
		<div className="grid gap-3 md:grid-cols-3">
			<div className="relative flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7">
				<span className=" font-heading font-semibold text-2xl text-gray-100 leading-none">
					{accessCount}
				</span>
				<span className="text-center text-gray-100 text-sm leading-none">
					Acessos ao link
				</span>

				<Click className="absolute top-3 left-3 size-5 text-purple" />
			</div>
			<div className="relative flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7">
				<span className=" font-heading font-semibold text-2xl text-gray-100 leading-none">
					{confirmedCount}
				</span>
				<span className="text-center text-gray-100 text-sm leading-none">
					Inscrições feitas
				</span>
				<Confirmed className="absolute top-3 left-3 size-5 text-purple" />
			</div>
			<div className="relative flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7">
				<span className=" font-heading font-semibold text-2xl text-gray-100 leading-none">
					{position ?? '-'}°
				</span>
				<span className="text-center text-gray-100 text-sm leading-none">
					Posição no ranking
				</span>
				<Medal className="absolute top-3 left-3 size-5 text-purple" />
			</div>
		</div>
	)
}
