import { useState } from "react";
import { Grid, List } from "lucide-react";
import ProductCard from "../components/ProductCard";
import Clients from "../components/Clients";

export default function ShopPage() {
    const [view, setView] = useState("grid");
    const items = [
        { id: 1, count: 5, image: "https://source.unsplash.com/300x500/?fashion" },
        { id: 2, count: 5, image: "https://source.unsplash.com/300x500/?clothing" },
        { id: 3, count: 6, image: "https://source.unsplash.com/300x500/?outfit" },
        { id: 4, count: 4, image: "https://source.unsplash.com/300x500/?style" },
        { id: 5, count: 8, image: "https://source.unsplash.com/300x500/?apparel" },
      ];
    return (
        <div className="flex flex-col items-center space-x-2">
            <div>
            <h2>Shop</h2>
        <a href="/" className="text-gray-700 hover:text-gray-900">
          Home
        </a>
        <span className="text-gray-500"> &gt; </span>
        <span className="text-gray-900 font-semibold">Shop</span>
        </div>
        <div className="flex flex-col items-center gap-4 p-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative w-64 h-96 bg-gray-300 flex items-center justify-center text-white text-lg font-bold uppercase"
        >
          <img src={item.image} alt="Clothing" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <p className="text-xl">CLOTHS</p>
            <p className="text-sm">{item.count} Items</p>
          </div>
        </div>
      ))}
    </div>
    <div className="flex flex-col items-center space-y-4 p-4">
      <p className="text-gray-700">Showing all 12 results</p>
      
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">View:</span>
        <button
          className={`p-2 rounded ${view === "grid" ? "bg-gray-300" : "bg-white"}`}
          onClick={() => setView("grid")}
        >
          <Grid className="w-5 h-5" />
        </button>
        <button
          className={`p-2 rounded ${view === "list" ? "bg-gray-300" : "bg-white"}`}
          onClick={() => setView("list")}
        >
          <List className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex space-x-2">
        <select className="border border-gray-300 p-2 rounded">
          <option>Popularity</option>
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Filter</button>
      </div>
    </div>
    <ProductCard />
    <div className="flex space-x-2 mt-4">
        <button className="border px-3 py-1 rounded">1</button>
        <button className="border px-3 py-1 rounded bg-blue-500 text-white">2</button>
        <button className="border px-3 py-1 rounded">3</button>
      </div>
      <div className="flex flex-col gap-4 p-4">
    <Clients 
     src="https://images.placeholders.dev/350x150" 
     alt="Tooli Logo" 
     link="https://tooli.com" 
     width={100} 
     height={100} />
      <Clients 
     src="https://images.placeholders.dev/350x150" 
     alt="Tooli Logo" 
     link="https://tooli.com" 
     width={100} 
     height={100} />
      <Clients 
     src="https://images.placeholders.dev/350x150" 
     alt="Tooli Logo" 
     link="https://tooli.com" 
     width={100} 
     height={100} />
      <Clients 
     src="https://images.placeholders.dev/350x150" 
     alt="Tooli Logo" 
     link="https://tooli.com" 
     width={100} 
     height={100} />
     </div>
      </div>
      
      
    );
}