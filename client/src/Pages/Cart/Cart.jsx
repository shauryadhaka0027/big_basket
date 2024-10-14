import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useZustand } from "../../Zustand/useZustand";


const Cart = () => {
  const { productArr, setProductArr } = useZustand(); 
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
  
    const initializedItems = productArr.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
      savings: item.savings || item.originalPrice - item.price || 0,
    }));
    setCartItems(initializedItems);
  }, [productArr]);



  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalSavings = cartItems.reduce(
    (acc, item) => acc + item.savings * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-6 w-[75%] m-auto">
        <h1 className="text-3xl font-bold mb-6">Your Basket</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-xl">Your cart is empty.</p>
        ) : (
          <>
            {/* Cart Summary */}
            <div className="bg-black text-white p-4 rounded-md flex justify-between items-center mb-6">
              <div>
                <p className="text-lg">
                  Subtotal ({cartItems.length} items):{" "}
                  <span className="font-bold">₹{totalPrice.toFixed(2)}</span>
                </p>
                <p className="text-green-400">
                  Savings: ₹{totalSavings.toFixed(2)}
                </p>
              </div>
              <button
                className={`bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md ${
                  cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={cartItems.length === 0}
              >
                Checkout
              </button>
            </div>

            {/* Items List */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Items ({cartItems.length} items)
              </h2>

              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center border border-green-200 rounded-md p-4"
                  >
                    {/* Image */}
                    <div className="w-1/6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-md border border-gray-200"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="w-4/6 px-4">
                      <p className="text-green-500 font-medium">
                        Har Din Sasta!
                      </p>
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      <p className="text-sm text-gray-500 line-through">
                        ₹{item.originalPrice}
                      </p>
                      <p className="text-lg font-semibold text-green-600">
                        ₹{item.price}
                      </p>
                      <p className="text-sm text-green-500">
                        Saved: ₹{item.savings}
                      </p>
                    </div>

                    {/* Quantity and Controls */}
                    <div className="w-1/6 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          className="border border-gray-300 px-2 py-1 rounded-md hover:bg-gray-200"
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="border border-gray-300 px-2 py-1 rounded-md hover:bg-gray-200"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                      <div className="flex justify-center space-x-4 mt-2 text-sm text-gray-500 py-2">
                        <button
                          className="hover:underline text-red-500 border-2 rounded-md w-16 border-[red] p-2"
                          onClick={() => removeItem(item.id)}
                        >
                          Delete
                        </button>
                        <button className="hover:underline border-2 rounded-md ">
                          Save for later
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
