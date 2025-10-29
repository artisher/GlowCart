import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

const FAQ_ITEMS = [
    {
        q: "How long does shipping take?",
        a: "Most orders are processed within 24 hours. Standard delivery typically takes 2–5 business days depending on your location."
    },
    {
        q: "What is your return policy?",
        a: "You can return unopened items within 14 days. For opened cosmetics, please refer to product-specific return rules. Contact support for returns."
    },
    {
        q: "Are your products authentic?",
        a: "Yes — GlowCart only sells genuine products from trusted brands. We verify suppliers and batch numbers where applicable."
    },
    {
        q: "How can I track my order?",
        a: "After shipment you'll receive a tracking number via email. Use it on the carrier's website to track your package."
    },
    {
        q: "Do you ship internationally?",
        a: "Yes — we ship to many countries. Shipping cost and delivery time vary by destination. Check Shipping info at checkout."
    }
];

export const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [search, setSearch] = useState("");

    const filtered = FAQ_ITEMS.filter(
        item =>
            item.q.toLowerCase().includes(search.toLowerCase()) ||
            item.a.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#FFF8F9] py-12">
            <div className="max-w-4xl mx-auto px-6">
                <header className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Help & <span className="text-[#FF5C8D]">FAQ</span>
                    </h1>
                    <p className="mt-2 text-gray-500">
                        Answers to common questions — if you can't find it, contact support.
                    </p>
                </header>

                <div className="mb-6">
                    <div className="relative max-w-xl mx-auto">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                            <Search size={16} />
                        </div>
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search questions..."
                            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF5C8D]/30"
                        />
                    </div>
                </div>

                <section className="space-y-3">
                    {filtered.length === 0 && (
                        <div className="text-center text-gray-500 py-10">No results found.</div>
                    )}

                    {filtered.map((item) => {
                        const realIdx = FAQ_ITEMS.indexOf(item);
                        const opened = openIndex === realIdx;
                        return (
                            <article
                                key={realIdx}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(opened ? null : realIdx)}
                                    className="w-full flex items-start justify-between gap-4"
                                >
                                    <div className="text-left">
                                        <h3 className="text-sm md:text-lg font-semibold text-gray-800">{item.q}</h3>
                                        <p className="text-xs text-gray-500 mt-1 md:mt-0 hidden md:block">
                                            {item.a.slice(0, 80)}{item.a.length > 80 && "…"}
                                        </p>
                                    </div>
                                    <div className={`p-2 rounded-full transition-transform ${opened ? "rotate-180 bg-[#FF5C8D] text-white" : "bg-gray-100 text-gray-600"}`}>
                                        <ChevronDown size={18} />
                                    </div>
                                </button>

                                <div
                                    className={`mt-3 text-sm text-gray-600 transition-all ${opened ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                                    style={{ transitionTimingFunction: "cubic-bezier(.2,.8,.2,1)" }}
                                    aria-hidden={!opened}
                                >
                                    <p className="whitespace-pre-line">{item.a}</p>
                                </div>
                            </article>
                        );
                    })}
                </section>

                <footer className="mt-10 text-center text-sm text-gray-500">
                    Still need help? <a href="/contact" className="text-[#FF5C8D] underline">Contact our support</a>
                </footer>
            </div>
        </div>
    );
};

export default Faq;
