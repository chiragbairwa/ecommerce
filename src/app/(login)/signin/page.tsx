"use client";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

type FormData = {
  email: string,
  password: string
};

export default function SignIn() {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<FormData>({
    email: '',
    password: ''
});

const handleChange = (event : any) => {
  let name = event.target.name
  let value = event.target.value

  setUser( { ...user, [name] : value })
}

const handleSubmit = (event: any) => {
  event.preventDefault()
    
  setLoading(true)
  axios.post("/api/signin", user)
  .then((res)=>{
    if(res.status === 200){
      toast.success("Login Success")
      setLoading(false)
      router.push("/")
    }
  })
  .catch((err)=>{
    if(err.response){
      toast.error(err.response.data.error)
    }
  })

  setLoading(false)
}

  return (
    <main className="flex items-center justify-center h-screen text-black px-24">

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 bg-gray-200 rounded p-12 w-96'>
        <strong className='m-auto'>Sign In</strong>
        <label htmlFor='signinEmail'>Email : </label>
        {/* <input type='email' {...register("email")} required className='p-2 rounded -mt-3' placeholder='test@gmail.com'/> */}
        <input type='email' id='signinEmail' onChange={handleChange} name="email" required maxLength={20} className='p-2 rounded -mt-3' placeholder='test@gmail.com' inputMode='email'/>

        <label htmlFor='signinPass'>Password :</label>
        {/* <input type='password' required className='p-2 rounded -mt-3' placeholder='*********'/> */}
        <input id="signinPass" onChange={handleChange} name='password' type='password' required maxLength={20} className='p-2 rounded -mt-3' placeholder='*********' />

        <input type="submit" disabled={loading} 
          className="p-2 rounded border cursor-pointer text-center bg-green-800 text-white border-green-800"
          defaultValue={loading ? "Processing..." : "Login"} />

        <Link href="/signup" className='p-2 rounded border text-green-800 border-green-800 bg-white cursor-pointer text-center' >
          Sign Up
        </Link>
      </form>
    </main>
  )
}
