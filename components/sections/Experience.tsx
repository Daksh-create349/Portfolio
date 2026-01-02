"use client"

import { motion } from "framer-motion"

const experience = [
    {
        role: "Top 10 Finalist",
        company: "GenAI Hackathon",
        period: "",
        desc: "Achieved Top 10 Finalist status in a major competition. Developed innovative AI-driven solutions under tight deadlines."
    },
    {
        role: "Hackathon Participant",
        company: "Various Events",
        period: "",
        desc: "Actively participated in over 6+ hackathons, building diverse projects ranging from web apps to AI tools."
    },
    {
        role: "Student Ambassador",
        company: "LetsUpgrade",
        period: "Sep 2025 - Dec 2025",
        desc: "Facilitated technical workshops and community learning events. Bridged the gap between students and industry-standard tech education."
    }
]

export function Experience() {
    return (
        <div className="py-10">
            <h3 className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Experience
            </h3>
            <div className="relative border-l border-zinc-800 pl-8 ml-3 space-y-12">
                {experience.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="relative"
                    >
                        {/* Glowing Node */}
                        <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border border-zinc-900 bg-zinc-800 ring-4 ring-black" />

                        <div className="flex flex-col gap-1">
                            {exp.period && (
                                <span className="text-xs font-mono text-emerald-500">{exp.period}</span>
                            )}
                            <h4 className="text-xl font-medium text-white">{exp.role}</h4>
                            <p className="text-zinc-400">{exp.company}</p>
                            <p className="mt-2 text-sm text-zinc-500 leading-relaxed max-w-md">
                                {exp.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
