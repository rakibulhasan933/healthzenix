"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50  bg-inherit/50 backdrop-blur-md border-b border-gray-200/50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="text-2xl font-bold text-indigo-600">
                            Healthzenix
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
                            Use Cases
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
                            Pricing
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
                            Blog
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
                            Customers
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
                            Our Story
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
                            Product
                        </a>
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center space-x-4">

                        <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
                            Contact us
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
                            Log in
                        </a>
                        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm">Sign Up</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200/50 bg-white/90 backdrop-blur-md">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a
                                href="#"
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
                            >
                                Use Cases
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
                            >
                                Pricing
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
                            >
                                Blog
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
                            >
                                Customers
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
                            >
                                Our Story
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
                            >
                                Product
                            </a>
                            <div className="border-t border-gray-200 pt-2">
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
                                >
                                    Contact us
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
                                >
                                    Log in
                                </a>
                                <div className="px-3 py-2">
                                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm">Sign Up</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
