import { HiOutlineUserCircle, HiOutlineLink, HiOutlineHome } from "react-icons/hi";
import { BiInfoCircle, BiFolderOpen } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
const Footer = () => {
    const [active, setActive] = useState(null);
    return (
        <>
            <footer className="rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 mb-16 md:mb-0 mt-auto">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portfolio</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <Link to="terms&conditons">
                                <p className="hover:underline me-4 md:me-6">About</p>
                            </Link>
                            <Link to="terms&conditons">
                                <p className="hover:underline me-4 md:me-6">Privacy Policy</p>
                            </Link>
                            <Link to="terms&conditons">
                                <p className="hover:underline me-4 md:me-6">Licensing</p>
                            </Link>
                            <Link to="terms&conditons">
                                <p className="hover:underline">Contact</p>
                            </Link>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="https://flowbite.com/" className="hover:underline">Nay Thu Naing</a>. All Rights Reserved.</span>
                </div>
            </footer>

            <nav className="md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-600">
                <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
                    {[
                        { icon: <HiOutlineHome className="w-6 h-6 mb-1" />, title: "Home", path: "/" },
                        { icon: <BiInfoCircle className="w-6 h-6 mb-1" />, title: "About", path: "/about" },
                        { icon: <HiOutlineLink className="w-6 h-6 mb-1" />, title: "Services", path: "/services" },
                        { icon: <BiFolderOpen className="w-6 h-6 mb-1" />, title: "Projects", path: "/projects" },
                        { icon: <HiOutlineUserCircle className="w-6 h-6 mb-1" />, title: "Contact", path: "/contact" },
                    ].map((item, index) => (
                        <Link
                            onClick={() => setActive(index)}
                            to={item.path}
                            key={index}
                            className={`inline-flex flex-col items-center justify-center px-3 hover:bg-gray-100 dark:hover:bg-gray-800 group 
                    ${location.pathname === item.path || active === index
                                    ? 'text-blue-600 dark:text-blue-500'
                                    : 'text-gray-500 dark:text-gray-400'
                                }`}>
                            {item.icon}
                            <span className="text-xs">{item.title}</span>
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
}
export default Footer