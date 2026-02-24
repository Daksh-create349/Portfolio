"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
    SiPostgresql,
    SiMongodb,
    SiTailwindcss,
    SiPython,
    SiJavascript,
    SiHtml5,
    SiCplusplus,
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiNodedotjs,
    SiFirebase
} from "react-icons/si"

const technologies = [
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" }, // Royal Blue
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" }, // Mongo Green
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" }, // Tailwind Teal
    { name: "Python", icon: SiPython, color: "#3776AB" }, // Python Blue
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }, // JS Yellow
    { name: "HTML", icon: SiHtml5, color: "#E34F26" }, // HTML Orange
    { name: "C++", icon: SiCplusplus, color: "#00599C" }, // C++ Blue
    { name: "React", icon: SiReact, color: "#61DAFB" }, // React Blue
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" }, // Next.js White
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }, // TS Blue
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" }, // Node Green
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" } // Firebase Yellow
]

export function TechStack() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <div className="w-full overflow-hidden py-16">
            <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Tech Stack
            </h3>
            <div className="relative flex w-full overflow-hidden mask-gradient-x pb-4">
                <motion.div
                    className="flex w-max gap-16 px-8"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                >
                    {/* Render the list twice to enable seamless 0 -> -50% loop */}
                    {[...technologies, ...technologies].map((tech, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 cursor-pointer transition-colors duration-300"
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div
                                className="transition-colors duration-300"
                                style={{ color: hoveredIndex === i ? tech.color : "rgb(113 113 122)" }} // zinc-500
                            >
                                <tech.icon className="h-6 w-6" />
                            </div>
                            <span
                                className="whitespace-nowrap text-3xl font-light transition-colors duration-300"
                                style={{ color: hoveredIndex === i ? tech.color : "rgba(161, 161, 170, 0.8)" }} // zinc-400/80
                            >
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
