import React from 'react';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import Subscribe from './subscribe/Subscribe';

const AboutUs = () => {
  return (
      <div>
          <div className="my-container grid md:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-16">
              <div>
                  <h1 className="text-3xl md:text-5xl font-bold tracking-wider">Our Story -</h1>
                  <p className="mt-6 md:mt-12 mb-0 text-lg text-black font-medium tracking-wider">Welcome to Beauty Pourler – Where Elegance Meets Expertise.</p>
                  <p className="mt-6 md:mt-4 mb-0 text-lg text-black font-medium tracking-wider">
                      Founded in the heart of Kolkata, Beauty Pourler quickly became the go-to destination for exceptional bridal, pre-wedding, party, and advertisement makeup services.
                  </p>
                  <p className="mt-6 md:mt-4 mb-0 text-lg text-black font-medium tracking-wider">
                      We tailor our services to suit your preferences and occasions, ensuring you look and feel your best.
                  </p>
                  <p className="mt-6 md:mt-4 mb-0 text-lg text-black font-medium tracking-wider">Trust Beauty Pourler to transform your vision into reality and make every moment unforgettable.</p>
                  <p className="mt-6 md:mt-6 mb-0 text-lg text-black font-medium tracking-wider">Beauty Pourler – Where Every Look Tells a Story.</p>
              </div>
              <div>
                  <img className="w-full" src={img1} alt="about img" />
              </div>
          </div>

          <div className="my-container flex flex-col-reverse md:flex-row gap-10 md:gap-20 mt-10 md:mt-20">
              <div className="md:w-1/2">
                  <img className="w-full" src={img2} alt="about img" />
              </div>
              <div className="md:w-1/2">
                  <div className="mt-6 md:mt-12 mb-0 text-lg text-black font-medium tracking-wider">
                      <h1 className="text-3xl md:text-5xl font-bold tracking-wider">Why LIM? -</h1>
                      <p className="mt-6 md:mt-12 mb-0 text-lg text-black font-medium tracking-wider">
                          <span className="font-semibold tracking-widest">Certified Experts:</span> The best party makeup artist in New Delhi, India who are certified, experienced, verified
                          professionals.
                      </p>
                      <p className="mt-6 md:mt-4 mb-0 text-lg text-black font-medium tracking-wider">
                          <span className="font-semibold tracking-widest">Quality Makeup:</span> Our makeup artists use genuine products only.
                      </p>
                      <p className="mt-6 md:mt-4 mb-0 text-lg text-black font-medium tracking-wider">
                          <span className="font-semibold tracking-widest">Convenience:</span> Urban Company sends a suitable makeup artist to your home with everything they need to get you ready.
                      </p>
                      <p className="mt-6 md:mt-4 mb-0 text-lg text-black font-medium tracking-wider">
                          <span className="font-semibold tracking-widest">Express Service:</span> Book up to 3 hours in advance and get dressed for your special event at home.
                      </p>
                      <p className="mt-6 md:mt-4 mb-0 text-lg text-black font-medium tracking-wider">
                          <span className="font-semibold tracking-widest">Personalized Experience:</span> Tailored makeup styles to suit your preferences and occasion.
                      </p>
                      <p className="mt-6 md:mt-4 mb-0 text-lg text-black font-medium tracking-wider">
                          <span className="font-semibold tracking-widest">Affordable Packages:</span> Competitive pricing with packages to fit your budget.
                      </p>
                  </div>
              </div>
          </div>

          <div>
              <Subscribe />
          </div>
      </div>
  );
};

export default AboutUs;