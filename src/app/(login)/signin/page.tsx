"use client";
import { useForm } from 'react-hook-form'

type FormData = {
  email: string,
  password: string
};


export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const onSubmit = (data: {email: String, password: String}) => {
    

    
    };

  return (
    <main className="flex items-center justify-center h-screen text-black px-24">

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 bg-gray-200 rounded p-12 w-96'>
        <strong className='m-auto'>Sign In</strong>
        <label>Email</label>
        <input type='email' {...register("email")} required className='p-2 rounded -mt-3' placeholder='test@gmail.com'/>
        
        <label>Password</label>
        <input type='password' {...register("password")} required className='p-2 rounded -mt-3' placeholder='*********'/>

        <input type="submit" className='p-2 rounded border text-white bg-green-800 cursor-pointer' defaultValue="Login" />
      </form>
    </main>
  )
}
