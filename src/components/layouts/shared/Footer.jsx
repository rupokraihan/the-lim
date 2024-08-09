/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=" bg-[#003049] text-white">
            <footer className=" py-4 lg:py-12 px-8 lg:px-40 justify-between items-center">
                <div className="lg:grid grid-cols-3 justify-between gap-x-[6rem] lg:gap-x-[12rem] justify-items-center">
                    <div className="mt-6 ">
                        <p className="font-bold font-serif tracking-wider ">Our Address</p> <br />
                        <p>LIM -The Beauty Secret</p>
                        <p>3/93, Vidyasagar Colony, Ganguly Bagan, Kolkata,</p>
                        <p>West Bengal 700047</p>
                    </div>

                    <div className="mt-6">
                        <p className="font-bold font-serif tracking-wider">Contact Us</p>
                        <br />
                        <a href="tel:+917479016416" className="link link-hover">
                            Phone no: +91 9748286770
                        </a>
                        <br />
                        <a href="mailto:newsonarbanglaresort@gmail.com" className="link link-hover">
                            Email: thelim.forever@gmail.com
                        </a>
                    </div>

                    <div className="mt-6">
                        <p className="font-bold font-serif tracking-wider ">Useful Links</p>
                        <br />
                        <Link to="gallery" className="link link-hover">
                            Gallery
                        </Link>
                        <br />
                        <Link to="contact" className="link link-hover">
                            Contact
                        </Link>
                        <br />
                        <Link to="/About" className="link link-hover">
                            About Us
                        </Link>
                        <br />
                    </div>
                </div>
            </footer>
            <div className="py-6 text-sm text-center uppercase text-white tracking-widest bg-gray-900">
                <p>LIM The Beauty Secret - ALL RIGHT RESERVED POWERED BY THE LIM ( VERSION 0.0.1 )</p>
            </div>
        </div>
    );
};

export default Footer;
