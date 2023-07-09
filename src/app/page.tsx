import Image from 'next/image'

import Navbar from './components/navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-white text-black px-24">
      <Navbar/>
      <div className=' bg-pink-100 rounded p-12 mb-4' >
        <p className='text-green-800 text-4xl font-bold mb-8'>
          Grab Upto 50% Off On 
          <br/>Selected Headphone
        </p>
        <Link className="rounded-3xl px-4 py-2 bg-green-800 text-white font-semibold hover:text-black" href="">Buy Now</Link>
      </div>

      <div className='flex gap-4'>
        <div className="rounded-3xl bg-slate-300 w-fit text-xs  font-bold py-2 px-4">
          Headphone Type
        </div>

        <div className="rounded-3xl bg-slate-300 w-fit text-xs  font-bold py-2 px-4">
          Price
        </div>

        <div className="rounded-3xl bg-slate-300 w-fit text-xs  font-bold py-2 px-4">
          Review
        </div>

        <div className="rounded-3xl bg-slate-300 w-fit text-xs  font-bold py-2 px-4">
          Colour
        </div>

        <div className="rounded-3xl bg-slate-300 w-fit text-xs  font-bold py-2 px-4">
          Material
        </div>
      </div>

      <h2 className='my-4 font-bold'>Headphones For You!</h2>

      <div className='flex gap-4'>
        <div className='w-44 h-56 rounded bg-slate-300'></div>
        <div className='w-44 h-56 rounded bg-slate-300'></div>
        <div className='w-44 h-56 rounded bg-slate-300'></div>
        <div className='w-44 h-56 rounded bg-slate-300'></div>
      </div>
    </main>
  )
}
