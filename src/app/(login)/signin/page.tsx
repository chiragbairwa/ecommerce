"use client";
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type FormData = {
  email: string,
  password: string
};

export default function SignIn() {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  
  const onSubmit = async(user: FormData) => {
    setLoading(true)
    try{
      const response = await axios.post("/api/signin", user)
      console.log("Login Success", response.data)
      
      if(response.status === 200){
        toast.success("Login Success")
        router.push("/")
      }
    } 
    catch(err: any){
      if(err.response){
        toast.error(err.response.data.error)
      }

      console.log(err.message)
    } 
    finally{
      setLoading(false)
    }
  }
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  return (
    <main className="flex items-center justify-center h-screen text-black px-24">

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 bg-gray-200 rounded p-12 w-96'>
        <strong className='m-auto'>Sign In</strong>
        <label>Email</label>
        <input type='email' {...register("email")} required className='p-2 rounded -mt-3' placeholder='test@gmail.com'/>
        
        <label>Password</label>
        <input type='password' {...register("password")} required className='p-2 rounded -mt-3' placeholder='*********'/>

        <input type="submit" disabled={loading} className='p-2 rounded border text-white bg-green-800 cursor-pointer' defaultValue="Login" />
      </form>
    </main>
  )
}
