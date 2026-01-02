"use client"

import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { ArrowUpRight } from "lucide-react"
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
    }
]

export function Projects() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="flex h-full w-full flex-col justify-center px-4 md:px-10">
            {/* Modal Overlay */}
            {mounted && createPortal(
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                            onClick={() => setSelectedProject(null)} // Close on background click
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
                                        <div className="h-3 w-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer" onClick={() => setSelectedProject(null)} />
                                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                        <div className="h-3 w-3 rounded-full bg-green-500" />
                                    </div>
                                    <div className="text-xs font-mono text-zinc-400">{selectedProject.exeName || 'project.exe'}</div>
                                    <div className="w-10" />
                                </div>

                                {/* Terminal Content */}
                                <div className="p-6 md:p-8 font-mono text-sm md:text-base text-green-400 overflow-y-auto max-h-[70vh]">
                                    <div className="mb-4">
                                        <span className="text-blue-400">root@portfolio</span>:<span className="text-blue-200">~</span>$ ./describe_{selectedProject.title.toLowerCase().replace(" ", "_")}.sh
                                    </div>
                                    <Typewriter
                                        text={selectedProject.description || "No description available."}
                                        speed={15}
                                        className="leading-relaxed whitespace-pre-wrap"
                                    />
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
                className="mb-8 md:mb-12"
            >
                <h2 className="text-4xl font-bold uppercase tracking-tighter text-white md:text-6xl">Selected Works</h2>
                <p className="mt-2 text-zinc-400">Drag to explore • Click for details</p>
            </motion.div>

            <motion.div
                ref={containerRef}
                className="-ml-4 flex cursor-grab active:cursor-grabbing overflow-hidden md:-ml-10"
            >
                <motion.div
                    drag="x"
                    dragConstraints={containerRef}
                    className="flex gap-6 px-4 md:px-10 pb-10"
                >
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            className={`relative h-[300px] w-[250px] shrink-0 overflow-hidden rounded-2xl border border-white/10 ${project.image} p-6 md:h-[400px] md:w-[320px] cursor-pointer`}
                            whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.2)" }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Video Background for Hypermind */}
                            {project.video && (
                                <>
                                    <div className="absolute inset-0 z-0">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={project.video}
                                            title={project.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            className="h-full w-full object-cover"
                                            style={{ pointerEvents: 'none' }} // Prevent interaction to allow drag
                                        ></iframe>
                                    </div>
                                    {/* Gradient Overlay for Text Readability */}
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-0" />
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
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}
