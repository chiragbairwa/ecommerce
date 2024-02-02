import Link from 'next/link'
import Image from 'next/image'
import ProductCard from './ui'

export default async function Home() {
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

			{/* Product Cards */}
			<h2 className="my-4 font-bold text-xl">Weekly Popular Products</h2>
			<div className="flex gap-4 pb-4 overflow-x-scroll overflow-y-hidden">
				{[11, 12, 13, 14, 15, 16].map(productID => {
					return <ProductCard id={productID} key={productID}></ProductCard>
				})}
			</div>

			{/* Services Cards */}
			<h2 className="my-4 font-bold mt-8 text-xl">Services To Help You Shop</h2>
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
