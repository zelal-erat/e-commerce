import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCartItem, toggleItemCheck } from "../reducers/cartReducer";

const ShoppingCart = () => {
  const { cart } = useSelector((state) => state.cart);
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
      .filter((item) => item.checked)
      .reduce((total, item) => total + item.product.price * item.count, 0)
      .toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cart.length > 0 ? (
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="hidden lg:grid grid-cols-6 items-center font-medium text-gray-600 px-4 py-2 border-b">
            <span className="w-10">Select</span>
            <span className="col-span-2">Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>

          {cart.map((item) => (
            <div
              key={item.product.id}
              className="flex flex-col lg:flex-row lg: justify-between items-center border-b px-4 py-4 gap-4 "
            >
              {/* Select Checkbox */}
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => dispatch(toggleItemCheck(item.product.id))}
                className="w-5 h-5"
              />

              {/* Product Image & Name */}
              <div className="flex items-center gap-4 col-span-2">
                <img className="h-16 w-16 object-cover rounded" src={item.product.images[0]?.url} alt={item.product.name} />
                <span className="font-medium text-gray-900">{item.product.name}</span>
              </div>

              {/* Price */}
              <span className="text-gray-900">${item.product.price}</span>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(item.product.id, item.count - 1)}
                  className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100"
                >
                  -
                </button>
                <span className="text-gray-900 w-8 text-center">{item.count}</span>
                <button
                  onClick={() => handleQuantityChange(item.product.id, item.count + 1)}
                  className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              {/* Subtotal */}
              <span className="text-gray-900">${(item.product.price * item.count).toFixed(2)}</span>

              {/* Remove Button */}
              <button
                className="text-red-600 hover:text-red-800 text-sm font-medium"
                onClick={() => dispatch(removeFromCart(item.product.id))}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div className="mt-6 flex justify-between items-center px-4">
            <span className="text-lg font-medium">Total (Selected Items):</span>
            <span className="text-2xl font-bold">${calculateTotal()}</span>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
