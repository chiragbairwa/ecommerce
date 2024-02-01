'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'
const SearchBar = () => {
	const [searchProduct, setSearchProduct] = useState([])
	const [products, setProducts] = useState([])

	const changeProduct = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchProduct([])
		const searchText = e.target.value.toLowerCase()

		if (!searchText.length) {
			return
		}

		let temp = products.filter((item: any, index) => {
			return item.title.toLowerCase().includes(searchText)
		})

		setSearchProduct(temp)
	}

	useEffect(() => {
		fetch('https://fakestoreapi.com/products', {
			cache: 'force-cache',
		})
			.then(res => res.json())
			.then(json => setProducts(json))
	}, [])

	const ProductCard = (props: any) => {
		return (
			<Link href={`/product?id=${props.item.id}`}>
				<div
					className="text-sm px-3 py-2 hover:bg-gray-100 hover:cursor-pointer"
					onClick={() => setSearchProduct([])}
				>
					{props.item.title}
				</div>
			</Link>
		)
	}
	return (
		<div
			className={`relative flex justify-between bg-gray-200 h-30 ${
				searchProduct.length
					? 'rounded-bl-none rounded-br-none rounded-tl-3xl rounded-tr-3xl'
					: 'rounded-3xl'
			}`}
		>
			<div className="flex items-center px-4 py-2 w-full md:w-80 ">
				<input
					type="text"
					onChange={changeProduct}
					className="w-64 bg-transparent focus:outline-none"
					placeholder="Search Product"
				/>

				{/* SVG */}
				<div className="hover:cursor-pointer -ml-8 md:ml-4 z-50">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 30 30"
						width="24px"
						height="24px"
					>
						<path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
					</svg>
				</div>
			</div>
			<div
				className={`${
					searchProduct.length ? 'block' : 'hidden'
				} z-10 md:w-80 max-h-40 overflow-y-scroll bg-gray-200 absolute top-10 rounded-bl-3xl rounded-br-3xl`}
			>
				{searchProduct.map((item, index) => {
					return <ProductCard item={item} key={index}></ProductCard>
				})}
			</div>
		</div>
	)
}

export default SearchBar
