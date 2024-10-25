import { Dot } from 'lucide-react';
import React from 'react';

export default function Home() {
    return (
        <>
            <div className='min-h-screen bg-[#004F44] text-white flex'>
                <div className='w-1/2 h-screen px-20 flex flex-col gap-10 justify-center items-center'>
                    <h1 className='text-6xl font-chillax'>Happiness blooms from within</h1>
                    <p className='pe-20 font-normal'>Our environment, the world in which we live and work, is a mirror of our attitudes and expectations.</p>
                    <div className='flex justify-between w-full pe-28'>
                        <button className='bg-white text-black px-5 py-2'>Shop Now</button>
                        <div className='flex gap-2 justify-center items-center'>
                            <p>Explore plants </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l14 0" />
                                <path d="M13 18l6 -6" />
                                <path d="M13 6l6 6" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-screen p-8 flex justify-center items-center'>
                    <div className='grid grid-cols-3 gap-4 max-h-[320px]'>
                        {/* Top left image */}
                        <div className='relative'>
                            <img
                                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAfYXaAIx0qMfwB6m4oHPCXhoH0r3m9k6u6_X0O15NpMF9qXQX"
                                alt="New plant"
                                className='w-full h-full object-cover'
                            />
                            <span className='absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm rounded'>
                                New
                            </span>
                        </div>

                        {/* Top right image - Featured/Large image */}
                        <div className='relative row-span-2 col-span-2'>
                            <img
                                src="https://blacktulipflowers.in/wp-content/uploads/2023/08/Stunning-Pink-Tulips.png"
                                alt="Featured plant"
                                className='w-full h-full object-cover'
                            />
                            <div className='absolute bottom-8 left-8 right-8' style={{ backdropFilter: 'blur(2px)' }}>
                                <h3 className='text-2xl mb-2'>Anthurium Flower</h3>
                                <p className='text-sm mb-4'>The flower of human being. It has meaningful of fact that the plant always grows whatever season and weather.</p>
                                <button className='text-white border hover:bg-white hover:text-black border-white px-4 py-2 text-sm rounded'>
                                    READ MORE
                                </button>
                            </div>
                            <span className='absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm rounded'>
                                Featured
                            </span>
                        </div>

                        {/* Bottom left image */}
                        <div className='relative'>
                            <img
                                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEdMyoXcQF-ZSpYyRcg9OyWoZicNh6Ummv4-VHOZuBPKuzEvGw"
                                alt="Popular plant"
                                className='w-full h-full object-cover z-10'
                            />
                            <span className='absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm rounded'>
                                Popular
                            </span>
                            <div className='absolute flex flex-col -bottom-10 -left-12'>
                                <div className='flex z-0'>
                                    <Dot size={24} />
                                    <Dot size={24} />
                                    <Dot size={24} />
                                    <Dot size={24} />
                                    <Dot size={24} />
                                </div>
                                <div className='flex'>
                                    <Dot size={24} />
                                    <Dot size={24} />
                                    <Dot size={24} />
                                    <Dot size={24} />
                                    <Dot size={24} />
                                </div>
                                <div className='flex'>
                                    <Dot size={24} />
                                    <Dot size={24} />
                                    <Dot size={24} />
                                    <Dot size={24} />
                                    <Dot size={24} />
                                </div>
                                <div className='flex'>
                                    <Dot size={24} />
                                    <Dot size={24} />
                                    <Dot size={24} />
                                    <Dot size={24} />
                                    <Dot size={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}