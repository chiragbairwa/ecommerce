"use client";
import Link from 'next/link';
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';

type FormData = {
  username : String,
  email: String,
  password: String
};

const getHashandSalt = async (password : String)=>{
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      unHashPass : password
    })
  };

  const response = await fetch(`http://localhost:3000/api/hash`, requestOptions)
  
  return response.json()
}

const onSubmit = async (data: {email: String, password: String, username : String}) => {
  const {hashPass, salt} = await getHashandSalt(data.password)

  const options = {
    method : "POST",
    headers : { 'Content-Type': 'application/json' },
    body : JSON.stringify({
        username : data.username,
        email : data.email,
        hash : hashPass,
        salt : salt
      }
    )
  }
  
  const res = await fetch('http://localhost:3000/api/signup', options)
  if(res.ok){
    toast.success("Sign Up Completed")
  }
}

export default function SignUp() {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      username : '',
      email: '',
      password: ''
    }
  });

  return (
    <main className="flex items-center justify-center h-screen text-black">
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 bg-gray-200 rounded p-12 w-96'>

        <strong className='m-auto'>Sign Up</strong>
        <label>Username : {errors.username && <span className='-mt-4 text-red-700'>This field is required</span>}</label>
        <input type='text' {...register("username", { required: true, maxLength: 20 })} className='p-2 rounded -mt-3' placeholder='Username'/>

        <label>Email : {errors.email && <span className='-mt-4 text-red-700'>This field is required</span>}</label>
        <input type='email' {...register("email", { required: true, maxLength: 20 })} className='p-2 rounded -mt-3' placeholder='test@gmail.com'/>
        
        <label>Password : {errors.password && <span className='-mt-4 text-red-700'>This field is required</span>}
        </label>
        <input type='password' {...register("password", { required: true, maxLength: 20 })} className='p-2 rounded -mt-3' placeholder='*********'/>

        <input type="submit" className='p-2 rounded border text-white bg-green-800 cursor-pointer' defaultValue="Register" />
        <Link href="/signin" className='p-2 rounded border text-green-800 border-green-800 bg-white cursor-pointer text-center' >
          Sign In
        </Link>
      </form>
    </main>
  )
}
