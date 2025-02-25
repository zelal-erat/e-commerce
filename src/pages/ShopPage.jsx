import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Grid, List } from "lucide-react";
import ProductCard from "../components/ProductCard";
import Clients from "../components/Clients";
import TopCategories from "../components/TopCategories";
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchProducts } from "../actions/productActions";

const sortOptions = [
  { value: "", label: "Select Sort Option" },
  { value: "price:asc", label: "Price: Low to High" },
  { value: "price:desc", label: "Price: High to Low" },
  { value: "rating:asc", label: "Rating: Low to High" },
  { value: "rating:desc", label: "Rating: High to Low" },
];

export default function ShopPage() {
  const { gender, categoryName, categoryId } = useParams();
  const history = useHistory();
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const { productList, total, fetchState } = useSelector((state) => state.product);

  // Ürünleri getir
  useEffect(() => {
    const params = {};
    if (categoryId) params.category = categoryId;
    if (sort) params.sort = sort;
    if (filter) params.filter = filter;
    
    dispatch(fetchProducts(params));
  }, [dispatch, categoryId, sort, filter]);

  // Filtre butonuna tıklandığında
  const handleFilter = () => {
    const currentPath = categoryId 
      ? `/shop/${gender}/${categoryName}/${categoryId}`
      : '/shop';
    
    history.replace(currentPath);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Top Categories Section - Her zaman görünür */}
      <div className="w-full bg-gray-50 py-8">
        <div className="container mx-auto">
          <TopCategories />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Breadcrumb ve Başlık */}
        <div className="flex flex-col items-center m-10 lg:flex-row lg:justify-between lg:w-full"> 
          
          <div>
            <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
            <span className="text-gray-500"> &gt; </span>
            <a href="/shop" className="text-gray-900 font-semibold">Shop</a>
            {categoryName && (
              <>
                <span className="text-gray-500"> &gt; </span>
            <span className="text-gray-900">{categoryName}</span>
              </>
            )}
          </div>
        </div>

        {/* Product View and Filtering Area */}
        <div className="flex flex-col items-center space-y-4 p-4 lg:flex-row lg:justify-between lg:w-full">
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
            <input
              type="text"
              placeholder="Filter products..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            />
            <select 
              className="border border-gray-300 p-2 rounded"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button 
              onClick={handleFilter}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Filter
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full">
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
      </div>

      <Clients />
    </div>
  );
}
