"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface HologramaticTextProps {
    text: string
    className?: string
    enableGlitch?: boolean
}

export function HologramaticText({ text, className = "", enableGlitch = true }: HologramaticTextProps) {
    const [glitchText, setGlitchText] = useState(text)

    useEffect(() => {
        if (!enableGlitch) return

        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*"
        let verifyInterval: NodeJS.Timeout
        let glitchInterval: NodeJS.Timeout

        const triggerGlitch = () => {
            let iterations = 0
            clearInterval(verifyInterval)

            verifyInterval = setInterval(() => {
                setGlitchText(
                    text
                        .split("")
                        .map((char, index) => {
                            if (index < iterations) return text[index]
                            return chars[Math.floor(Math.random() * chars.length)]
                        })
                        .join("")
                )

                if (iterations >= text.length) {
                    clearInterval(verifyInterval)
                }

                iterations += 1 / 3
            }, 30)
        }

        // Random occasional glitch
        glitchInterval = setInterval(() => {
            if (Math.random() > 0.7) {
                triggerGlitch()
            }
        }, 5000)

        triggerGlitch() // Initial trigger

        return () => {
            clearInterval(verifyInterval)
            clearInterval(glitchInterval)
        }
    }, [text, enableGlitch])

    return (
        <motion.div
            className={`relative inline-block ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 filter drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">
                {glitchText}
            </span>
            <span className="absolute top-0 left-[2px] -z-10 opacity-50 text-red-500 animate-pulse">
                {glitchText}
            </span>
            <span className="absolute top-0 -left-[2px] -z-10 opacity-50 text-blue-500 animate-pulse">
                {glitchText}
            </span>
        </motion.div>
    )
}
