import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon, CloseIcon } from "../assets/Icon";


export const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/reports', label: 'Reports' },
        { path: '/add-vehicle', label: 'Manual Entry' },
        { path: '/contact', label: 'Contact Us' },
    ];

    const NavLinksComponent = () => (
        <>
            {navLinks.map(link => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsNavOpen(false)}
                    className={({ isActive }) => `px-3 py-2 rounded-md text-xl font-medium transition-colors duration-200 ${isActive
                            ? 'bg-yellow-500 text-gray-900'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                >
                    {link.label}
                </NavLink>
            ))}
        </>
    );

    return (
        <header className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-25">
                    <div className="flex items-center">
                        <img src="https://people.iitism.ac.in/~MAS-2024/images/iitsim.png" alt="IIT ISM Dhanbad Logo" className="h-20 w-24 mr-3" />
                        <div>
                            <h1 className="text-3xl font-bold">Vehicle Management System</h1>
                            <p className="text-xl text-gray-300">IIT (ISM), Dhanbad</p>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLinksComponent />
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-white focus:outline-none">
                            {isNavOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            {isNavOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                        <NavLinksComponent />
                    </div>
                </div>
            )}
        </header>
    );
};
