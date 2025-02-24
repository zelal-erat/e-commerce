import { useState } from "react";
import { Grid, List } from "lucide-react";
import ProductCard from "../components/ProductCard";
import Clients from "../components/Clients";
import TopCategories from "../components/TopCategories"; // Top 5 Categories bileşenini ekledik

export default function ShopPage() {
    const [view, setView] = useState("grid");

    return (
        <div className="flex flex-col items-center space-x-2">
            <div className="flex flex-col items-center m-10 lg:flex-row lg:justify-between lg:w-full lg:px-16"> 
                <div>
                    <h2 className="mb-4">Shop</h2>
                </div>
                <div>
                    <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
                    <span className="text-gray-500"> &gt; </span>
                    <span className="text-gray-900 font-semibold">Shop</span>
                </div>
            </div>

            {/* 📌 Top 5 Categories - En Üstte */}
            <div className="lg:w-full lg:px-16 mb-10">
                <TopCategories />
            </div>

            {/* 📌 Ürün Görünüm ve Filtreleme Alanı */}
            <div className="flex flex-col items-center space-y-4 p-4 lg:flex-row lg:justify-between lg:w-full lg:px-16">
                <p className="text-gray-700">Showing all 12 results</p>

                <div className="flex items-center space-x-4">
                    <span className="text-gray-600">Views:</span>
                    <button className={`p-2 rounded ${view === "grid" ? "bg-gray-300" : "bg-white"}`} onClick={() => setView("grid")}>
                        <Grid className="w-5 h-5" />
                    </button>
                    <button className={`p-2 rounded ${view === "list" ? "bg-gray-300" : "bg-white"}`} onClick={() => setView("list")}>
                        <List className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex space-x-2 items-center">
                    <select className="border border-gray-300 p-2 rounded">
                        <option>Popularity</option>
                        <option>Newest</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Filter</button>
                </div>
            </div>

            {/* 📌 Ürün Kartları */}
            <ProductCard />

            {/* 📌 Sayfalama */}
            <div className="flex space-x-2 mt-4">
                <button className="border px-3 py-1 rounded">1</button>
                <button className="border px-3 py-1 rounded bg-blue-500 text-white">2</button>
                <button className="border px-3 py-1 rounded">3</button>
            </div>

            {/* 📌 Clients - Kullanıcı Yorumları */}
            <div className="flex flex-col gap-4 p-4">
                <Clients />
            </div>
        </div>
    );
}
