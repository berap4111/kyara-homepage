import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
                <h1 className="text-xl font-bold text-yellow-600">Kyara Beverages</h1>
                <ul className="flex space-x-4 text-sm font-medium text-gray-700">
                    <li>
                        <a
                            href="#hero"
                            className="hover:text-yellow-500 transition-colors duration-200 px-2 py-1 rounded hover:bg-yellow-100"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="hover:text-yellow-500 transition-colors duration-200 px-2 py-1 rounded hover:bg-yellow-100"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#products"
                            className="hover:text-yellow-500 transition-colors duration-200 px-2 py-1 rounded hover:bg-yellow-100"
                        >
                            Products
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="hover:text-yellow-500 transition-colors duration-200 px-2 py-1 rounded hover:bg-yellow-100"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
