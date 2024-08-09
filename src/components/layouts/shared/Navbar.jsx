/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable spaced-comment */
/* eslint-disable func-names */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import { AiFillMail } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaFacebookF, FaLocationDot, FaPhoneVolume, FaYoutube } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import logo from './assets/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav>
            <div className="bg-white py-2 px-2 md:px-40 text-black font-bold tracking-wider text-md flex justify-between">
                <div className="md:flex md:gap-16">
                    <p className="flex md:justify-between items-center gap-2 mb-2">
                        <span className="border p-1 rounded-full bg-white text-[#003049]">
                            <a href="tel:+917439959439">
                                <FaPhoneVolume />
                            </a>
                        </span>
                        <a href="tel:+918296461332">+91 9748286770</a>
                    </p>
                    <p className="flex justify-between items-center gap-2">
                        <span className="border p-1 rounded-full bg-white text-[#003049]">
                            <a href="mailto:thelim.forever@gmail.com">
                                <AiFillMail />
                            </a>
                        </span>
                        <a href="mailto:thelim.forever@gmail.com">Email - thelim.forever@gmail.com</a>
                    </p>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <a href="https://www.facebook.com/gharanaresort/" target="_blank" className="border p-1 rounded-full bg-white text-[#003049]" rel="noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.youtube.com/@gharanaresortsingur" target="_blank" className="border p-1 rounded-full bg-white text-[#003049]" rel="noreferrer">
                        <FaYoutube />
                    </a>
                    <a href="https://maps.app.goo.gl/b68DZU5UwQSfDqjr7" target="_blank" className="border p-1 rounded-full bg-white text-[#003049]" rel="noreferrer">
                        <FaLocationDot />
                    </a>
                </div>
            </div>

            <div className="text-lg bg-gray-900 pt-2 pb-3  mx-auto  w-full shadow-2xl" id="navbar">
                <div className="relative  flex items-center justify-between px-4 lg:px-24 mx-auto">
                    <div className="flex items-center gap-4 ">
                        {/*Website logo */}
                        <Link to="/">
                            <img className="h-[60px] w-[220px]" src={logo} alt="Logo" />
                        </Link>
                    </div>

                    <ul className="items-center text-black text-ellipsis hidden space-x-8 lg:flex">
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Service
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="flex justify-center items-center">
                        <div>
                            <Link
                                to="/ask"
                                className="sign-up bg-[#f0ae2a] font-bold text-black rounded-full px-6 py-3 mx-6 sm:inline-block hidden text-base tracking-wider hover:bg-[#e9bc64] hover:border-0 transition duration-500 ease-in-out transform">
                                Ask
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Navbar Section */}
                    <div className="lg:hidden">
                        {/* Dropdown Open Button */}
                        <button aria-label="Open Menu" title="Open Menu" className="text-white focus:outline-none" onClick={() => setIsMenuOpen(true)}>
                            <FaBars className="w-8" />
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full z-10">
                                <div className=" bg-gray-900 border rounded shadow-sm pb-8">
                                    {/* Logo & Button section */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex gap-2">
                                            <Link to="/" className="inline-flex items-center ml-3">
                                                <img className="h-[60px] w-[200px]" src={logo} alt="Logo" />
                                            </Link>
                                        </div>
                                        {/* Dropdown menu close button */}
                                        <div>
                                            <button type="button" className="text-white  focus:outline-none" onClick={() => setIsMenuOpen(false)}>
                                                <FaTimes className="w-8 h-8 mt-4 mr-3" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Mobile Nav Items Section */}
                                    <nav>
                                        <ul className="space-y-2">
                                            <li>
                                                <Link
                                                    to="/"
                                                    className="block
                             px-4 font-semibold  text-white hover:text-orange-400">
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/services"
                                                    className="block
                             px-4 font-semibold  text-white hover:text-orange-400">
                                                    Service
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/gallery"
                                                    className="block
                             px-4 font-semibold  text-white hover:text-orange-400">
                                                    Gallery
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    to="/about"
                                                    className="block
                             px-4 font-semibold  text-white hover:text-orange-400">
                                                    About
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/contact"
                                                    className="block
                             px-4 font-semibold  text-white hover:text-orange-400">
                                                    Contact
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;