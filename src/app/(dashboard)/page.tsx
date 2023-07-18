"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'

// type ProductData {
//   id : number,
//   title:'',
//   price:'',
//   category:'',
//   description:'',
//   image:''
// }

const ProductCard = (props : any) => {

    const [productData, setProductData] = useState({
      id: 0,
      title:'',
      price:'',
      category:'',
      description:'',
      image:'',
      rating:{
        rate : 0.0,
        count : 0
      }
  })

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${props.id}`)
            .then(res=>res.json())
            .then(json=>{
              setProductData({...json})
            })
  }, [props.id])
  
  return (
    <div className=' w-64 h-42 shrink-0'>
      <div className="relative bg-gray-200 rounded p-4 flex justify-center">

        <div className='h-[14rem] relative w-full rounded'>
          <Link href="/product">
              <Image src={productData.image} 
                fill
                alt="phone" 
                className='object-contain'
                />
          </Link>
        </div>
        
        <div className="p-1 bg-gray-100 rounded-full absolute top-2 right-2">
          <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"/>
          </svg>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <p className='font-bold '>{productData.title}</p>
        <p className='font-bold'>{`${productData.price} $`} </p>
      </div>
      <p className='text-xs'>{productData.description}</p>
      
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
      <Link href="" className="rounded-full px-4 py-2 border text-black font-semibold hover:bg-gray-200" >
        Add to Cart
      </Link>
    </div>
  )
}
export default function Home() {

  return (
    <main className="bg-white text-black px-24">
      <div className=' bg-pink-100 rounded p-12 mb-4' >
        <p className='text-green-800 text-4xl font-bold mb-8 w-1/2'>
          Grab Upto 50% Off On Selected Headphone
        </p>
        <Link href="/" className="rounded-full px-4 py-2 bg-green-800 text-white">Buy Now</Link>
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

      <h2 className='my-4 font-bold  text-xl'>Headphones For You!</h2>

      {/* Product Cards */}
      <div className='flex gap-4 flex-wrap'>
        {
          [1,2,3,4,5,6,7,8,9,10].map((productID)=> {
              return <ProductCard id={productID} key={productID}></ProductCard>
            }
          )
        }
      </div>
      {/* NEXT */}
      <div className='flex gap-2 justify-center'>
        <Link href="/" className='rounded-full px-4 py-2 border border-green-800 bg-green-800 text-white'>1</Link>
        <Link href="/" className='rounded-full px-4 py-2 border'>2</Link>
        <Link href="/" className='rounded-full px-4 py-2 border'>3</Link>
        <Link href="/" className='rounded-full px-4 py-2 border'>{`→`}</Link>
      </div>

      <h2 className='my-4 font-bold text-xl'>Weekly Popular Products</h2>
      {/* Product Cards */}
      <div className='flex gap-4 pb-4 overflow-x-scroll overflow-y-hidden'>
        {
          [11,12,13,14,15,16].map((productID)=> {
              return <ProductCard id={productID} key={productID}></ProductCard>
            }
          )
        }
      </div>

      <h2 className='my-4 font-bold mt-8 text-xl'>Services To Help You Shop</h2>
      {/* Product Cards */}
      <div className='flex gap-4 pb-8'>
        <div className='rounded border'>
          <div className=''>
            <p className='p-4 pr-48 font-bold text-xl'>Frequently Asked Questions</p>
            <p className='p-4 pt-0 pr-48 text-sm'>Updates on safe Shopping in our Stores</p>
          </div>
            <img src='/faq.svg' className='w-full' width="100" alt="faq" />
        </div>
        
        <div className='rounded border flex flex-col justify-between'>
          <div>
            <p className='p-4 pr-48 font-bold text-xl'>Online Payment Process</p>
            <p className='p-4 pt-0 pr-48 text-sm'>Updates on safe Shopping in our Stores</p>
          </div>
          <img src='/online_pay.svg' className='w-full' width="100" alt="pay" />
        </div>
        
        <div className='rounded border overflow-hidden'>
          <p className='p-4 pr-48 font-bold text-xl'>Home Delivery Options</p>
          <p className='p-4 pt-0 pr-48 text-sm'>Updates on safe Shopping in our Stores</p>
          <img src='/delivery_op.svg' className='w-full ' width="100" alt="delivery" />
        </div>
      </div>
    </main>
  )
}
