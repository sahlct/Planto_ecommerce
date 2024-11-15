import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Cart() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Form state
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("purchasedProducts")) || [];
    setProducts(storedProducts);
    setIsLoading(false);
    window.scrollTo(0, 0);
  }, []);

  const handleBackToCart = () => navigate("/home");
  const singleItem = (id) => navigate(`/products/${id}`);

  const updateLocalStorage = (updatedProducts) => {
    localStorage.setItem("purchasedProducts", JSON.stringify(updatedProducts));
  };

  const incrementQuantity = (id) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      );
      updateLocalStorage(updatedProducts);
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
      updateLocalStorage(updatedProducts);
      return updatedProducts;
    });
  };

  const removeProduct = (id) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.filter((product) => product.id !== id);
      updateLocalStorage(updatedProducts);
      return updatedProducts;
    });
  };

  const getTotalPrice = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const handleOrderNow = () => {
    if (!email || !phone || !address || !district || !pincode) {
      toast.error("Please fill all required fields!");
      return;
    }

    // Format message
    let message = `CADRE Flower Shoppee\nPhone: ${phone},\nEmail: ${email},\nAddress: ${address},\nDistrict: ${district},\nPincode: ${pincode}\n\n---------------------------------\nOrdered Item's\n---------------------------------\n`;
    
    products.forEach((product, index) => {
      const sizes = product.variations
        .filter((variation) => variation.M08_name === "Size")
        .map((variation) => variation.M09_name)
        .join(", ");
      const colors = product.variations
        .filter((variation) => variation.M08_name === "Color")
        .map((variation) => variation.M09_name)
        .join(", ");
      message += `${index + 1}. Name: ${product.name}\n    Price: $${product.price}\n    Quantity: ${product.quantity}\n    Size: ${sizes || "N/A"}\n    Color: ${colors || "N/A"}\n\n`;
    });

    const subtotal = getTotalPrice().toFixed(2);
    message += `--------------------------------\nSub Total : $${subtotal}\nDiscount : $0\nTotal : $${subtotal}/-\n\nHappy Purchasing!\n--------------------------------`;

    // WhatsApp URL
    const whatsappUrl = `https://wa.me/918111866093?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen pt-20">
      <Toaster position="top-center" reverseOrder={false} />
      
      {/* Product Information & Review Section */}
      <div className="w-full lg:w-1/2 bg-[#f3fff3] flex flex-col">
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
          <p className="text-gray-500 text-sm mb-6 gap-1">
            By placing your order, you agree to Storelo's
            <span className="text-blue-500 underline"> Privacy</span> and
            <span className="text-blue-500 underline"> Policy</span>.
          </p>
        </div>

        <div className="px-5 lg:px-10 pb-10 overflow-y-auto flex-grow scrollbar-thin">
          {isLoading ? (
            <div className="loader flex justify-center items-center">
              <li className="ball"></li>
              <li className="ball"></li>
              <li className="ball"></li>
            </div>
          ) : products.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-lg text-gray-500 mb-4">No products available</p>
              <button
                onClick={() => navigate("/products")}
                className="px-4 py-2 bg-[#004F44] text-white rounded-lg"
              >
                Go to purchase
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {products.map((product) => {
                const sizes = product.variations
                  ? product.variations
                      .filter((variation) => variation.M08_name === "Size")
                      .map((variation) => variation.M09_name)
                  : [];
                const colors = product.variations
                  ? product.variations
                      .filter((variation) => variation.M08_name === "Color")
                      .map((variation) => variation.M09_name)
                  : [];

                return (
                  <div
                    key={product.id}
                    className="relative p-4 border border-[#004F44] rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between w-full max-w-4xl mx-auto"
                    onClick={() => singleItem(product.id)}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeProduct(product.id);
                      }}
                      className="absolute text-2xl top-0 right-2 text-gray-400 hover:text-red-500"
                    >
                      &times;
                    </button>

                    <div className="flex items-center space-x-10 sm:space-x-0 lg:items-start">
                      <img
                        src={product.src}
                        alt={product.name}
                        className="w-16 h-16 mr-4 rounded-md object-cover"
                      />
                      <div className="flex flex-col">
                        <h3 className="font-medium text-lg">
                          {product.name} - ${product.price}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {product.description}
                        </p>
                        <div className="flex flex-col space-y-1 mt-2">
                          <span className="text-gray-700 text-xs">
                            Size: {sizes.join(", ") || "N/A"}
                          </span>
                          <span className="text-gray-700 text-xs">
                            Color: {colors.join(", ") || "N/A"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:me-10 items-center space-x-2 mt-4 sm:mt-0 sm:ml-auto justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          decrementQuantity(product.id);
                        }}
                        className="px-2 py-1 bg-gray-300 text-gray-700 rounded"
                        disabled={product.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-2">{product.quantity}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          incrementQuantity(product.id);
                        }}
                        className="px-2 py-1 bg-gray-300 text-gray-700 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Payment Details Section */}
      <div className="w-full lg:w-1/2 bg-white px-5 pt-5 pb-5 ">
        <h2 className="text-xl font-semibold mb-4 text-[#004F44]">
          Shipping Details
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Complete your purchase by providing your payment details.
        </p>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-4 sm:space-y-0">
            <div className="w-full sm:w-1/2">
              <label className="block text-gray-700">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="planto@gmail.com"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 9496279843"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Type your address..."
              className="w-full border rounded p-2"
            ></textarea>
            <div className="flex flex-col sm:flex-row gap-2 mt-2">
              <input
                type="text"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="District"
                className="w-full sm:w-1/2 p-2 border rounded"
              />
              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="PinCode"
                className="w-full sm:w-1/2 p-2 border rounded"
              />
            </div>
          </div>

          <div className="flex justify-between mt-4 text-gray-700">
            <span>Sub Total</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Discount</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between font-semibold mt-2">
            <span>Total</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>

          <button
            onClick={handleOrderNow}
            className="w-full bg-[#004F44] text-white p-3 rounded-lg mt-6 md:mt-20"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
