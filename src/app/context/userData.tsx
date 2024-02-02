'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'

type dataContextType = {
	cartItems: any
	setCartItems: (data: any, deleteItemCall: boolean) => void
}
const dataContextDefaultValues: dataContextType = {
	cartItems: [],
	setCartItems: (any, boolean) => {},
}

// Create Context
const CartDataContext = createContext<dataContextType>(dataContextDefaultValues)
export const useCartData = () => useContext<dataContextType>(CartDataContext)

export function UserDataProvider({ children }: any) {
	const router = useRouter()
	const [cartItems, setCartItemsWHook] = useState([])
	const [id, setID] = useState('')

	const setCartItems = async (res: any, deleteItemCall: boolean) => {
		setCartItemsWHook(res)
		// UPDATE REQUEST
		const requestOptions: any = {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				cart: JSON.stringify(res),
			}),
			cache: 'no-cache',
		}
		fetch(`/api/users?id=${id}`, requestOptions)
			.then(res => {
				console.log('UPDATE Success' + res.status)
				deleteItemCall
					? toast.success('Successfully Deleted !')
					: toast.success('Added to Cart !')
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		// FETCH ID from /api/me/ then update cart
		const syncCart = async (syncid: number) => {
			fetch(`/api/users?id=${syncid}`, {
				cache: 'no-store',
			})
				.then(res => res.json())
				.then(res => {
					const data = res.userData.cart
					const newCart = JSON.parse(data)
					setCartItemsWHook(newCart)
				})
				.catch(err => {
					// if any error logout
					fetch('/api/logout').then(() => {
						router.push('/signin')
					})
				})
		}
		const syncID = async () => {
			const user = await axios.get(`/api/me`)
			setID(user.data?.user?._id)

			syncCart(user.data?.user?._id)
		}
		// CALL get_ID then SyncCART
		syncID().catch(error => {
			console.log(error)
		})
	}, [id])

	return (
		<CartDataContext.Provider value={{ cartItems, setCartItems }}>
			{children}
		</CartDataContext.Provider>
	)
}
