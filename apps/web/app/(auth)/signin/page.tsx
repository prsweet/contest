'use client'

import { toast, ToastContainer } from "react-toastify"
import { LoginAPI } from "../../api"
import { redirect } from "next/navigation"
import { useAuthStore } from "../../store"
import { useRouter } from "next/navigation"

export default function SigninPage() {
    const login = useAuthStore((state) => state.login)
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
    const router = useRouter()
    console.log(isAuthenticated, 'isAuthenticated')
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        try {
            const response = await LoginAPI(email as string, password as string)
            console.log(response)
            if (response.success) {
                login(response.data.token, response.data.role)
                toast.success(response.message)
                router.push('/dashboard')
            }
        } catch (error) {
            toast.error(error as string)
        }
    }
    if (isAuthenticated) {
        return router.push('/dashboard')
    } return (
        <div>
            <ToastContainer />
            <form onSubmit={handleLogin}>
                <input type="email" name="email" />
                <input type="password" name="password" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}