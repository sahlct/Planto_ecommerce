import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const navigate = useNavigate();
    const [products] = useState([
        {
            id: 1,
            name: 'Rose Plank',
            price: 19,
            description: 'Rose Plank is a beautiful flower',
            color: 'Pink',
            image: 'https://momentz.in/cdn/shop/products/MZ8854_b_1200x.jpg?v=1663244979',
        },
        {
            id: 2,
            name: 'Yellow Badri',
            price: 14,
            description: 'Yellow Badri is an awesome flower',
            color: 'Light Yellow',
            image: 'https://img.freepik.com/premium-photo/flower-pot-with-pink-flowers-it_863013-13058.jpg?w=740',
        },
        // {
        //     id: 3,
        //     name: 'Yellow Badri',
        //     price: 14,
        //     description: 'Yellow Badri is an awesome flower',
        //     color: 'Light Yellow',
        //     image: 'https://img.freepik.com/premium-photo/flower-pot-with-white-background_863013-13061.jpg',
        // },
        // {
        //     id: 4,
        //     name: 'Yellow Badri',
        //     price: 14,
        //     description: 'Yellow Badri is an awesome flower',
        //     color: 'Light Yellow',
        //     image: 'https://img.freepik.com/premium-photo/photo-violet-flower-pot-as-houseplant-home-decoration-isolated-white-background_847439-1981.jpg',
        // },
    ]);

    const handleBackToCart = () => {
        navigate('/home');
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

                    <h2 className="text-xl font-semibold mb-2 text-[#004F44]">Product Information & Review</h2>
                    <p className="text-gray-500 text-sm mb-6 flex gap-1">
                        By placing your order, you agree to Storelo's <span className="text-blue-500 underline">Privacy</span> and <span className="text-blue-500 underline">Policy</span>.
                    </p>
                </div>

                {/* Scrollable Product List */}
                <div className="px-5 lg:px-10 pb-10 overflow-y-auto flex-grow">
                    <div className="space-y-4">
                        {products.map((product) => (
                            <div key={product.id} className="flex items-center p-4 border border-[#004F44] rounded-lg">
                                <img src={product.image} alt={product.name} className="w-16 h-16 mr-4" />
                                <div>
                                    <h3 className="font-medium">{product.name} - ${product.price}</h3>
                                    <p className="text-sm text-gray-500">{product.description}</p>
                                    <span className="text-gray-700 text-xs">Color: {product.color}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Payment Details Section */}
            <div className="w-full lg:w-1/2 bg-white p-5 lg:p-10">
                <h2 className="text-xl font-semibold mb-4 text-[#004F44]">Shipping Details</h2>
                <p className="text-gray-500 text-sm mb-6">Complete your purchase by providing your payment details.</p>

                {/* Payment Form */}
                <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-4 sm:space-y-0">
                        <div className="w-full sm:w-1/2">
                            <label className="block text-gray-700">Email address</label>
                            <input type="email" placeholder="planto@gmail.com" className="w-full p-2 border rounded" />
                        </div>
                        <div className="w-full sm:w-1/2">
                            <label className="block text-gray-700">Phone Number</label>
                            <input type="tel" placeholder="+91 9496279843" className="w-full p-2 border rounded" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700">Address</label>
                        <textarea placeholder="Type your address..." className="w-full border rounded p-2"></textarea>
                        <div className="flex flex-col sm:flex-row gap-2 mt-2">
                            <input type="text" placeholder="District" className="w-full sm:w-1/2 p-2 border rounded" />
                            <input type="text" placeholder="PinCode" className="w-full sm:w-1/2 p-2 border rounded" />
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