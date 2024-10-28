import React from 'react';

export default function Cart() {
    return (
        <div className="flex flex-col lg:flex-row justify-between">

            {/* Product Information & Review Section */}
            <div className="w-full lg:w-1/2 p-5 lg:p-10 mb-6 lg:mb-0 bg-[#f3fff3]">
                <button className="text-sm text-gray-600 mb-4 lg:mb-8">
                    &larr; Back to cart
                </button>

                <h2 className="text-xl font-semibold mb-2">Product Information & Review</h2>
                <p className="text-gray-500 text-sm mb-6 flex gap-1">
                    By placing your order, you agree to Storelo's <p className="text-blue-500 underline">Privacy</p> and <p className="text-blue-500 underline">Policy</p>.
                </p>

                {/* Product List */}
                <div className="space-y-4">
                    <div className="flex items-center p-4 border rounded-lg">
                        <img src="https://momentz.in/cdn/shop/products/MZ8854_b_1200x.jpg?v=1663244979" alt="Bardi Air Purifier" className="w-16 h-16 mr-4" />
                        <div>
                            <h3 className="font-medium">Rose Plank - $19</h3>
                            <p className="text-sm text-gray-500">Rose Plank is a Buetiful Flower</p>
                            <span className="text-gray-700 text-xs">Color: Pink</span>
                        </div>
                    </div>

                    <div className="flex items-center p-4 border rounded-lg">
                        <img src="https://img.freepik.com/premium-photo/flower-pot-with-white-background_863013-13061.jpg" alt="Mi Air Purifier 3C" className="w-16 h-16 mr-4" />
                        <div>
                            <h3 className="font-medium">Yellow Badri - $14</h3>
                            <p className="text-sm text-gray-500">Yellow badri is awesome flower</p>
                            <span className="text-gray-700 text-xs">Color: Light Yellow</span>
                        </div>
                    </div>
                </div>

                {/* Delivery Options */}
                <h3 className="text-lg font-semibold mt-6 mb-4">Total</h3>
                <div className="space-y-2">
                    {/* <label className="flex items-center p-3 border rounded-lg cursor-pointer">
                        <input type="radio" name="delivery" className="form-radio text-indigo-600" />
                        <span className="ml-3">
                            <span className="flex items-center">
                                $4.99 • Fast Delivery <span className="ml-2 bg-green-100 text-green-700 text-xs rounded px-2">Recommend</span>
                            </span>
                            <p className="text-sm text-gray-500">Get it by Tomorrow, 12 Oct 23</p>
                        </span>
                        <img src="fedex_logo.jpg" alt="FedEx" className="ml-auto w-10 h-6" />
                    </label> */}

                    <label className="flex items-center p-3 border rounded-lg cursor-pointer">
                        <input type="radio" name="delivery" className="form-radio text-indigo-600" />
                        <span className="ml-3">
                            Free Delivery
                            <p className="text-sm text-gray-500">Get it by Friday, 17 - 18 Oct 23</p>
                        </span>
                        <img src="dhl_logo.jpg" alt="DHL" className="ml-auto w-10 h-6" />
                    </label>
                </div>
            </div>

            {/* Payment Details Section */}
            <div className="w-full lg:w-1/2 bg-white p-5 lg:p-10">
                <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
                <p className="text-gray-500 text-sm mb-6">Complete your purchase by providing your payment details.</p>

                {/* Payment Form */}
                <div className="space-y-4">
                    <div className='flex w-full sm:space-x-2 flex-wrap sm:flex-nowrap'>
                    <div className='w-full sm:w-1/2'>
                        <label className="block text-gray-700">Email address</label>
                        <input type="email" placeholder="planto@gmail.com" className="w-full p-2 border rounded" />
                    </div>

                    <div className='w-full sm:w-1/2'>
                        <label className="block text-gray-700">Phone Number</label>
                        <input type="tel" placeholder='+91 9496279843' className="w-full p-2 border rounded" />
                        {/* <div className="flex gap-4 mt-2">
              <button className="flex-1 p-2 border rounded-lg text-center">
                Debit / Credit Card
              </button>
              <button className="flex-1 p-2 border rounded-lg text-center">
                Virtual account
              </button>
            </div> */}
                    </div>
                    </div>

                    <div>
                        <label className="block text-gray-700">Address</label>
                        <textarea name="" placeholder='text your Address...' id="" className='w-full border rounded p-2'></textarea>
                        <div className="flex gap-2 mt-2">
                            {/* <label className="block text-gray-700">Address</label> */}
                            <input type="text" placeholder='District' className="w-1/2 p-2 border rounded" />
                            <input type="text" placeholder='PinCode' className="w-1/2 p-2 border rounded" />
                        </div>
                    </div>

                    {/* <p className="text-sm text-gray-500">Payment is secure and encrypted</p> */}

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

                    <button className="w-full bg-black text-white p-3 rounded-lg mt-6">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
}
