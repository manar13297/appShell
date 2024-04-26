import React, { useState } from 'react';
import HeaderItem from "./HeaderItem";

const Header = ({ onSignOut }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleLogout = () => {
        onSignOut();
    };
    return (
        <header className="absolute top-0 w-full flex bg-secondary-blue h-20">
            <div className="flex justify-center w-full items-end">
                <HeaderItem text="Dashboard" isActive={activeIndex === 0} onClick={() => handleClick(0)} />
                <HeaderItem text="Resume" isActive={activeIndex === 1} onClick={() => handleClick(1)} />
                <HeaderItem text="Analysis" isActive={activeIndex === 2} onClick={() => handleClick(2)} />
                <HeaderItem text="Interviews" isActive={activeIndex === 3} onClick={() => handleClick(3)} />
                <HeaderItem text="Professional Orientation" isActive={activeIndex === 4} onClick={() => handleClick(4)} />
            </div>
            <div className="flex items-center mr-10">
                <div className="rounded-full h-8 w-8 bg-gray-300 mr-2"></div>
                <div className="text-text-black mr-4">Username</div>
                <div className="relative">
                    <svg
                        className="w-4 h-4 text-gray-700 cursor-pointer"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={toggleMenu}
                    >
                        <path d="M19 9l-7 7-7-7" />
                    </svg>
                    {isMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                            <div className="py-1">
                                <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left" onClick={handleLogout}>
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
