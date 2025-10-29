// src/pages/Admin/AdminPanel.tsx
import React, { useMemo, useState } from "react";
import {
    Package,
    Users,
    ClipboardList,
    Loader2,
    BarChart2,
    Settings,
    Menu,
    X,
    Search,
    LogOut,
} from "lucide-react";
import { Products } from "../../Data/Products/Products";
import { CUSTOMERS } from "../../Data/Customers/Customers";

type ProductItem = {
    id: string; title: string;
    price: number;
    rating: number;
    description: string;
    image: string;
    brand: string;
    category: string;
    subcategory: string;
    stock: number;
    isHot: boolean;
    isNew: boolean;
    discount: number;
};
type Customer = {
    id: string;
    name: string;
    email: string;
    password: string;
    phone?: string;
    address?: string;
    avatar?: string;
    createdAt?: string;
};

type Order = {
    id: string;
    customer: string;
    total: number;
    status: "pending" | "processing" | "shipped" | "completed" | "cancelled";
    createdAt: string;
};

const MOCK_PRODUCTS: ProductItem[] = Products;

const MOCK_CUSTOMERS: Customer[] = CUSTOMERS;

const MOCK_ORDERS: Order[] = [
    { id: "o-9001", customer: "Sara Mohammadi", total: 49.99, status: "processing", createdAt: "2025-03-01" },
    { id: "o-9002", customer: "Ali Rezaei", total: 19.5, status: "pending", createdAt: "2025-03-02" },
    { id: "o-9003", customer: "Mina Hashemi", total: 120.0, status: "shipped", createdAt: "2025-02-27" },
    { id: "o-9004", customer: "Sara Mohammadi", total: 29.99, status: "processing", createdAt: "2025-03-03" },
];

const SIDEBAR = [
    { key: "dashboard", label: "Dashboard", icon: BarChart2 },
    { key: "products", label: "Products", icon: Package },
    { key: "customers", label: "Customers", icon: Users },
    { key: "orders", label: "Orders", icon: ClipboardList },
    { key: "inprogress", label: "Orders in Progress", icon: Loader2 },
    { key: "analytics", label: "Analytics", icon: BarChart2 },
    { key: "settings", label: "Settings", icon: Settings },
];

