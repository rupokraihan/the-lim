import React from 'react';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import Title from '../../../layouts/shared/Title';

const Gallery = () => {
    return (
        <section>
            <Title mainTitle="Gallery" subTitle="Capturing Moments, Creating Memories" />
            <div className="container px-5 mx-auto grid grid-cols-2 gap-2 md:grid-cols-4">
                <div className="grid gap-2">
                    <div>
                        <img className="h-[520px] w-full rounded-lg object-cover object-top" src={img1} alt="gallery-photo" />
                    </div>
                    <div>
                        <img className="h-[320px] w-full rounded-lg object-cover object-top " src={img2} alt="gallery-photo" />
                    </div>
                    <div>
                        <img className="h-[620px] w-full rounded-lg object-cover object-top" src={img3} alt="gallery-photo" />
                    </div>
                </div>
                <div className="grid gap-2">
                    <div>
                        <img className="h-[620px] w-full rounded-lg object-cover object-top" src={img4} alt="gallery-photo" />
                    </div>
                    <div>
                        <img className="h-[520px] w-full rounded-lg object-cover object-top" src={img5} alt="gallery-photo" />
                    </div>
                    <div>
                        <img className="h-[320px] w-full rounded-lg object-cover object-top " src={img6} alt="gallery-photo" />
                    </div>
                </div>
                <div className="grid gap-2">
                    <div>
                        <img className="h-[320px] w-full rounded-lg object-cover object-top" src={img6} alt="gallery-photo" />
                    </div>
                    <div>
                        <img className="h-[620px] w-full rounded-lg object-cover object-top " src={img2} alt="gallery-photo" />
                    </div>
                    <div>
                        <img className="h-[520px] w-full rounded-lg object-cover object-top" src={img4} alt="gallery-photo" />
                    </div>
                </div>
                <div className="grid gap-2">
                    <div>
                        <img className="h-[520px] w-full rounded-lg object-cover object-top" src={img4} alt="gallery-photo" />
                    </div>
                    <div>
                        <img className="h-[320px] w-full rounded-lg object-cover object-top" src={img2} alt="gallery-photo" />
                    </div>
                    <div>
                        <img className="h-[620px] w-full rounded-lg object-cover object-top" src={img6} alt="gallery-photo" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
