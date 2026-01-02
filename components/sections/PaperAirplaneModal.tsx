"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download } from "lucide-react"
import { ClassicResume } from "@/components/ui/classic-resume"
import { ThreeDPaperPlane } from "@/components/ui/3d-paper-plane"

interface PaperAirplaneModalProps {
    isOpen: boolean
    onClose: () => void
}

export function PaperAirplaneModal({ isOpen, onClose }: PaperAirplaneModalProps) {
    const [animationStage, setAnimationStage] = useState<'idle' | 'flying' | 'landing' | 'unfolding' | 'show-content'>('idle')
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen) {
            setAnimationStage('flying')
            // Sequence timing
            const timer1 = setTimeout(() => setAnimationStage('landing'), 1500)
            const timer2 = setTimeout(() => setAnimationStage('unfolding'), 2200)
            const timer3 = setTimeout(() => setAnimationStage('show-content'), 3500)

            document.body.style.overflow = "hidden"
            return () => {
                clearTimeout(timer1)
                clearTimeout(timer2)
                clearTimeout(timer3)
            }
        } else {
            setAnimationStage('idle')
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const handleDownload = () => {
        window.print()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4 overflow-hidden perspective-[2000px]">

                    {/* Backdrop (No Print) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0 print:hidden"
                    />

                    {/* THE FLIGHT & UNFOLD CONTAINER (No Print) */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none print:hidden">

                        {/* 3D PLANE OBJECT - Only show during flight/unfold phases */}
                        {['flying', 'landing', 'unfolding'].includes(animationStage) && (
                            <motion.div
                                initial={{ x: "-100vw", y: "0%", rotateX: 0, rotateY: 90, rotateZ: 90, scale: 0.2 }}
                                animate={(() => {
                                    switch (animationStage) {
                                        case 'flying':
                                            // Fly in from left, banking
                                            return { x: "0%", y: "0%", rotateX: 0, rotateY: 90, rotateZ: 90, scale: 0.5 }
                                        case 'landing':
                                            // Rotate to face front (vertical paper)
                                            return { x: "0%", y: "0%", rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1 }
                                        case 'unfolding':
                                        case 'show-content':
                                            return { x: "0%", y: "0%", rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1 }
                                    }
                                })()}
                                transition={{
                                    duration: animationStage === 'flying' ? 1.5 : 1.0,
                                    ease: "easeInOut",
                                    type: "spring", stiffness: 60
                                }}
                                className="transform-style-3d will-change-transform"
                            >
                                <ThreeDPaperPlane isUnfolded={['unfolding', 'show-content'].includes(animationStage)} />
                            </motion.div>
                        )}
                    </div>

                    {/* FINAL CONTENT OVERLAY (The Real Resume) */}
                    {animationStage === 'show-content' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex items-center justify-center z-50 pointer-events-auto p-4 md:p-8 print:hidden" // Hide this wrapper in print, but we handle inner content delicately
                        >
                            <div className="relative w-full max-w-4xl h-[85vh] bg-white shadow-2xl flex flex-col rounded-sm overflow-hidden no-print-wrapper">

                                {/* Controls */}
                                <div className="absolute top-4 right-4 flex gap-2 z-50">
                                    <button onClick={handleDownload} className="p-2 bg-black/5 hover:bg-black/10 rounded-full text-black transition-colors" title="Download PDF">
                                        <Download className="w-5 h-5" />
                                    </button>
                                    <button onClick={onClose} className="p-2 bg-black/5 hover:bg-black/10 rounded-full text-black transition-colors" title="Close">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                                {/* Content Scroll Area */}
                                <div className="flex-1 overflow-y-auto custom-scrollbar-light bg-white p-0 relative" ref={contentRef}>
                                    <ClassicResume />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* 
             PRINT STRATEGY: 
             Robust Print Logic using ID selector.
          */}
                    <div id="resume-print-layer" className="fixed top-0 left-0 w-full h-full bg-white z-[9999] hidden print:block pointer-events-none">
                        <div className="max-w-4xl mx-auto pt-10">
                            <ClassicResume />
                        </div>
                    </div>

                    {/* GLOBAL PRINT STYLES */}
                    <style jsx global>{`
             @media print {
               @page { margin: 20mm; }
               body { 
                 visibility: hidden;
               }
               #resume-print-layer {
                 visibility: visible;
                 position: absolute;
                 left: 0;
                 top: 0;
                 display: block !important;
                 pointer-events: none;
               }
               #resume-print-layer * {
                 visibility: visible;
               }
             }
          `}</style>

                </div>
            )
            }
        </AnimatePresence >
    )
}
