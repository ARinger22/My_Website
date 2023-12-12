import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/my_logo.svg';

const StickyNavbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
`;

const slideInFromLeft = keyframes`
      from {
        transform: translateX(-100px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    `;

const slideInFromRight = keyframes`
      from {
        transform: translateX(100px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    `;

const slideInFromBottom = keyframes`
      from {
        transform: translateY(50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    `;

const MobileMenu = styled.div`
    @media (max-width: 640px) {
        animation: ${slideInFromLeft} 0.3s ease-in-out;
    }
`;

const Lining = styled.div`
    margin-top: 1.2rem;
    position: relative;
    left: 8px;
    width: 3px;
    height: 6rem;
    background: rgb(0, 117, 230);
    border-radius: 5px;
`;

const ContactDiv = styled.div`
    z-index: 10;
    position: fixed;
    bottom: 0px;
    left: 2%;
    float: left;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 1.8rem;

    a:hover svg {
        transform: translateY(-5px); /* Adjust the value as needed */
        transition: transform 0.3s ease;
        filter: drop-shadow(0px 6px 10px rgb(0, 117, 230)); /* Add a blue shadow */
    }
`;

const ContactDivision = styled.div`
  animation: ${slideInFromBottom} 0.3s ease-in-out;
`;

const Name = styled.h1`
  animation: ${slideInFromLeft} 0.3s ease-in-out;
`;

const NavComponents = styled.h1`
  animation: ${slideInFromRight} 0.3s ease-in-out;
`;

const Heading = styled.span`
    background: linear-gradient(90deg, #2563eb, #48bb78, #6366f1);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 1.6rem; 
`;

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <StickyNavbar className='fixed'>
            <nav className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <Name className="flex flex-shrink-0 items-center">
                            <a href='/'> <img className="h-10 w-auto filter invert hover:bg-blue-200" src={logo} alt="logo" /> </a>
                            <Heading className="font-serif text-white ml-2 text-lg font-extrabold"><a href='/'> Arpit </a></Heading>
                        </Name>
                        <NavComponents className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                            <div className="hidden sm:block">
                                <div className="flex space-x-4">
                                    <a href="/" className="text-white rounded-md px-3 py-2 text-large font-medium hover:border-b-2 hover:border-blue-400 hover:text-blue-400" aria-current="page">Home</a>
                                    <a href="/about" className="text-gray-300 hover:border-b hover:border-blue-400 hover:text-blue-400 hover:border-b-2 rounded-md px-3 py-2 text-large font-medium">About</a>
                                    <a href="/experience" className="text-gray-300 hover:border-b hover:border-blue-400 hover:text-blue-400 hover:border-b-2 rounded-md px-3 py-2 text-large font-medium">Experience</a>
                                    <a href="/projects" className="text-gray-300 hover:border-b hover:border-blue-400 hover:text-blue-400 hover:border-b-2 rounded-md px-3 py-2 text-large font-medium">Projects</a>
                                    <a href="/contact" className="text-gray-300 hover:border-b hover:border-blue-400 hover:text-blue-400 hover:border-b-2 rounded-md px-3 py-2 text-large font-medium">Contact</a>
                                </div>
                            </div>
                        </NavComponents>
                    </div>
                    <div className="items-center sm:hidden mr-6">
                        <NavComponents
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
                        </NavComponents>
                    </div>
                    <ContactDivision>
                        <ContactDiv className="sc-301b97f5-0 gbbQfw">
                            <a className='text-white hover:text-blue-400' target="_blank" rel="noreferrer" aria-label="Link to my Github" href="https://github.com/ARinger22">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 
                                2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                    </path>
                                </svg>
                            </a>
                            <a className='text-white hover:text-blue-400' target="_blank" rel="noreferrer" aria-label="Link to my Linkedin" href="https://www.linkedin.com/in/arpit-gautam-00989322a/">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            <a className='text-white hover:text-blue-400' target="_blank" rel="noreferrer" aria-label="Link to contact me on WhatsApp" href="https://api.whatsapp.com/send?phone=9179630621">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 
                                224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 
                                82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-
                                1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 
                                1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 
                                53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
                                    </path>
                                </svg>
                            </a>
                            <a className='text-white hover:text-blue-400' target="_blank" rel="noreferrer" aria-label="Link to contact me on Instagram" href="https://www.instagram.com/arpit.g_0224/">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a className='text-white hover:text-blue-400' target="_blank" rel="noreferrer" aria-label="Link to contact me on Twitter" href="/">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </a>
                            <Lining className="barra"></Lining>
                        </ContactDiv>
                    </ContactDivision>
                </div>
                {isMobileMenuOpen &&
                    <MobileMenu className="sm:hidden bg-gray-1000" id="mobile-menu">
                        <div className="">
                            <a href="/" className="text-white rounded-md px-1 py-1 text-large font-medium hover:border-b hover:border-blue-400 hover:text-blue-400 hover:border-b-2" aria-current="page">Home</a>
                            <a href="/about" className="text-gray-300 hover:border-b hover:border-blue-400 hover:text-blue-400 hover:border-b-2 rounded-md px-2 py-1 text-large font-medium">About</a>
                            <a href="/experience" className="text-gray-300 hover:border-b hover:border-blue-400 hover:text-blue-400 hover:border-b-2 rounded-md px-2 py-1 text-large font-medium">Experience</a>
                            <a href="/projects" className="text-gray-300 hover:border-b hover:border-blue-400 hover:text-blue-400 hover:border-b-2 rounded-md px-2 py-1 text-large font-medium">Projects</a>
                            <a href="/contact" className="text-gray-300 hover:border-b hover:border-blue-400 hover:text-blue-400 hover:border-b-2 rounded-md px-2 py-1 text-large font-medium">Contact</a>
                        </div>
                    </MobileMenu>
                }
            </nav>
        </StickyNavbar>
    );
}
