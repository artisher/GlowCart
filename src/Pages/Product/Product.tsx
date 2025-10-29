
import React, { useState } from "react";
import { Star, ShoppingCart, Truck, Heart } from "lucide-react";

export type Product = {
    id: string;
    title: string;
    brand?: string;
    price: number;
    rating: number;
    description: string;
    image: string;
    specs?: Record<string, string>;
    isNew?: boolean;
    isHot?: boolean;
    stock?: number;
};


export const Product: React.FC<{ productProp: Product }> = ({ productProp }) => {
    const product = productProp;

    const [mainImg, setMainImg] = useState<string>(product.image);
    const [qty, setQty] = useState<number>(1);
    const [activeTab, setActiveTab] = useState<"description" | "specs" | "reviews">("description");

    const changeQty = (delta: number) => {
        setQty((prev) => {
            const next = prev + delta;
            if (next < 1) return 1;
            if (product.stock && next > product.stock) return product.stock;
            return next;
        });
    };

    const formatPrice = (p: number) => `$${p.toFixed(2)}`;
    console.log(setMainImg);

    return (
        <div className="min-h-screen bg-[#FFF8F9] py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 lg:p-10">
                    <div className="md:flex md:gap-8">
                        {/* Left: Gallery */}
                        <div className="md:w-1/2">
                            <div className="rounded-xl overflow-hidden border border-gray-100">
                                <img src={mainImg} alt={product.title} className="w-full h-[420px] object-cover" />
                            </div>

                        </div>

                        {/* Right: Info */}
                        <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{product.title}</h1>
                                    <p className="text-sm text-gray-500 mt-1">{product.brand}</p>
                                </div>

                                <div className="flex flex-col items-end gap-2">
                                    {product.isNew && <span className="bg-[#FF5C8D] text-white text-xs px-2 py-1 rounded">NEW</span>}
                                    {product.isHot && <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">HOT</span>}
                                </div>
                            </div>

                            {/* Price & rating */}
                            <div className="mt-4 flex items-center justify-between gap-4">
                                <div>
                                    <div className="text-2xl font-extrabold text-[#FF5C8D]">{formatPrice(product.price)}</div>
                                    <div className="text-xs text-gray-500">Inclusive of taxes</div>
                                </div>

                                <div className="flex items-center gap-2 text-sm">
                                    <div className="flex items-center gap-1">
                                        <span className="text-yellow-400 flex items-center">
                                            <Star size={16} />
                                        </span>
                                        <span className="font-medium">{product.rating}</span>
                                    </div>
                                    <div className="text-gray-400">|</div>
                                    <div className="text-gray-500 text-xs">{product.stock ? `${product.stock} in stock` : "Check availability"}</div>
                                </div>
                            </div>

                            {/* Short description */}
                            <p className="text-sm text-gray-600 mt-4 line-clamp-3">{product.description}</p>

                            {/* Actions */}
                            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
                                <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
                                    <button onClick={() => changeQty(-1)} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">−</button>
                                    <div className="w-12 text-center font-medium">{qty}</div>
                                    <button onClick={() => changeQty(1)} className="px-3 py-1 rounded bg-[#FF5C8D] text-white hover:bg-[#ff3e7a]">+</button>
                                </div>

                                <div className="flex gap-3 flex-1">
                                    <button className="flex-1 bg-[#FF5C8D] hover:bg-[#ff3e7a] text-white rounded-lg py-3 flex items-center justify-center gap-2">
                                        <ShoppingCart size={16} /> Add to Cart
                                    </button>
                                    <button className="px-4 py-3 rounded-lg border border-gray-200 hover:shadow-sm flex items-center gap-2">
                                        <Truck size={16} /> Buy Now
                                    </button>
                                    <button className="p-3 rounded-lg border border-gray-100 hover:bg-gray-50">
                                        <Heart size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Tabs */}
                            <div className="mt-8">
                                <div className="flex gap-2 border-b border-gray-100">
                                    <button
                                        className={`pb-3 px-3 text-sm ${activeTab === "description" ? "border-b-2 border-[#FF5C8D] font-medium text-gray-800" : "text-gray-500"}`}
                                        onClick={() => setActiveTab("description")}
                                    >
                                        Description
                                    </button>
                                    <button
                                        className={`pb-3 px-3 text-sm ${activeTab === "specs" ? "border-b-2 border-[#FF5C8D] font-medium text-gray-800" : "text-gray-500"}`}
                                        onClick={() => setActiveTab("specs")}
                                    >
                                        Specifications
                                    </button>
                                    <button
                                        className={`pb-3 px-3 text-sm ${activeTab === "reviews" ? "border-b-2 border-[#FF5C8D] font-medium text-gray-800" : "text-gray-500"}`}
                                        onClick={() => setActiveTab("reviews")}
                                    >
                                        Reviews
                                    </button>
                                </div>

                                <div className="mt-4">
                                    {activeTab === "description" && (
                                        <div className="text-sm text-gray-600">
                                            <p className="mb-3">{product.description}</p>
                                            <p>How to use: you can Read in ...</p>
                                        </div>
                                    )}

                                    {activeTab === "specs" && (
                                        <div className="text-sm text-gray-700">
                                            <table className="w-full text-left text-sm">
                                                <tbody>
                                                    {product.specs && Object.entries(product.specs).map(([k, v]) => (
                                                        <tr key={k} className="border-b border-gray-100">
                                                            <td className="py-3 font-medium w-1/3 text-gray-600">{k}</td>
                                                            <td className="py-3 text-gray-700">{v}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}

                                    {activeTab === "reviews" && (
                                        <div className="text-sm text-gray-700 space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="text-yellow-400"><Star size={18} /></div>
                                                <div>
                                                    <div className="font-medium">Sara</div>
                                                    <div className="text-xs text-gray-500">2 days ago</div>
                                                    <p className="mt-1 text-gray-600">I love the color and it lasts long. Doesn't dry my lips.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <div className="text-yellow-400"><Star size={18} /></div>
                                                <div>
                                                    <div className="font-medium">Nima</div>
                                                    <div className="text-xs text-gray-500">1 week ago</div>
                                                    <p className="mt-1 text-gray-600">Great pigment but a little sticky on hot days.</p>
                                                </div>
                                            </div>

                                            <button className="mt-2 text-sm text-[#FF5C8D]">See all reviews</button>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Related products (simple grid) */}
                    <div className="mt-10">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Products</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {/* These are placeholders — later replace with real related items */}
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="bg-gray-50 rounded-lg p-3 flex flex-col items-start gap-2">
                                    <div className="w-full h-28 bg-gray-200 rounded overflow-hidden" />
                                    <div className="text-sm font-medium text-gray-700">Product {i}</div>
                                    <div className="text-sm text-[#FF5C8D] font-semibold">$9.{i}9</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* small note how to connect later */}
                <div className="mt-4 text-xs text-gray-400">
                    Tip: this component accepts an optional <code>productProp</code>. When you connect routing, pass the product data
                    or fetch it by id in the product page and render this component.
                </div>
            </div>
        </div>
    );
};

export default Product;
