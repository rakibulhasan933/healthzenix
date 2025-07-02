import { Card } from "./ui/card"

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Lisa Terwilliger",
            title: "Therapist / LIB",
            headline: "About our work-from-home series!",
            content:
                "Heidi Health found me at a time when our clinic was transitioning to telehealth. The ability to have an AI scribe to capture sessions and take HIPAA compliant protected therapeutic file notes has been a game changer for our clinic and our patients.",
            image: "/1.png?height=80&width=80",
        },
        {
            name: "Corey Dickinson",
            title: "Family Nurse Practitioner / LIB",
            headline: "I'm always confident work to be more effective and more efficient",
            content:
                "I'm always confident work to be more effective and more efficient with AI. Getting a real 'boost in the clinical space is how often I have been able to see more patients and recommend it to clinicians and docs that take a hectic schedule.",
            image: "/2.png?height=80&width=80",
        },
        {
            name: "Christopher Rodriguez",
            title: "Family Nurse Practitioner / LIB",
            headline: "Excellent! Support is Great and Phenomenal",
            content:
                "Thanks a bunch, I requested a template but created for one with my specific needs. The support team did an excellent job helping me navigate all the important and key aspects of the template and performed flawlessly.",
            image: "/3.png?height=80&width=80",
        },
        {
            name: "Shanice Schart",
            title: "Family Medicine / LIB",
            headline: "Resident time saver!",
            content:
                "It was drafted so perfect I told for my clinic sessions. It has some real time saving features that help me get my patients quicker than expected. The time-blocking is amazing!",
            image: "/5.png?height=80&width=80",
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:py-20 py-8 gap-6">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
            ))}
        </div>
    )
}

interface TestimonialProps {
    name: string
    title: string
    headline: string
    content: string
    image: string
}

function TestimonialCard({ name, title, headline, content, image }: TestimonialProps) {
    return (
        <Card className="p-6 h-full flex flex-col">
            <div className="flex flex-col items-center text-center mb-4">
                <img src={image || "/placeholder.svg"} alt={name} className="w-20 h-20 rounded-full object-cover mb-3" />
                <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-blue-500 text-sm">
                            ★
                        </span>
                    ))}
                </div>
            </div>

            <h3 className="font-semibold text-sm mb-3 text-center">{headline}</h3>

            <p className="text-gray-600 text-xs leading-relaxed mb-4 flex-grow">{content}</p>

            <div className="text-center mt-auto">
                <p className="font-medium text-sm">{name}</p>
                <p className="text-gray-500 text-xs">{title}</p>
            </div>
        </Card>
    )
}