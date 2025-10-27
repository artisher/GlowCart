// src/Pages/Product/ProductDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Products } from "../../Products/Products"; // مسیر را بررسی کن
import Product from "./Product";

const ProductDetail: React.FC = () => {
    const { id: rawId } = useParams<{ id?: string }>();
    const navigate = useNavigate();

    const [product, setProduct] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    // helper برای استخراج id واقعی از rawId (ایمن در برابر slug و فرمت‌های مختلف)
    const extractId = (r?: string) => {
        if (!r) return null;
        // حالت‌های ممکن:
        // "p-198"
        // "p-198-velvet-matte"
        // "product-p-198" (ناخواسته) - در این حالت سعی می‌کنیم آخرین بخش که شبیه p-### است را پیدا کنیم
        const parts = r.split("-");
        // اگر اولین دو بخش شبیه "p-198" باشند، بازگردانیم
        if (parts.length >= 2 && /^p\d+/i.test(parts[0] + parts[1])) {
            // این الگو خیلی عجیب است؛ بهتر است دو قسمت اول را بازگردانیم:
            return parts.slice(0, 2).join("-");
        }
        // معمول‌ترین: اگر parts[0] مثل "p" و parts[1]="198" -> join
        if (parts.length >= 2 && /^p\d+$/i.test(parts.slice(0, 2).join("-"))) {
            return parts.slice(0, 2).join("-");
        }
        // اگر شناسه با "p-" شروع می‌شود (مثلاً "p-198-...") باید دو قسمت اول را بگیریم
        if (r.startsWith("p-")) {
            const two = r.split("-").slice(0, 2).join("-");
            return two;
        }
        // اگر فرمت ساده "p-198" است یا "p198" (نادر) امتحان کن
        if (/^p-\d+$/i.test(r) || /^p\d+$/i.test(r)) return r;
        // fallback: اگر هیچکدوم نشد، سعی کن آخرین قطعه‌ای که با p\d+ مطابقت داره رو پیدا کنی
        const found = parts.find((x) => /^p-?\d+$/i.test(x) || /^p\d+$/i.test(x));
        return found ?? r;
    };

    useEffect(() => {
        setLoading(true);

        if (!rawId) {
            navigate("/shop");
            return;
        }

        const id = extractId(rawId);
        console.log("[ProductDetail] rawId:", rawId, "-> extracted id:", id);
        console.log("[ProductDetail] Products sample ids:", Products.slice(0, 10).map(p => p.id));

        if (!id) {
            setProduct(null);
            setLoading(false);
            return;
        }

        const found = Products.find((p) => p.id === id);
        console.log("[ProductDetail] found:", found);

        if (found) {
            setProduct(found);
            setLoading(false);
        } else {
            // شاید id در مجموعه نیست — لاگ کن و show not found
            setProduct(null);
            setLoading(false);
        }
    }, [rawId, navigate]);

    if (loading) return <div className="p-8">Loading…</div>;

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FFF8F9]">
                <div className="text-center">
                    <p className="mb-4 text-gray-600">Product not found.</p>
                    <button onClick={() => navigate("/shop")} className="bg-[#FF5C8D] text-white px-4 py-2 rounded">
                        Back to Shop
                    </button>
                </div>
            </div>
        );
    }
    else {

        return (<Product productProp={product} />)
    }


};

export default ProductDetail;
