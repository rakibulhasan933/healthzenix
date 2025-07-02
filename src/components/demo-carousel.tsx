"use client"

import { useState } from "react"
import { Mic, MessageSquare, FileText, Upload, Brain } from "lucide-react"
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
                    left: steps[0], // Step 1
                    center: steps[1], // Step 2
                    right: steps[2],
                }
            case 3:
                return {
                    left: steps[1], // Step 2
                    center: steps[2], // Step 3
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
                    <div className="w-80 h-96 border-2 border-dashed border-gray-200 rounded-3xl flex items-center justify-center opacity-30">
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
                )}
            >
                <div
                    className={cn(
                        "relative rounded-3xl p-8 border transition-all duration-500 bg-white w-80 h-96",
                        isCenter ? "shadow-2xl border-gray-200 ring-2 ring-gray-100" : "shadow-lg border-gray-100 hover:shadow-xl",
                    )}
                >


                    <div className="relative text-center space-y-2">
                        <h3
                            className={cn("font-bold text-gray-900 transition-all duration-500", isCenter ? "text-2xl" : "text-lg")}
                        >
                            {step.title}
                        </h3>
                        <p
                            className={cn(
                                "text-gray-600 leading-relaxed transition-all duration-500",
                                isCenter ? "text-sm" : "text-xs",
                            )}
                        >
                            {step.description}
                        </p>
                    </div>



                    {!isCenter && (
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
            <div className="w-full">
                {/* Header */}

                <div className="text-center mb-16">
                    <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
                        Weirdly easy.
                    </h1>
                    <p className="text-xl text-gray-600">Login to note in a flash.</p>
                </div>

                {/* Always Visible Icons */}
                <div className="flex justify-center items-center gap-8">
                    {steps.map((step) => {
                        const IconComponent = step.icon
                        const isActive = activeStep === step.id

                        return (
                            <div key={step.id} className="flex flex-col items-center group">
                                <button
                                    onClick={() => setActiveStep(step.id)}
                                    className={cn(
                                        "relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 mb-4 transform",
                                        isActive
                                            ? `bg-gradient-to-br ${step.color} text-white shadow-2xl scale-110 ring-4 ring-white/50`
                                            : "bg-white text-gray-400 hover:text-gray-600 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-gray-100 hover:border-gray-200",
                                    )}
                                >
                                    <IconComponent
                                        size={32}
                                        className={cn("transition-all duration-300", isActive ? "drop-shadow-sm" : "")}
                                    />
                                </button>

                                {/* Step Label */}
                                <div className="text-center">
                                    <div
                                        className={cn(
                                            "text-sm font-bold mb-1 transition-all duration-300",
                                            isActive ? "text-gray-900 scale-110" : "text-gray-400",
                                        )}
                                    >
                                        {step.id}.
                                    </div>
                                    <div
                                        className={cn(
                                            "text-sm font-medium transition-all duration-300",
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

                {/* Transition Carousel */}
                <div className="relative">
                    <div className="grid grid-cols-3 gap-6 items-center min-h-[600px]">
                        {/* Left Position */}
                        <div className="flex justify-center">{renderContentCard(layout.left, "left")}</div>

                        {/* Center Position - Always Active */}
                        <div className="flex justify-center">{renderContentCard(layout.center, "center")}</div>

                        {/* Right Position */}
                        <div className="flex justify-center">{renderContentCard(layout.right, "right")}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
