import React from 'react';

export default function NewArrivals() {
    const flowers = [
        {
            src: 'https://christinagreve.com/wp-content/uploads/2018/10/AM6A3542web2.jpg?x15603',
            header: 'Blue Lily'
        },
        {
            src: 'https://images.unsplash.com/photo-1536567611835-18601ae41797?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8fHx8',
            header: 'Rose Shine'
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-UTszwREuFuclsngB3LbrwHYbOdSqU5nlMyEwpPhH_XWFiKCxtkw7UyrzxW6QkGJIpug&usqp=CAU',
            header: 'White Lop'
        },
        {
            src: 'https://images.unsplash.com/photo-1536567632280-e901777bad44?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            header: 'Blue Lies'
        }
    ];

    return (
        <div className="bg-white pt-20 font-dm">
            <div className="text-[#004F44] flex justify-between w-full md:px-20 py-5">
                <h1 className="text-3xl">Colorful New Arrivals</h1>
                <h6>View all</h6>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-20 mt-10">
                {flowers.map((flower, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                        {/* Card Image */}
                        <img
                            src={flower.src}
                            alt={flower.header}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Overlay with Header and Info */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h2 className="text-white text-2xl font-semibold translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500">
                                {flower.header}
                            </h2>
                            <p className="text-white mt-2 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500">
                                more information →
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
