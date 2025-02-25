import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, List } from "lucide-react";
import ProductCard from "../components/ProductCard";
import Clients from "../components/Clients";
import TopCategories from "../components/TopCategories";
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchProducts } from "../actions/productActions";


export default function ShopPage() {
    const [view, setView] = useState("grid");
    const dispatch = useDispatch();
    const { productList, total, fetchState } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

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

            {/* Top 5 Categories */}
            <div className="lg:w-full lg:px-16 mb-10">
                <TopCategories />
            </div>

            {/* Product View and Filtering Area */}
            <div className="flex flex-col items-center space-y-4 p-4 lg:flex-row lg:justify-between lg:w-full lg:px-16">
                <p className="text-gray-700">
                    {fetchState === "FETCHED" ? `Showing all ${total} results` : "Loading products..."}
                </p>

                <div className="flex items-center space-x-4">
                    <span className="text-gray-600">Views:</span>
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

            {/* Products Grid */}
            <div className="w-full px-4 lg:px-16">
                {fetchState === "FETCHING" ? (
                    <LoadingSpinner />
                ) : (
                    <div className={`grid ${
                        view === "grid" 
                            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" 
                            : "grid-cols-1"
                    } gap-6`}>
                        {productList?.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>

            <Clients />
        </div>
    );
}
