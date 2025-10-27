import React from "react";

const TermsOfService: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#FFF8F9] py-12">
            <div className="max-w-4xl mx-auto px-6">
                <header className="mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Terms of <span className="text-[#FF5C8D]">Service</span>
                    </h1>
                    <p className="mt-2 text-gray-500">
                        Please read these terms carefully before using GlowCart.
                    </p>
                </header>

                <article className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-gray-700 space-y-6">
                    <section>
                        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
                        <p className="text-sm">
                            By accessing or using GlowCart’s website, you agree to comply with and be bound by these Terms of Service.
                            If you disagree with any part, you may not access the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">2. Account Responsibilities</h2>
                        <p className="text-sm">
                            You are responsible for maintaining the confidentiality of your account and password.
                            Any activity under your account will be deemed your responsibility. Notify us immediately of unauthorized use.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">3. Orders & Payments</h2>
                        <ul className="list-disc list-inside text-sm space-y-2">
                            <li>All prices are listed in your local currency and include taxes unless stated otherwise.</li>
                            <li>We reserve the right to cancel or limit quantities on any order.</li>
                            <li>Payment must be made through approved secure methods (Stripe, PayPal, etc.).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
                        <p className="text-sm">
                            All content on this website — including logos, graphics, images, and text — is the property of GlowCart or its licensors.
                            You may not reproduce or distribute content without written permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
                        <p className="text-sm">
                            GlowCart shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services or products.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
                        <p className="text-sm">
                            We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the new terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
                        <p className="text-sm">
                            For any questions about these Terms, please contact{" "}
                            <a href="mailto:legal@glowcart.com" className="text-[#FF5C8D] underline">legal@glowcart.com</a>.
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

export default TermsOfService;
