import '../globals.css'
import type { Metadata } from 'next'
import Navbar from './components/navbar'
import { Toaster } from 'react-hot-toast'
import { UserDataProvider } from '../context/userData'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Ecommerce Store',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<UserDataProvider>
				<body
					className={`${inter.className} flex flex-col h-screen px-4 md:px-24`}
				>
					<Navbar />
					<Toaster position="top-center" />
					{children}
				</body>
			</UserDataProvider>
		</html>
	)
}
