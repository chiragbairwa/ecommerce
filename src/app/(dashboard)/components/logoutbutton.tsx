"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

const LogoutButton = () => {
  const router = useRouter()

  const onLogout = async()=>{
    try {
      await axios.get("/api/logout")
      toast.success("Logout Successful")
      router.push("/signin")
    } catch (error: any) {
      
    }
  }
  return (
    <button onClick={onLogout} className="flex gap-2 relative">
      Logout
    </button>
  )
}

export default LogoutButton