import ProductUI from './ui'

export default async function Product({ params }: { params: { id: string } }) {
	const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
		cache: 'force-cache',
	})
	let productData = await res.json()

	return <ProductUI productData={productData} />
}
