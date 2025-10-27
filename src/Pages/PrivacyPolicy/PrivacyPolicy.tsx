import React from "react";

export const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#FFF8F9] py-12">
            <div className="max-w-4xl mx-auto px-6">
                <header className="mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Privacy Policy <span className="text-[#FF5C8D]">— GlowCart</span>
                    </h1>
                    <p className="mt-2 text-gray-500">
                        We respect your privacy. This document explains what data we collect and how we use it.
                    </p>
                </header>

                <article className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-gray-700 space-y-6">
                    <section>
                        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
                        <p className="text-sm">
                            We may collect personal information such as name, email, phone number, shipping address,
                            payment details (via our payment provider), and order history when you create an account or place an order.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Data</h2>
                        <ul className="list-disc list-inside text-sm space-y-2">
                            <li>Process orders and deliver products.</li>
                            <li>Provide customer support and respond to inquiries.</li>
                            <li>Improve our products, website and recommend relevant items.</li>
                            <li>Send marketing communications if you opt in (you can unsubscribe anytime).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">3. Sharing & Third Parties</h2>
                        <p className="text-sm">
                            We may share data with shipping carriers, payment processors, analytics providers, and trusted partners.
                            We never sell your personal data to third-party advertisers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">4. Cookies & Tracking</h2>
                        <p className="text-sm">
                            We use cookies and similar technologies to operate the site, remember preferences,
                            and analyze traffic. You can control cookies via your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">5. Security</h2>
                        <p className="text-sm">
                            We apply industry-standard security measures to protect your information.
                            However, no system is 100% secure — please take precautions with your account credentials.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
                        <p className="text-sm">
                            Depending on your location, you may have rights to access, correct, delete or export your data.
                            Contact support to request changes or data exports.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
                        <p className="text-sm">
                            If you have privacy-related questions, email us at <a href="mailto:privacy@glowcart.com" className="text-[#FF5C8D] underline">privacy@glowcart.com</a>.
                        </p>
                    </section>

                    <section>
                        <p className="text-xs text-gray-400">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </section>
                </article>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
