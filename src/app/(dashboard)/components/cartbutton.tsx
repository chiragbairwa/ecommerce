"use client"
import { useUserData } from "../../context/userData"
import Link from "next/link"

const CartButton = () => {
  const { cartItems } = useUserData()

  return (
    <Link href="/order" className="flex gap-2 relative">
      <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1" />
      </svg>
      {
        cartItems.length ?
          <p className="absolute -top-4 right-6 text-xs bg-white drop-shadow rounded-full px-2 py-1">{cartItems.length}</p>
          :
          <></>
      }
      Cart
    </Link>
  )
}

export default CartButton