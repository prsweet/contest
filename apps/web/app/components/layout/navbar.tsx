"use client"

import Link from "next/link"
import { useAuthStore } from "../../store"
import { NAV_ITEMS } from "../../config/navigation"
import { useRouter } from "next/navigation"

export default function Navbar() {
    const { isAuthenticated, role, logout } = useAuthStore((s) => s)
    const router = useRouter()
    if (!role) {
        logout()
        router.push('/signin')
        return null

    }

    if (!isAuthenticated) return null

    const items = NAV_ITEMS[role as keyof typeof NAV_ITEMS]

    if (!items) return null

    return (
        <nav>
            <div>Logo</div>

            <ul>
                {items.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>

            <button onClick={() => logout()}>
                Logout
            </button>
        </nav>
    )
}
