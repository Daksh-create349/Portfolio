"use client"

import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { ArrowUpRight, MessageSquare, Send, Loader2 } from "lucide-react"
import { useUser, useClerk } from "@clerk/nextjs"
import { Typewriter } from "../ui/typewriter"

interface Project {
    title: string
    category: string
    image: string
    video?: string
    description?: string
    exeName?: string
    link: string
}

const projects: Project[] = [
    {
        title: "Hypermind",
        category: "AI Education Platform",
        image: "bg-linear-to-br from-indigo-900 to-violet-900",
        video: "https://www.youtube.com/embed/JTdSCGfUgMo?start=104&autoplay=1&mute=1&loop=1&playlist=JTdSCGfUgMo&controls=0&showinfo=0&rel=0",
        exeName: "hypermind.exe",
        description: "HyperMind is an AI-powered interactive learning platform that combines real-time intelligence, voice interaction, and generative visuals to create an immersive educational experience.\n\nThe system supports PDF document summarization using pdfjs-dist, Text-to-Speech playback for AI responses, and dynamic Generative UI (GenUI) that renders charts, diagrams, and visual explanations directly from AI-generated data. It automatically generates flowcharts and mind maps using ReactFlow and includes immersive 3D scenes powered by Spline.\n\nHyperMind also integrates Gemini Live, enabling low-latency real-time voice and video interactions with AI agents, complete with audio visualization and camera streaming. Users can switch between learning modes, upload documents, and interact with AI through natural language commands that trigger visual and interactive responses.\n\nBuilt with a modern full-stack approach, HyperMind showcases advanced AI integration, real-time interaction, and rich frontend engineering.",
        link: "https://github.com/Daksh-create349/Hypermind-main"
    },
    {
        title: "Blood Bridge",
        category: "Healthcare / Social Good",
        image: "bg-linear-to-br from-red-900 to-rose-900",
        video: "https://www.youtube.com/embed/rpXEx8epJzs?autoplay=1&mute=1&loop=1&playlist=rpXEx8epJzs&controls=0&showinfo=0&rel=0",
        exeName: "blood_bridge.exe",
        description: "Blood Bridge is an AI-powered web platform that modernizes blood bank management and emergency response by connecting hospitals, blood banks, and donors in a real-time network. The system is designed to prevent critical shortages, accelerate emergency coordination, and optimize logistics during urgent situations.\n\nThe platform features a real-time inventory dashboard with health indicators, an urgent broadcast system to notify nearby facilities and donors within a defined radius, and AI-driven analytics powered by Google Gemini to forecast supply risks and generate strategic insights.\n\nBlood Bridge also includes smart logistics tracking for ambulances and drones, with an autonomous AI agent mode that automatically matches urgent requests with available stock and dispatches transport. Additional modules include map-based donation camp discovery, a verified donor registry with gamification, and Pulse AI, an intelligent chatbot that assists users throughout the application.",
        link: "https://github.com/Daksh-create349/Blood-Bridge-3.0"
    },
    {
        title: "Timewise",
        category: "Productivity / Management",
        image: "bg-linear-to-br from-amber-900 to-orange-900",
        video: "https://www.youtube.com/embed/WwDEQbm-1jQ?autoplay=1&mute=1&loop=1&playlist=WwDEQbm-1jQ&controls=0&showinfo=0&rel=0",
        exeName: "timewise.exe",
        description: "TimeWise is a smart academic scheduling system designed to automate timetable creation, optimize classroom usage, and eliminate scheduling conflicts for students, teachers, and administrators.\n\nThe platform replaces manual, error-prone scheduling with an automated system driven by logical constraints and scheduling rules. It efficiently assigns classrooms, manages teacher availability, and generates balanced timetables that are easy to access and update in real time.\n\nTimeWise improves institutional efficiency by reducing conflicts, maximizing resource utilization, and providing clear, role-based timetable views for all stakeholders.",
        link: "https://github.com/Daksh-create349/TimeWise"
    },
    {
        title: "AQUILA",
        category: "Disaster Management",
        image: "bg-linear-to-br from-cyan-900 to-blue-900",
        video: "https://www.youtube.com/embed/-Whoe_-nL3E?autoplay=1&mute=1&loop=1&playlist=-Whoe_-nL3E&controls=0&showinfo=0&rel=0",
        exeName: "aquila.exe",
        description: "AQUILA is a fully re-architected, production-grade geospatial intelligence system designed to detect flood extents for any city globally.\nIt features a decoupled full-stack architecture combining a React and Three.js frontend with a FastAPI and Google Earth Engine backend.\nThe system ingests multi-temporal Sentinel-1 and Sentinel-2 satellite imagery to generate a scientifically credible flood footprint.\nIt applies physics-based corrections to eliminate permanent water bodies and reduce urban false positives.\nThe permanent water baseline utilizes JRC Global Surface Water data to remove sea, lakes, and rivers effectively.\nAn adaptive Otsu thresholding method on the VV histogram is used, dynamically constrained between -22 and -15 dB.\nUrban false positives are further reduced using slope filtering and height above nearest drainage proximity metrics.\nTidal corrections employ JRC seasonality masking to remove shoreline oscillations in coastal regions.\nA sanity check engine applies physics constraints to flag physically implausible flood percentages.\nThe interactive 3D globe features cinematic zoom transitions seamlessly switching to a Leaflet satellite map.\nAnimated real-time metrics panels display flood area, population exposure, urban impact, and confidence scores.\nThe pipeline incorporates a probabilistic confidence model based on distance, terrain, and ensemble stability per pixel.\nUsers can analyze data across multi-layer maps, with toggles for admin boundaries, permanent water, and optical detections.\nThe backend serves vectorized GeoJSON flood layers on demand via RESTful endpoints.\nA styled terminal audit log displays the real pipeline stage progress during the processing workflow.",
        link: "https://github.com/Daksh-create349/Portfolio"
    }
]

