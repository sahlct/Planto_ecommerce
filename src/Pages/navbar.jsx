import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu } from 'lucide-react';

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Main Navbar */}
            <div className='h-20 fixed top-0 w-full bg-[#004F44] z-50 text-white flex justify-between px-4 md:px-14 items-center font-dm'>
                {/* Mobile Menu Button */}
                <button 
                    className='md:hidden'
                    onClick={toggleSidebar}
                >
                    <Menu size={24} />
                </button>

                {/* Desktop Navigation */}
                <div className='hidden md:flex gap-10'>
                    <div>Shop</div>
                    <div>Products</div>
                    <div>Guide</div>
                </div>

                {/* Logo */}
                <div className='md:-ms-28'>
                    <img src="/assets/logo2.png" alt="logo" className='w-[100px] h-[50px]'/>
                </div>

                {/* Desktop Icons */}
                <div className='hidden md:flex gap-5'>
                    <Search size={24} />
                    <User size={24} />
                    <ShoppingCart size={24} />
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out z-[60] ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
                        <button onClick={toggleSidebar} className="text-gray-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav className="space-y-4">
                        <a href="#" className="block py-2.5 px-4 text-gray-700 hover:bg-gray-100 rounded">Shop</a>
                        <a href="#" className="block py-2.5 px-4 text-gray-700 hover:bg-gray-100 rounded">Products</a>
                        <a href="#" className="block py-2.5 px-4 text-gray-700 hover:bg-gray-100 rounded">Guide</a>
                        <a href="#" className="block py-2.5 px-4 text-gray-700 hover:bg-gray-100 rounded">Search</a>
                        <a href="#" className="block py-2.5 px-4 text-gray-700 hover:bg-gray-100 rounded">User</a>
                        <a href="#" className="block py-2.5 px-4 text-gray-700 hover:bg-gray-100 rounded">Cart</a>
                    </nav>
                </div>
            </div>

            {/* Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
}