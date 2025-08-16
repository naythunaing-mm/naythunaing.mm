import React, { useState } from 'react';
import { useEffect } from 'react';
import { HiSun, HiMoon } from "react-icons/hi";
import { Link } from 'react-router';

export default function Header() {
    const [nav, setNav] = useState(false);
    const [active, setActive] = useState(null);
    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Contact', path: '/contact' },
        { label: 'Projects', path: '/projects' },
    ];

    const handleNav = () => setNav(!nav);

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };
    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full shadow-md z-40 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Nay Thu Naing's Portfolio</p>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        onClick={toggleDarkMode}
                        className="
                            flex items-center gap-2
                            px-4 py-2 rounded-full
                            bg-gray-200 dark:bg-gray-700
                            text-yellow-500 dark:text-gray-300
                            hover:scale-105
                            transition-all duration-300 ease-in-out
                            mx-3 text-sm sm:text-base md:text-lg lg:text-xl
                        "
                        >
                        {darkMode ? (
                            <HiSun className="text-lg sm:text-xl md:text-2xl" />
                        ) : (
                            <HiMoon className="text-lg sm:text-xl md:text-2xl" />
                        )}
                        <span className="text-black dark:text-white">Theme</span>
                        </button>

                    <button onClick={handleNav} data-collapse-toggle="navbar-sticky" type="button" className=" hidden items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`${nav ? '' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navItems.map((item, index) => (
                            <Link key={index} to={item.path} onClick={() => setActive(index)}>
                                <button
                                    className={`py-2 px-3 rounded-sm text-sm font-medium transition-all duration-200 ${location.pathname === item.path || active === index
                                        ? 'text-blue-600 dark:text-blue-500 border-b-2 border-b-blue-800'
                                        : 'text-gray-800 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </nav >

    );
}
