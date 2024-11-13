import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export function SingleProduct() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    // Fetch product data from the API
    axios
      .get(
        `https://ecommerce-backend-template.onrender.com/api/v1/customer/product-sku/${id}`
      )
      .then((response) => {
        const data = response.data.data;
        setProductData(data);
        // Set main image to the first image in the Images array
        setMainImage(
          data.Images[0]?.M07_image_path || data.M06_thumbnail_image
        );
        // Check if the product is already in local storage
        const storedProducts =
          JSON.parse(localStorage.getItem("purchasedProducts")) || [];
        setInCart(storedProducts.some((product) => product.id === data._id));
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, [id]);

  const handleAddToCart = () => {
    const storedProducts =
      JSON.parse(localStorage.getItem("purchasedProducts")) || [];
    const newProduct = {
      id: productData._id,
      name: productData.M06_product_sku_name,
      price: productData.M06_price,
      src: productData.M06_thumbnail_image,
      quantity: 1,
    };

    // Add new product to storage
    localStorage.setItem(
      "purchasedProducts",
      JSON.stringify([...storedProducts, newProduct])
    );
    setInCart(true);
    toast.success(`${productData.M06_product_sku_name} added to cart!`);
  };

  const handleRemoveFromCart = () => {
    let storedProducts =
      JSON.parse(localStorage.getItem("purchasedProducts")) || [];
    storedProducts = storedProducts.filter(
      (product) => product.id !== productData._id
    );
    localStorage.setItem("purchasedProducts", JSON.stringify(storedProducts));
    setInCart(false);
    toast.success(`${productData.M06_product_sku_name} removed from cart.`);
  };

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-5 pt-24 font-dm">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="grid md:grid-cols-2 gap-4">
        {/* Image and Thumbnails Section */}
        <div className="space-y-4">
          {/* Main Image with Fixed Sizing */}
          <div className="max-w-[400px] max-h-[400px] h-[300px]">
            <img
              src={mainImage}
              alt="Main product"
              className="object-cover w-full h-full transition-all duration-500 ease-in-out transform hover:scale-105"
              key={mainImage}
            />
          </div>

          {/* Thumbnails */}
          <div className="flex space-x-4 justify-center items-center overflow-x-auto">
            {productData.Images.map((image, index) => (
              <img
                key={image._id}
                src={image.M07_image_path}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover cursor-pointer ${
                  mainImage === image.M07_image_path
                    ? "ring-1 ring-[#004F44]"
                    : ""
                }`}
                onClick={() => setMainImage(image.M07_image_path)}
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-4 py-4">
          <div>
            <h2 className="text-xl font-bold text-[#004F44]">
              {productData.M06_product_sku_name}
            </h2>
            <div className="text-lg text-gray-500 line-through">
              £{productData.M06_MRP}
            </div>
            <div className="text-xl font-bold text-red-500">
              £{productData.M06_price}
            </div>
            <div className="text-sm text-gray-600">
              {productData.M06_quantity} Sold
            </div>
            <div className="flex items-center space-x-1 text-yellow-500">
              <span>★</span>
              <span className="text-lg font-semibold">4.5</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Description:</h3>
            <p className="text-gray-600">
              {productData.M06_description}
              <span className="text-blue-600 cursor-pointer"> See More</span>
            </p>
          </div>

          {/* Variations */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Color:</h4>
            <div className="flex space-x-2">
              {productData.Variations.filter(
                (variation) => variation.M08_name === "Color"
              ).map((variation) => (
                <span
                  key={variation._id}
                  className="w-8 h-8 rounded-full border border-gray-300"
                  style={{ backgroundColor: variation.M09_name.toLowerCase() }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Size:</h4>
            <div className="flex space-x-2">
              {productData.Variations.filter(
                (variation) => variation.M08_name === "Size"
              ).map((variation) => (
                <button
                  key={variation._id}
                  className="w-10 h-10 border border-gray-300 rounded"
                >
                  {variation.M09_name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            {/* Conditionally Render Button Based on Cart Status */}
            {inCart ? (
              <button
                onClick={handleRemoveFromCart}
                className="w-full bg-red-500 text-white py-2 rounded"
              >
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#004F44] text-white py-2 rounded"
              >
                Add to Cart
              </button>
            )}
            <button className="w-full border border-[#004F44] text-[#004F44] py-2 rounded">
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
