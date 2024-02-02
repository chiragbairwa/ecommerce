'use client'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const LogoutButton = () => {
	const router = useRouter()

	const onLogout = async () => {
		try {
			let res = await fetch('/api/logout')
			res = await res.json()
			toast.success('Logout Successful')
			router.push('/signin')
		} catch (error: any) {
			console.log(error)
		}
	}
	return (
		<button
			onClick={onLogout}
			className="flex gap-2 relative border py-1 px-3 rounded hover:border-red-500 hover:bg-red-500 hover:text-white"
		>
			Logout
		</button>
	)
}

export default LogoutButton
