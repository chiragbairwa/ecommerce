"use client"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
      <nav className="flex py-4 justify-between bg-white text-black px-24">
        <Image src="/vercel.svg" alt="logo" width={100} height={24} />
        <ul className="flex mx-4">
            <li className="px-4 py-2"><Link href="/">Categories</Link></li>
            <li className="px-4 py-2"><Link href="/">Deals</Link></li>
            <li className="px-4 py-2"><Link href="/">What's New</Link></li>
            <li className="px-4 py-2"><Link href="/">Delivery</Link></li>
        </ul>
        <div className="flex items-center gap-4 bg-gray-200 rounded-3xl px-4 py-1">
          <input type="search" className=" w-64 bg-transparent focus:outline-none" placeholder="Search Product" />
          
          <Image src="/search.svg" alt="btn" width="24" height="16" 
          className="hover:cursor-pointer"
          onClick={()=>{
            alert("Clicked")
          }}
          />
        </div>

        <div className="mt-2 flex">  
            <Link href="/" className="mr-8 flex gap-2">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
              </svg>
              Account
            </Link>
          
            <Link href="/order" className="flex gap-2">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
              </svg>
              Cart
            </Link>
        </div>
      </nav>
    )
  }