import { useState } from "react";

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: "p-101",
            title: "Velvet Matte Liquid Lipstick",
            price: 14.99,
            quantity: 4,
            image: "https://picsum.photos/seed/lip/400/400",
        },
        {
            id: "p-104",
            title: "Cloud Touch Blush Stick",
            price: 13.5,
            quantity: 1,
            image: "https://picsum.photos/seed/blush/400/400",
        },
    ]);

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-2xl font-semibold mb-6 text-[#FF5C8D]">Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <div className="text-center py-20 text-gray-500">
                    <p className="text-lg">🛒 Your cart is empty!</p>
                </div>
            ) : (
                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 flex flex-col gap-5">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 rounded-lg object-cover"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-sm text-gray-500">${item.price}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="px-3 py-1 bg-gray-200 rounded">−</button>
                                    <span>{item.quantity}</span>
                                    <button className="px-3 py-1 bg-[#FF5C8D] text-white rounded">+</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="bg-white rounded-xl p-6 shadow-md h-fit">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        <div className="flex justify-between text-gray-700 mb-2">
                            <span>Subtotal</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-gray-700 mb-2">
                            <span>Shipping</span>
                            <span>$5.00</span>
                        </div>
                        <div className="border-t my-3"></div>
                        <div className="flex justify-between font-semibold text-[#FF5C8D] text-lg">
                            <span>Total</span>
                            <span>${(total + 5).toFixed(2)}</span>
                        </div>
                        <button className="w-full mt-5 bg-[#FF5C8D] text-white py-3 rounded-xl hover:bg-[#e64f7c] transition">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Cart;