export function Projects() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [mounted, setMounted] = useState(false)
    const { user, isSignedIn } = useUser()
    const { openSignIn } = useClerk()
    
    const [showQueryForm, setShowQueryForm] = useState(false)
    const [queryMessage, setQueryMessage] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [querySuccess, setQuerySuccess] = useState(false)

    const closeProjectModal = () => {
        setSelectedProject(null)
        setShowQueryForm(false)
        setQueryMessage("")
        setQuerySuccess(false)
        setIsSubmitting(false)
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="flex min-h-full w-full flex-col justify-start md:justify-center py-20 md:py-0 px-4 md:px-10">
            {/* Modal Overlay */}
            {mounted && createPortal(
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                            onClick={closeProjectModal} // Close on background click
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()} // Prevent close on modal click
                                className="relative w-full max-w-3xl overflow-hidden rounded-lg border border-zinc-700 bg-black shadow-2xl"
                            >
                                {/* Terminal Header */}
                                <div className="flex items-center justify-between bg-zinc-900 px-4 py-2 border-b border-zinc-800">
                                    <div className="flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer" onClick={closeProjectModal} />
                                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                        <div className="h-3 w-3 rounded-full bg-green-500" />
                                    </div>
                                    <div className="text-xs font-mono text-zinc-400">{selectedProject.exeName || 'project.exe'}</div>
                                    <div className="w-10" />
                                </div>

                                {/* Terminal Content */}
                                <div className="p-4 md:p-8 font-mono text-xs md:text-base text-green-400 overflow-y-auto max-h-[80vh]">
                                    <div className="mb-4">
                                        <span className="text-blue-400">root@portfolio</span>:<span className="text-blue-200">~</span>$ ./describe_{selectedProject.title.toLowerCase().replace(" ", "_")}.sh
                                    </div>
                                    <Typewriter
                                        text={selectedProject.description || "No description available."}
                                        speed={15}
                                        className="leading-relaxed whitespace-pre-wrap"
                                    />
                                    
                                    {/* Action Buttons */}
                                    {!showQueryForm ? (
                                        <div className="mt-8 pt-4 border-t border-zinc-800/50 flex justify-end">
                                            <button 
                                                onClick={() => {
                                                    if (!isSignedIn) {
                                                        openSignIn()
                                                    } else {
                                                        setShowQueryForm(true)
                                                    }
                                                }}
                                                className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded font-mono text-xs hover:bg-emerald-500/20 transition-colors cursor-pointer"
                                            >
                                                <MessageSquare className="w-4 h-4" />
                                                ASK_QUERY
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="mt-8 pt-4 border-t border-zinc-800/50">
                                            <div className="flex items-center gap-2 mb-2 text-emerald-500">
                                                <span className="text-blue-400">root@portfolio</span>:<span className="text-blue-200">~</span>$ ./submit_query.sh --target="{selectedProject.title}"
                                            </div>
                                            {querySuccess ? (
                                                <div className="text-emerald-400 py-4 flex items-center gap-2">
                                                    <span className="text-green-500">&gt;</span> Query transmitted successfully.
                                                </div>
                                            ) : (
                                                <div className="flex flex-col gap-3">
                                                    <textarea 
                                                        value={queryMessage}
                                                        onChange={(e) => setQueryMessage(e.target.value)}
                                                        rows={3}
                                                        placeholder="Enter your query here..."
                                                        className="w-full bg-black/50 border border-emerald-500/30 rounded p-3 text-emerald-400 font-mono text-sm focus:border-emerald-500 focus:outline-none resize-none"
                                                    />
                                                    <div className="flex justify-end gap-2">
                                                        <button 
                                                            onClick={() => setShowQueryForm(false)}
                                                            className="px-4 py-2 text-zinc-500 border border-zinc-700/50 rounded font-mono text-xs hover:bg-zinc-800 transition-colors cursor-pointer"
                                                        >
                                                            CANCEL
                                                        </button>
                                                        <button 
                                                            onClick={async () => {
                                                                if (!queryMessage.trim()) return;
                                                                setIsSubmitting(true);
                                                                try {
                                                                    const res = await fetch("/api/query", {
                                                                        method: "POST",
                                                                        headers: { "Content-Type": "application/json" },
                                                                        body: JSON.stringify({ message: queryMessage, projectName: selectedProject.title })
                                                                    });
                                                                    if (res.ok) {
                                                                        setQuerySuccess(true);
                                                                        setTimeout(() => {
                                                                            setShowQueryForm(false);
                                                                            setQuerySuccess(false);
                                                                            setQueryMessage("");
                                                                        }, 3000);
                                                                    } else {
                                                                        alert("Failed to submit query.");
                                                                    }
                                                                } finally {
                                                                    setIsSubmitting(false);
                                                                }
                                                            }}
                                                            disabled={isSubmitting}
                                                            className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 rounded font-mono text-xs hover:bg-emerald-500/30 transition-colors disabled:opacity-50 cursor-pointer"
                                                        >
                                                            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                                                            {isSubmitting ? "TRANSMITTING..." : "EXECUTE"}
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 md:mb-12 mt-12"
            >
                <h2 className="text-4xl font-bold uppercase tracking-tighter text-white md:text-6xl py-4">Selected Works</h2>
                <p className="mt-2 text-zinc-400">Drag to explore • Click for details</p>
            </motion.div>

            <div
                ref={containerRef}
                className="-mx-4 md:-mx-10 flex overflow-x-auto no-scrollbar snap-x snap-mandatory mask-gradient-x"
                style={{
                    maskImage: "linear-gradient(to right, transparent, black 30px, black calc(100% - 30px), transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 30px, black calc(100% - 30px), transparent)",
                }}
            >
                <div
                    className="flex gap-6 md:gap-8 px-8 md:px-14 pb-12 pt-4 w-max"
                >
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className={`snap-center relative h-[340px] w-[280px] shrink-0 overflow-hidden rounded-[2rem] border border-white/5 ${project.image} p-6 shadow-2xl md:h-[460px] md:w-[360px] cursor-pointer transition-all duration-300 hover:scale-105 hover:border-white/30`}
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Video Background */}
                            {project.video && (
                                <>
                                    <div className="absolute inset-0 z-0 overflow-hidden">
                                        <iframe
                                            src={project.video}
                                            title={project.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2"
                                            style={{ pointerEvents: 'none' }}
                                        ></iframe>
                                    </div>
                                    {/* Gradient Overlays for text readability and polished edges */}
                                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-0" />
                                    <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/40 to-transparent z-0" />
                                </>
                            )}

                            <div className="relative z-10 flex h-full flex-col justify-between">
                                <div className="flex justify-end">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full bg-white/10 p-2 backdrop-blur-md transition-colors hover:bg-white/20 z-20"
                                        onClick={(e) => e.stopPropagation()} // Prevent opening modal
                                    >
                                        <ArrowUpRight className="h-5 w-5 text-white" />
                                    </a>
                                </div>

                                <div>
                                    <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-white/60">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white shadow-black drop-shadow-lg">{project.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
