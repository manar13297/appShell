import React, { useEffect, useState } from 'react';
import HeaderItem from "./HeaderItem";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ onSignOut }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Handle activating header elements according to route
    useEffect(() => {
        const pathMap = {
            "/dashboard": 0,
            "/resume": 1,
            "/analysis": 2,
            "/interviews": 3,
            "/professional-orientation": 4
        };
        const path = location.pathname.endsWith('/') ? location.pathname.slice(0, -1) : location.pathname;
        setActiveIndex(pathMap[path]);
    }, [location.pathname]);

    const handleClick = (path) => {
        navigate(path);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        onSignOut();
    };

    return (
        <header className="w-full flex bg-secondary-blue h-70px">
            <div className="flex justify-center w-full items-end">
                <HeaderItem text="Dashboard" isActive={activeIndex === 0} onClick={() => handleClick('/dashboard')} />
                <HeaderItem text="Resume" isActive={activeIndex === 1} onClick={() => handleClick('/resume')} />
                <HeaderItem text="Analysis" isActive={activeIndex === 2} onClick={() => handleClick('/analysis')} />
                <HeaderItem text="Interviews" isActive={activeIndex === 3} onClick={() => handleClick('/interviews')} />
                <HeaderItem text="Professional Orientation" isActive={activeIndex === 4} onClick={() => handleClick('/professional-orientation')} />
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
