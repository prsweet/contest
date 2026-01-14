'use client'

import { SignupAPI } from "../../api"
import { useAuthStore } from "../../store"
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";


export default function SignUpPage() {

    const signin = useAuthStore((state) => state.signin)
    const router = useRouter()
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const name = formData.get('name')
        const email = formData.get('email')
        const password = formData.get('password')
        try {
            const response = await SignupAPI(name as string, email as string, password as string)
            if (response.success) {
                signin(response.data.token, response.data.role)
                toast.success(response.message)
                router.push('/dashboard')
            }
        } catch (error) {
            toast.error(error as string)
        }
    }
    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleLogin}>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <input type="password" name="password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}