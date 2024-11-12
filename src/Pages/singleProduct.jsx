import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export function SingleProduct() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    // Fetch product data from the API
    axios
      .get(`https://ecommerce-backend-template.onrender.com/api/v1/customer/product-sku/${id}`)
      .then((response) => {
        const data = response.data.data;
        setProductData(data);
        // Set main image to the first image in the Images array
        setMainImage(data.Images[0]?.M07_image_path || data.M06_thumbnail_image);
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, [id]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 pt-20 font-dm">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Image and Thumbnails Section */}
        <div className="space-y-4">
          {/* Main Image with Transition */}
          <div className="max-h-[400px] md:h-[400px]">
            <img
              src={mainImage}
              alt="Main product"
              className="object-contain h-full w-full transition-all duration-500 ease-in-out transform hover:scale-105"
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
                className={`w-16 h-16 object-cover cursor-pointer ${mainImage === image.M07_image_path ? 'ring-1 ring-[#004F44]' : ''}`}
                onClick={() => setMainImage(image.M07_image_path)}
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-4 py-4">
          <div>
            <h2 className="text-xl font-bold text-[#004F44]">{productData.M06_product_sku_name}</h2>
            <div className="text-lg text-gray-500 line-through">£{productData.M06_MRP}</div>
            <div className="text-xl font-bold text-red-500">£{productData.M06_price}</div>
            <div className="text-sm text-gray-600">{productData.M06_quantity} Sold</div>
            <div className="flex items-center space-x-1 text-yellow-500">
              <span>★</span>
              <span className="text-lg font-semibold">4.5</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Description:</h3>
            <p className="text-gray-600">
              {productData.M06_description}
              <span className="text-blue-600 cursor-pointer">See More</span>
            </p>
          </div>

          {/* Variations */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Color:</h4>
            <div className="flex space-x-2">
              {productData.Variations.filter(variation => variation.M08_name === "Color").map((variation) => (
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
              {productData.Variations.filter(variation => variation.M08_name === "Size").map((variation) => (
                <button key={variation._id} className="w-10 h-10 border border-gray-300 rounded">
                  {variation.M09_name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <button className="w-full bg-[#004F44] text-white py-2 rounded">Add To Cart</button>
            <button className="w-full border border-[#004F44] text-[#004F44] py-2 rounded">Checkout Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
