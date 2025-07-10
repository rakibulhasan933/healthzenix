import Image from "next/image"
import { Clock, TrendingUp, FastForward } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function HealthcareInfographic() {
    return (
        <div className=" md:mx-20 mx-2 md:px-6 px-2 md:py-24 py-8 bg-white ">
            <div className="max-w-4xl">
                {/* Header Section */}
                <div className=" md:mb-8 mb-3">
                    <h1 className="text-xl md:text-5xl font-bold text-gray-900 mb-4">
                        <span className="text-blue-600">50%</span> of clinicians' time is <span className="text-blue-600">not</span>
                        <br />
                        spent on patient care
                    </h1>
                    <p className="text-gray-600 md:text-lg text-base md:max-w-2xl md:mb-6 mb-2">
                        Learn how clinics, surgeries, hospitals, and studios of all walks of clinical life are using Heidi Health's AI
                        medical scribe.
                    </p>
                </div>
                {/* Main Image */}
                <div className="md:mb-8 mb-3">
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                            src={"https://www.youtube.com/embed/55C27MmQI-s?si=YipHdFxmYtOfNkkI"}
                            title="Heidi Ambient Clinical AI - 50% of clinicians' time is not spent on patient care"
                            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>


            {/* Statistics Cards */}
            <div className=" w-full grid md:grid-cols-3 gap-6 ">
                <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-6 ">
                        <div className="mb-4">
                            <Clock className="w-8 h-8 text-pink-500" />
                        </div>
                        <p className="text-gray-700 text-xl leading-relaxed">
                            <span className="font-semibold">Clinicians spend more than 2 hours every day</span> on tasks
                            other than patient care.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                        <div className="mb-4">
                            <TrendingUp className="w-8 h-8 text-pink-500" />
                        </div>
                        <p className="text-gray-700 text-xl leading-relaxed">
                            <span className="font-semibold ">Clinicians lose an average of $55,000 every year</span> due
                            to wasted time.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                        <div className="mb-4">
                            <FastForward className="w-8 h-8 text-pink-500" />
                        </div>
                        <p className="text-gray-700 text-xl leading-relaxed">
                            <span className="font-semibold ">Doctors can be 2x faster and better</span> in patient care
                            tasks.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
