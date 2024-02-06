import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: () => {
			let id: number = 0
			axios.get(`/api/me`).then(res => (id = res.data?.user?._id))

			let cart: Array<Object> = []

			fetch(`/api/users?id=${id}`)
				.then(res => res.json())
				.then(res => (cart = JSON.parse(res.userData.cart)))
				.catch(err => console.log(err))

			return cart
		},
	},
	reducers: {
		addItem: (state: { items: any }, action) => {
			state.items.push(action.payload)
		},
		removeItem: () => {},
		clearCart: () => {},
	},
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
