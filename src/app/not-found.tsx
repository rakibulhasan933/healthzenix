"use client"

import { motion } from "framer-motion"
import { Home, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 flex items-center justify-center p-4">
            <div className="text-center max-w-2xl mx-auto">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden -z-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-red-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-orange-200/40 to-red-200/40 rounded-full blur-2xl animate-pulse delay-1000"></div>
                </div>

                {/* 404 Number with curved effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative mb-8"
                >
                    <h1
                        className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 bg-clip-text text-transparent leading-none"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            letterSpacing: "-0.05em",
                            filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
                            transform: "perspective(800px) rotateX(20deg)",
                            textShadow: "0 0 40px rgba(239, 68, 68, 0.3)",
                        }}
                    >
                        404
                    </h1>

                    {/* Curved decorative line */}
                    <motion.div
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                        <svg width="400" height="30" viewBox="0 0 400 30">
                            <motion.path
                                d="M20 20 Q200 5 380 20"
                                stroke="url(#errorGradient)"
                                strokeWidth="4"
                                fill="none"
                                strokeLinecap="round"
                            />
                            <defs>
                                <linearGradient id="errorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#ef4444" />
                                    <stop offset="50%" stopColor="#ec4899" />
                                    <stop offset="100%" stopColor="#f97316" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </motion.div>
                </motion.div>

                {/* Error message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h2>
                    <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
                        The page you're looking for seems to have wandered off. Let's get you back on track to better health!
                    </p>
                </motion.div>

                {/* Action buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-3 rounded-full"
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <Home className="w-5 h-5" />
                            Back to Home
                        </Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-2 border-red-200 hover:bg-red-50 px-8 py-3 rounded-full bg-transparent"
                    >
                        <Link href="/search" className="flex items-center gap-2">
                            <Search className="w-5 h-5" />
                            Search Health Topics
                        </Link>
                    </Button>
                </motion.div>

                {/* Healthzenix branding */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-12"
                >
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
