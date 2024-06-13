import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 text-white py-12 rounded-tl-3xl font-onest" style={{ borderRadius:'90px 0 0 0'}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    <div className="w-full md:w-2/3 mb-6 md:mb-0">
                        <div className="relative">
                            <div className="relative">
                                <svg
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                    />
                                </svg>
                                <input
                                    type="email"
                                    placeholder="Subscribe to our newsletter"
                                    className="w-full pl-10 px-4 py-3 rounded-lg shadow-md text-gray-900"
                                />
                            </div>

                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <FaYoutube className="w-8 h-8 hover:text-gray-400 cursor-pointer" />
                        <FaInstagram className="w-8 h-8 hover:text-gray-400 cursor-pointer" />
                        <FaTwitter className="w-8 h-8 hover:text-gray-400 cursor-pointer" />
                    </div>
                </div>
                <div className="text-center mb-4">
                    ©2021-2024 Ride Options (SMC) Private Limited
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <a href="#" className="block mb-2">Link 1</a>
                        <a href="#" className="block mb-2">Link 2</a>
                        <a href="#" className="block">Link 3</a>
                    </div>
                    <div>
                        <a href="#" className="block mb-2">Link 1</a>
                        <a href="#" className="block mb-2">Link 2</a>
                        <a href="#" className="block">Link 3</a>
                    </div>
                    <div>
                        <a href="#" className="block mb-2">Link 1</a>
                        <a href="#" className="block mb-2">Link 2</a>
                        <a href="#" className="block">Link 3</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}



