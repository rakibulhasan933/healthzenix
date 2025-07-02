"use client"

import { motion } from "framer-motion"
import { AlertTriangle, RefreshCw, Home, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 flex items-center justify-center p-4">
            <div className="text-center max-w-2xl mx-auto">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden -z-10">
                    <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-amber-200/30 to-yellow-200/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-gradient-to-r from-orange-200/40 to-amber-200/40 rounded-full blur-2xl animate-pulse delay-1000"></div>
                </div>

                {/* Error icon with animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8"
                >
                    <div className="relative inline-block">
                        <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                            <AlertTriangle
                                className="w-32 h-32 mx-auto text-amber-500"
                                style={{
                                    filter: "drop-shadow(0 8px 16px rgba(245, 158, 11, 0.3))",
                                }}
                            />
                        </motion.div>

                        {/* Pulsing ring */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            className="absolute inset-0 border-4 border-amber-300 rounded-full"
                        />
                    </div>
                </motion.div>

                {/* Error title with curved effect */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-6"
                >
                    <h1
                        className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            letterSpacing: "-0.02em",
                            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                            transform: "perspective(600px) rotateX(10deg)",
                        }}
                    >
                        Something Went Wrong
                    </h1>

                    {/* Curved underline */}
                    <motion.div
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        className="flex justify-center"
                    >
                        <svg width="350" height="25" viewBox="0 0 350 25">
                            <motion.path
                                d="M15 18 Q175 8 335 18"
                                stroke="url(#warningGradient)"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                            />
                            <defs>
                                <linearGradient id="warningGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#d97706" />
                                    <stop offset="50%" stopColor="#eab308" />
                                    <stop offset="100%" stopColor="#f97316" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </motion.div>
                </motion.div>

                {/* Error description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mb-8"
                >
                    <p className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
                        We encountered an unexpected error while processing your request. Don't worry, our team has been notified
                        and we're working to fix it.
                    </p>
                </motion.div>

                {/* Action buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                >
                    <Button
                        onClick={() => reset()}
                        size="lg"
                        className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-full"
                    >
                        <RefreshCw className="w-5 h-5 mr-2" />
                        Try Again
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-2 border-amber-200 hover:bg-amber-50 px-8 py-3 rounded-full bg-transparent"
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <Home className="w-5 h-5" />
                            Back to Home
                        </Link>
                    </Button>

                    <Button asChild variant="ghost" size="lg" className="hover:bg-amber-50 px-8 py-3 rounded-full">
                        <Link href="/contact" className="flex items-center gap-2">
                            <MessageCircle className="w-5 h-5" />
                            Contact Support
                        </Link>
                    </Button>
                </motion.div>

                {/* Error code */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-sm text-gray-400 mb-4"
                >
                    Error Code: HZ-500-{Math.random().toString(36).substr(2, 6).toUpperCase()}
                </motion.div>

                {/* Healthzenix branding */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}>
                    <p className="text-sm text-gray-500">
                        Powered by{" "}
                        <span className="font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            Healthzenix
                        </span>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
