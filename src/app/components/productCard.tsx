import Image from "next/image"

const ProductCard = () => {
    return (
      <div className="bg-gray-300 rounded">
        <Image src="/headphone.png" alt="Product-Image" className='p-8' width={130} height={130} />
      </div>
    )
}

export default ProductCard