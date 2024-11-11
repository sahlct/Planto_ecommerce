import React, { useState } from 'react';

export function SingleProduct() {
  const [mainImage, setMainImage] = useState("https://momentz.in/cdn/shop/products/MZ8854_b_1200x.jpg?v=1663244979");

  // List of images
  const images = [
    "https://momentz.in/cdn/shop/products/MZ8854_b_1200x.jpg?v=1663244979",
    "https://img.freepik.com/premium-photo/flower-pot-with-pink-flowers-it_863013-13058.jpg?w=740",
    "https://img.freepik.com/premium-photo/flower-pot-with-white-background_863013-13061.jpg",
    "https://img.freepik.com/premium-photo/white-pot-with-flowers-it-that-are-pink-yellow-pink_1089151-194448.jpg?w=360",
  ];

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
              key={mainImage} // Ensures re-render on src change
            />
          </div>
          
          {/* Thumbnails */}
          <div className="flex space-x-4 justify-center items-center overflow-x-auto">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover cursor-pointer ${mainImage === image ? 'ring-1 ring-[#004F44]' : ''}`}
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-4 py-4">
          <div>
            <h2 className="text-xl font-bold text-[#004F44]">Peperomia Salten</h2>
            <div className="text-lg text-gray-500 line-through">£40.00</div>
            <div className="text-xl font-bold text-red-500">£28.00</div>
            <div className="text-sm text-gray-600">1,238 Sold</div>
            <div className="flex items-center space-x-1 text-yellow-500">
              <span>★</span>
              <span className="text-lg font-semibold">4.5</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Description:</h3>
            <p className="text-gray-600">
              Boba etiam et bulla tea est potus delectus singulari compositione saporum et textuum...
              <span className="text-blue-600 cursor-pointer">See More</span>
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Color:</h4>
            <div className="flex space-x-2">
              <span className="w-8 h-8 rounded-full bg-brown-500 border border-gray-300"></span>
              <span className="w-8 h-8 rounded-full bg-gray-300 border border-gray-300"></span>
              <span className="w-8 h-8 rounded-full bg-blue-500 border border-gray-300"></span>
              <span className="w-8 h-8 rounded-full bg-black border border-gray-300"></span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Size:</h4>
            <div className="flex space-x-2">
              <button className="w-10 h-10 border border-gray-300 rounded">6</button>
              <button className="w-10 h-10 border border-gray-300 rounded">8</button>
              <button className="w-10 h-10 border border-gray-300 rounded bg-[#004F44] text-white">10</button>
              <button className="w-10 h-10 border border-gray-300 rounded">14</button>
              <button className="w-10 h-10 border border-gray-300 rounded">18</button>
              <button className="w-10 h-10 border border-gray-300 rounded">20</button>
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
