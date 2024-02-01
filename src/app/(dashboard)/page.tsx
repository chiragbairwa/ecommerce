'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useCartData } from '../context/userData'

const ProductCard = (props: any) => {
	const { cartItems, setCartItems } = useCartData()
	const [productData, setProductData] = useState({
		id: 0,
		title: '',
		price: '',
		category: '',
		description: '',
		image: '',
		rating: {
			rate: 0.0,
			count: 0,
		},
	})

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${props.id}`, {
			cache: 'force-cache',
		})
			.then(res => res.json())
			.then(json => setProductData({ ...json }))
	}, [props.id])

	const handleAddToCart = () => {
		setCartItems([...cartItems, productData], false)
	}

	return (
		<div className="md:w-64 w-80 h-42">
			<div className="relative bg-gray-200 rounded">
				<Link
					href={{
						pathname: '/product',
						query: `id=${props.id}`, // the data
					}}
				>
					<div className="h-[18rem] relative">
						{productData.id ? (
							<Image
								src={productData.image}
								fill
								alt={productData.category}
								className={`mix-blend-multiply object-contain ease-in transform-gpu p-4`}
							/>
						) : (
							<div
								role="status"
								className="transform-gpu space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
							>
								<div className="flex items-center justify-center w-full h-[18rem] bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
									<svg
										aria-hidden="true"
										className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="currentColor"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentFill"
										/>
									</svg>
								</div>
							</div>
						)}
					</div>
				</Link>

				{/* wishlist btn */}
				<div className="p-1 bg-gray-100 rounded-full absolute top-2 right-2">
					<svg
						className="w-5 h-5 text-gray-800 "
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 21 19"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
						/>
					</svg>
				</div>
			</div>

			{/* Content */}
			<div className="flex mt-2 justify-between gap-4">
				<p className="font-bold text-sm truncate">{productData.title}</p>
				<p className="font-bold text-lg">{`$${productData.price}`}</p>
			</div>
			<p className="text-sm md:text-xs truncate">{productData.description}</p>

			{/* Stars */}
			<div className="flex my-1 justify-between items-center">
				<div className="flex items-center">
					{[...Array(Math.round(productData.rating.rate))].map((item, i) => {
						return (
							<svg
								key={`${i}-stars`}
								className="w-4 h-4 text-gray-800"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 22 20"
							>
								<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
							</svg>
						)
					})}

					<p className="ml-1">({productData.rating.count})</p>
				</div>

				<button
					className="rounded px-3 py-1 border-2 font-medium hover:bg-gray-200"
					onClick={handleAddToCart}
				>
					Add to Cart
				</button>
			</div>
		</div>
	)
}
export default function Home() {
	return (
		<main className="md:px-24 px-4">
			<div className=" bg-pink-200 rounded p-12 mb-4">
				<p className="text-black text-4xl font-bold mb-8 md:w-1/2">
					Grab Upto 50% Off On Selected Headphone
				</p>
				<Link
					href="/"
					className="rounded-full px-4 py-2 bg-black text-white hover:bg-white hover:text-black "
				>
					Buy Now
				</Link>
			</div>

			<div className="flex flex-wrap gap-4">
				<select className="rounded bg-gray-300 w-fit text-xs font-bold py-2 px-2">
					<option value="Headphones1">Headphones 1 </option>
					<option value="Headphones2">Headphones 2 </option>
					<option value="Headphones3">Headphones 3</option>
					<option value="Headphones4">Headphones 4</option>
				</select>

				<select className="rounded bg-gray-300 w-fit text-xs  font-bold py-2 px-2">
					<option value="Headphones">Price</option>
				</select>

				<select className="rounded bg-gray-300 w-fit text-xs  font-bold py-2 px-2">
					<option value="Headphones">Review</option>
				</select>

				<select className="rounded bg-gray-300 w-fit text-xs  font-bold py-2 px-2">
					<option value="Headphones">Colour</option>
				</select>

				<select className="rounded bg-gray-300 w-fit text-xs  font-bold py-2 px-2">
					<option value="Headphones">Material</option>
				</select>
			</div>

			<h2 className="my-4 font-bold text-xl">Products For You!</h2>

			{/* Product Cards */}
			<div className="grid md:grid-flow-col md:grid-rows-2 place-items-center gap-6 md:gap-4">
				{[1, 2, 3, 4, 5, 6, 7, 8].map(productID => {
					return <ProductCard id={productID} key={productID}></ProductCard>
				})}
			</div>
			{/* NEXT
      <div className='flex gap-2 justify-center mt-8'>
        <Link href="/" className='rounded-full px-4 py-2 border border-green-800 bg-green-800 text-white'>1</Link>
        <Link href="/" className='rounded-full px-4 py-2 border'>2</Link>
        <Link href="/" className='rounded-full px-4 py-2 border'>3</Link>
        <Link href="/" className='rounded-full px-4 py-2 border'>{`→`}</Link>
      </div> */}

			<h2 className="my-4 font-bold text-xl">Weekly Popular Products</h2>
			{/* Product Cards */}
			<div className="flex gap-4 pb-4 overflow-x-scroll overflow-y-hidden">
				{[11, 12, 13, 14, 15, 16].map(productID => {
					return <ProductCard id={productID} key={productID}></ProductCard>
				})}
			</div>

			<h2 className="my-4 font-bold mt-8 text-xl">Services To Help You Shop</h2>
			{/* Services Cards */}
			<div className="flex flex-wrap flex-grow gap-4 pb-8 justify-center md:justify-normal">
				<div className="rounded border grow">
					<div>
						<p className="p-4 font-bold text-xl">Frequently Asked Questions</p>
						<p className="p-4 pt-0 text-sm">
							Updates on safe Shopping in our Stores
						</p>
					</div>
					<Image
						src="/faq.svg"
						className="w-full"
						width={100}
						height={100}
						alt="faq"
					/>
				</div>

				<div className="rounded border grow flex flex-col justify-between">
					<div>
						<p className="p-4 font-bold text-xl">Online Payment Process</p>
						<p className="p-4 pt-0 text-sm">
							Updates on safe Shopping in our Stores
						</p>
					</div>
					<Image
						src="/online_pay.svg"
						className="w-full"
						width={100}
						height={100}
						alt="pay"
					/>
				</div>

				<div className="rounded border grow overflow-hidden">
					<p className="p-4 font-bold text-xl">Home Delivery Options</p>
					<p className="p-4 pt-0 text-sm">
						Updates on safe Shopping in our Stores
					</p>
					<Image
						src="/delivery_op.svg"
						className="w-full"
						width={150}
						height={100}
						alt="delivery"
					/>
				</div>
			</div>
		</main>
	)
}
