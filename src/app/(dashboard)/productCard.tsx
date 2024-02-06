import ProductCardUI from './components/productCardUI'

export default async function ProductCard({ id }: { id: number }) {
	const res = await fetch(`https://fakestoreapi.com/products/${id}`)
	const productData = await res.json()

	return <ProductCardUI productData={productData} />
}
