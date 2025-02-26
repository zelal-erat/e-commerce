import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  removeFromCart, 
  updateCartItem, 
  toggleCart,
  toggleItemCheck 
} from '../reducers/cartReducer';
import { Link } from 'react-router-dom';

const CartDropdown = () => {
  const { cart, isOpen } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (productId, newCount) => {
    if (newCount < 1) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateCartItem(productId, newCount));
    }
  };

  const calculateTotal = () => {
    return cart
      .filter(item => item.checked)
      .reduce((total, item) => total + (item.product.price * item.count), 0)
      .toFixed(2);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:bg-transparent md:inset-auto md:absolute md:right-0 md:top-full">
      <div className="w-full h-full md:h-auto md:w-96 bg-white md:mt-2 md:rounded-lg md:shadow-xl">
        {/* Header */}
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Shopping Cart</h3>
          <button 
            onClick={() => dispatch(toggleCart())}
            className="text-gray-500 hover:text-gray-700 p-2"
          >
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="p-4 text-center">
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="p-4 space-y-4 max-h-[60vh] md:max-h-96 overflow-y-auto">
              {cart.map(item => (
                <div key={item.product.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  {/* Checkbox and Image */}
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => dispatch(toggleItemCheck(item.product.id))}
                      className="w-4 h-4 rounded border-gray-300"
                    />
                    <img
                      src={item.product.images[0]?.url}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">{item.product.name}</h4>
                    <p className="text-gray-600">${item.product.price?.toFixed(2)}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="flex items-center gap-2 bg-white rounded-lg border">
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.count - 1)}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-lg"
                      >
                        -
                      </button>
                      <span className="px-2 py-1 text-gray-900">{item.count}</span>
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.count + 1)}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-lg"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => dispatch(removeFromCart(item.product.id))}
                      className="text-red-500 hover:text-red-700 p-2"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Total:</span>
                <span className="text-xl font-bold text-gray-900">${calculateTotal()}</span>
              </div>
              <Link
                to="/cart" 
                className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={() => dispatch(toggleCart())}
              >
                Go to Cart
              </Link>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;