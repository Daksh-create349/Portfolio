"use client"

import { motion } from "framer-motion"

interface ThreeDPaperPlaneProps {
    isUnfolded: boolean
}

export function ThreeDPaperPlane({ isUnfolded }: ThreeDPaperPlaneProps) {

    // Logic: 
    // To look like a plane, the front needs to be pointy.
    // We trim the top edge of both pages/wings starting from the outside corner down to the spine.
    // Left Wing: Top-Left (0,0) is outer corner. Top-Right (100,0) is spine.
    // Wait, no. Spine is in the middle.
    // Left Wing (0 to 50% of screen). Spine is at Right Edge (100%).
    // So Top-Left (0,0) should be lower, e.g., 0, 40%.

    return (
        <div className="relative w-[min(90vw,600px)] h-[min(120vh,800px)] perspective-[1000px] transform-style-3d">

            <motion.div
                className="absolute inset-0 w-full h-full flex transform-style-3d origin-center"
                animate={isUnfolded ? "unfolded" : "folded"}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                {/* LEFT WING */}
                <motion.div
                    className="w-1/2 h-full bg-white border-r border-gray-200 origin-right backface-visibility-visible start-0 absolute"
                    variants={{
                        folded: { rotateY: 80 },
                        unfolded: { rotateY: 0 }
                    }}
                    style={{
                        background: "linear-gradient(to right, #f1f5f9, #cbd5e1)",
                    }}
                >
                    <motion.div
                        className="w-full h-full bg-white origin-bottom-right"
                        variants={{
                            folded: { clipPath: "polygon(0% 35%, 100% 0%, 100% 100%, 0% 100%)" }, // Pointy nose at spine (100% 0%)
                            unfolded: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)" } // Full Rect
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </motion.div>

                {/* RIGHT WING */}
                <motion.div
                    className="w-1/2 h-full bg-white origin-left backface-visibility-visible left-1/2 absolute"
                    variants={{
                        folded: { rotateY: -80 },
                        unfolded: { rotateY: 0 }
                    }}
                    style={{
                        background: "linear-gradient(to left, #f1f5f9, #cbd5e1)",
                    }}
                >
                    <motion.div
                        className="w-full h-full bg-white origin-bottom-left"
                        variants={{
                            folded: { clipPath: "polygon(0% 0%, 100% 35%, 100% 100%, 0% 100%)" }, // Pointy nose at spine (0% 0%)
                            unfolded: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)" } // Full Rect
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </motion.div>

                {/* FUSELAGE LINE (Visual Crease) */}
                <motion.div
                    className="absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5 bg-gray-400/50 z-20"
                    animate={{ opacity: isUnfolded ? 0.1 : 1 }}
                />

            </motion.div>
        </div>
    )
}
