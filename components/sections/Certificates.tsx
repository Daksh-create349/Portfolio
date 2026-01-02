"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { X, ExternalLink } from "lucide-react"

interface Certificate {
    id: string
    title: string
    issuer: string
    date: string
    image: string
    rotation?: number
}

const certificates: Certificate[] = [
    {
        id: "mumbai-hacks",
        title: "Mumbai Hacks 2024 Participant",
        issuer: "Tech Entrepreneurs Association of Mumbai",
        date: "November 2024",
        image: "/certificates/cert_hacks.png",
    },
    {
        id: "aws",
        title: "Solutions Architecture Job Simulation",
        issuer: "Forage (AWS)",
        date: "December 2025",
        image: "/certificates/cert_aws.png",
    },
    {
        id: "ea",
        title: "Software Engineering Job Simulation",
        issuer: "Forage (Electronic Arts)",
        date: "December 2025",
        image: "/certificates/cert_ea.png",
    },
    {
        id: "tata",
        title: "Cybersecurity Analyst Job Simulation",
        issuer: "Forage (Tata)",
        date: "December 2025",
        image: "/certificates/cert_tata.png",
        rotation: 90,
    },
    {
        id: "fintech-olympiad",
        title: "Fintech Olympiad 2025 Regional Round",
        issuer: "ITM Business School",
        date: "2025",
        image: "/certificates/cert_fintech.png",
    },
    {
        id: "jpmorgan",
        title: "Software Engineering Job Simulation",
        issuer: "Forage (JP Morgan Chase & Co.)",
        date: "September 2025",
        image: "/certificates/cert_jpmorgan.png",
        rotation: 90,
    },
    {
        id: "python-scaler",
        title: "Python Course for Beginners",
        issuer: "Scaler Topics",
        date: "June 2025",
        image: "/certificates/cert_python_scaler.png",
    },
    {
        id: "java",
        title: "Java Course - Mastering Fundamentals",
        issuer: "Scaler Topics",
        date: "June 2025",
        image: "/certificates/cert_java.png",
    },
]

export function Certificates() {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="w-full py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 mb-2">Credentials</h2>
                <h3 className="text-3xl font-bold text-white">Certifications & Achievements</h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setSelectedCert(cert)}
                        className="group relative cursor-pointer"
                    >
                        {/* Card Container */}
                        <div className="relative h-64 w-full overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur-sm transition-all duration-300 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]">

                            {/* Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className={`object-cover transition-transform duration-500 opacity-60 group-hover:opacity-100 ${cert.rotation === 90
                                        ? "rotate-90 scale-[1.6] group-hover:scale-[1.7]"
                                        : "group-hover:scale-110"
                                        }`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                                <div className="text-emerald-400 text-xs font-mono mb-1 uppercase tracking-widest">{cert.issuer}</div>
                                <h4 className="text-white font-bold text-lg leading-tight mb-2 line-clamp-2 group-hover:text-emerald-300 transition-colors">{cert.title}</h4>
                                <div className="text-zinc-500 text-xs font-mono">{cert.date}</div>
                            </div>

                            {/* Hover Overlay Icon */}
                            <div className="absolute top-4 right-4 opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                                    <ExternalLink className="w-4 h-4 text-white" />
                                </div>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {mounted && createPortal(
                <AnimatePresence>
                    {selectedCert && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl" onClick={() => setSelectedCert(null)}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center rounded-xl overflow-hidden shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors border border-white/10"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="relative w-full flex-1 min-h-0">
                                    <Image
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        fill
                                        className="object-contain"
                                        style={{ transform: selectedCert.rotation ? `rotate(${selectedCert.rotation}deg)` : "none" }}
                                    />
                                </div>

                                <div className="w-full bg-zinc-900/80 backdrop-blur-md border-t border-white/5 p-6 shrink-0 text-center">
                                    <h3 className="text-2xl font-bold text-white mb-1 shadow-black drop-shadow-md">{selectedCert.title}</h3>
                                    <p className="text-emerald-400 font-mono text-sm tracking-wider uppercase">{selectedCert.issuer} • {selectedCert.date}</p>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    )
}
