"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Send } from "lucide-react"
import { useState } from "react"
import { LiquidButton } from "../ui/liquid-glass-button"
import { Typewriter } from "../ui/typewriter"

export function Contact() {
    const [focusedField, setFocusedField] = useState<string | null>(null)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSuccess(true)
        setTimeout(() => {
            setIsSuccess(false)
        }, 5000)
    }

    return (
        <div className="flex h-full w-full flex-col justify-center px-6 max-w-2xl mx-auto relative">
            {/* Success Modal */}
            <AnimatePresence>
                {isSuccess && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-xl"
                    >
                        <div className="w-full max-w-md border border-emerald-500/50 bg-black/90 p-6 rounded-lg shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                            <div className="flex items-center gap-2 mb-4 border-b border-emerald-500/20 pb-2">
                                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                                <div className="h-3 w-3 rounded-full bg-emerald-500" />
                                <span className="ml-auto text-xs font-mono text-emerald-500/70">STATUS: SENT</span>
                            </div>
                            <div className="font-mono text-emerald-400 space-y-2">
                                <p>&gt; ENCRYPTING PACKET...</p>
                                <p>&gt; UPLOADING TO SERVER...</p>
                                <div className="text-white font-bold mt-4 flex">
                                    <span className="mr-2">&gt;</span>
                                    <Typewriter text="Thank you for contacting" speed={50} />
                                </div>
                                <p className="text-zinc-400 text-xs mt-2">Terminating connection in 5s...</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 text-center"
            >
                <div className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400 border border-emerald-500/20 mb-4">
                    SECURE_UPLINK_V4.0
                </div>
                <h2 className="text-4xl font-bold uppercase tracking-tighter text-white md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-emerald-500/20">
                    Initialize Uplink
                </h2>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6 font-mono text-sm relative z-10 p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-emerald-500/30 rounded-tl-lg" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-emerald-500/30 rounded-tr-lg" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-emerald-500/30 rounded-bl-lg" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-emerald-500/30 rounded-br-lg" />

                <div className="group relative">
                    <label className={`absolute left-4 top-3 text-xs transition-all pointer-events-none ${focusedField === 'name' ? 'text-emerald-400' : 'text-zinc-500'}`}>
             // YOUR_NAME
                    </label>
                    <input
                        type="text"
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full rounded-lg border border-white/10 bg-black/40 p-4 pt-8 text-white outline-none focus:border-emerald-500/50 focus:bg-emerald-900/10 focus:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300"
                        placeholder="Enter identifier..."
                    />
                </div>

                <div className="group relative">
                    <label className={`absolute left-4 top-3 text-xs transition-all pointer-events-none ${focusedField === 'email' ? 'text-emerald-400' : 'text-zinc-500'}`}>
             // CONTACT_PROTOCOL
                    </label>
                    <input
                        type="email"
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full rounded-lg border border-white/10 bg-black/40 p-4 pt-8 text-white outline-none focus:border-emerald-500/50 focus:bg-emerald-900/10 focus:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300"
                        placeholder="Enter email address..."
                    />
                </div>

                <div className="group relative">
                    <label className={`absolute left-4 top-3 text-xs transition-all pointer-events-none ${focusedField === 'message' ? 'text-emerald-400' : 'text-zinc-500'}`}>
             // DATA_PACKET
                    </label>
                    <textarea
                        rows={5}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full rounded-lg border border-white/10 bg-black/40 p-4 pt-8 text-white outline-none focus:border-emerald-500/50 focus:bg-emerald-900/10 focus:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300 resize-none"
                        placeholder="Enter transmission content..."
                    />
                </div>

                <div className="flex justify-center pt-2">
                    <button
                        type="submit"
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 w-full md:w-auto overflow-hidden rounded-full bg-emerald-500/10 border border-emerald-500/50 font-mono text-sm font-bold tracking-widest text-emerald-400 transition-all duration-300 hover:bg-emerald-500/20 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Send className="h-4 w-4" />
                            TRANSMIT_DATA
                        </span>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </button>
                </div>
            </form>
        </div>
    )
}
