import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();
    const handlFaq = () => { navigate('/faq') }
    const handlPolicy = () => { navigate('/Privacy-Policy') }
    const handlTerms = () => { navigate('/Terms-Of-Service') }
    const handlRefunds = () => { navigate('/Returns-Refunds') }

    return (
        <footer className="bg-[#fff5f7] text-gray-700 pt-12 pb-6 border-t border-pink-100 shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b border-gray-200">

                    {/* Brand */}
                    <div>
                        <h2 className="text-4xl text-center font-bold text-[#FF5C8D] mb-3">GlowCart</h2>
                        <p className="text-sm leading-relaxed text-gray-600">
                            Discover the best in beauty and skincare.
                            We bring you authentic products from top global brands —
                            because your glow deserves the best.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/" className="hover:text-[#FF5C8D] transition">Home</a></li>
                            <li><a href="/shop" className="hover:text-[#FF5C8D] transition">Shop</a></li>
                            <li><a href="/about-us" className="hover:text-[#FF5C8D] transition">About Us</a></li>
                            <li><a href="/contact-us" className="hover:text-[#FF5C8D] transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Customer Care</h3>
                        <ul className="space-y-2 text-sm">
                            <li><h4 onClick={handlFaq} className="hover:text-[#FF5C8D] cursor-pointer transition">FAQ</h4></li>
                            <li><h4 onClick={handlRefunds} className="hover:text-[#FF5C8D]  cursor-pointer transition">Returns & Refunds</h4></li>
                            <li><h4 onClick={handlPolicy} className="hover:text-[#FF5C8D] cursor-pointer transition">Privacy Policy</h4></li>
                            <li><h4 onClick={handlTerms} className="hover:text-[#FF5C8D]  cursor-pointer transition">Terms of Service</h4></li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Get in Touch</h3>
                        <ul className="text-sm space-y-2">
                            <li className="flex items-center gap-2">
                                <Mail size={16} /> support@glowcart.com
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} /> +43 660 123 4567
                            </li>
                        </ul>
                        <div className="flex items-center gap-4 mt-4 text-gray-600">
                            <a href="#" className="hover:text-[#FF5C8D]"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-[#FF5C8D]"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-[#FF5C8D]"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-[#FF5C8D]"><Youtube size={20} /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 pt-6">
                    <p>© {new Date().getFullYear()} GlowCart. All rights reserved.</p>
                    <p>
                        Made with <span className="text-[#FF5C8D]">♥</span> by the GlowCart Team.
                    </p>
                </div>
            </div>
        </footer>
    );
};
