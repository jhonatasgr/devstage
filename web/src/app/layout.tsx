import './globals.css'

import type { Metadata } from 'next'

import { montserrat, oxanium } from '@/fonts'

export const metadata: Metadata = {
	title: 'Dev stage',
	description: 'Dev stage',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
			<body className="smooth-scroll bg-[url('/background.png')] bg-gray-900 bg-top bg-no-repeat text-gray-100 antialiased md:bg-right-top">
				{children}
			</body>
		</html>
	)
}
