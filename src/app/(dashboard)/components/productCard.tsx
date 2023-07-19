import Image from "next/image"

const ProductCard = (props:any) => {
    return (
      <div className="bg-gray-300 rounded relative w-28 h-28">
        <Image src={props.image} alt="Product-Image" className='p-2 mix-blend-multiply object-contain' fill />
      </div>
    )
}

export default ProductCard