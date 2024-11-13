import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  // Load products from localStorage when the component mounts
  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem("purchasedProducts")) || [];
    setProducts(storedProducts);
    window.scrollTo(0, 0);
  }, []);

  const handleBackToCart = () => {
    navigate("/home");
  };

  // Update localStorage after modifying the products
  const updateLocalStorage = (updatedProducts) => {
    localStorage.setItem("purchasedProducts", JSON.stringify(updatedProducts));
  };

  const incrementQuantity = (id) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      updateLocalStorage(updatedProducts); // Update localStorage
      return updatedProducts;
    });
  };

  const decrementQuantity = (id) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      updateLocalStorage(updatedProducts); // Update localStorage
      return updatedProducts;
    });
  };

  const removeProduct = (id) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.filter(
        (product) => product.id !== id
      );
      updateLocalStorage(updatedProducts); // Update localStorage
      return updatedProducts;
    });
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Product Information & Review Section */}
      <div className="w-full lg:w-1/2 bg-[#f3fff3] flex flex-col">
        {/* Fixed Header Section */}
        <div className="p-5 lg:p-10 flex-shrink-0">
          <button
            onClick={handleBackToCart}
            className="text-sm text-gray-600 mb-4 lg:mb-8"
          >
            &larr; Back to cart
          </button>

          <h2 className="text-xl font-semibold mb-2 text-[#004F44]">
            Product Information & Review
          </h2>
          <p className="text-gray-500 text-sm mb-6 flex gap-1">
            By placing your order, you agree to Storelo's{" "}
            <span className="text-blue-500 underline">Privacy</span> and{" "}
            <span className="text-blue-500 underline">Policy</span>.
          </p>
        </div>

        {/* Scrollable Product List */}
        <div className="px-5 lg:px-10 pb-10 overflow-y-auto flex-grow scrollbar-thin">
          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative p-4 border border-[#004F44] rounded-lg flex sm:flex-row sm:items-center flex-col items-center sm:justify-between"
              >
                {/* Remove Icon */}
                <button
                  onClick={() => removeProduct(product.id)}
                  className="absolute text-2xl top-0 right-2 text-gray-400 hover:text-red-500"
                >
                  &times;
                </button>

                {/* Product Image and Details */}
                <div className="flex items-center space-x-10 sm:space-x-0 lg:items-start">
                  <img
                    src={product.src}
                    alt={product.name}
                    className="w-16 h-16 mr-4 rounded-md"
                  />
                  <div>
                    <h3 className="font-medium">
                      {product.name} - ${product.price}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {product.description}
                    </p>
                    <span className="text-gray-700 text-xs">
                      Size: {product.size}
                    </span>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex sm:me-10 items-center space-x-2 mt-4 sm:mt-0 sm:ml-auto justify-center">
                  <button
                    onClick={() => decrementQuantity(product.id)}
                    className="px-2 py-1 bg-gray-300 text-gray-700 rounded"
                    disabled={product.quantity <= 1} // Disable if quantity is 1
                  >
                    -
                  </button>
                  <span className="px-2">{product.quantity}</span>
                  <button
                    onClick={() => incrementQuantity(product.id)}
                    className="px-2 py-1 bg-gray-300 text-gray-700 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Details Section */}
      <div className="w-full lg:w-1/2 bg-white p-5 lg:p-10">
        <h2 className="text-xl font-semibold mb-4 text-[#004F44]">
          Shipping Details
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Complete your purchase by providing your payment details.
        </p>

        {/* Payment Form */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-4 sm:space-y-0">
            <div className="w-full sm:w-1/2">
              <label className="block text-gray-700">Email address</label>
              <input
                type="email"
                placeholder="planto@gmail.com"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 9496279843"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Address</label>
            <textarea
              placeholder="Type your address..."
              className="w-full border rounded p-2"
            ></textarea>
            <div className="flex flex-col sm:flex-row gap-2 mt-2">
              <input
                type="text"
                placeholder="District"
                className="w-full sm:w-1/2 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="PinCode"
                className="w-full sm:w-1/2 p-2 border rounded"
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="flex justify-between mt-4 text-gray-700">
            <span>Sub Total</span>
            <span>$358.00</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Discount</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between font-semibold mt-2">
            <span>Total</span>
            <span>$358.00</span>
          </div>

          <button className="w-full bg-[#004F44] text-white p-3 rounded-lg mt-6 md:mt-20">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
