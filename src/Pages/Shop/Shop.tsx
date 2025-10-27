// src/pages/Shop.tsx
import React, { useEffect, useMemo, useState, useRef } from "react";
import { Search, X, Filter } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
// اصلاح کن به مسیر واقعی فایل products-200 در پروژه‌ات:
import { Products } from "../../Products/Products";
import { Pagination } from "@mui/material";

const CATEGORIES: Record<string, string[]> = {
    makeup: ["lipstick", "foundation", "concealer", "blush", "eyeshadow", "mascara", "eyeliner", "primer", "highlighter", "bronzer", "setting"],
    skincare: ["cleanser", "toner", "moisturizer", "serum", "mask", "sunscreen", "eye-cream", "exfoliator", "face-oil", "acne"],
    hair: ["shampoo", "conditioner", "mask", "oil", "serum", "spray", "color", "heat-protectant"],
    body: ["lotion", "cream", "wash", "scrub", "deodorant", "hand-foot", "sun-care"],
    fragrance: ["women", "men", "unisex", "body-mist", "oil", "gift-set"],
    nails: ["polish", "care", "tools", "gel-acrylic"],
    tools: ["brushes", "sponge", "curler", "tweezers", "bags", "mirrors", "hair-brush"],
    men: ["beard", "shaving", "aftershave", "shampoo", "face-wash", "perfume"],
    gifts: ["makeup-set", "skincare-set", "hair-set", "fragrance-box"]
};

