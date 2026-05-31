"use client"

import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download } from "lucide-react"
import { ClassicResume } from "@/components/ui/classic-resume"

interface PaperAirplaneModalProps {
    isOpen: boolean
    onClose: () => void
}

export function PaperAirplaneModal({ isOpen, onClose }: PaperAirplaneModalProps) {
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const handleDownload = () => {
        window.print()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden">
                    {/* Backdrop (No Print) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/70 backdrop-blur-md z-0 print:hidden"
                    />

                    {/* Modal Content Panel */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 15 }}
                        transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                        className="relative w-full max-w-4xl h-[85vh] bg-white shadow-2xl flex flex-col rounded-xl overflow-hidden z-10 print:hidden"
                    >
                        {/* Controls */}
                        <div className="absolute top-4 right-4 flex gap-2 z-50">
                            <button 
                                onClick={handleDownload} 
                                className="p-2 bg-black/5 hover:bg-black/10 rounded-full text-black transition-colors" 
                                title="Download PDF / Print"
                            >
                                <Download className="w-5 h-5" />
                            </button>
                            <button 
                                onClick={onClose} 
                                className="p-2 bg-black/5 hover:bg-black/10 rounded-full text-black transition-colors" 
                                title="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content Scroll Area */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar-light bg-white p-0 relative" ref={contentRef}>
                            <ClassicResume />
                        </div>
                    </motion.div>

                    {/* PRINT STRATEGY */}
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
            )}
        </AnimatePresence>
    )
}
