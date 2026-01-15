export default function Loading() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center z-[9999]">
            <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-brand-red/20 border-t-brand-red rounded-full animate-spin mb-4" />
                <div className="text-brand-red font-mono font-bold tracking-widest animate-pulse">
                    LOADING SYSTEM...
                </div>
                <div className="absolute inset-0 bg-brand-red/20 blur-2xl rounded-full -z-10 animate-pulse" />
            </div>
        </div>
    );
}
