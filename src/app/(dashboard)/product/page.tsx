'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useCartData } from '@/app/context/userData'
import ImageSkeleton from './imageSkeleton'

export default function Product() {
	const [noOfItem, setnoOfItems] = useState(1)
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
	const searchParams = useSearchParams()
	const productID = searchParams.get('id')

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${productID}`)
			.then(res => res.json())
			.then(json => setProductData({ ...json }))
			.catch(() => {})
	}, [productID])

	const handleAddToCart = async () => {
		let data = [...cartItems, productData]
		for (let i = 0; i < noOfItem - 1; i++) {
			data = [...data, productData]
		}
		setCartItems(data, false)
	}

	return (
		<main className="md:px-24 px-4 ">
			{/* Navigation Route */}
			<div className="mb-4">
				{productData?.id ? (
					<p className="text-gray-800 text-sm uppercase">
						<Link href="/">{productData.category}</Link>
						{` / ${productData.title}`}
					</p>
				) : (
					<div role="status" className="max-w-sm animate-pulse transform-gpu">
						<div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-62"></div>
					</div>
				)}
			</div>

			<div className="md:flex">
				<div className="md:w-1/2">
					<div className="w-full h-[25rem] md:h-[50vh] flex justify-center relative">
						{productData?.id ? (
							<div className="bg-gray-300 w-full rounded">
								<Image
									src={productData?.image}
									alt={productData?.category}
									priority
									fill
									quality={100}
									className={`mix-blend-multiply object-contain transform-gpu p-8`}
								/>
							</div>
						) : (
							<ImageSkeleton />
						)}
						<div className="p-1 bg-gray-200 rounded-full absolute top-2 right-2">
							<svg
								className="w-5 h-5 text-gray-800 dark:text-white"
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
					{/* Product Cards */}
					<div className="flex justify-between flex-shrink gap-4 mt-4">
						{[...Array(4)].map((item, i) => {
							return (
								<div
									className="bg-gray-300 rounded relative w-28 h-28"
									key={`${i}-rating`}
								>
									{productData.id ? (
										<Image
											src={productData.image}
											priority
											alt="Product-Image"
											className="p-2 mix-blend-multiply object-contain"
											fill
											quality={40}
										/>
									) : (
										<div
											role="status"
											className="w-full space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center transform-gpu"
										>
											<div className="flex items-center justify-center w-full h-28 bg-gray-300 rounded sm:w-full dark:bg-gray-700">
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
							)
						})}
					</div>
				</div>

				{/* Content Side */}
				<div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
					{productData.id ? (
						<>
							<p className="text-2xl font-bold">{productData.title}</p>
							<p className="md:text-sm mt-2">{productData.description}</p>

							{/* Stars */}
							<div className="flex mb-4 mt-2 items-center">
								{[...Array(Math.floor(productData.rating.rate))].map(
									(item, i) => {
										return (
											<svg
												key={`${i}-ProductStars`}
												className="w-4 h-4 text-gray-800 dark:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 22 20"
											>
												<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
											</svg>
										)
									}
								)}
								<p className="ml-1">({productData.rating.count})</p>
							</div>

							<hr />

							<p className="font-bold text-xl my-4">
								Price : ${productData.price}
							</p>

							<hr />
						</>
					) : (
						<div role="status" className="max-w-sm animate-pulse transform-gpu">
							<div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
							<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
							<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
							<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
							<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>

							<span className="sr-only">Loading...</span>
							<hr />

							<div className="flex items-center gap-4 transform-gpu">
								<p className="font-bold text-xl my-4">Price : </p>
								<div className="h-8 w-16 bg-gray-200 rounded dark:bg-gray-700 max-w-[360px]"></div>
							</div>

							<hr />
						</div>
					)}

					<div className="flex my-4">
						<div className="flex items-center gap-4 bg-gray-200 rounded-full w-fit h-fit">
							<button
								className="text-2xl px-4 py-1 "
								disabled={!noOfItem}
								onClick={() => setnoOfItems(noOfItem - 1)}
							>
								-
							</button>

							<p className="w-4 text-green-800">{noOfItem}</p>

							<button
								className="text-2xl px-4 py-1 text-green-800"
								onClick={() => setnoOfItems(noOfItem + 1)}
							>
								+
							</button>
						</div>

						<div className="ml-4 text-sm">
							<p className="flex">
								Only
								<span className="text-orange-300 mx-1">12 Items</span>
								Left!
							</p>
							<p>{`Don't miss it`}</p>
						</div>
					</div>

					{/* Action Buttons */}
					<div className="flex flex-col md:flex-row gap-4">
						<Link
							href="/order"
							className="bg-green-800 hover:bg-green-700 text-white text-center px-16 py-2 rounded-full md:w-fit"
							onClick={handleAddToCart}
						>
							Buy Now
						</Link>
						<button
							className="border border-green-800 hover:bg-green-800 hover:text-white text-center text-green-800 px-16 py-2 rounded-full md:w-fit"
							onClick={handleAddToCart}
						>
							Add to Cart
						</button>
					</div>

					<div className="rounded border mt-4">
						<div className="flex gap-2 p-3">
							<svg
								className="w-6 h-6 text-gray-700 dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 16"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M15.5 10.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm0 0a2.225 2.225 0 0 0-1.666.75H12m3.5-.75a2.225 2.225 0 0 1 1.666.75H19V7m-7 4V3h5l2 4m-7 4H6.166a2.225 2.225 0 0 0-1.666-.75M12 11V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v9h1.834a2.225 2.225 0 0 1 1.666-.75M19 7h-6m-8.5 3.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
								/>
							</svg>
							<div>
								<p className="font-bold text-sm">Free Delivery</p>
								<Link href="" className="border-b text-black">
									Enter your postel code for Delivery Availability
								</Link>
							</div>
						</div>

						<hr className="text-black" />

						<div className="flex gap-2 p-3">
							<svg
								className="w-6 h-6 text-gray-700 dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 18"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"
								/>
							</svg>

							<div>
								<p className="font-bold text-sm">Return Delivery</p>
								<p>
									Free 30days Delivery Returns.
									<Link href="" className="border-b text-black ml-2">
										Details
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
