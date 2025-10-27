export const WhyUs = () => {
    return (
        <div>
            <section className="py-16 bg-pink-50 rounded-lg">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">
                        Why You Should Choose <span className="text-[#FF5C8D]">GlowCart</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                            <div className="text-4xl mb-3">💅</div>
                            <h3 className="font-semibold text-lg mb-2">High-Quality Products</h3>
                            <p className="text-gray-600 text-sm">
                                Discover premium beauty products carefully selected for you.
                            </p>
                        </div>

                        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                            <div className="text-4xl mb-3">🚚</div>
                            <h3 className="font-semibold text-lg mb-2">Fast & Reliable Delivery</h3>
                            <p className="text-gray-600 text-sm">
                                Receive your order within just 3 days, safely and on time.
                            </p>
                        </div>

                        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                            <div className="text-4xl mb-3">💖</div>
                            <h3 className="font-semibold text-lg mb-2">24/7 Customer Support</h3>
                            <p className="text-gray-600 text-sm">
                                Our team is always here to answer your questions and assist you.
                            </p>
                        </div>

                        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                            <div className="text-4xl mb-3">🛍️</div>
                            <h3 className="font-semibold text-lg mb-2">Everything You Need</h3>
                            <p className="text-gray-600 text-sm">
                                Access over 200,000 beauty and skincare products in one place.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
