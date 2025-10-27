const AboutUs = () => {
    return (
        <div>
            <section className="bg-white py-10">
                <div className="max-w-5xl mx-auto text-center px-4">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">
                        About <span className="text-[#FF5C8D]">GlowCart</span>
                    </h1>
                    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        GlowCart was founded with a simple mission — to bring authentic beauty and
                        self-care products closer to everyone. We believe every person deserves to
                        feel confident, radiant, and effortlessly elegant.
                    </p>

                    <div className="mt-16 grid md:grid-cols-3 gap-10">
                        <div>
                            <h3 className="font-semibold text-lg text-gray-800 mb-2">🌸 Authenticity</h3>
                            <p className="text-gray-600 text-sm">
                                We offer only genuine and trusted beauty products from leading global brands.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-gray-800 mb-2">💖 Care</h3>
                            <p className="text-gray-600 text-sm">
                                Your natural beauty and skin health are our top priorities.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-gray-800 mb-2">✨ Elegance</h3>
                            <p className="text-gray-600 text-sm">
                                Enjoy a luxurious, smooth, and delightful shopping experience with every visit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="rounded-lg bg-[#FF5C8D] p-2 mt-10">
                <div className="rounded-lg flex flex-col bg-[#FFF5F7] gap-13 text-center py-6">
                    <div>
                        <h3 className="text-5xl font-bold text-[#FF5C8D]">+5,000</h3>
                        <p className="text-gray-500 text-md">Daily Visitors</p>
                    </div>
                    <div>
                        <h3 className="text-5xl font-bold text-[#FF5C8D]">+20,000</h3>
                        <p className="text-gray-500 text-md">Beauty Products</p>
                    </div>
                    <div>
                        <h3 className="text-5xl font-bold text-[#FF5C8D]">+10,000</h3>
                        <p className="text-gray-400 text-md">Happy Customers Worldwide</p>
                    </div>
                    <div>
                        <h3 className="text-5xl font-bold text-[#FF5C8D]">+50</h3>
                        <p className="text-gray-500 text-md">Dedicated Team Members</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
