"use client"

import { motion } from "framer-motion"

const technologies = [
    "PostgreSQL", "MongoDB", "Tailwind CSS", "Python",
    "JavaScript", "HTML", "C++", "React", "Next.js",
    "TypeScript", "Node.js", "Three.js"
]

export function TechStack() {
    return (
        <div className="w-full overflow-hidden py-10">
            <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Tech Stack
            </h3>
            <div className="relative flex w-full overflow-hidden mask-gradient-x">
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
                        <span
                            key={i}
                            className="whitespace-nowrap text-3xl font-light text-zinc-400/80 transition-colors hover:text-white"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