const AdminPanel: React.FC = () => {
    const [active, setActive] = useState<string>("dashboard");
    const [query, setQuery] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);


    const [products] = useState<ProductItem[]>(MOCK_PRODUCTS);
    const [customers] = useState<Customer[]>(MOCK_CUSTOMERS);
    const [orders] = useState<Order[]>(MOCK_ORDERS);

    const filteredProducts = useMemo(
        () =>
            products.filter(
                (p) =>
                    p.title.toLowerCase().includes(query.toLowerCase()) ||
                    p.id.toLowerCase().includes(query.toLowerCase())
            ),
        [products, query]
    );

    const filteredCustomers = useMemo(
        () =>
            customers.filter(
                (c) =>
                    c.name.toLowerCase().includes(query.toLowerCase()) ||
                    c.email.toLowerCase().includes(query.toLowerCase())
            ),
        [customers, query]
    );

    const filteredOrders = useMemo(
        () =>
            orders.filter(
                (o) =>
                    o.id.toLowerCase().includes(query.toLowerCase()) ||
                    o.customer.toLowerCase().includes(query.toLowerCase())
            ),
        [orders, query]
    );

    return (
        <div className="min-h-screen bg-[#FFF8F9]">
        
            <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center gap-3">
                    <button className="p-2 rounded-md bg-[#FF5C8D] text-white" onClick={() => setSidebarOpen((s) => !s)}>
                        {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                    <div className="text-lg font-bold">GlowCart Admin</div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="rounded-full bg-gray-100 p-2">
                        <LogOut size={18} />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto md:flex">
                
                <aside
                    className={`bg-white md:sticky md:top-6 md:self-start border border-gray-100 rounded-2xl p-4 md:w-64 transition-transform z-40 ${sidebarOpen ? "absolute left-4 top-20 w-[86%] shadow-xl" : "hidden md:block"
                        }`}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-[#FF5C8D] flex items-center justify-center text-white font-bold">G</div>
                        <div>
                            <div className="font-semibold">GlowCart</div>
                            <div className="text-xs text-gray-500">Admin Panel</div>
                        </div>
                    </div>

                    <nav className="space-y-1">
                        {SIDEBAR.map((it) => {
                            const Icon = it.icon;
                            const activeStyle = active === it.key ? "bg-[#FFF0F5] border-[#FF5C8D] shadow-sm" : "hover:bg-gray-50";
                            return (
                                <button
                                    key={it.key}
                                    onClick={() => {
                                        setActive(it.key);
                                        setSidebarOpen(false);
                                        setQuery("");
                                    }}
                                    className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg border ${activeStyle} border-transparent`}
                                >
                                    <span className="p-2 rounded bg-white border border-gray-100">
                                        <Icon size={18} className={active === it.key ? "text-[#FF5C8D]" : "text-gray-500"} />
                                    </span>
                                    <span className={`${active === it.key ? "text-[#FF5C8D] font-medium" : "text-gray-700"}`}>{it.label}</span>
                                </button>
                            );
                        })}
                    </nav>

                    <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="text-xs text-gray-500 mb-2">Quick actions</div>
                        <div className="flex gap-2">
                            <button className="flex-1 bg-[#FF5C8D] text-white py-2 rounded">New product</button>
                            <button className="px-3 py-2 rounded border border-gray-100">Export</button>
                        </div>
                    </div>
                </aside>

                {/* Main */}
                <main className="flex-1 p-6">
                    {/* header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <h2 className="text-2xl font-bold text-gray-800 capitalize">{active.replace(/-/g, " ")}</h2>
                            <div className="text-sm text-gray-500">Welcome back, Admin</div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"><Search size={16} /></div>
                                <input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search products, customers, orders..."
                                    className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-white shadow-sm w-72 focus:outline-none focus:ring-2 focus:ring-[#FF5C8D]/30"
                                />
                            </div>

                            <div className="hidden md:flex items-center gap-3">
                                <div className="text-sm text-gray-600">Admin</div>
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">A</div>
                            </div>
                        </div>
                    </div>

                    {/* content switch */}
                    <section>
                        {active === "dashboard" && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
                                    <div className="text-sm text-gray-500">Total Products</div>
                                    <div className="text-2xl font-bold mt-2 text-[#FF5C8D]">{products.length}</div>
                                </div>
                                <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
                                    <div className="text-sm text-gray-500">Customers</div>
                                    <div className="text-2xl font-bold mt-2">{customers.length}</div>
                                </div>
                                <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
                                    <div className="text-sm text-gray-500">Orders (all)</div>
                                    <div className="text-2xl font-bold mt-2">{orders.length}</div>
                                </div>
                            </div>
                        )}

                        {active === "products" && (
                            <div>
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="text-sm text-gray-500">All products</div>
                                    <div className="flex gap-2">
                                        <button className="bg-[#FF5C8D] text-white px-4 py-2 rounded">Add product</button>
                                        <button className="px-4 py-2 rounded border border-gray-100">Import</button>
                                    </div>
                                </div>

                                <div className="grid gap-4">
                                    {filteredProducts.map((p) => (
                                        <div key={p.id} className="bg-white rounded-lg p-4 flex items-center justify-between border border-gray-100 shadow-sm">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 rounded bg-gray-100 flex items-center justify-center text-sm font-medium">{p.id}</div>
                                                <div>
                                                    <div className="font-medium text-gray-800">{p.title}</div>
                                                    <div className="text-xs text-gray-500">${p.price.toFixed(2)} • {p.stock} in stock</div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                {p.isNew && <span className="text-xs bg-[#FF5C8D] text-white px-2 py-1 rounded">NEW</span>}
                                                {p.isHot && <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded">HOT</span>}
                                                <button className="px-3 py-1 rounded border border-gray-100">Edit</button>
                                                <button className="px-3 py-1 rounded border border-red-100 text-red-600">Delete</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {active === "customers" && (
                            <div>
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="text-sm text-gray-500">Customers</div>
                                    <div className="text-sm text-gray-400">Manage accounts and view activity</div>
                                </div>

                                <div className="grid gap-3">
                                    {filteredCustomers.map((c) => (
                                        <div key={c.id} className="bg-white rounded-lg p-4 flex items-center justify-between border border-gray-100 shadow-sm">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-sm">{c.name.split(" ").map(n => n[0]).join("")}</div>
                                                <div>
                                                    <div className="font-medium">{c.name}</div>
                                                    <div className="text-xs text-gray-500">{c.email}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="text-xs text-gray-500">{c.orders} orders</div>
                                                <button className="px-3 py-1 rounded border border-gray-100">View</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {active === "orders" && (
                            <div>
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="text-sm text-gray-500">All Orders</div>
                                    <div className="text-sm text-gray-400">Track and manage orders</div>
                                </div>

                                <div className="space-y-3">
                                    {filteredOrders.map((o) => (
                                        <div key={o.id} className="bg-white rounded-lg p-4 flex items-center justify-between border border-gray-100 shadow-sm">
                                            <div>
                                                <div className="font-medium">{o.id} — {o.customer}</div>
                                                <div className="text-xs text-gray-500">{o.createdAt}</div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className="text-sm font-semibold">${o.total.toFixed(2)}</div>
                                                <div className={`text-xs px-2 py-1 rounded ${o.status === "processing" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-600"}`}>
                                                    {o.status}
                                                </div>
                                                <button className="px-3 py-1 rounded border border-gray-100">View</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {active === "inprogress" && (
                            <div>
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="text-sm text-gray-500">Orders In Progress</div>
                                    <div className="text-sm text-gray-400">Orders currently being processed / shipped</div>
                                </div>

                                <div className="space-y-3">
                                    {orders.filter(o => o.status === "processing" || o.status === "pending" || o.status === "shipped").map((o) => (
                                        <div key={o.id} className="bg-white rounded-lg p-4 flex items-center justify-between border border-gray-100 shadow-sm">
                                            <div>
                                                <div className="font-medium">{o.id} — {o.customer}</div>
                                                <div className="text-xs text-gray-500">{o.createdAt}</div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className="text-sm font-semibold">${o.total.toFixed(2)}</div>
                                                <div className="text-xs px-2 py-1 rounded bg-yellow-100 text-yellow-800">{o.status}</div>
                                                <button className="px-3 py-1 rounded border border-gray-100">Update</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {active === "analytics" && (
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <div className="text-gray-600">Basic analytics (placeholder)</div>
                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 rounded-lg bg-[#FFF0F5]">Sales chart placeholder</div>
                                    <div className="p-4 rounded-lg bg-[#FFF0F5]">Top products placeholder</div>
                                </div>
                            </div>
                        )}

                        {active === "settings" && (
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <div className="text-gray-600">Settings (store details, payment, shipping)</div>
                                <div className="mt-4 text-sm text-gray-500">This is a placeholder for admin settings UI.</div>
                            </div>
                        )}
                    </section>
                </main>
            </div>
        </div>
    );
};

export default AdminPanel;
