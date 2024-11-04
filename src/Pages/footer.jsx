import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#004F44] md:py-16 py-8 px-5 md:px-10 text-white font-dm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start">
          <img src="/assets/LogoLast.png" alt="Logo" className="md:h-12 h-10" />
        </div>

        {/* About Section */}
        <div className='font-light'>
          <h3 className="font-light mb-4">About Planto</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline text-gray-300">Home</a></li>
            <li><a href="#" className="hover:underline text-gray-300">Get in touch</a></li>
            <li><a href="#" className="hover:underline text-gray-300">FAQs</a></li>
          </ul>
        </div>

        {/* Product Section */}
        <div className='font-light'>
          <h3 className="font-light mb-4">Product</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline text-gray-300">Testimonial</a></li>
            <li><a href="#" className="hover:underline text-gray-300">How it works</a></li>
            <li><a href="#" className="hover:underline text-gray-300">Members discounts</a></li>
          </ul>
        </div>

        {/* Subscription Section */}
        <div className='font-light'>
          <h3 className="font-light mb-4">NOT QUITE READY FOR SURVEY?</h3>
          <p className="mb-4 text-gray-300">Join our online no-community for free. No spam, ever.</p>
          <div className="flex md:flex-col lg:flex-row">
            <input 
              type="email" 
              placeholder="enter your email" 
              className="flex-grow px-4 py-2 text-black rounded-l-md"
            />
            <button className="bg-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded-r-md">
              Send
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
