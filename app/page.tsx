"use client"

import { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Github, Linkedin, FileText } from "lucide-react"
import { WebGLShader } from "@/components/ui/web-gl-shader"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { TechStack } from "@/components/sections/TechStack"
import { PaperAirplaneModal } from "@/components/sections/PaperAirplaneModal"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Certificates } from "@/components/sections/Certificates"
import { Contact } from "@/components/sections/Contact"
import { Typewriter } from "@/components/ui/typewriter"
import { GitHubCalendar } from "react-github-calendar"

type ViewState = "intro" | "about" | "projects" | "certificates" | "contact"

export default function Home() {
  const [view, setView] = useState<ViewState>("intro")
  const [direction, setDirection] = useState(0)
  const [showResume, setShowResume] = useState(false)
  const [calendarYear, setCalendarYear] = useState<number>(2026)

  // Determine direction for animation based on view order
  const viewOrder: ViewState[] = ["intro", "about", "projects", "certificates", "contact"]

  const navigateTo = (newView: ViewState) => {
    const currentIndex = viewOrder.indexOf(view)
    const newIndex = viewOrder.indexOf(newView)
    setDirection(newIndex > currentIndex ? 1 : -1)
    setView(newView)
  }

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      filter: "blur(10px)",
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 1,
      position: "relative",
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        filter: { duration: 0.5 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      filter: "blur(10px)",
      zIndex: 0,
      position: "absolute",
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        filter: { duration: 0.5 },
      },
    }),
  }

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as any,
      },
    },
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white selection:bg-white/20">
      {/* Persistent Background */}
      <WebGLShader />

      {/* Paper Airplane Resume Modal */}
      <PaperAirplaneModal isOpen={showResume} onClose={() => setShowResume(false)} />

      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[128px]" />
      </div>

      <div className={`relative z-10 w-full max-w-6xl px-6 flex flex-col ${view === "intro" ? "h-screen justify-center pb-0 pt-0" : "min-h-screen pt-20 pb-10"}`}>

        {/* Navigation Dots */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
          {viewOrder.map((v) => (
            <button
              key={v}
              onClick={() => navigateTo(v)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${view === v ? "bg-white w-8" : "bg-white/20 hover:bg-white/50"}`}
            />
          ))}
        </div>

        <AnimatePresence mode="popLayout" custom={direction}>
          {view === "intro" && (
            <motion.main
              key="intro"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col items-center justify-center h-full w-full"
            >
              <div className="p-10 border border-transparent rounded-lg relative">
                <motion.h1
                  initial={{ scale: 3, opacity: 0, filter: "blur(20px)", textShadow: "0 0 0px rgba(255,255,255,0)" }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    filter: "blur(0px)",
                    textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 60px rgba(255,255,255,0.7)", "0 0 0px rgba(255,255,255,0)"]
                  }}
                  transition={{
                    duration: 3.5,
                    ease: [0.2, 0.65, 0.3, 0.9],
                    textShadow: { delay: 3.4, duration: 1.2, ease: "easeInOut" }
                  }}
                  className="text-[clamp(3rem,12vw,9rem)] font-extrabold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-zinc-500 px-4 md:px-10 py-2 leading-none"
                >
                  Portfolio
                </motion.h1>
                <p className="text-zinc-400 px-6 text-center text-sm md:text-lg font-light tracking-wide max-w-xl mx-auto">
                  Unleashing creativity through bold visuals, seamless interfaces, and limitless possibilities.
                </p>
                <div className="my-8 flex items-center justify-center gap-2">
                  <span className="relative flex h-2 w-2 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  </span>
                  <p className="text-xs font-medium tracking-wide text-emerald-500 uppercase">
                    Available for New Projects
                  </p>
                </div>

                <div className="flex justify-center pt-4">
                  <div onClick={() => navigateTo("about")}>
                    <LiquidButton
                      className="text-white border-white/20 hover:border-white/40 rounded-full"
                      size={"xl"}
                    >
                      Let&#39;s Go
                    </LiquidButton>
                  </div>
                </div>
              </div>
            </motion.main>
          )}

          {view === "about" && (
            <motion.div
              key="about"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full overflow-y-auto no-scrollbar"
            >
              <div className="max-w-4xl mx-auto pb-20">
                <div className="mb-12 flex items-center justify-between">
                  <button onClick={() => navigateTo("intro")} className="text-zinc-500 hover:text-white uppercase text-sm tracking-widest flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <button onClick={() => navigateTo("projects")} className="text-zinc-500 hover:text-white uppercase text-sm tracking-widest flex items-center gap-2">
                    Projects <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <motion.div variants={container} initial="hidden" animate="show" className="space-y-16">
                  <div>
                    <motion.h1 variants={item} className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">About Me</motion.h1>
                    <motion.div variants={item} className="h-48 md:h-64 mb-12">
                      <div className="font-mono text-xl md:text-3xl lg:text-4xl text-emerald-500 leading-relaxed">
                        <span className="text-zinc-500 mr-4">C:\Users\Daksh&gt;</span>
                        <Typewriter
                          text="I'm Daksh Srivastava, a Full Stack Developer and B.Tech CSE student at ITM Skills University (Batch 2025-2029). I build scalable web apps & premium user experiences."
                          speed={50}
                        />
                      </div>
                    </motion.div>


                    <motion.div variants={item} className="flex gap-4 pt-8">
                      <a href="https://www.linkedin.com/in/daksh-srivastava-2ba851344/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white hover:scale-110 duration-300">
                        <Linkedin className="h-6 w-6" />
                      </a>
                      <a href="https://github.com/Daksh-create349" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white hover:scale-110 duration-300">
                        <Github className="h-6 w-6" />
                      </a>
                      <button onClick={() => setShowResume(true)} className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white hover:scale-110 duration-300">
                        <FileText className="h-6 w-6" />
                      </button>
                    </motion.div>

                    <motion.div variants={item} className="pt-8 flex flex-col items-center w-full gap-4">
                      <div className="flex gap-2">
                        {[2026, 2025].map((year) => (
                          <button
                            key={year}
                            onClick={() => setCalendarYear(year)}
                            className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${calendarYear === year ? "bg-emerald-500 text-black" : "bg-white/10 text-zinc-400 hover:bg-white/20"}`}
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                      <div className="p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm w-full flex justify-center hover:border-emerald-500/30 transition-colors duration-500 overflow-hidden">
                        <GitHubCalendar
                          username="Daksh-create349"
                          colorScheme="dark"
                          year={calendarYear}
                          blockSize={12}
                          blockMargin={4}
                          fontSize={14}
                        />
                      </div>
                    </motion.div>
                  </div>

                  <motion.div variants={item}>
                    <TechStack />
                  </motion.div>

                  <motion.div variants={item}>
                    <Experience />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {view === "projects" && (
            <motion.div
              key="projects"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full overflow-y-auto no-scrollbar"
            >
              <div className="absolute top-0 left-0 w-full p-4 flex justify-between z-20">
                <button onClick={() => navigateTo("about")} className="text-zinc-500 hover:text-white uppercase text-sm tracking-widest flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" /> About
                </button>
                <button onClick={() => navigateTo("certificates")} className="text-zinc-500 hover:text-white uppercase text-sm tracking-widest flex items-center gap-2">
                  Credentials <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <Projects />
            </motion.div>
          )}

          {view === "certificates" && (
            <motion.div
              key="certificates"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full overflow-y-auto no-scrollbar"
            >
              <div className="absolute top-0 left-0 w-full p-4 flex justify-between z-20">
                <button onClick={() => navigateTo("projects")} className="text-zinc-500 hover:text-white uppercase text-sm tracking-widest flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" /> Projects
                </button>
                <button onClick={() => navigateTo("contact")} className="text-zinc-500 hover:text-white uppercase text-sm tracking-widest flex items-center gap-2">
                  Contact <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <Certificates />
            </motion.div>
          )}

          {view === "contact" && (
            <motion.div
              key="contact"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full overflow-y-auto no-scrollbar"
            >
              <div className="absolute top-0 left-0 w-full p-4 flex justify-start z-20">
                <button onClick={() => navigateTo("certificates")} className="text-zinc-500 hover:text-white uppercase text-sm tracking-widest flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" /> Credentials
                </button>
              </div>
              <Contact />
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div >
  )
}
