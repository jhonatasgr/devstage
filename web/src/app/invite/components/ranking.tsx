import Image from 'next/image'

import cooper from '@/assets/medal-cooper.svg'
import gold from '@/assets/medal-gold.svg'
import silver from '@/assets/medal-silver.svg'

export function Ranking() {
	return (
		<div className="w-full max-w-137.5 space-y-5">
			<h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
				Ranking de indicações
			</h2>
			<div className="space-y-4 ">
				<div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
					<span className="text-gray-300 text-sm leading-none">
						<span className="font-semibold text-gray-400 ">1°</span> | John Doe
						1
					</span>
					<span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
						1090
					</span>
					<Image
						src={gold}
						alt="Bronze medal"
						className="absolute top-0 right-8"
					/>
				</div>
				<div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
					<span className="text-gray-300 text-sm leading-none">
						<span className="font-semibold text-gray-400 ">2°</span> | John Doe
						2
					</span>
					<span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
						890
					</span>
					<Image
						src={silver}
						alt="Bronze medal"
						className="absolute top-0 right-8"
					/>
				</div>
				<div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
					<span className="text-gray-300 text-sm leading-none">
						<span className="font-semibold text-gray-400 ">3°</span> | John Doe
						3
					</span>
					<span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
						300
					</span>
					<Image
						src={cooper}
						alt="Bronze medal"
						className="absolute top-0 right-8"
					/>
				</div>
			</div>
		</div>
	)
}
