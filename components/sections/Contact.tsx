"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Send, Loader2, Lock } from "lucide-react"
import { useState, useEffect } from "react"
import { useUser, useClerk } from "@clerk/nextjs"
import { LiquidButton } from "../ui/liquid-glass-button"
import { Typewriter } from "../ui/typewriter"

export function Contact() {
    const [focusedField, setFocusedField] = useState<string | null>(null)
    const { user, isSignedIn } = useUser()
    const { openSignIn, signOut } = useClerk()
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        if (isSignedIn && user) {
            setName(`${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Authenticated User')
        }
    }, [isSignedIn, user])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!isSignedIn) {
            openSignIn()
            return
        }

        if (!message.trim()) return

        setIsLoading(true)
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, message })
            })

            if (res.ok) {
                setIsSuccess(true)
                setMessage("")
                setTimeout(() => {
                    setIsSuccess(false)
                }, 5000)
            } else {
                alert("Failed to establish transmit connection.")
            }
        } catch (error) {
            alert("System error during transmission.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex min-h-full w-full flex-col justify-start md:justify-center py-20 md:py-0 px-2 sm:px-4 md:px-6 max-w-2xl mx-auto relative">
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
                <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tighter md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-emerald-500/20">
                    Initialize Uplink
                </h2>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 font-mono text-sm relative z-10 p-5 sm:p-6 md:p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-emerald-500/30 rounded-tl-lg" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-emerald-500/30 rounded-tr-lg" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-emerald-500/30 rounded-bl-lg" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-emerald-500/30 rounded-br-lg" />

                {isSignedIn && (
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
                        <button
                            type="button"
                            onClick={() => signOut()}
                            className="text-[10px] md:text-xs font-mono tracking-widest text-zinc-500 hover:text-red-400 transition-colors px-3 py-1 border border-zinc-800 hover:border-red-500/50 rounded-full bg-black/50 hover:bg-red-500/10 backdrop-blur-md"
                        >
                            DISCONNECT
                        </button>
                    </div>
                )}

                {isSignedIn ? (
                    <div className="space-y-4 md:space-y-6">
                        <div className="group relative">
                            <label className={`absolute left-4 top-3 text-xs transition-all pointer-events-none ${focusedField === 'name' ? 'text-emerald-400' : 'text-zinc-500'}`}>
                     // YOUR_NAME
                            </label>
                            <input
                                type="text"
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField(null)}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-lg border border-white/10 bg-black/40 p-3 pt-7 md:p-4 md:pt-8 text-white outline-none focus:border-emerald-500/50 focus:bg-emerald-900/10 focus:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300 opacity-100"
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
                                value={user?.emailAddresses[0]?.emailAddress || ''}
                                readOnly
                                className="w-full rounded-lg border border-white/10 bg-black/40 p-3 pt-7 md:p-4 md:pt-8 text-white outline-none focus:border-emerald-500/50 focus:bg-emerald-900/10 focus:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300 opacity-80"
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
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full rounded-lg border border-white/10 bg-black/40 p-3 pt-7 md:p-4 md:pt-8 text-white outline-none focus:border-emerald-500/50 focus:bg-emerald-900/10 focus:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300 resize-none"
                                placeholder="Enter transmission content..."
                                disabled={isLoading}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-16 px-4 text-center border border-emerald-500/20 bg-emerald-500/5 rounded-2xl backdrop-blur-md relative overflow-hidden group transition-all duration-500 hover:border-emerald-500/40 hover:bg-emerald-500/10">
                        {/* Glowing ambient background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full pointer-events-none" />

                        <div className="relative mb-6">
                            <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full" />
                            <div className="h-16 w-16 rounded-full border border-emerald-500/30 bg-black/40 flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                <Lock className="w-6 h-6 text-emerald-400" />
                            </div>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-widest font-mono drop-shadow-md">
                            Identity Verification
                        </h3>
                        <p className="text-zinc-400 max-w-sm mx-auto text-xs leading-relaxed font-mono opacity-90">
                            Please establish your identity to unlock the transmission array and securely route messages directly to my inbox.
                        </p>
                    </div>
                )}

                <div className="flex justify-center pt-2">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 w-full md:w-auto overflow-hidden rounded-full bg-emerald-500/10 border border-emerald-500/50 font-mono text-sm font-bold tracking-widest text-emerald-400 transition-all duration-300 hover:bg-emerald-500/20 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] disabled:opacity-50 disabled:hover:scale-100"
                    >
                        <span className="relative z-10 flex items-center gap-2 justify-center">
                            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                            {isLoading ? "TRANSMITTING..." : (isSignedIn ? "TRANSMIT_DATA" : "AUTHENTICATE_TO_TRANSMIT")}
                        </span>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </button>
                </div>
            </form>
        </div>
    )
}
