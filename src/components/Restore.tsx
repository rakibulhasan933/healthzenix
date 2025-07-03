import { Button } from "@/components/ui/button"

export default function Restore() {
    return (
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center overflow-hidden py-16 md:py-24">
            {/* Background curved lines */}
            <div className="absolute inset-0 opacity-20">
                <svg
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl"
                    viewBox="0 0 800 600"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M100 300C100 200 200 100 300 100C400 100 500 200 500 300C500 400 600 500 700 500"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-blue-400"
                    />
                    <path
                        d="M150 350C150 250 250 150 350 150C450 150 550 250 550 350C550 450 650 550 750 550"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-blue-400"
                    />
                    <path
                        d="M50 250C50 150 150 50 250 50C350 50 450 150 450 250C450 350 550 450 650 450"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-blue-400"
                    />
                    <ellipse
                        cx="400"
                        cy="300"
                        rx="200"
                        ry="150"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-blue-400"
                    />
                    <ellipse
                        cx="400"
                        cy="300"
                        rx="300"
                        ry="200"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        className="text-blue-400"
                    />
                </svg>
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
                    <span className="text-pink-400">Restore</span> <span className="text-white">eye contact</span>
                    <br />
                    <span className="text-white">with your patients.</span>
                </h1>

                <p className="text-white/90 text-lg md:text-xl mb-8 font-light">Offer warmer care. Get home on time.</p>

                <Button
                    size="lg"
                    className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-base font-medium rounded-md"
                >
                    Get started now
                </Button>
            </div>
        </section>
    )
}
