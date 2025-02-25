import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetail } from '../actions/productActions';
import LoadingSpinner from '../components/LoadingSpinner';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentProduct, productFetchState } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductDetail(productId));
  }, [dispatch, productId]);

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
  };

  if (productFetchState === "FETCHING") {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!currentProduct) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Back Button */}
      <button
        onClick={() => history.goBack()}
        className="mb-8 flex items-center text-gray-600 hover:text-gray-800"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Shop
      </button>

      {/* Product Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={currentProduct.images?.[0]?.url || 'https://via.placeholder.com/400x400?text=No+Image'}
            alt={currentProduct.name}
            onError={handleImageError}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
        
        {/* Product Info */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{currentProduct.name}</h1>
          <p className="text-gray-600">{currentProduct.description}</p>
          
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-blue-600">
              ${currentProduct.price?.toFixed(2)}
            </span>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-600">{currentProduct.rating}</span>
            </div>
          </div>

          <div className="space-y-4 border-t border-b py-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Stock Status:</span>
              <span className={`font-semibold ${currentProduct.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {currentProduct.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Available Stock:</span>
              <span className="font-semibold">{currentProduct.stock}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Sales:</span>
              <span className="font-semibold">{currentProduct.sell_count}</span>
            </div>
          </div>

          <button 
            className={`w-full py-3 px-6 rounded-lg transition-colors ${
              currentProduct.stock > 0 
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-300 cursor-not-allowed text-gray-500'
            }`}
            disabled={currentProduct.stock === 0}
          >
            {currentProduct.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
