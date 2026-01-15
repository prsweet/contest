"use client";

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Zap, Trophy, Users, Code2, Shield, Globe, Terminal, ArrowUpRight, Flame, Target } from 'lucide-react';
import Navbar from './components/layout/navbar';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans selection:bg-brand-red/30 overflow-x-hidden">
      <Navbar />

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full bg-brand-red/20 blur-[150px] animate-pulse" />
        <div className="absolute top-[20%] right-[-20%] w-[600px] h-[600px] rounded-full bg-red-900/20 blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[20%] w-[800px] h-[800px] rounded-full bg-brand-red/10 blur-[150px]" />
      </div>

      <main className="relative z-10 container mx-auto px-4 pt-32 pb-20">

        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-brand-red/50 bg-brand-red/10 text-brand-red text-sm font-mono uppercase tracking-widest rounded-full shadow-[0_0_15px_-3px_rgba(220,38,38,0.3)]"
            >
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              System v2.0 Live
            </motion.div>

            <h1 className="text-7xl md:text-9xl font-serif leading-[0.85] text-white tracking-tighter mb-8 uppercase">
              Code <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-white animate-text">Battle</span> <br />
              Arena
            </h1>

            <p className="text-slate-400 text-lg md:text-xl max-w-xl border-l-4 border-brand-red pl-8 font-light leading-relaxed">
              Step into the <span className="text-white font-medium">ultimate proving ground</span>. Compete in high-stakes algorithmic duels and claim your place among the elite.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col gap-8 items-start md:items-end"
          >
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-xs font-bold text-white relative z-10 shadow-lg">
                    U{i}
                  </div>
                ))}
              </div>
              <div className="text-right">
                <span className="block text-2xl font-bold text-white">10K+</span>
                <span className="text-xs text-brand-red uppercase tracking-widest font-bold">Active Gladiators</span>
              </div>
            </div>

            <Link href="/signin">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-red hover:bg-red-600 text-white px-12 py-6 rounded-full font-bold text-xl transition-all flex items-center gap-3 group shadow-[0_0_50px_-10px_rgba(220,38,38,0.5)] border border-red-400/20"
              >
                Enter Arena <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 grid-rows-auto gap-6"
        >

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="md:col-span-5 md:row-span-2 bg-gradient-to-b from-brand-panel to-black border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group min-h-[500px]"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-[120px] group-hover:bg-brand-red/20 transition-all duration-700" />

            <div className="flex justify-between items-start relative z-10">
              <div className="p-5 bg-brand-red/10 border border-brand-red/20 rounded-2xl">
                <Trophy className="w-10 h-10 text-brand-red" />
              </div>
              <div className="text-right">
                <p className="text-6xl font-serif text-white/20 group-hover:text-white/40 transition-colors">01</p>
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                <Target size={14} className="text-brand-red" /> Global Rankings
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-none">Dominate <br />The Ladder</h3>
              <p className="text-slate-400 leading-relaxed max-w-sm border-l-2 border-white/20 pl-4">
                Rise through the ranks. Earn exclusive badges. Prove your superiority in real-time combat against the world's best.
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            className="md:col-span-7 bg-brand-red rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group shadow-[0_20px_40px_-15px_rgba(220,38,38,0.3)] min-h-[240px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />

            <div className="relative z-10 max-w-md">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                <span className="text-xs font-bold text-white uppercase tracking-widest bg-black/20 px-2 py-1 rounded">Live Event</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Weekly Championship</h3>
              <p className="text-white/90 font-medium">Prize pool: <span className="text-black font-bold bg-white/20 px-1 rounded">50,000 XP</span>. Join the ultimate coding showdown.</p>
            </div>

            <button className="relative z-10 mt-6 md:mt-0 w-16 h-16 bg-white text-brand-red rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
              <ArrowUpRight className="w-8 h-8" />
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-[#050505] border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center group hover:border-brand-red/50 transition-colors relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            <div className="w-20 h-20 bg-brand-panel rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:border-brand-red/50 group-hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.3)] transition-all duration-500 relative z-10">
              <Globe className="w-10 h-10 text-slate-400 group-hover:text-brand-red transition-colors" strokeWidth={1.5} />
            </div>
            <h4 className="font-bold text-white text-xl mb-1 relative z-10">Global Network</h4>
            <p className="text-xs text-slate-500 tracking-wider uppercase relative z-10">Servers in 5 Regions</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="md:col-span-3 bg-[#050505] border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between group hover:border-brand-red/50 transition-colors relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-red/10 rounded-full blur-[50px] group-hover:bg-brand-red/20 transition-all" />
            <div className="flex justify-between items-start relative z-10">
              <Shield className="w-8 h-8 text-slate-500 group-hover:text-brand-red transition-colors" />
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <div className="relative z-10">
              <div className="text-4xl font-bold text-white mb-1 group-hover:text-brand-red transition-colors">99.9%</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Uptime</div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-12 bg-[#080808] border border-white/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 text-brand-red mb-6 bg-brand-red/5 px-3 py-1 rounded-full border border-brand-red/10">
                <Terminal size={16} />
                <span className="font-mono text-xs uppercase tracking-widest">Developer API</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Built for <span className="italic text-slate-500">Builders</span></h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                Seamlessly integrate contest data into your ecosystem. Webhooks, raw socket streams, and comprehensive documentation at your fingertips.
              </p>

              <button className="mt-8 text-white font-medium hover:text-brand-red flex items-center gap-2 transition-colors">
                Read Documentation <ArrowRight size={16} />
              </button>
            </div>

            <div className="flex-1 w-full max-w-xl relative group z-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-red-900 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-[#0F0F0F] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between px-4 py-3 bg-[#151515] border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-xs text-slate-600 font-mono">contest_init.ts</span>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                  <div className="text-slate-300">
                    <span className="text-purple-400">import</span> {'{'} Battle {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'@contest/core'</span>;
                    <br /><br />
                    <span className="text-slate-500">// Initialize arena</span>
                    <br />
                    <span className="text-purple-400">const</span> arena = <span className="text-blue-400">new</span> Battle({'{'}
                    <br />
                    &nbsp;&nbsp;mode: <span className="text-green-400">'SUDDEN_DEATH'</span>,
                    <br />
                    &nbsp;&nbsp;players: <span className="text-brand-red font-bold">2048</span>,
                    <br />
                    &nbsp;&nbsp;region: <span className="text-green-400">'us-east-1'</span>
                    <br />
                    {'}'});
                    <br /><br />
                    <span className="text-brand-red">await</span> arena.start();
                    <div className="fixed top-4 right-4 text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">
                      <Zap size={16} className="fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </main>
    </div>
  );
}