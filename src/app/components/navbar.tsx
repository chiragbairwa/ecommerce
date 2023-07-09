import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
      <nav className="flex py-4 justify-between">
        <Image src="/vercel.svg" alt="logo" width={100} height={24} />
        <ul className="flex mx-4">
            <li className="px-4 py-2"><Link href="">Categories</Link></li>
            <li className="px-4 py-2"><Link href="">Deals</Link></li>
            <li className="px-4 py-2"><Link href="">What's New</Link></li>
            <li className="px-4 py-2"><Link href="">Delivery</Link></li>
        </ul>
        <div className="flex bg-gray-200 rounded-3xl px-4 py-1">
          <input type="search" className=" w-64 bg-transparent focus:border-transparent" placeholder="Search Product" />
          <Image src="/search.svg" alt="btn" width="24" height="16" />

        </div>

        <div className="mt-2">
            <Link href="" className="px-4 py-2 rounded border mr-4">Account</Link>
            <Link href="" className="px-4 py-2 rounded border">Cart</Link>
        </div>
      </nav>
    )
  }