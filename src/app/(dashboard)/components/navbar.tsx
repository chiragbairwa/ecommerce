import Image from "next/image"
import Link from "next/link"
import SearchBar from "./searchbar"
import CartButton from "./cartbutton"
import LogoutButton from "./logoutbutton"
import Burger from "./burger"

export default function Navbar() {
    return (
      <nav className="flex justify-between items-center py-4 md:px-24 px-4">
        <Link href="/">
          <Image src="/vercel.svg" alt="logo" width={100} height={240} priority/>
        </Link>
        <ul className="hidden md:flex md:mx-4">
            <li className="px-4 py-2"><Link href="/">Categories</Link></li>
            <li className="px-4 py-2"><Link href="/">Deals</Link></li>
            <li className="px-4 py-2"><Link href="/">{`What's New`}</Link></li>
            <li className="px-4 py-2"><Link href="/">Delivery</Link></li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
            <SearchBar />
            <LogoutButton/>
            <CartButton/>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex justify-center items-center gap-4">
          <div className="rounded p-2 border items-center">
            <CartButton />
          </div>

          <Burger/>
        </div>
      </nav>
    )
  }