'use client'

import { useAuthStore } from "../../store"
import AdminContests from "../../components/contests/AdminContests"
import CandidateContests from "../../components/contests/CandidateContests"

export default function Contests() {
    const { role } = useAuthStore()

    if (role === 'ADMIN') {
        return <AdminContests />
    }

    return <CandidateContests />
}