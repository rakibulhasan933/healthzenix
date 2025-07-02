"use client"

import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { RainbowButton } from "./ui/rainbow-button"
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";

const carouselImages = [
    "/doucement.webp",
    "/doucement.webp",
    "/doucement.webp",
]

const icons = [

    "https://cdn.prod.website-files.com/651be5e5347ad738119bc256/66701592cf4853bd00b9c614_Cyber%20essentials.svg",
    "https://cdn.prod.website-files.com/651be5e5347ad738119bc256/66701592cf4853bd00b9c614_Cyber%20essentials.svg",
    "https://cdn.prod.website-files.com/651be5e5347ad738119bc256/66701592cf4853bd00b9c614_Cyber%20essentials.svg",
    "https://cdn.prod.website-files.com/651be5e5347ad738119bc256/66701592cf4853bd00b9c614_Cyber%20essentials.svg",
    "https://cdn.prod.website-files.com/651be5e5347ad738119bc256/66701592cf4853bd00b9c614_Cyber%20essentials.svg",
    "https://cdn.prod.website-files.com/651be5e5347ad738119bc256/66701592cf4853bd00b9c614_Cyber%20essentials.svg",
    "https://cdn.prod.website-files.com/651be5e5347ad738119bc256/66701592cf4853bd00b9c614_Cyber%20essentials.svg",
    "https://cdn.prod.website-files.com/651be5e5347ad738119bc256/66701592cf4853bd00b9c614_Cyber%20essentials.svg",
];

export default function Hero() {
    const [scrollY, setScrollY] = useState(0)
    const [showCarousel, setShowCarousel] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setScrollY(currentScrollY)
            setShowCarousel(currentScrollY > 400)
        }

        // Set initial scroll position
        if (typeof window !== "undefined") {
            setScrollY(window.scrollY);
            window.addEventListener("scroll", handleScroll)
        }
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("scroll", handleScroll)
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);
        }
    }, []);

    // Get window height safely
    const windowHeight = typeof window !== "undefined" ? window.innerHeight : 1000;

    return (
        <div
            className=" bg-slate-950 relative pt-24"
            style={{
                backgroundImage: "url(/background-image.svg),  url(/background-bottom.svg)",
                backgroundSize: "1500px, 1300px",
                backgroundPosition: "center top , center bottom",
                backgroundRepeat: "no-repeat , no-repeat",
            }}
        >
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

            {/* Vertical line in the middle */}
            <div className="absolute z-10 left-1/2 top-0 w-px h-full bg-gradient-to-b from-slate-600 via-slate-500 to-slate-600 transform -translate-x-1/2 " />

            {/* Moving light spot */}
            <div
                className="fixed left-1/2 w-4 h-4 bg-white rounded-full blur-sm transform -translate-x-1/2 transition-all duration-100 ease-out z-30"
                style={{
                    top: `${Math.min(scrollY * 0.5 + 100, windowHeight - 100)}px`,
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)",
                }}
            />

            {/* Light beam effect at top */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-96 bg-gradient-to-b from-white via-blue-400 to-transparent opacity-60" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-white rounded-full blur-3xl opacity-10" />

            {/* Top notification bar */}
            <div className="relative z-10 flex justify-center pt-8 pb-4">
                <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-1 text-[12px] text-slate-300">
                    <div className="w-1 h-1 bg-white rounded-full" />
                    <span>Heidi Product Updates - Tasks and past sessions as Context</span>
                </div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-16">
                {/* Centered hero content above the light line */}
                <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto mb-32">
                    <h1 className="text-4xl lg:text-6xl  font-semibold text-white leading-tight">
                        The AI medical scribe
                        <br />
                        <span className="text-slate-300">for all clinicians</span>
                    </h1>
                    <RainbowButton className="relative px-4 py-6 z-60">
                        <span>Try Heidi - it's free</span>
                    </RainbowButton>
                </div>

                {/* Patient interface and compliance badges - moved to right side */}
                <div className=" text-white flex flex-row items-center justify-between px-10">
                    <div className="px-4 w-[500px] flex justify-start-safe">
                        <p className=" text-base font-normal">Heidi is the ambient AI medical scribe that automates clinical documentation to reduce administrative burden and enable healthcare professionals to focus more on patient care.</p>
                    </div>
                    <div className="px-4 w-[400px] flex justify-end-safe">
                        <div className="grid grid-cols-4 gap-1">
                            {
                                icons.map((icon, index) => (
                                    <Badge
                                        key={index}
                                        className="m-2  bg-slate-800 border border-slate-700 rounded-lg flex items-center"
                                    >
                                        <Image width={40} height={20} src={icon} alt={`Icon ${index + 1}`} />

                                    </Badge>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center min-h-screen relative mb-32" style={{ perspective: "500px" }}>
                    <div
                        className={`transition-all duration-1000 ease-out ${showCarousel ? "opacity-100 scale-100 shadow-[0_0_100px_rgba(59,130,246,0.5)]" : "opacity-0 scale-75"
                            }`}
                        style={{
                            transform: ` scale(${showCarousel ? 0.8 : 0.99})`,
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <div className="relative">
                            {/* Glowing effect behind carousel */}
                            <div
                                className={`absolute inset-0 bg-blue-500/20 rounded-2xl blur-2xl transition-all duration-1000 ${showCarousel ? "scale-10 opacity-100" : "scale-100 opacity-0"
                                    }`}
                            />

                            {/* Shadcn UI Carousel */}
                            <Carousel
                                className="w-full rounded-[30px] relative z-20"
                                plugins={[
                                    Autoplay({
                                        delay: 5000,
                                    }),
                                ]}


                            >
                                <CarouselContent>
                                    {carouselImages.map((image, index) => (
                                        <CarouselItem key={index}>
                                            <div className="relative">
                                                <Image
                                                    src={image || "/placeholder.svg"}
                                                    alt={`Medical AI Interface ${index + 1}`}
                                                    className="rounded w-full"
                                                    width={600}
                                                    height={280}
                                                />
                                                {/* Additional glow overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent rounded-4xl" />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
