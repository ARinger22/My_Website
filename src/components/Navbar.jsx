import React, { useState } from 'react';
import logo from '../assets/my_logo.svg';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div >
            <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-14 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="h-10 w-auto filter invert " src={logo} alt="logo" />
                            <h1 className="text-white ml-2 text-lg font-extrabold">Arpit</h1>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                            <div className="hidden sm:block">
                                <div className="flex space-x-4">
                                    <a href="/" className="text-white rounded-md px-3 py-2 text-large font-medium hover:border-b hover:border-blue-400 hover:border-b-2" aria-current="page">Home</a>
                                    <a href="/about" className="text-gray-300 hover:border-b hover:border-blue-400 hover:border-b-2 rounded-md px-3 py-2 text-large font-medium">About</a>
                                    <a href="/experience" className="text-gray-300 hover:border-b hover:border-blue-400 hover:border-b-2 rounded-md px-3 py-2 text-large font-medium">Experience</a>
                                    <a href="/projects" className="text-gray-300 hover:border-b hover:border-blue-400 hover:border-b-2 rounded-md px-3 py-2 text-large font-medium">Projects</a>
                                    <a href="/contact" className="text-gray-300 hover:border-b hover:border-blue-400 hover:border-b-2 rounded-md px-3 py-2 text-large font-medium">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="items-center sm:hidden mr-6">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white" aria-controls="mobile-menu"
                            onClick={toggleMobileMenu}
                        ><span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>

                            {isMobileMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen &&
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="">
                            <a href="/" className="text-white rounded-md px-1 py-2 text-large font-medium hover:border-b hover:border-blue-400 hover:border-b-2" aria-current="page">Home</a>
                            <a href="/about" className="text-gray-300 hover:border-b hover:border-blue-400 hover:border-b-2 rounded-md px-2 py-2 text-large font-medium">About</a>
                            <a href="/experience" className="text-gray-300 hover:border-b hover:border-blue-400 hover:border-b-2 rounded-md px-2 py-2 text-large font-medium">Experience</a>
                            <a href="/projects" className="text-gray-300 hover:border-b hover:border-blue-400 hover:border-b-2 rounded-md px-2 py-2 text-large font-medium">Projects</a>
                            <a href="/contact" className="text-gray-300 hover:border-b hover:border-blue-400 hover:border-b-2 rounded-md px-2 py-2 text-large font-medium">Contact</a>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
