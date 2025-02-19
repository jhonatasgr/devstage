import Image from 'next/image'

import cooper from '@/assets/medal-cooper.svg'
import gold from '@/assets/medal-gold.svg'
import silver from '@/assets/medal-silver.svg'

import { getRanking } from '@/http/api'

export async function Ranking() {
	const { ranking } = await getRanking()

	const medals = [
		{ type: gold, name: 'gold' },
		{ type: silver, name: 'silver' },
		{ type: cooper, name: 'cooper' },
	]

	return (
		<div className="h-100 w-full max-w-137.5 space-y-5">
			<h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
				Ranking de indicações
			</h2>
			<div className="space-y-4 ">
				{ranking.length === 0 && (
					<span className="text-gray-300 text-sm leading-none">
						No momento nenhum usuário possui indicações.!
					</span>
				)}
				{ranking.map((item, index) => {
					const rank = index + 1
					return (
						<div
							key={item.id}
							className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6"
						>
							<span className="text-gray-300 text-sm leading-none">
								<span className="font-semibold text-gray-400 ">{rank}°</span> |{' '}
								{item.name}
							</span>
							<span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
								{item.score}
							</span>
							<Image
								src={medals[index].type}
								alt={`${medals[index].name} medal`}
								className="absolute top-0 right-8"
								title={`Medalha de ${medals[index].name}`}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}
