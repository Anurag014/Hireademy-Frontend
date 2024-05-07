import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <nav className="bg-[#101315]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-4xl font-semibold whitespace-nowrap text-[#66FCF1]">BOOK REALM</span>
                    </Link>
                    <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isMenuOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`w-full md:flex md:w-auto ${isMenuOpen ? '' : 'hidden'}`} id="navbar-default">
                        <ul className="font-medium text-xl flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-[#101315]">
                            <li>
                                <Link to="/" className="block py-2 px-3 text-[#66FCF1] hover:bg-[#45A29E] rounded-2xl" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/books" className="block py-2 px-3 text-[#66FCF1] hover:bg-[#45A29E] rounded-2xl">Book</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar