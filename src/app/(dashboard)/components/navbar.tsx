import Image from "next/image"
import Link from "next/link"
import SearchBar from "./searchbar"
import CartButton from "./cartbutton"
import LogoutButton from "./logoutbutton"
import Burger from "./burger"

export default function Navbar() {
    return (
      <nav className="flex justify-between items-center py-4 md:px-24 px-4">
        <Image src="/vercel.svg" alt="logo" width={100} height={240} priority/>
        <ul className="hidden md:flex md:mx-4">
            <li className="px-4 py-2"><Link href="/">Categories</Link></li>
            <li className="px-4 py-2"><Link href="/">Deals</Link></li>
            <li className="px-4 py-2"><Link href="/">{`What's New`}</Link></li>
            <li className="px-4 py-2"><Link href="/">Delivery</Link></li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
            <SearchBar />
            {/* <Link href="/signin" className="mr-8 flex gap-2 ">
              <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
              </svg>
              Account
            </Link> */}
            <LogoutButton/>
            <CartButton/>
        </div>
        <Burger/>
      </nav>
    )
  }