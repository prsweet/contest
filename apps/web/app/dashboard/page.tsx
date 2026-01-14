
'use client'
import { redirect } from "next/navigation"
import AdminDashboard from "../components/dashbaord/AdminDashboard"
import CandidateDashboard from "../components/dashbaord/CandidateDashboard"
import { useAuthStore } from "../store"

export default function Dashboard() {
    const { isAuthenticated, role } = useAuthStore((state) => state)
    if (!isAuthenticated) {
        redirect('/signin')
    }
    if (role === 'ADMIN') {
        return <AdminDashboard />
    }
    return <CandidateDashboard />
}