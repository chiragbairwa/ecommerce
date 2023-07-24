"use client";
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from "axios";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type FormData = {
  username : String,
  email: String,
  password: String
};

export default function SignUp() {
  const router = useRouter()
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      username : '',
      email: '',
      password: ''
    }
  });

  const onSubmit = async (user:any) => {
    try{
      setLoading(true)
      const res = await axios.post('/api/signup', user)
  
      if(res.status === 200){
        toast.success("Sign Up Completed")
        router.push("/signin")
      }
    }
    catch (err : any){
      if(err.response.status === 400){
        toast.error(err.response.data.error)
      }
      console.error(err.message)
    }
    finally{
      setLoading(false)
    }
  }
  return (
    <main className="flex items-center justify-center h-screen text-black">
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 bg-gray-200 rounded p-12 w-96'>

        <strong className='m-auto'>Sign Up</strong>
        <label>Username : {errors.username && <span className='-mt-4 text-red-700'>This field is required</span>}</label>
        <input type='text' {...register("username", { required: true, maxLength: 20 })} className='p-2 rounded -mt-3' placeholder='Username'/>

        <label>Email : {errors.email && <span className='-mt-4 text-red-700'>This field is required</span>}</label>
        <input type='email' {...register("email", { required: true, maxLength: 20 })} className='p-2 rounded -mt-3' placeholder='test@gmail.com'/>
        
        <label htmlFor='signupPassi'>Password : {errors.password && <span className='-mt-4 text-red-700'>This field is required</span>}
        </label>
        <input id="signupPass" type='password' {...register("password", { required: true, maxLength: 20 })} className='p-2 rounded -mt-3' placeholder='*********'/>

        <input type="submit" disabled={loading} 
          className="p-2 rounded border cursor-pointer text-center bg-green-800 text-white border-green-800"
          defaultValue={loading ? "Processing..." : "Register"}/>
        
        <Link href="/signin" className='p-2 rounded border text-green-800 border-green-800 bg-white cursor-pointer text-center' >
          Sign In
        </Link>
      </form>
    </main>
  )
}
