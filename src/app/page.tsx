// import Navbar from './components/navbar'
import Link from 'next/link'

const ProductCard = () => {
  return (
    <div className='relative'>
      <div className="bg-gray-200 rounded">
        <Link href="/product">
          <img src="/headphone.png" className='p-8 w-52' alt="phone" />
        </Link>
        
        <div className="p-1 bg-gray-100 rounded-full absolute top-2 right-2">
          <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"/>
          </svg>
        </div>
      </div>
      <div className='flex justify-between'>
        <p className='font-bold'>Wireless Earbuds</p>
        <p className='font-bold'>$99.99</p>
      </div>
      <p className='text-xs'>Lorem ipsum dolor sit amet</p>
      
      {/* Stars */}
      <div className="flex mb-4">{
        [1,2,3,4,5].map( (r)=>{
          return (
            <svg key={`${r}`} className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
          )
        })}
      </div>
      <Link className="rounded-full px-4 py-2 border text-black font-semibold hover:bg-gray-200" href="">
        Add to Cart
      </Link>
    </div>
  )
}
export default function Home() {
  return (
    <main className="bg-white text-black px-24">
      {/* <Navbar/> */}
      <div className=' bg-pink-100 rounded p-12 mb-4' >
        <p className='text-green-800 text-4xl font-bold mb-8'>
          Grab Upto 50% Off On 
          <br/>Selected Headphone
        </p>
        <Link className="rounded-3xl px-4 py-2 bg-green-800 text-white font-semibold hover:text-black" href="">Buy Now</Link>
      </div>

      <div className='flex gap-4'>
        <select className="rounded-3xl bg-gray-300 w-fit text-xs  font-bold py-2 px-2">
          <option value="Headphones">Headphones </option>
        </select>

        <select className="rounded-3xl bg-gray-300 w-fit text-xs  font-bold py-2 px-2">
          <option value="Headphones">Price</option>
        </select>
        
        <select className="rounded-3xl bg-gray-300 w-fit text-xs  font-bold py-2 px-2">
          <option value="Headphones">Review</option>
        </select>

        <select className="rounded-3xl bg-gray-300 w-fit text-xs  font-bold py-2 px-2">
          <option value="Headphones">Colour</option>
        </select>

        <select className="rounded-3xl bg-gray-300 w-fit text-xs  font-bold py-2 px-2">
          <option value="Headphones">Material</option>
        </select>
      </div>

      <h2 className='my-4 font-bold'>Headphones For You!</h2>

      {/* Product Cards */}
      <div className='flex gap-4 flex-wrap'>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </main>
  )
}
