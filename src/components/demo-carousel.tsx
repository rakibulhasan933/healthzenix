"use client"

import { useState, useEffect } from "react"
import { FileText, Upload, Brain } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
    {
        id: 1,
        title: "Upload File",
        description: "Press start at the beginning of your visit and Heidi will capture every salient detail.",
        icon: Upload,
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-600",
    },
    {
        id: 2,
        title: "Analysis",
        description: "Pick your preferred template and watch as Heidi writes your perfect note.",
        icon: Brain,
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-600",
    },
    {
        id: 3,
        title: "Output",
        description: "Ask Heidi questions about your patient and get instant, accurate answers for better care.",
        icon: FileText,
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-600",
    },
]

export default function TransitionCarousel() {
    const [activeStep, setActiveStep] = useState(1)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const getContentLayout = () => {
        switch (activeStep) {
            case 1:
                return {
                    left: null,
                    center: steps[0],
                    right: steps[1],
                }
            case 2:
                return {
                    left: steps[0],
                    center: steps[1],
                    right: steps[2],
                }
            case 3:
                return {
                    left: steps[1],
                    center: steps[2],
                    right: null,
                }
            default:
                return {
                    left: null,
                    center: steps[0],
                    right: steps[1],
                }
        }
    }

    const layout = getContentLayout()

    const renderContentCard = (step: (typeof steps)[0] | null, position: "left" | "center" | "right") => {
        if (!step) {
            return (
                <div className="w-full h-full flex items-center justify-center">
                    <div
                        className={cn(
                            "border-2 border-dashed border-gray-200 rounded-3xl flex items-center justify-center opacity-30",
                            isMobile ? "w-72 h-80" : "w-80 h-96",
                        )}
                    >
                        <span className="text-gray-400 text-sm font-medium"></span>
                    </div>
                </div>
            )
        }

        const isCenter = position === "center"
        const isActive = step.id === activeStep
        const IconComponent = step.icon

        return (
            <div
                className={cn(
                    "transition-all duration-700 ease-out transform",
                    isCenter ? "opacity-100 scale-100 z-20" : "opacity-60 scale-90 z-10",
                    "animate-in slide-in-from-bottom-4 fade-in",
                    isMobile && !isCenter && "hidden", // Hide side cards on mobile
                )}
            >
                <div
                    className={cn(
                        "relative rounded-3xl p-6 md:p-8 border transition-all duration-500 bg-white",
                        isMobile ? "w-72 h-80" : "w-80 h-96",
                        isCenter ? "shadow-2xl border-gray-200 ring-2 ring-gray-100" : "shadow-lg border-gray-100 hover:shadow-xl",
                    )}
                >
                    <div className="relative text-center space-y-2">
                        <h3
                            className={cn(
                                "font-bold text-gray-900 transition-all duration-500",
                                isCenter ? (isMobile ? "text-xl" : "text-2xl") : "text-lg",
                            )}
                        >
                            {step.title}
                        </h3>
                        <p
                            className={cn(
                                "text-gray-600 leading-relaxed transition-all duration-500",
                                isCenter ? (isMobile ? "text-xs" : "text-sm") : "text-xs",
                            )}
                        >
                            {step.description}
                        </p>
                    </div>

                    {!isCenter && !isMobile && (
                        <button
                            onClick={() => setActiveStep(step.id)}
                            className="absolute inset-0 rounded-3xl bg-transparent hover:bg-black/5 transition-colors duration-300"
                            aria-label={`Move ${step.title} to center`}
                        />
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen py-5 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-4">
                    <h1
                        className={cn(
                            "font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4",
                            isMobile ? "text-4xl" : "text-6xl md:text-7xl",
                        )}
                    >
                        Weirdly easy.
                    </h1>
                    <p className={cn("text-gray-600", isMobile ? "text-lg" : "text-xl")}>Login to note in a flash.</p>
                </div>

                {/* Step Icons */}
                <div className={cn("flex justify-center items-center md:mb-0 mb-4", isMobile ? "gap-4" : "gap-6")}>
                    {steps.map((step) => {
                        const IconComponent = step.icon
                        const isActive = activeStep === step.id

                        return (
                            <div key={step.id} className="flex flex-col items-center group">
                                <button
                                    onClick={() => setActiveStep(step.id)}
                                    className={cn(
                                        "relative rounded-2xl flex items-center justify-center transition-all duration-500 mb-2 transform",
                                        isMobile ? "w-14 h-14" : "w-20 h-20",
                                        isActive
                                            ? `bg-gradient-to-br ${step.color} text-white shadow-2xl scale-110 ring-4 ring-white/50`
                                            : "bg-white text-gray-400 hover:text-gray-600 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-gray-100 hover:border-gray-200",
                                    )}
                                >
                                    <IconComponent
                                        size={isMobile ? 24 : 32}
                                        className={cn("transition-all duration-300", isActive ? "drop-shadow-sm" : "")}
                                    />
                                </button>

                                {/* Step Label */}
                                <div className="text-center">
                                    <div
                                        className={cn(
                                            "font-bold mb-1 transition-all duration-300",
                                            isMobile ? "text-xs" : "text-sm",
                                            isActive ? "text-gray-900 scale-110" : "text-gray-400",
                                        )}
                                    >
                                        {step.id}.
                                    </div>
                                    <div
                                        className={cn(
                                            "font-medium transition-all duration-300",
                                            isMobile ? "text-xs" : "text-sm",
                                            isActive ? "text-gray-900" : "text-gray-500",
                                        )}
                                    >
                                        {step.title}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Content Cards */}
                <div className="relative md:-mt-10">
                    {isMobile ? (
                        // Mobile: Single card view
                        <div className="flex justify-center">{renderContentCard(layout.center, "center")}</div>
                    ) : (
                        // Desktop: Three card carousel
                        <div className="grid grid-cols-3 gap-3 items-center min-h-[600px]">
                            <div className="flex justify-center">{renderContentCard(layout.left, "left")}</div>
                            <div className="flex justify-center">{renderContentCard(layout.center, "center")}</div>
                            <div className="flex justify-center">{renderContentCard(layout.right, "right")}</div>
                        </div>
                    )}
                </div>

                {/* Mobile Navigation Dots */}
                {isMobile && (
                    <div className="flex justify-center gap-2 mt-6">
                        {steps.map((step) => (
                            <button
                                key={step.id}
                                onClick={() => setActiveStep(step.id)}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-all duration-300",
                                    activeStep === step.id ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400",
                                )}
                                aria-label={`Go to step ${step.id}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
