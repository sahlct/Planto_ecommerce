import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Product() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState(""); // For search input
  const [debouncedSearchText, setDebouncedSearchText] = useState(""); // For delayed API call

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Debounce effect: Update `debouncedSearchText` 1 second after `searchText` changes
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 1000);

    return () => clearTimeout(handler); // Cleanup the timeout on component unmount or searchText change
  }, [searchText]);

  // Fetch products from the backend API when debouncedSearchText changes
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://ecommerce-backend-template.onrender.com/api/v1/customer/product-sku?page=1&limit=4&sortField=M06_MRP&sortOrder=asc&search=${debouncedSearchText}&minPrice=&maxPrice=&categoryId=`
        );
        const result = await response.json();

        if (result.success) {
          const formattedProducts = result.data.products_skus.map((item) => ({
            id: item._id,
            src: item.M06_thumbnail_image,
            name: item.M06_product_sku_name,
            price: `$${item.M06_price}`,
            availableSizes: item.M06_available_sizes || [], // Assume sizes are in `M06_available_sizes`
          }));

          setProducts(formattedProducts);
        } else {
          console.error("Failed to fetch products:", result.msg);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [debouncedSearchText]);

  const singleItem = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <>
      <div className="bg-white pt-20 font-dm">
        <div className="text-[#004F44] w-full flex justify-between md:px-20 px-10 py-5">
          <h1 className="md:text-4xl text-2xl">All Products</h1>
          <div className="relative w-1/4">
            <input
              type="search"
              placeholder="Search Flowers ..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full h-[40px] px-4 rounded-md border-2 border-[#004F44] focus:outline-none focus:border-[#007B73] transition-colors"
            />
          </div>
        </div>

        <div className="relative">
          <div className="cardContainer w-full md:px-10 px-5 py-5 overflow-x-auto scrollbar-hide">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => singleItem(product.id)}
                  className="card cursor-pointer bg-white sm:p-4 p-3 shadow-xl"
                >
                  <div className="h-[120px] sm:h-[220px] md:h-[240px] lg:h-[280px]">
                    <img
                      src={product.src}
                      alt={product.name}
                      className="object-cover h-full w-full rounded"
                    />
                  </div>
                  <div className="data mt-4 font-dm flex justify-between text-[#004F44]">
                    <h1 className="sm:text-xl text-sm">{product.name}</h1>
                    <h4 className="sm:text-lg text-sm">{product.price}</h4>
                  </div>
                  <div className="colors flex flex-wrap md:flex-nowrap space-y-3 justify-between sm:mt-4 mt-2 items-center">
                    <div className="color flex space-x-2 justify-center items-center">
                      <p className="sm:text-sm text-xs">Sizes</p>
                      <div className="flex justify-center items-center space-x-2">
                        {/* Render only available sizes */}
                        {product.availableSizes.includes("S") && (
                          <div className="border border-black h-[15px] w-[15px] rounded-full flex justify-center items-center" style={{ fontSize: "10px" }}>
                            S
                          </div>
                        )}
                        {product.availableSizes.includes("M") && (
                          <div className="border border-black h-[15px] w-[15px] rounded-full flex justify-center items-center" style={{ fontSize: "10px" }}>
                            M
                          </div>
                        )}
                        {product.availableSizes.includes("L") && (
                          <div className="border border-black h-[15px] w-[15px] rounded-full flex justify-center items-center" style={{ fontSize: "10px" }}>
                            L
                          </div>
                        )}
                      </div>
                    </div>
                    <button className="bg-[#004F44] w-full sm:w-auto text-white text-base sm:text-lg px-4 sm:py-2 py-1 rounded">
                      Buy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
