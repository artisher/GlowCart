import { CircleUser, ShoppingCart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const Logo = "/Logo/Logo.png"

export const DestktopMenu = () => {
    const [open, setOpen] = useState(false);
    const [categoryIsOpen, setCategoryIsOpen] = useState(false);
    const closeTimer = useRef<number | null>(null);
    const ICONS: Record<string, string> = {
        makeup: "💄",
        skincare: "🧴",
        hair: "💆‍♀️",
        body: "🛁",
        fragrance: "🌸",
        nails: "💅",
        tools: "🧰",
        men: "🧔",
        gifts: "🎁",
    };

    const CATEGORIES: Record<string, string[]> = {
        makeup: ["lipstick", "foundation", "concealer", "blush", "eyeshadow", "mascara", "eyeliner", "primer", "highlighter", "bronzer", "setting"],
        skincare: ["cleanser", "toner", "moisturizer", "serum", "mask", "sunscreen", "eye-cream", "exfoliator", "face-oil", "acne"],
        hair: ["shampoo", "conditioner", "mask", "oil", "serum", "spray", "color", "heat-protectant"],
        body: ["lotion", "cream", "wash", "scrub", "deodorant", "hand-foot", "sun-care"],
        fragrance: ["women", "men", "unisex", "body-mist", "oil", "gift-set"],
        nails: ["polish", "care", "tools", "gel-acrylic"],
        tools: ["brushes", "sponge", "curler", "tweezers", "bags", "mirrors", "hair-brush"],
        men: ["beard", "shaving", "aftershave", "shampoo", "face-wash", "perfume"],
        gifts: ["makeup-set", "skincare-set", "hair-set", "fragrance-box"],
    };


    const labelize = (slug: string) =>
        slug
            .replace(/-/g, " ")
            .replace(/\b\w/g, c => c.toUpperCase());
    const navigate = useNavigate();

    const handleLogin = () => { navigate('/login'); setOpen(false) }
    const handleAboutUs = () => { navigate('/about-us'); setOpen(false) }
    const handleHome = () => { navigate('/'); setOpen(false) }
    const handlContactUs = () => { navigate('/Contact-Us'); setOpen(false) }
    const handlCategories = () => { navigate('/categories'); setOpen(false) }
    const handlShop = () => { navigate('/shop'); setOpen(false) }

    const handlCart = () => { navigate('/cart') }
    const handleAdmin = () => { navigate('/admin') }



    const openCategories = () => {
        if (closeTimer.current) { window.clearTimeout(closeTimer.current); closeTimer.current = null }
        setCategoryIsOpen(true);
    };
    const scheduleCloseCategories = () => {
        if (closeTimer.current) window.clearTimeout(closeTimer.current);
        closeTimer.current = window.setTimeout(() => setCategoryIsOpen(false), 130); // تاخیر کوتاه
    };

    useEffect(() => { console.log(categoryIsOpen); }, [categoryIsOpen]);
    console.log(open);

    return (
        <div className="bg-[#fff8f9] border-b shadow-xl border-[#d6d6d6]">
            <div className="flex justify-between w-[65%] mx-auto p-[5px]">
                <div className="flex items-center gap-10">
                    <img src={Logo} alt="" onClick={handleHome} className="h-22 w-24 cursor-pointer" />
                    <ul className="flex gap-14 text-[#575757] items-center">
                        <li onClick={handleHome} className="relative cursor-pointer before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-[#FF5C8D] before:transition-all before:duration-300 hover:before:w-full">Home</li>
                        <li onClick={handlShop} className="relative cursor-pointer before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-[#FF5C8D] before:transition-all before:duration-300 hover:before:w-full">Shop</li>


                        <div
                            className="relative"
                            onMouseEnter={openCategories}
                            onMouseLeave={scheduleCloseCategories}
                        >
                            <li
                                onClick={handlCategories}
                                className="relative cursor-pointer before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-[#FF5C8D] before:transition-all before:duration-300 hover:before:w-full"
                            >
                                Categories
                            </li>

                            {categoryIsOpen && (
                                <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2 z-50">
                                    <div className="w-[70vw] max-w-[1200px] bg-white/95 backdrop-blur rounded-2xl shadow-2xl border border-gray-100 p-6">
                                        <ul className="flex flex-wrap gap-10 justify-between text-sm text-gray-700">
                                            {Object.entries(CATEGORIES).map(([catKey, subs]) => (
                                                <li key={catKey} className="min-w-[180px]">
                                                    <span className="font-semibold text-[#FF5C8D]">
                                                        {ICONS[catKey] ?? "🏷️"} {labelize(catKey)}
                                                    </span>
                                                    <ul className="pl-4 list-disc space-y-1 mt-2">
                                                        {subs.map(sub => (
                                                            <li
                                                                key={sub}
                                                                className="cursor-pointer hover:text-[#FF5C8D] transition-colors"
                                                                onClick={() => {
                                                                    // رفتن به صفحه شاپ با فیلتر
                                                                    // اگر از useNavigate استفاده می‌کنی:
                                                                    // navigate(`/shop?category=${catKey}&sub=${sub}`);
                                                                    // یا اگر setSearchParams داری از همون استفاده کن
                                                                    window.location.href = `/shop?category=${catKey}&sub=${sub}`;
                                                                }}
                                                            >
                                                                {labelize(sub)}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        <li onClick={handleAboutUs} className="relative cursor-pointer before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-[#FF5C8D] before:transition-all before:duration-300 hover:before:w-full">About Us</li>
                        <li onClick={handlContactUs} className="relative cursor-pointer before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-[#FF5C8D] before:transition-all before:duration-300 hover:before:w-full">Contact Us</li>
                    </ul>
                </div>

                <ul className="flex gap-7 items-center">
                    <li onClick={handlCart} className="bg-[#FF5C8D] p-1.5 rounded-xl cursor-pointer hover:bg-[#fd3a75] transition-transform duration-300 hover:scale-110">
                        <ShoppingCart size={24} color="#fff" />
                    </li>
                    <li className="bg-[#FF5C8D] p-1.5 rounded-xl cursor-pointer hover:bg-[#fd3a75] transition-transform duration-300 hover:scale-110" onClick={handleLogin}>
                        <CircleUser size={24} color="#fff" />
                    </li>
                    <li onClick={handleAdmin} className="bg-[#FF5C8D] p-1.5 rounded-xl cursor-pointer hover:bg-[#fd3a75] text-white transition-transform duration-300 hover:scale-110"><h1>enter admin panel</h1></li>
                </ul>
            </div>
        </div>
    )
}
