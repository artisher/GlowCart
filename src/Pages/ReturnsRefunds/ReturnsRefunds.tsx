import React from "react";

const ReturnsRefunds: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#FFF8F9] py-12">
            <div className="max-w-4xl mx-auto px-6">
                <header className="mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Returns & <span className="text-[#FF5C8D]">Refunds</span>
                    </h1>
                    <p className="mt-2 text-gray-500">
                        We want you to love your purchase. Here’s how we handle returns and refunds.
                    </p>
                </header>

                <article className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-gray-700 space-y-6">
                    <section>
                        <h2 className="text-xl font-semibold mb-2">1. Return Eligibility</h2>
                        <p className="text-sm">
                            You may return most new, unopened products within <strong>14 days</strong> of delivery for a full refund.
                            Items must be in their original packaging, unused, and with all seals intact.
                            Due to hygiene standards, certain items such as opened cosmetics or fragrances may not be returnable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">2. How to Request a Return</h2>
                        <ol className="list-decimal list-inside text-sm space-y-2">
                            <li>Log in to your GlowCart account.</li>
                            <li>Go to “My Orders” → select the order → click “Request Return.”</li>
                            <li>Provide a reason and upload photos if required.</li>
                            <li>Our team will review and respond within 2 business days.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">3. Refund Process</h2>
                        <p className="text-sm">
                            Once we receive and inspect your returned item, your refund will be processed to your original
                            payment method within <strong>5–7 business days</strong>. You’ll receive a confirmation email once complete.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">4. Non-Returnable Items</h2>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Opened skincare, makeup, or perfume products</li>
                            <li>Gift cards or promotional items</li>
                            <li>Items marked as “Final Sale”</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">5. Damaged or Incorrect Products</h2>
                        <p className="text-sm">
                            If you receive a damaged or incorrect item, please contact us within <strong>48 hours</strong> of delivery
                            with photos. We will arrange a replacement or refund promptly.
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

export default ReturnsRefunds;
