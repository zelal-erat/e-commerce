
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCartItem, toggleItemCheck } from "../reducers/cartReducer";
import { useHistory } from "react-router-dom";

const ShoppingCart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleQuantityChange = (productId, newCount) => {
    if (newCount < 1) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateCartItem(productId, newCount));
    }
  };

  const calculateSubtotal = () => {
    return cart
      .filter((item) => item.checked)
      .reduce((total, item) => total + item.product.price * item.count, 0)
      .toFixed(2);
  };

  const shippingCost = 10.0;
  const discount = 0.0;
  const subtotal = parseFloat(calculateSubtotal());
  const grandTotal = (subtotal + shippingCost - discount).toFixed(2);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        {cart.length > 0 ? (
          <div className="bg-white rounded-lg shadow-md p-4">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="flex flex-col lg:flex-row lg:justify-between items-center border-b px-4 py-4 gap-4"
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => dispatch(toggleItemCheck(item.product.id))}
                  className="w-5 h-5"
                />

                <div className="flex items-center gap-4">
                  <img className="h-16 w-16 object-cover rounded" src={item.product.images[0]?.url} alt={item.product.name} />
                  <span className="font-medium text-gray-900">{item.product.name}</span>
                </div>

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

                <span className="text-gray-900">${(item.product.price * item.count).toFixed(2)}</span>

                <button
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                  onClick={() => dispatch(removeFromCart(item.product.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6 w-full lg:w-1/3 lg:ml-auto">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Products Total:</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Shipping:</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-4">
            <span>Discount:</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl font-bold border-t pt-4">
            <span>Grand Total:</span>
            <span>${grandTotal}</span>
          </div>
          <button 
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            onClick={() => history.push('/create-order')}
          >
            Create Order
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;