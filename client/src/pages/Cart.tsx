import { useState } from "react";
import ProcessModal from "../components/ProcessModal";

export default function Cart() {
  const [cart, setCart] = useState([
    { id: 1, title: "Burger", price: 5, quantity: 2 },
    { id: 2, title: "Pizza", price: 8, quantity: 1 },
    { id: 3, title: "Fries", price: 3, quantity: 3 },
  ]);

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const openModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Price ($)</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Subtotal</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-3">{item.title}</td>
                <td className="p-3">${item.price}</td>
                <td className="p-3">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
                      disabled={item.quantity === 1}
                    >
                      –
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-3">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="p-3">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            {cart.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  Your cart is empty.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Total and Checkout */}
      {cart.length > 0 && (
        <div className="mt-6 text-center">
          <div className="text-2xl font-semibold mb-4">
            Total: ${getTotal().toFixed(2)}
          </div>
          <button
            onClick={openModal}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 text-lg"
          >
            Proceed to Checkout
          </button>

           <ProcessModal/>
        </div>
      )}
    </div>
  );
}
