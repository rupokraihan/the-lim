import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './styles.css';

import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img8 from './assets/img8.jpg';

import { Autoplay } from 'swiper/modules';

const Header = () => {
    const [autoplay, setAutoplay] = useState({
        delay: 3000,
        disableOnInteraction: false,
        reverseDirection: false
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setAutoplay((prev) => ({
                ...prev,
                reverseDirection: !prev.reverseDirection
            }));
        }, 3000 * (autoplay.reverseDirection ? 6 : 1)); // Adjust the multiplier based on your slide count
        return () => clearInterval(interval);
    }, [autoplay]);

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={4}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
                ...autoplay,
                reverseDirection: autoplay.reverseDirection
            }}
            breakpoints={{
                // when window width is >= 320px
                320: {
                    slidesPerView: 1
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 2
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 3
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 4
                }
            }}
            modules={[Autoplay]}
            className="mySwiper">
            <SwiperSlide>
                <img src={img1} alt="Image 1" className="slide-image" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="Image 2" className="slide-image" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="Image 3" className="slide-image" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img4} alt="Image 4" className="slide-image" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img5} alt="Image 5" className="slide-image" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img6} alt="Image 6" className="slide-image" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img8} alt="Image 8" className="slide-image" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Header;
