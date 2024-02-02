'use client'
import Image from 'next/image'
import { useCartData } from '@/app/context/userData'
import { useRouter } from 'next/navigation'

export default function Order() {
	const { cartItems, setCartItems } = useCartData()
	const router = useRouter()

	const deleteItem = (index: number) => {
		const restItems = cartItems
		restItems.splice(index, 1)
		setCartItems(restItems, true)
		router.refresh()
	}

	const ProductCard = (props: any) => {
		return (
			<div className="flex items-center gap-4 my-2">
				<div className="bg-gray-300 rounded relative w-28 h-24 flex justify-center">
					<Image
						src={
							cartItems[props.index]?.image ||
							'https://placehold.co/600x400.svg'
						}
						alt="Product-Image"
						className="p-1 mix-blend-multiply object-contain w-auto h-auto"
						width={75}
						height={75}
					/>
				</div>

				{/* product data */}
				<div className="w-full ">
					<div className="flex justify-between gap-4 mb-2">
						<p className="font-bold text-sm">{cartItems[props.index].title}</p>
						<p>{`$${parseFloat(cartItems[props.index].price).toFixed(2)}`}</p>
					</div>
					<div className="flex justify-between uppercase">
						{cartItems[props.index].category}
						<div
							className="flex cursor-pointer"
							onClick={() => deleteItem(props.index)}
						>
							{/* Delete Icon */}
							<Image
								src="./delete.svg"
								alt="DeleteIcon"
								height={24}
								width={24}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}

	return (
		<main className="md:flex gap-4 md:px-24 px-4 pb-8">
			{/* Review Item & Delivery Info  */}
			<div className="md:w-3/5">
				<div className="rounded border p-4 ">
					<p className="font-bold mb-4">Review Item And Shipping</p>
					{/* Product Card */}
					{cartItems.length ? (
						[...Array(cartItems.length)].map((item, i) => (
							<ProductCard index={i} key={`${i}-cartProduct`}></ProductCard>
						))
					) : (
						<p>You have empty cart</p>
					)}
				</div>

				{/*  */}
				<div className="rounded border p-4 mt-4">
					<div className="flex justify-between items-center">
						<p className="font-bold">Delivery Information</p>
						<button className="border rounded-full px-4 text-sm">
							Edit Information
						</button>
					</div>

					<form
						onSubmit={event => {
							event.preventDefault()
						}}
						className="flex flex-col gap-4 mt-4"
					>
						<div className="flex gap-4 text-sm">
							<label htmlFor="name" className="w-24">
								Name:
							</label>
							<input type="text" name="name" placeholder="Enter your name" />
						</div>
						<div className="flex gap-4 text-sm">
							<label htmlFor="Address" className="w-24">
								Address:
							</label>
							<input type="text" name="name" placeholder="Enter your name" />
						</div>
						<div className="flex gap-4 text-sm">
							<label htmlFor="City" className="w-24">
								City:
							</label>
							<input type="text" name="City" placeholder="Enter your name" />
						</div>
						<div className="flex gap-4 text-sm">
							<label htmlFor="pin-code" className="w-24">
								Pin-Code:
							</label>
							<input
								type="text"
								name="pin-code"
								placeholder="Enter your name"
							/>
						</div>
						<div className="flex gap-4 text-sm">
							<label htmlFor="mobile" className="w-24">
								Mobile:
							</label>
							<input
								type="number"
								name="name"
								placeholder="Enter your Mobile Number"
							/>
						</div>
						<div className="flex gap-4 text-sm">
							<label htmlFor="email" className="w-24">
								E-mail:
							</label>
							<input
								type="email"
								name="email"
								placeholder="Enter your Mobile Number"
							/>
						</div>
					</form>
				</div>
			</div>

			{/* Order Summary */}
			<div className="rounded border p-4 md:w-2/5 mt-4 md:mt-0 h-fit">
				<p className="font-bold text-lg">Order Summary</p>

				<div className="my-8  flex">
					<input
						type="text"
						placeholder="Check Coupon Code"
						className="focus:outline-none bg-gray-200 rounded-full px-4 py-2 w-72"
					/>
					<button className="-ml-16 rounded-full bg-green-700 px-4 py-2 text-white text-sm">
						Check Availability
					</button>
				</div>

				<hr />
				<p className="font-bold mt-4 mb-4 ">Payment Details</p>

				<label className="flex gap-2 mb-1 cursor-pointer w-fit">
					<input type="radio" name="cash" defaultChecked />
					Cash-On Delivery
				</label>
				<label className="flex gap-2 mb-1 cursor-pointer w-fit">
					<input type="radio" name="cash" />
					Wallet
				</label>
				<label className="flex gap-2 mb-1 cursor-pointer w-fit">
					<input type="radio" name="cash" />
					Paypal
				</label>
				<label className="flex gap-2 cursor-pointer w-fit">
					<input type="radio" name="cash" />
					Credit or Debit Card
				</label>

				<div className="flex justify-around md:gap-2 my-4">
					<Image
						src="/logo/amazon_logo.svg"
						width={100}
						height="100"
						alt="amazon-logo"
						className="rounded border p-2 h-12 object-contain "
					/>
					<Image
						src="/logo/paypal_logo.svg"
						width={100}
						height="100"
						alt="paypal-logo"
						className="rounded border p-2 h-12 object-contain"
					/>
					<Image
						src="/logo/visa_logo.svg"
						width={100}
						height={20}
						alt="visa-logo"
						className="rounded border p-2 h-12 object-cover"
					/>
				</div>

				<p className="font-bold">Email*</p>
				<input
					type="email"
					className="rounded focus:outline-gray-200 border w-full py-2 px-4"
					placeholder="example@gmail.com"
				/>

				<p className="font-bold">Mobile*</p>
				<input
					type="number"
					className="rounded focus:outline-gray-200 border w-full py-2 px-4"
					placeholder="8181818181"
				/>

				<p className="font-bold">Email*</p>
				<input
					type="email"
					className="rounded focus:outline-gray-200 border w-full py-2 px-4"
					placeholder="example@gmail.com"
				/>
			</div>
		</main>
	)
}
