import type React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, FileText, PenLine, Brain, Users } from "lucide-react"

export default function Reclaim() {
    return (
        <div className="container mx-auto px-4 md:py-24 py-6 max-w-6xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-2">
                    <span className="text-indigo-900">Reclaim days of </span>
                    <span className="text-indigo-300">your life.</span>
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    The frontier of artificial intelligence at your fingertips. Interact with deepest user interfaces and powerful
                    oracle security.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                {/* Top row - two equal cards */}
                <FeatureCard
                    title="Ask Healthzenix"
                    description="Command your AI medical scribe to do just about anything to or with your note. Heidi has you. Write a referral letter. Fill out a form. Your choice."
                    icon={<MessageSquare className="h-6 w-6 text-pink-500" />}
                    isNew
                />

                <FeatureCard
                    title="Context"
                    description="Take real-world statements you'd like to incorporate, without verbatizing about. Stop cursing your patients."
                    icon={<FileText className="h-6 w-6 text-pink-500" />}
                    isNew
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Bottom row - three equal cards */}
                <FeatureCard
                    title="Custom template editor"
                    description="Create your own templates. Start from scratch or use ours—start from blank, provide an example or use AI to describe what you want."
                    icon={<PenLine className="h-6 w-6 text-pink-500" />}
                    isNew
                />

                <FeatureCard
                    title="Memory"
                    description="Connect your medications, your corrections, and your metrics to Heidi's memory of your distinct style."
                    icon={<Brain className="h-6 w-6 text-pink-500" />}
                    isNew
                />

                <FeatureCard
                    title="Teams"
                    description="Collaboration features and security controls for small clinics, departments, hospitals, and health systems."
                    icon={<Users className="h-6 w-6 text-pink-500" />}
                    isNew
                />
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                    <span className="font-bold text-indigo-900">📝</span>
                    <div>
                        <span className="font-bold text-indigo-900">Multithread.</span> Do all your work without mental transaction.
                    </div>
                </div>

                <div className="flex items-start gap-2">
                    <span className="font-bold text-indigo-900">📄</span>
                    <div>
                        <span className="font-bold text-indigo-900">Documents and forms.</span> Write letters and handover patients
                        in seconds.
                    </div>
                </div>

                <div className="flex items-start gap-2">
                    <span className="font-bold text-indigo-900">📊</span>
                    <div>
                        <span className="font-bold text-indigo-900">Borrow templates.</span> Get successful templates shared by
                        happy users.
                    </div>
                </div>
            </div>
        </div>
    )
}

interface FeatureCardProps {
    title: string
    description: string
    icon: React.ReactNode
    isNew?: boolean
}

function FeatureCard({ title, description, icon, isNew = false }: FeatureCardProps) {
    return (
        <Card className="p-6 h-full flex flex-col">
            <div className="bg-gray-50 rounded-full w-12 h-12 flex items-center justify-center mb-2">{icon}</div>

            {isNew && (
                <div className="mb-2">
                    <Badge variant="outline" className="bg-pink-100 text-pink-500 border-pink-200 text-xs">
                        New
                    </Badge>
                </div>
            )}

            <h3 className="text-lg font-medium mb-1">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </Card>
    )
}