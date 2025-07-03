"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isMenuOpen])

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50  bg-inherit/50 backdrop-blur-md border-b">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link href="/" className="text-2xl font-bold text-indigo-600">
                                Healthzenix
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
                                Use Cases
                            </Link>
                            <Link href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
                                Pricing
                            </Link>
                            <Link href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
                                Blog
                            </Link>
                            <Link href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
                                Customers
                            </Link>
                            <Link href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
                                Our Story
                            </Link>
                            <Link href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
                                Product
                            </Link>
                        </div>

                        {/* Right Side Actions */}
                        <div className="hidden md:flex items-center space-x-4">

                            <Link href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
                                Contact us
                            </Link>
                            <Link href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
                                Log in
                            </Link>
                            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm">Sign Up</Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-700 hover:text-gray-900 cursor-pointer transition-colors z-60 relative"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Full Screen Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >
                {/* Background */}
                <div className="absolute inset-0 bg-white" />

                {/* Menu Content */}
                <div
                    className={`relative h-full flex flex-col justify-center items-center px-6 transform transition-all duration-500 ease-out ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
                    {/* Navigation Links */}
                    <div className="space-y-8 text-center">
                        {["Use Cases", "Pricing", "Blog", "Customers", "Our Story", "Product"].map((item, index) => (
                            <div
                                key={item}
                                className={`transform transition-all duration-500 ease-out ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <Link
                                    href="#"
                                    className="block text-2xl font-medium text-gray-800 hover:text-indigo-600 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            </div>
                        ))}
                    </div>



                    {/* Action Buttons */}
                    <div
                        className={`mt-2 space-y-1 w-full max-w-xs transform transition-all duration-500 ease-out ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                            }`}
                        style={{ transitionDelay: "700ms" }}
                    >
                        <Link
                            href="#"
                            className="block text-center text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors py-3"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact us
                        </Link>
                        <Link
                            href="#"
                            className="block text-center text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors py-3"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Log in
                        </Link>
                        <Button
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 text-lg"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