const labelize = (slug: string) =>
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const Shop: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initializedRef = useRef(false);


    const [q, setQ] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSub, setSelectedSub] = useState<string | null>(null);


    const [page, setPage] = useState<number>(1);
    const itemsPerPage = 20;


    const searchDebounceRef = useRef<number | null>(null);


    useEffect(() => {
        const paramQ = searchParams.get("q") ?? "";
        const paramCat = searchParams.get("category");
        const paramSub = searchParams.get("sub");
        const paramPage = parseInt(searchParams.get("page") || "1", 10);

        setQ(paramQ);
        setSelectedCategory(paramCat);
        setSelectedSub(paramSub);
        setPage(isNaN(paramPage) || paramPage < 1 ? 1 : paramPage);


        initializedRef.current = true;

    }, [searchParams]);


    const goToCategory = (cat?: string, sub?: string) => {
        const next = new URLSearchParams(searchParams.toString());
        if (cat) next.set("category", cat); else next.delete("category");
        if (sub) next.set("sub", sub); else next.delete("sub");

        next.set("page", "1");
        setSearchParams(next, { replace: true });

        setSelectedCategory(cat ?? null);
        setSelectedSub(sub ?? null);
        setPage(1);
    };


    useEffect(() => {
        if (!initializedRef.current) return;

        const next = new URLSearchParams(searchParams.toString());
        if (selectedCategory) next.set("category", selectedCategory);
        else next.delete("category");

        if (selectedSub) next.set("sub", selectedSub);
        else next.delete("sub");


        next.set("page", "1");
        const nextStr = next.toString();
        if (nextStr !== searchParams.toString()) {
            setSearchParams(next, { replace: true });
        }
        setPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCategory, selectedSub]);

    // debounce q -> update URL after 500ms idle (also reset page to 1)
    useEffect(() => {
        if (searchDebounceRef.current) {
            window.clearTimeout(searchDebounceRef.current);
            searchDebounceRef.current = null;
        }
        searchDebounceRef.current = window.setTimeout(() => {
            const next = new URLSearchParams(searchParams.toString());
            if (q) next.set("q", q);
            else next.delete("q");
            // reset page to 1 when searching
            next.set("page", "1");

            if (next.toString() !== searchParams.toString()) {
                setSearchParams(next, { replace: true });
            }
            setPage(1);
        }, 500);

        return () => {
            if (searchDebounceRef.current) {
                window.clearTimeout(searchDebounceRef.current);
                searchDebounceRef.current = null;
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [q]);

    // lock body scroll when mobile drawer open
    useEffect(() => {
        if (showFilters) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => { document.body.style.overflow = prev; };
        }
        return;
    }, [showFilters]);

    // client-side filter
    const filtered = useMemo(() => {
        return Products.filter((p) => {
            if (q.trim()) {
                const s = q.toLowerCase();
                if (!(`${p.title} ${p.brand}`.toLowerCase().includes(s))) return false;
            }
            if (selectedCategory && p.category !== selectedCategory) return false;
            if (selectedSub && p.subcategory !== selectedSub) return false;
            return true;
        });
    }, [q, selectedCategory, selectedSub]);

    // paginated slice
    const paginated = useMemo(() => {
        const start = (page - 1) * itemsPerPage;
        return filtered.slice(start, start + itemsPerPage);
    }, [filtered, page]);

    const resetFilters = () => {
        setSelectedCategory(null);
        setSelectedSub(null);
        setQ("");
        // clear URL too
        setSearchParams({}, { replace: true });
        setPage(1);
    };

    const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
        setPage(newPage);
        const next = new URLSearchParams(searchParams.toString());
        next.set("page", newPage.toString());
        setSearchParams(next, { replace: true });
        // scroll to top of product grid for UX
        const el = document.querySelector("#product-grid");
        if (el) (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const navigate = useNavigate()
    const handleClick = (id: string) => navigate(`/product/${id}`);
    return (
        <div className="min-h-screen bg-[#FFF8F9]">
            {/* Top bar */}
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Shop <span className="text-[#FF5C8D]">GlowCart</span>
                    </h1>

                    {/* Search (always visible, aligned right) */}
                    <div className="relative w-full max-w-sm ml-6">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                            <Search size={16} />
                        </div>
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search products, brands..."
                            className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF5C8D]/30 focus:border-[#FF5C8D]"
                        />
                        {q && (
                            <button
                                onClick={() => setQ("")}
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 p-1 rounded hover:bg-gray-100"
                                aria-label="Clear search"
                            >
                                <X size={14} />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Main area */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="md:flex md:gap-8">
                    {/* Sidebar (desktop: visible; mobile: hidden) */}
                    <aside className="hidden md:block w-80 shrink-0">
                        <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                            <div className="mb-4 flex items-center justify-between">
                                <h3 className="text-lg font-semibold">Filters</h3>
                                <button onClick={resetFilters} className="text-sm text-gray-500 hover:text-[#FF5C8D]">
                                    Reset
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
                                    <div className="grid grid-cols-1 gap-2 max-h-48 overflow-auto pr-1">
                                        {Object.keys(CATEGORIES).map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => goToCategory(cat)}
                                                className={`text-left text-sm px-3 py-2 rounded-lg border w-full ${selectedCategory === cat ? "border-[#FF5C8D] bg-[#fff0f3]" : "border-gray-100"
                                                    } hover:border-[#FF5C8D]`}
                                            >
                                                {labelize(cat)}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {selectedCategory && (
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-700 mb-2">Subcategory</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {CATEGORIES[selectedCategory].map((sub) => (
                                                <button
                                                    key={sub}
                                                    onClick={() => goToCategory(selectedCategory!, sub)}
                                                    className={`text-sm px-3 py-2 rounded-lg border ${selectedSub === sub ? "border-[#FF5C8D] bg-[#fff0f3]" : "border-gray-100"
                                                        } hover:border-[#FF5C8D]`}
                                                >
                                                    {labelize(sub)}
                                                </button>
                                            ))}
                                            <button onClick={() => goToCategory(selectedCategory)} className="text-sm px-3 py-2 rounded-lg border border-gray-100 hover:border-[#FF5C8D]">
                                                Clear Sub
                                            </button>
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <h4 className="text-sm font-medium text-gray-700 mb-2">Extras</h4>
                                    <div className="flex gap-2 items-center">
                                        <label className="flex items-center gap-2 text-sm">
                                            <input type="checkbox" checked={false} readOnly className="form-checkbox h-4 w-4" />
                                            In Stock
                                        </label>
                                        <label className="flex items-center gap-2 text-sm">
                                            <input type="checkbox" checked={false} readOnly className="form-checkbox h-4 w-4" />
                                            On Sale
                                        </label>
                                    </div>
                                </div>

                                <div className="mt-2 flex gap-2">
                                    <button onClick={() => resetFilters()} className="flex-1 bg-gray-100 rounded-lg px-4 py-2 text-sm font-medium">Reset</button>
                                    <button onClick={() => { /* apply keeps URL already in sync */ }} className="flex-1 rounded-lg px-4 py-2 bg-[#FF5C8D] text-white font-medium">Apply</button>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Content */}
                    <main className="flex-1">
                        {/* Mobile filter button (visible on mobile only) */}
                        <button
                            onClick={() => setShowFilters(true)}
                            className="md:hidden fixed left-4 bottom-6 z-50 bg-white border border-gray-100 rounded-full p-3 shadow-lg hover:shadow-2xl transition flex items-center justify-center"
                            title="Open Filters"
                        >
                            <Filter size={18} className="text-[#FF5C8D]" />
                        </button>

                        {/* Mobile drawer & overlay: RENDER ONLY WHEN showFilters IS TRUE */}
                        {showFilters && (
                            <>
                                {/* overlay */}
                                <div
                                    className="fixed inset-0 z-40 bg-black/30"
                                    onClick={() => setShowFilters(false)}
                                    aria-hidden="true"
                                />

                                {/* drawer panel */}
                                <div
                                    className="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-xl p-5 z-50 touch-auto"
                                    role="dialog"
                                    aria-modal="true"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-semibold">Filters</h3>
                                        <button onClick={() => setShowFilters(false)} className="p-1 rounded hover:bg-gray-100">
                                            <X size={18} />
                                        </button>
                                    </div>

                                    <div className="space-y-4 overflow-auto h-[calc(100vh-120px)] pr-1">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {Object.keys(CATEGORIES).map((cat) => (
                                                    <button
                                                        key={cat}
                                                        onClick={() => { goToCategory(cat); setShowFilters(false); }}
                                                        className={`text-left text-sm px-3 py-2 rounded-lg border ${selectedCategory === cat ? "border-[#FF5C8D] bg-[#fff0f3]" : "border-gray-100"
                                                            } hover:border-[#FF5C8D]`}
                                                    >
                                                        {labelize(cat)}
                                                    </button>
                                                ))}
                                                <button
                                                    onClick={() => { goToCategory(undefined); setShowFilters(false); }}
                                                    className="col-span-2 text-sm px-3 py-2 rounded-lg border border-gray-100 hover:border-[#FF5C8D]"
                                                >
                                                    Clear Category
                                                </button>
                                            </div>
                                        </div>

                                        {selectedCategory && (
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-700 mb-2">Subcategory</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {CATEGORIES[selectedCategory].map((sub) => (
                                                        <button
                                                            key={sub}
                                                            onClick={() => { goToCategory(selectedCategory, sub); setShowFilters(false); }}
                                                            className={`text-sm px-3 py-2 rounded-lg border ${selectedSub === sub ? "border-[#FF5C8D] bg-[#fff0f3]" : "border-gray-100"
                                                                } hover:border-[#FF5C8D]`}
                                                        >
                                                            {labelize(sub)}
                                                        </button>
                                                    ))}
                                                    <button onClick={() => { goToCategory(selectedCategory); setShowFilters(false); }} className="text-sm px-3 py-2 rounded-lg border border-gray-100 hover:border-[#FF5C8D]">
                                                        Clear Sub
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        <div>
                                            <h4 className="text-sm font-medium text-gray-700 mb-2">Extras</h4>
                                            <div className="flex gap-2 items-center">
                                                <label className="flex items-center gap-2 text-sm">
                                                    <input type="checkbox" checked={false} readOnly className="form-checkbox h-4 w-4" />
                                                    In Stock
                                                </label>
                                                <label className="flex items-center gap-2 text-sm">
                                                    <input type="checkbox" checked={false} readOnly className="form-checkbox h-4 w-4" />
                                                    On Sale
                                                </label>
                                            </div>
                                        </div>

                                        <div className="mt-2 flex gap-2">
                                            <button onClick={() => { resetFilters(); setShowFilters(false); }} className="flex-1 bg-gray-100 rounded-lg px-4 py-2 text-sm font-medium">Reset</button>
                                            <button onClick={() => setShowFilters(false)} className="flex-1 rounded-lg px-4 py-2 bg-[#FF5C8D] text-white font-medium">Apply</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Products grid */}
                        <div id="product-grid" className="pt-6">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {paginated.map((p) => (
                                    <article key={p.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col cursor-pointer" onClick={() => handleClick(p.id)}>
                                        <div className="w-full h-44 md:h-56 lg:h-64 relative" >
                                            <img src={p.image} alt={p.title} className="object-cover w-full h-full" />
                                            {p.isNew && <span className="absolute top-3 left-3 bg-[#FF5C8D] text-white text-xs px-2 py-1 rounded">NEW</span>}
                                            {p.isHot && <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs px-2 py-1 rounded">HOT</span>}
                                        </div>

                                        <div className="p-3 flex-1 flex flex-col">
                                            <h3 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-2">{p.title}</h3>
                                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">{p.brand}</p>
                                            <p className="text-xs text-gray-400 mt-2 line-clamp-2">{p.description}</p>

                                            <div className="mt-auto flex items-center justify-between pt-4">
                                                <div>
                                                    <div className="text-sm font-bold text-[#FF5C8D]">${p.price.toFixed(2)}</div>
                                                    <div className="text-xs text-gray-500">⭐ {p.rating}</div>
                                                </div>
                                                <button className="bg-[#FF5C8D] hover:bg-[#ff3e7a] text-white rounded-lg px-3 py-2 text-sm font-medium">
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Pagination */}
                            {filtered.length > itemsPerPage && (
                                <div className="flex justify-center my-10">
                                    <Pagination
                                        count={Math.max(1, Math.ceil(filtered.length / itemsPerPage))}
                                        page={page}
                                        onChange={handlePageChange}
                                        variant="outlined"
                                        color="primary"
                                    />
                                </div>
                            )}

                            {/* no results */}
                            {filtered.length === 0 && (
                                <div className="text-center text-gray-500 py-16">
                                    No products found. Try clearing filters or search.
                                </div>
                            )}
                        </div>

                    </main>
                </div>
            </div>
        </div>
    );
};

export default Shop;
