"use client"

import Link from "next/link"
import { useAuthStore } from "../../store"
import { NAV_ITEMS } from "../../config/navigation"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, LogOut, ChevronRight, User, Settings, ChevronDown, UserPlus, LogIn } from "lucide-react"

export default function Navbar() {
    const { isAuthenticated, role, logout } = useAuthStore((s) => s)
    const router = useRouter()
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [profileMenuOpen, setProfileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Logic to determine what to render
    const items = (isAuthenticated && role) ? NAV_ITEMS[role as keyof typeof NAV_ITEMS] : []

    const handleLogout = () => {
        logout()
        router.push("/signin")
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href={isAuthenticated ? "/dashboard" : "/"} className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-red to-red-800 flex items-center justify-center text-white font-bold text-sm">
                            1C
                        </div>
                        <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 group-hover:from-red-400 group-hover:to-brand-red transition-all duration-300">
                            100xContest
                        </span>
                    </Link>

                    {isAuthenticated && items ? (
                        <>
                            <div className="hidden md:flex items-center gap-1">
                                {items.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg group"
                                        >
                                            {isActive && (
                                                <motion.div
                                                    layoutId="navbar-indicator"
                                                    className="absolute inset-0 bg-brand-red/10 rounded-lg border border-brand-red/20 shadow-[0_0_10px_-2px_rgba(220,38,38,0.2)]"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                            <span className="relative z-10">{item.label}</span>
                                        </Link>
                                    )
                                })}
                            </div>

                            <div className="hidden md:flex items-center gap-4">
                                <div className="relative">
                                    <button
                                        onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                                        className="flex items-center gap-3 p-1 pr-3 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-red to-red-800 flex items-center justify-center text-white font-bold text-xs">
                                            SC
                                        </div>
                                        <span className="text-sm font-medium text-slate-300">Sparsh</span>
                                        <ChevronDown size={14} className={`text-slate-500 transition-transform ${profileMenuOpen ? "rotate-180" : ""}`} />
                                    </button>

                                    <AnimatePresence>
                                        {profileMenuOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                                className="absolute right-0 top-full mt-2 w-56 bg-brand-panel border border-white/10 rounded-xl shadow-xl backdrop-blur-xl overflow-hidden py-1"
                                            >
                                                <div className="px-4 py-3 border-b border-white/5">
                                                    <p className="text-sm font-medium text-white">Sparsh Codes</p>
                                                    <p className="text-xs text-slate-500 truncate">sparsh@example.com</p>
                                                </div>
                                                <div className="p-1">
                                                    <Link href="/profile" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                                        <User size={16} /> Profile
                                                    </Link>
                                                    <Link href="/settings" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                                        <Settings size={16} /> Settings
                                                    </Link>
                                                </div>
                                                <div className="p-1 border-t border-white/5">
                                                    <button
                                                        onClick={handleLogout}
                                                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                                                    >
                                                        <LogOut size={16} /> Logout
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </>
                    ) : (
                        // GUEST STATE - Signin/Signup Buttons
                        <div className="hidden md:flex items-center gap-4">
                            <Link href="/signin">
                                <button className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-2">
                                    <LogIn size={16} /> Sign In
                                </button>
                            </Link>
                            <Link href="/signup">
                                <button className="px-5 py-2 bg-brand-red hover:bg-red-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-brand-red/20 hover:shadow-brand-red/30 transition-all flex items-center gap-2 border border-red-500/20">
                                    <UserPlus size={16} /> Sign Up
                                </button>
                            </Link>
                        </div>
                    )}

                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/10 bg-[#020617]/95 backdrop-blur-xl"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {isAuthenticated && items ? (
                                <>
                                    {items.map((item) => {
                                        const isActive = pathname === item.href
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${isActive
                                                    ? "bg-brand-red/10 text-brand-red border border-brand-red/20"
                                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                                    }`}
                                            >
                                                <span className="font-medium">{item.label}</span>
                                                {isActive && <ChevronRight size={16} />}
                                            </Link>
                                        )
                                    })}
                                    <div className="pt-4 mt-4 border-t border-white/10">
                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-red-400 bg-red-500/5 hover:bg-red-500/10 rounded-xl transition-all border border-red-500/10 hover:border-red-500/20"
                                        >
                                            <LogOut size={18} />
                                            Sign Out
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="space-y-3">
                                    <Link href="/signin" onClick={() => setMobileMenuOpen(false)}>
                                        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5">
                                            <LogIn size={18} /> Sign In
                                        </button>
                                    </Link>
                                    <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                                        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-brand-red hover:bg-red-700 rounded-xl transition-all shadow-lg shadow-brand-red/20">
                                            <UserPlus size={18} /> Sign Up
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
