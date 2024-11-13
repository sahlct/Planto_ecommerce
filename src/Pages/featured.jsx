import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Featured() {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const gotoProducts = () => {
    navigate('/products');
  };

  const singleItem = (id) => {
    navigate(`/products/${id}`);
  };

  useEffect(() => {
    // Fetch data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://ecommerce-backend-template.onrender.com/api/v1/customer/product-sku?page=1&limit=4&sortField=M06_MRP&sortOrder=asc&search='
        );
        const data = await response.json();

        // Check if the response was successful
        if (data.success) {
          setProducts(data.data.products_skus);
        } else {
          console.error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="bg-white md:pt-20 pt-10 font-dm">
        {/* Header Section */}
        <div className="text-[#004F44] flex justify-between w-full md:px-20 px-10 py-5">
          <h1 className="md:text-4xl text-2xl">Featured</h1>
          <h6 onClick={gotoProducts} className="cursor-pointer">View all</h6>
        </div>

        <div className="relative">
          {/* Card Container */}
          <div
            className="cardContainer w-full md:px-10 px-5 py-5 overflow-x-auto scrollbar-hide"
            ref={scrollRef}
          >
            {/* Grid Layout with Responsive Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-4">
              {/* Map over products array and render cards */}
              {products.map((product) => {
                // Separate sizes and colors from variations
                const sizes = product.Variations.filter(variation => variation.M08_name === 'Size').map(variation => variation.M09_name);
                const colors = product.Variations.filter(variation => variation.M08_name === 'Color').map(variation => variation.M09_name);

                return (
                  <div
                    key={product._id}
                    className="card bg-white sm:p-4 p-3 shadow-xl"
                    onClick={() => singleItem(product._id)}
                  >
                    {/* Image Container */}
                    <div className="h-[120px] sm:h-[220px] md:h-[240px] lg:h-[280px] xl:h-[300px]">
                      <img
                        src={product.M06_thumbnail_image}
                        alt={product.M06_product_sku_name}
                        className="object-cover h-full w-full rounded"
                      />
                    </div>
                    <div className="data mt-4 font-dm flex justify-between text-[#004F44]">
                      <h1 className="sm:text-xl text-sm">{product.M06_product_sku_name}</h1>
                      <h4 className="sm:text-lg text-sm">${product.M06_price}</h4>
                    </div>
                    <div className='flex justify-between flex-col sm:flex-row'>
                    <div className="variations flex flex-col space-y-1 md:justify-between sm:mt-4 mt-2 items-start">
                      {/* Sizes */}
                      <div className="size flex space-x-2 items-center">
                        <p className="sm:text-sm text-xs">Sizes:</p>
                        <div className="flex space-x-2">
                          {sizes.length > 0 ? sizes.map((size, index) => (
                            <div
                              key={index}
                              className="border border-black h-[15px] w-[15px] rounded-full flex items-center justify-center text-[8px]"
                            >
                              {size}
                            </div>
                          )) : <span className="text-xs">N/A</span>}
                        </div>
                      </div>

                      {/* Colors */}
                      <div className="color flex space-x-2 items-center">
                        <p className="sm:text-sm text-xs">Colors:</p>
                        <div className="flex space-x-2">
                          {colors.length > 0 ? colors.map((color, index) => (
                            <div
                              key={index}
                              className="h-[10px] w-[10px] rounded-full border border-black flex items-center justify-center text-[10px]"
                              style={{ backgroundColor: color.toLowerCase() }}
                            >
                            </div>
                          )) : <span className="text-xs">N/A</span>}
                        </div>
                      </div>
                    </div>

                    <button className="bg-[#004F44] w-full sm:w-auto text-white text-base sm:text-lg px-4 sm:py-2 py-1 mt-4 rounded">Buy</button>
                  </div>
                  </div>               
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS to hide the scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari, and Opera */
        }
      `}</style>
    </>
  );
}
