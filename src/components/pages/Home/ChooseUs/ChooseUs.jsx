/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable jsx-quotes */
/* eslint-disable eol-last */
import React from 'react';
import img1 from './assets/image-1.png';
import img2 from './assets/image-2.png';
import img3 from './assets/image-3.png';
import img4 from './assets/image-4.png';
import img5 from './assets/image-5.png';
import img6 from './assets/image-6.png';
import Title from '../../../layouts/shared/Title';

const ChooseUs = () => {
    return (
        <section className=" py-12">
            <Title mainTitle="Why Choose Us?" subTitle="Discover why we're the best choice for your cites" />
            <div className="grid md:grid-cols-3 gap-8 container px-5 mx-auto">
                {/* card-1 */}
                <div className="w-full hover:border-2 border border-gray-400 hover:border-gray-600 shadow-2xl bg-slate-100 rounded-md px-10 py-6  hover:-translate-y-1 duration-300 transition-all ease-out">
                    <img className="mx-auto mb-4 h-20" src={img1} alt="ReasonsToBuy-img" />
                    <h2 className="text-center text-xl font-bold tracking-wider mb-3">Certified Experts</h2>
                    <p className="text-center text-md font-medium tracking-wide">The best party makeup artist in New Delhi, India who are certified, exprienced , verified professionals.</p>
                </div>
                {/* card-2 */}
                <div className="w-full hover:border-2 border border-gray-400 hover:border-gray-600 shadow-2xl bg-slate-100 rounded-md px-10 py-6  hover:-translate-y-1 duration-300 transition-all ease-out">
                    <img className="mx-auto mb-4 h-20" src={img2} alt="ReasonsToBuy-img" />
                    <h2 className="text-center text-xl font-bold tracking-wider mb-3">Premium Makeup Selection</h2>
                    <p className="text-center text-md font-medium tracking-wide">Experience luxury with our curated selection of premium makeup products, ensuring flawless results every time.</p>
                </div>

                {/* card-3 */}
                <div className="w-full hover:border-2 border border-gray-400 hover:border-gray-600 shadow-2xl bg-slate-100 rounded-md px-10 py-6  hover:-translate-y-1 duration-300 transition-all ease-out">
                    <img className="mx-auto mb-4 h-20" src={img3} alt="ReasonsToBuy-img" />
                    <h2 className="text-center text-xl font-bold tracking-wider mb-3">Convenience</h2>
                    <p className="text-center text-md font-medium tracking-wide">Urban Company sends a suitable makeup artist to your home with everything they need to get you ready.</p>
                </div>
                {/* card-4 */}
                <div className="w-full hover:border-2 border border-gray-400 hover:border-gray-600 shadow-2xl bg-slate-100 rounded-md px-10 py-6  hover:-translate-y-1 duration-300 transition-all ease-out">
                    <img className="mx-auto mb-4 h-20" src={img4} alt="ReasonsToBuy-img" />
                    <h2 className="text-center text-xl font-bold tracking-wider mb-3">Express Service</h2>
                    <p className="text-center text-md font-medium tracking-wide">Book upto 3 hours in advance and get dressed for your special event at home.</p>
                </div>
                {/* card-5 */}
                <div className="w-full hover:border-2 border border-gray-400 hover:border-gray-600 shadow-2xl bg-slate-100 rounded-md px-10 py-6  hover:-translate-y-1 duration-300 transition-all ease-out">
                    <img className="mx-auto mb-4 h-20" src={img5} alt="ReasonsToBuy-img" />
                    <h2 className="text-center text-xl font-bold tracking-wider mb-3">Customer Satisfaction</h2>
                    <p className="text-center text-md font-medium tracking-wide">We prioritize customer satisfaction above all else, ensuring you're delighted with your experience.</p>
                </div>
                {/* card-6 */}
                <div className="w-full hover:border-2 border border-gray-400 hover:border-gray-600 shadow-2xl bg-slate-100 rounded-md px-10 py-6  hover:-translate-y-1 duration-300 transition-all ease-out">
                    <img className="mx-auto mb-4 h-20" src={img6} alt="ReasonsToBuy-img" />
                    <h2 className="text-center text-xl font-bold tracking-wider mb-3">Expert Stylists</h2>
                    <p className="text-center text-md font-medium tracking-wide">Our team consists of expert stylists who stay updated with the latest trends to provide you with the perfect look.</p>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;
