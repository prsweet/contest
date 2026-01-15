import Navbar from "../layout/navbar";
import { motion } from "framer-motion"
import Link from "next/link";
import { Play, Clock, BarChart3, ChevronRight, Trophy, Calendar, Zap, Target } from "lucide-react";

export default function CandidateDashboard() {
    return (
        <div className="min-h-screen bg-black text-slate-100 selection:bg-brand-red/30 relative overflow-hidden">
            <Navbar />

            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-brand-red/5 blur-[120px] animate-pulse" />
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10">
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs font-mono uppercase tracking-widest"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500" /> System Online
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-2">
                        Welcome Back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">Warrior</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl">The arena awaits. Ready to challenge yourself today?</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group shadow-[0_0_50px_-20px_rgba(220,38,38,0.2)]"
                        >
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-red/20 transition-all duration-700" />
                            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

                            <div className="relative z-10">
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-brand-red text-white shadow-lg shadow-brand-red/30 mb-6 tracking-wide uppercase">
                                    <Zap size={12} className="fill-current" />
                                    Live Event
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Weekly Coding <br /> Challenge #45</h2>
                                <p className="text-slate-400 mb-8 max-w-xl text-lg leading-relaxed">Master your Data Structures and Algorithms skills. Top performers get a chance to win exclusive badges and XP.</p>

                                <div className="flex flex-wrap gap-6 mb-8 text-sm font-medium">
                                    <div className="flex items-center gap-2 text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                                        <Clock size={16} className="text-brand-red" />
                                        <span>2h 15m remaining</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                                        <Trophy size={16} className="text-yellow-400 fill-current" />
                                        <span>500 Points Pool</span>
                                    </div>
                                </div>

                                <Link href="/contest/1">
                                    <button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg rounded-xl hover:bg-brand-red hover:text-white transition-all shadow-xl hover:shadow-brand-red/30 group/btn">
                                        <Play size={20} className="fill-current" />
                                        Enter Arena
                                        <ChevronRight className="w-5 h-5 opacity-0 -ml-2 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all" />
                                    </button>
                                </Link>
                            </div>
                        </motion.div>

                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-white font-serif">Upcoming Battles</h2>
                                <button className="text-sm font-bold text-slate-500 hover:text-white flex items-center gap-1 transition-colors uppercase tracking-wider">
                                    View All <ChevronRight size={16} />
                                </button>
                            </div>
                            <div className="space-y-4">
                                {[1, 2, 3].map((_, i) => (
                                    <div key={i} className="group flex items-center justify-between p-5 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-brand-red/30 hover:bg-[#111] transition-all">
                                        <div className="flex items-center gap-5">
                                            <div className="w-14 h-14 rounded-xl bg-[#151515] flex items-center justify-center text-slate-500 group-hover:text-brand-red group-hover:scale-110 transition-all duration-300 border border-white/5">
                                                <Calendar size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white group-hover:text-brand-red transition-colors mb-1">Dynamic Programming Basics</h3>
                                                <div className="flex items-center gap-3 text-xs text-slate-500 uppercase tracking-wide font-medium">
                                                    <span>Starts in 2 days</span>
                                                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                                                    <span>100 Points</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="px-5 py-2.5 rounded-xl bg-white/5 text-sm font-bold text-slate-300 hover:bg-white hover:text-black transition-all border border-white/5">
                                            Register
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-[#050505] border border-white/5 rounded-[2rem] p-6">
                            <h2 className="text-xl font-bold text-white mb-6 font-serif">Performance</h2>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2 font-medium">
                                        <span className="text-slate-400">Problems Solved</span>
                                        <span className="text-white">145  <span className="text-slate-600">/ 200</span></span>
                                    </div>
                                    <div className="h-2 bg-[#111] rounded-full overflow-hidden border border-white/5">
                                        <div className="h-full w-[72%] bg-brand-red rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-5 rounded-2xl bg-[#111] border border-white/5 text-center group hover:border-white/10 transition-colors">
                                        <div className="text-yellow-500 mb-2 flex justify-center group-hover:scale-110 transition-transform"><Trophy size={24} className="fill-current" /></div>
                                        <div className="text-2xl font-bold text-white">12</div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Wins</div>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-[#111] border border-white/5 text-center group hover:border-white/10 transition-colors">
                                        <div className="text-brand-red mb-2 flex justify-center group-hover:scale-110 transition-transform"><Target size={24} /></div>
                                        <div className="text-2xl font-bold text-white">Top 5%</div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Rank</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-b from-brand-red to-red-900 rounded-[2rem] p-8 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-2xl font-bold mb-2 font-serif">Pro Access</h3>
                                <p className="text-red-100 text-sm mb-6 leading-relaxed">Unlock advanced analytics and premium problem sets.</p>
                                <button className="w-full py-3 bg-white text-brand-red rounded-xl font-bold text-sm hover:bg-red-50 transition-colors shadow-lg">
                                    Upgrade Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
