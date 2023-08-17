"use client"
import { useState } from "react"
import SearchBar from "./searchbar"
import Link from "next/link"
import LogoutButton from "./logoutbutton"

const Burger = ()=>{
    const [isClicked, setIsClicked] = useState(false)

    return (
        <div className="md:hidden relative z-50">
            <button className="relative group" 
                onClick={(e)=>{
                    !isClicked ?
                        e.currentTarget.focus()
                        :
                        e.currentTarget.blur();
                    setIsClicked(!isClicked);
                }
            }>
                <div className={`relative flex overflow-hidden items-center justify-center rounded w-[40px] h-[40px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md`}>
                    <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                        <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
                        <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
                        <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
                    </div>
                </div>
            </button>
            <div className={`${isClicked? "block" : "hidden"} absolute mt-2 top-15 right-0 rounded bg-white border w-72 py-3 px-2`}>
                <SearchBar />
                <ul className="flex flex-col mt-2">
                    <li className="px-4 py-2"><Link href="/">Categories</Link></li>
                    <li className="px-4 py-2"><Link href="/">Deals</Link></li>
                    <li className="px-4 py-2"><Link href="/">{`What's New`}</Link></li>
                    <li className="px-4 py-2"><Link href="/">Delivery</Link></li>
                </ul>
                <LogoutButton/>
            </div>
        </div>
    )
}

export default Burger