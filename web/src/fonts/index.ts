import { Montserrat, Oxanium } from 'next/font/google'

export const oxanium = Oxanium({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-oxanium',
})

export const montserrat = Montserrat({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-montserrat',
})
