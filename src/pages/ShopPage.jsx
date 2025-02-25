import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Grid, List } from "lucide-react";
import ReactPaginate from "react-paginate";
import ProductCard from "../components/ProductCard";
import Clients from "../components/Clients";
import TopCategories from "../components/TopCategories";
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchProducts } from "../actions/productActions";
import { setCurrentPage } from "../reducers/productReducer ";


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
  const { productList, total, fetchState, limit, currentPage } = useSelector((state) => state.product);

  useEffect(() => {
    const params = {
      limit,
      offset: (currentPage - 1) * limit,
      category: categoryId,
      sort,
      filter
    };
    dispatch(fetchProducts(params));
  }, [dispatch, categoryId, sort, filter, currentPage, limit]);

  const handlePageChange = (selectedItem) => {
    dispatch(setCurrentPage(selectedItem.selected + 1));
    window.scrollTo(0, 0);
  };

  const handleFilter = () => {
    const currentPath = categoryId 
      ? `/shop/${gender}/${categoryName}/${categoryId}`
      : '/shop';
    history.replace(currentPath);
    dispatch(setCurrentPage(1));
  };

  const pageCount = Math.ceil(total / limit);

  return (
    <div className="flex flex-col items-center space-x-2">
      <div className="flex flex-col items-center m-10 lg:flex-row lg:justify-between lg:w-full lg:px-16">
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

      {/* Top Categories Section */}
      <div className="w-full mb-10 lg:px-16">
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

        <div className="flex space-x-2 items-center w-full sm:w-auto">
          <input
            type="text"
            placeholder="Filter products..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full sm:w-auto"
          />
          <select 
            className="border border-gray-300 p-2 rounded w-full sm:w-auto"
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
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full sm:w-auto"
          >
            Filter
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="w-full px-4 lg:px-16">
        {fetchState === "FETCHING" ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className={`grid ${
              view === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" 
                : "grid-cols-1"
            } gap-6 mb-8`}>
              {productList?.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  gender={gender || "all"}
                  category={{
                    name: categoryName || "all-products",
                    id: categoryId
                  }}
                />
              ))}
            </div>

            {/* Pagination */}
            {pageCount > 1 && (
              <div className="flex justify-center my-8">
                <ReactPaginate
                  previousLabel={"←"}
                  nextLabel={"→"}
                  breakLabel={"..."}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageChange}
                  containerClassName={"flex items-center gap-2"}
                  pageClassName={""}
                  pageLinkClassName={"px-3 py-2 rounded border hover:bg-gray-100"}
                  previousClassName={""}
                  previousLinkClassName={"px-3 py-2 rounded border hover:bg-gray-100"}
                  nextClassName={""}
                  nextLinkClassName={"px-3 py-2 rounded border hover:bg-gray-100"}
                  breakClassName={"px-3 py-2"}
                  activeClassName={"!bg-blue-500 !text-white !border-blue-500"}
                  disabledClassName={"opacity-50 cursor-not-allowed"}
                  forcePage={currentPage - 1}
                />
              </div>
            )}
          </>
        )}
      </div>

      <Clients />
    </div>
  );
}
