import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-20">
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold text-indigo-600">heidi</h3>
                            <p className="text-gray-600 text-sm mt-2">Customized for clinicians, for clinicians</p>
                        </div>

                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                                <Youtube className="h-5 w-5" />
                                <span className="sr-only">YouTube</span>
                            </a>
                        </div>
                    </div>

                    {/* Use Cases */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Use Cases</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Psychologists
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Dietitian
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    GP
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Family Doctors
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Nurses
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Allied Health
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Pediatricians
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Compliance */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Compliance</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Safety
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Trust Centre
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    GDPR
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    HIPAA
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Canada
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    AU/NZ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Customers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Media
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Open Roles
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Product
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Help Centre
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Legal
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Usage Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    UKCDR Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Accessibility
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 mt-12 pt-8">
                    <p className="text-gray-500 text-sm">© 2025 Heidi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
