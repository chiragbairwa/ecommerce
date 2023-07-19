"use client"
import Image from "next/image"

export default function Order(){
    return(
        <main className="bg-white text-black px-24 h-screen flex gap-4">
            {/* Revie Item & Delivery Info  */}
            <div className="w-3/5">
                <div className="rounded border p-4 ">
                    <p className="font-bold mb-4">Review Item And Shipping</p>
                    
                    <div className="flex items-center gap-4">
                        <div className="bg-gray-300 rounded relative w-28 h-28" >
                            <Image src="/next.svg" alt="Product-Image" className='p-2 mix-blend-multiply object-contain' fill />
                            {/* {
                                productData.id ?
                                    <Image src={productData.image} alt="Product-Image" className='p-2 mix-blend-multiply object-contain' fill />
                                :
                                <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                                    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                    </div>
                                </div>
                            } */}
                        </div>
                        <div className="w-full">
                            <div className="flex justify-between">
                                <p className="font-bold">Airpods-Max</p>
                                <p>$259.00</p>
                            </div>
                            <div className="flex justify-between text-sm">
                                <p>Colour: {`pink`}</p>
                                <p>Quantity: {`3`}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className="rounded border p-4 mt-4">
                    <div className="flex justify-between items-center">
                        <p className="font-bold">Delivery Information</p>
                        <button className="border rounded-full px-4 text-sm">
                            Edit Information
                        </button>
                    </div>

                    <form onSubmit={(event)=>{event.preventDefault()}}
                        className="flex flex-col gap-4 mt-4">
                        <div className="flex gap-4 text-sm">
                            <label htmlFor="name" className="w-24">Name:</label>
                            <input type="text" name="name" placeholder="Enter your name" />
                        </div>
                        <div className="flex gap-4 text-sm">
                            <label htmlFor="Address" className="w-24">Address:</label>
                            <input type="text" name="name" placeholder="Enter your name" />
                        </div>
                        <div className="flex gap-4 text-sm">
                            <label htmlFor="City" className="w-24">City:</label>
                            <input type="text" name="City" placeholder="Enter your name" />
                        </div>
                        <div className="flex gap-4 text-sm">
                            <label htmlFor="pin-code" className="w-24">Pin-Code:</label>
                            <input type="text" name="pin-code" placeholder="Enter your name" />
                        </div>
                        <div className="flex gap-4 text-sm">
                            <label htmlFor="mobile" className="w-24">Mobile:</label>
                            <input type="number" name="name" placeholder="Enter your Mobile Number" />
                        </div>
                        <div className="flex gap-4 text-sm">
                            <label htmlFor="email" className="w-24">E-mail:</label>
                            <input type="email" name="email" placeholder="Enter your Mobile Number" />
                        </div>
                    </form>
                </div>
            </div>
            
            {/* Order Summary */}
            <div className="rounded border p-4 w-2/5 h-fit">
                <p className="font-bold text-lg">
                    Order Summary
                </p>

                <div className="my-8  flex">
                    <input type="text" placeholder="Check Coupon Code" className="focus:outline-none bg-gray-200 rounded-full px-4 py-2 w-72" />
                    <button className="-ml-16 rounded-full bg-green-700 px-4 py-2 text-white text-sm">Check Availability</button>
                </div>

                <hr />
                <p className="font-bold mt-4 mb-4">Payment Details</p>

                <label className="flex gap-2 mb-1 cursor-pointer">
                    <input type="radio" name="cash" defaultChecked/>
                    Cash-On Delivery
                </label>
                <label className="flex gap-2 mb-1 cursor-pointer">
                    <input type="radio" name="cash"/>
                    Wallet
                </label>
                <label className="flex gap-2 mb-1 cursor-pointer">
                    <input type="radio" name="cash"/>
                    Paypal
                </label>
                <label className="flex gap-2 cursor-pointer">
                    <input type="radio" name="cash"/>
                    Credit or Debit Card
                </label>

                <div className="flex gap-2 my-4">
                    <img src="/logo/amazon_logo.svg" width={100} height="100" className="rounded border p-2 h-12 object-contain" loading='lazy' />
                    <img src="/logo/paypal_logo.svg" width={100} className="rounded border p-2 h-12 object-contain" loading='lazy'/>
                    <img src="/logo/visa_logo.svg" width={100} height={20} className="rounded border p-2 h-12 object-cover" loading='lazy'/>
                </div>

                <p className="font-bold">Email*</p>
                <input type="email" 
                    className="rounded focus:outline-gray-200 border w-full py-2 px-4" placeholder="example@gmail.com" />
                
                <p className="font-bold">Mobile*</p>
                <input type="number" 
                    className="rounded focus:outline-gray-200 border w-full py-2 px-4" placeholder="8181818181" />
                
                <p className="font-bold">Email*</p>
                <input type="email" 
                    className="rounded focus:outline-gray-200 border w-full py-2 px-4" placeholder="example@gmail.com" />
            </div>
        
        </main>
    )
}