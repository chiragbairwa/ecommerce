'use client'
import Link from 'next/link'
import Burger from './burger'
import Image from 'next/image'
import SearchBar from './searchbar'
import CartButton from './cartbutton'
import LogoutButton from './logoutbutton'
import { Provider } from 'react-redux'
import store from '@/redux/store'

export default async function Navbar() {
	return (
		<Provider store={store}>
			<nav className="flex justify-between items-center py-4">
				<div className="flex items-center">
					<Link href="/" className="min-w-[100px] h-[30px] relative">
						<Image src="/vercel.svg" alt="logo" fill />
					</Link>
					<ul className="hidden md:flex md:mx-4">
						<li className="px-4 py-2">
							<Link href="/">Categories</Link>
						</li>
						<li className="px-4 py-2">
							<Link href="/">Deals</Link>
						</li>
						<li className="px-4 py-2">
							<Link href="/">{`What's New`}</Link>
						</li>
						<li className="px-4 py-2">
							<Link href="/">Delivery</Link>
						</li>
					</ul>
				</div>

				<div className="hidden md:flex items-center gap-4">
					<SearchBar />
					<LogoutButton />
					<CartButton />
				</div>

				{/* Mobile View */}
				<div className="md:hidden flex justify-center items-center gap-4">
					<div className="rounded p-2 border flex items-center">
						<CartButton />
					</div>

					<Burger />
				</div>
			</nav>
		</Provider>
	)
}
