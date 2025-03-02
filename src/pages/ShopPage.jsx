import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, useLocation } from "react-router-dom";
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
    const location = useLocation();
    const dispatch = useDispatch();

    const { productList, total, fetchState, limit, currentPage } = useSelector((state) => state.product);

    const [view, setView] = useState("grid");
    const [sort, setSort] = useState("");
    const [filter, setFilter] = useState("");
    const [appliedFilter, setAppliedFilter] = useState("");

    // 1️⃣ Kategori değiştiğinde state ve URL'i temizleyip ürünleri yükle
    useEffect(() => {
        setSort("");
        setFilter("");
        setAppliedFilter("");
        dispatch(setCurrentPage(1)); // Sayfayı da sıfırla

        history.replace({ search: "" });

        // İlk yükleme
        dispatch(fetchProducts({
            limit,
            offset: 0,
            category: categoryId,
            sort: "",
            filter: "",
        }));

    }, [categoryId, dispatch, history]);

    // 2️⃣ sort, appliedFilter veya sayfa değişince ürünleri yeniden yükle
    useEffect(() => {
        dispatch(fetchProducts({
            limit,
            offset: (currentPage - 1) * limit,
            category: categoryId,
            sort: sort,
            filter: appliedFilter,
        }));
    }, [sort, appliedFilter, currentPage, categoryId, dispatch, limit]);

    const updateURL = (newSort, newFilter) => {
        const searchParams = new URLSearchParams();
        if (newSort) searchParams.set("sort", newSort);
        if (newFilter) searchParams.set("filter", newFilter);
        history.replace({ search: searchParams.toString() });
    };

    const handlePageChange = (selectedItem) => {
        dispatch(setCurrentPage(selectedItem.selected + 1));
        window.scrollTo(0, 0);
    };

    const handleFilterApply = () => {
        setAppliedFilter(filter);
        dispatch(setCurrentPage(1));
        updateURL(sort, filter);
    };

    const handleSortChange = (e) => {
        const newSort = e.target.value;
        setSort(newSort);
        updateURL(newSort, appliedFilter);
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

            <div className="w-full mb-10 lg:px-16">
                <TopCategories />
            </div>

            <div className="flex flex-col items-center space-y-4 p-4 lg:flex-row lg:justify-between lg:w-full lg:px-16">
                <p className="text-gray-700">
                    {fetchState === "FETCHED" ? `Showing all ${total} results` : "Loading products..."}
                </p>

                <div className="flex items-center space-x-4">
                    <span className="text-gray-600">Views:</span>
                    <button className={`p-2 rounded ${view === "grid" ? "bg-gray-300" : "bg-white"}`} onClick={() => setView("grid")}>
                        <Grid className="w-5 h-5" />
                    </button>
                    <button className={`p-2 rounded ${view === "list" ? "bg-gray-300" : "bg-white"}`} onClick={() => setView("list")}>
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
                    <select className="border border-gray-300 p-2 rounded w-full sm:w-auto" value={sort} onChange={handleSortChange}>
                        {sortOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    <button onClick={handleFilterApply} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full sm:w-auto">
                        Filter
                    </button>
                </div>
            </div>

            <div className="w-full px-4 lg:px-16">
                {fetchState === "FETCHING" ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        <div className={`grid ${view === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1"} gap-6 mb-8`}>
                            {productList?.map((product) => (
                                <ProductCard key={product.id} product={product} gender={gender || "all"} category={{ name: categoryName || "all-products", id: categoryId }} />
                            ))}
                        </div>

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
                                    pageLinkClassName={"px-3 py-2 rounded border hover:bg-gray-100"}
                                    previousLinkClassName={"px-3 py-2 rounded border hover:bg-gray-100"}
                                    nextLinkClassName={"px-3 py-2 rounded border hover:bg-gray-100"}
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
