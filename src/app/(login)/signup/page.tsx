"use client";
import Link from 'next/link';
import toast from 'react-hot-toast';
import axios from "axios";
import { useRouter } from 'next/navigation';
import { FormEventHandler, useState } from 'react';

type FormData = {
  username : String,
  email: String,
  password: String
};

export default function SignUp() {
  const router = useRouter()
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState<FormData>({
      username : '',
      email: '',
      password: ''
  });

  const [errors, setErrors] = useState({
      username : false,
      email: false,
      password: false
  })
  const handleChange = (event : any) => {
    let name = event.target.name
    let value = event.target.value

    setUser( { ...user, [name] : value })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

      setLoading(true)
      axios.post('/api/signup', user)
      .then((res)=>{
        if(res.status === 200){
          toast.success("Sign Up Completed")
          router.push("/signin")
        }
      })
      .catch((err)=>{
        if(err.response.status === 400){
          toast.error(err.response.data.error)
          setErrors({username:false, email:false, password:false})

          if(err.response.data.error === "Username Already Exist"){
            setErrors({...errors, username:true})
          }
          if(err.response.data.error === "Email Already Exist"){
            setErrors({...errors, email:true})
          }
        }
      })

    setLoading(false)
  }
  return (
    <main className="flex items-center justify-center h-screen text-black">
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 bg-gray-200 rounded p-12 w-96'>

        <strong className='m-auto'>Sign Up</strong>
        <label htmlFor='signupUsername'>Username : {errors.username && <span className='-mt-4 text-red-700'>This field is required</span>}</label>
        {/* <input type='text' {...register("username", { required: true, maxLength: 20 })} className='p-2 rounded -mt-3' placeholder='Username'/> */}
        <input type='text' id="signupUsername" onChange={handleChange} name="username" required maxLength={20} className='p-2 rounded -mt-3' placeholder='your username' pattern="[A-Za-z]+" title="Only alphabets | without spaces"/>

        <label htmlFor='signupEmail'>Email : {errors.email && <span className='-mt-4 text-red-700'>This field is required</span>}</label>
        {/* <input type='email' {...register("email", { required: true, maxLength: 20 })} className='p-2 rounded -mt-3' placeholder='test@gmail.com'/> */}
        <input type='email' id='signupEmail' onChange={handleChange} name="email" required maxLength={20} className='p-2 rounded -mt-3' placeholder='test@gmail.com' inputMode='email'/>

        <label htmlFor='signupPass'>Password : {errors.password && <span className='-mt-4 text-red-700'>This field is required</span>}
        </label>
        <input id="signupPass" onChange={handleChange} name='password' type='password' required maxLength={20} className='p-2 rounded -mt-3' placeholder='*********' />

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
