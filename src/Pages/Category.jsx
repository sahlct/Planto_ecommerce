import React from 'react';

export default function Category() {
  const categories = [
    "Roses", "Tulips", "Lilies", "Sunflowers", "Daisies",
    "Orchids", "Peonies", "Daffodils", "Chrysanthemums", "Lavender"
  ];

  return (
    <div className="w-full overflow-x-auto scrollbar-hide font-dm">
      <div className="flex md:space-x-8 space-x-4  py-3 px-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="flex-shrink-0 px-4 py-2 bg-gray-200 text-[#004F44] rounded-lg hover:bg-gray-300 transition duration-200
            text-sm md:text-lg font-light md:px-6 md:py-3 md:w-1/5 w-auto"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
