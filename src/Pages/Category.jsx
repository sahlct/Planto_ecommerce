import React, { useEffect, useState } from 'react';

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://ecommerce-backend-template.onrender.com/api/v1/customer/product-category?page=1&limit=15');
        const result = await response.json();
        
        if (result.success) {
          // Set categories from the API response
          setCategories(result.data.productCategories);
        } else {
          console.error('Failed to fetch categories:', result.msg);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full overflow-x-auto scrollbar-hide font-dm">
      <div className="flex md:space-x-8 space-x-4 py-3 px-4">
        {categories.map((category) => (
          <button
            key={category._id}
            className="flex-shrink-0 px-4 py-2 bg-gray-200 text-[#004F44] rounded-lg hover:bg-gray-300 transition duration-200
            text-sm md:text-lg font-light md:px-6 md:py-3 md:w-1/5 w-auto"
          >
            {category.M04_category_name}
          </button>
        ))}
      </div>
    </div>
  );
}
