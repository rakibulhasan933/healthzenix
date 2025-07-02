"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function LoadingPage() {
    const [isComplete, setIsComplete] = useState(false)
    const [showTick, setShowTick] = useState(false)

    const brokenText = ["H", "e", "a", "l", "t", "h", "z", "e", "n", "i", "x"]
    const completeText = "Healthzenix"

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setIsComplete(true)
        }, 2000)

        const timer2 = setTimeout(() => {
            setShowTick(true)
        }, 3000)

        return () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
        }
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center overflow-hidden">
            <div className="text-center relative">
                {/* Background decorative elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-200/40 to-emerald-200/40 rounded-full blur-2xl animate-pulse delay-1000"></div>
                </div>

                {/* Main text animation */}
                <div className="relative mb-8">
                    {!isComplete ? (
                        // Broken text phase
                        <div className="flex justify-center items-center space-x-1 h-24">
                            {brokenText.map((letter, index) => (
                                <motion.span
                                    key={index}
                                    className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
                                    initial={{
                                        opacity: 0,
                                        y: Math.random() * 100 - 50,
                                        x: Math.random() * 100 - 50,
                                        rotate: Math.random() * 360,
                                        scale: 0.5,
                                    }}
                                    animate={{
                                        opacity: [0, 1, 0.7, 1],
                                        y: [Math.random() * 100 - 50, 0],
                                        x: [Math.random() * 100 - 50, 0],
                                        rotate: [Math.random() * 360, 0],
                                        scale: [0.5, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        delay: index * 0.1,
                                        ease: "easeInOut",
                                    }}
                                    style={{
                                        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </div>
                    ) : (
                        // Complete text phase with curved effect
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            <h1
                                className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    letterSpacing: "-0.02em",
                                    filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
                                    transform: "perspective(500px) rotateX(15deg)",
                                    textShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
                                }}
                            >
                                {completeText}
                            </h1>

                            {/* Curved underline */}
                            <motion.div
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                            >
                                <svg width="300" height="20" viewBox="0 0 300 20">
                                    <motion.path
                                        d="M10 15 Q150 5 290 15"
                                        stroke="url(#gradient)"
                                        strokeWidth="3"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#059669" />
                                            <stop offset="50%" stopColor="#0d9488" />
                                            <stop offset="100%" stopColor="#0891b2" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </motion.div>
                        </motion.div>
                    )}
                </div>

                {/* Success tick animation */}
                {showTick && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                        className="flex justify-center"
                    >
                        <CheckCircle className="w-16 h-16 text-emerald-500" />
                    </motion.div>
                )}

                {/* Loading dots */}
                {!showTick && (
                    <div className="flex justify-center space-x-2 mt-8">
                        {[0, 1, 2].map((index) => (
                            <motion.div
                                key={index}
                                className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: index * 0.2,
                                }}
                            />
                        ))}
                    </div>
                )}

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: isComplete ? 1 : 0.5 }}
                    className="text-lg text-gray-600 mt-6 font-medium"
                >
                    {isComplete ? "Welcome to Your Health Journey" : "Preparing your experience..."}
                </motion.p>
            </div>
        </div>
    )
}
