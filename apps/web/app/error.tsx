"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">

            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-red/5 blur-[150px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-xl text-center p-8 rounded-3xl bg-[#111] border border-white/10 shadow-2xl backdrop-blur-xl">
                <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
                    <AlertTriangle className="w-10 h-10 text-brand-red" />
                </div>

                <h2 className="text-3xl font-bold font-serif mb-4 text-white">System Malfunction</h2>
                <p className="text-slate-400 mb-8">
                    Something went wrong in the core. The system encountered an unexpected error.
                </p>

                {error.digest && (
                    <div className="mb-8 p-3 bg-black/50 rounded-lg border border-white/5 font-mono text-xs text-slate-500 break-all">
                        Error Digest: {error.digest}
                    </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => reset()}
                        className="px-6 py-3 bg-brand-red hover:bg-red-700 text-white rounded-xl font-bold shadow-lg shadow-brand-red/20 transition-all flex items-center justify-center gap-2"
                    >
                        <RefreshCw size={18} /> Try Again
                    </button>
                    <Link href="/">
                        <button className="w-full px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                            <Home size={18} /> Return Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
