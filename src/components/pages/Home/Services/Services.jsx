/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import Title from '../../../layouts/shared/Title';
import { Link } from 'react-router-dom';

const Services = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    const services = [
        { title: 'Bridal Makeup', img: img1 },
        { title: 'Party Makeup', img: img2 },
        { title: 'Advertisement Makeup', img: img3 },
        { title: 'Hair Styling', img: img4 },
        { title: 'Garments Draping', img: img5 }
    ];

    const moreServices = [
        { title: 'Prewedding Makeup', img: img6 },
        { title: 'Makeup for Friends and Family', img: img7 }
    ];

    const renderServiceCard = (service) => (
        <Link to="ask">
            <div className="relative h-[385px] w-full rounded-xl hover:border-2 hover:border-gray-700 duration-300 transition-all ease-linear">
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                <h1 className="absolute inset-x-0 bottom-1 -translate-y-1/2 py-3 px-1 text-lg font-semibold text-center tracking-widest text-gray-300">{service.title}</h1>
                <img className="h-[385px] w-full rounded-lg object-cover object-top" src={service.img} alt={service.title} />
            </div>
        </Link>
    );

    return (
        <div className="container relative flex flex-col justify-between h-full px-5 md:px-10 mx-auto xl:px-0 my-20">
            <Title mainTitle="Services" subTitle="Here is a few of the awesome Services we provide" />
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">{services.map((service) => renderServiceCard(service))}</section>
            {showMore && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-4">{moreServices.map((service) => renderServiceCard(service))}</div>}
            <div className="flex justify-center">
                <button onClick={handleShowMore} className="mt-4 p-2 bg-blue-500 text-white rounded">
                    {showMore ? 'Show Less' : 'Show More'}
                </button>
            </div>
        </div>
    );
};

export default Services;
