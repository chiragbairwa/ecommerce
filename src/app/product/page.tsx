"use client"

import { useState } from 'react'
// import Navbar from '../components/navbar'
import Link from 'next/link'

import ProductCard from '../components/productCard'


export default function Product() {
  const [noOfItem, setnoOfItems] = useState(0)

  return (
    <main className="bg-white text-black px-24 h-screen">
      {/* Navigation Route */}
      <p className="text-gray-300 text-sm mb-4">
        {`Electronics / Audio / Headphones / airpods-max`}
      </p>

      <div className="flex">
        <div className='w-1/2'>
            <div className="bg-gray-300 flex align-middle justify-center rounded relative">
                <img src="/headphone.png" alt="phone" className='p-12' width={350}></img>
                <div className="p-1 bg-gray-200 rounded-full absolute top-2 right-2">
                    <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"/>
                    </svg>
                </div>
            </div>
            {/* Product Cards */}
            <div className='flex justify-between mt-4 '>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>

        {/* Content Side */}
        <div className='w-1/2 pl-12'>
            <p className='text-2xl font-bold'>Airpods - Max</p>
            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,</p>
            
            {/* Stars */}
            <div className="flex mb-4 mt-2 items-center">{
                [1,2,3,4,5].map( (r)=>{
                return (
                    <svg key={`${r}-ProductStars`} className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                )
                })}
                <p className='ml-1'>{`(121)`}</p>
            </div>
                <hr/>
                <p className="font-bold text-xl mt-4">
                    {`$259.00 or 99.99/Month`}
                </p>
                <p className='text-sm mb-4'>Lorem ipsum dolor sit amet consectetur </p>
                
                <hr/>

                <div className='flex mb-4'>
                  <div className="flex items-center gap-4 bg-gray-200 rounded-full w-fit h-fit">
                    <button 
                      className="text-2xl px-4 py-1 "
                      disabled = {!noOfItem}
                      onClick={()=>setnoOfItems(noOfItem-1)}
                      >-</button>

                    <p className='w-4 text-green-800'>{noOfItem}</p>
                    <button className="text-2xl px-4 py-1 text-green-800"
                    onClick={()=>setnoOfItems(noOfItem+1)}>+</button>
                  </div>
                    
                  <div className='ml-4 text-sm'>
                    <p className="flex">Only 
                      <span className='text-orange-300 mx-1'>12 Items</span> 
                      Left!
                    </p>
                    <p>{`Don't miss it`}</p>
                  </div>
                  
                </div>
                
                {/* Action Buttons */}
                <div className='flex gap-4'>
                  <Link href="/order" className="bg-green-800 hover:bg-green-700 text-white px-16 py-2 rounded-full w-fit">
                    Buy Now  
                  </Link>
                  <Link href="" className="border border-green-800 hover:bg-green-800 hover:text-white text-green-800 px-16 py-2 rounded-full w-fit">
                    Add to Cart  
                  </Link>
                </div>

                <div className='rounded border mt-4'>
                  <div className='flex gap-2 p-3'>
                    <svg className="w-6 h-6 text-gray-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.5 10.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm0 0a2.225 2.225 0 0 0-1.666.75H12m3.5-.75a2.225 2.225 0 0 1 1.666.75H19V7m-7 4V3h5l2 4m-7 4H6.166a2.225 2.225 0 0 0-1.666-.75M12 11V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v9h1.834a2.225 2.225 0 0 1 1.666-.75M19 7h-6m-8.5 3.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"/>
                    </svg>
                    <div>
                      <p className='font-bold text-sm'>Free Delivery</p>
                      <Link href="" className='border-b text-black'>Enter your postel code for Delivery Availability</Link>
                    </div>
                  </div>
                  
                  <hr className='text-black'/>

                  <div className='flex gap-2 p-3'>
                    <svg className="w-6 h-6 text-gray-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"/>
                    </svg>

                    <div>
                      <p className='font-bold text-sm'>Return Delivery</p>
                      <p>
                        Free 30days Delivery Returns.
                        <Link href="" className='border-b text-black ml-2'>
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
