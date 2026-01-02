"use client"

import { useEffect, useState } from "react"

export const Typewriter = ({ text, speed = 50, className = "" }: { text: string; speed?: number; className?: string }) => {
    const [displayedText, setDisplayedText] = useState("")

    useEffect(() => {
        let index = 0
        setDisplayedText("") // Reset on text change

        const interval = setInterval(() => {
            index++
            if (index <= text.length) {
                setDisplayedText(text.slice(0, index))
            } else {
                clearInterval(interval)
            }
        }, speed)

        return () => clearInterval(interval)
    }, [text, speed])

    return (
        <span className={className}>
            {displayedText}
            <span className="animate-pulse">_</span>
        </span>
    )
}
