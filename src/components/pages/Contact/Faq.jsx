import React, { useState } from 'react';

const Faq = () => {
    // State to manage whether each FAQ section is expanded or collapsed
    const [faqStates, setFaqStates] = useState({
        demo1: false,
        demo2: false,
        demo3: false,
        demo4: false,
        demo5: false,
        demo6: false
    });

    // Function to toggle the FAQ section visibility
    const toggleFaqSection = (faqKey) => {
        setFaqStates({ ...faqStates, [faqKey]: !faqStates[faqKey] });
    };

    return (
        <section className="bg-white">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl">FAQ's</h1>

                <hr className="my-6 border-gray-200" />

                <div>
                    {/* Demo 1 */}
                    <div>
                        <button className="flex items-center focus:outline-none" onClick={() => toggleFaqSection('demo1')}>
                            {faqStates.demo1 ? (
                                <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                                </svg>
                            ) : (
                                <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            )}

                            <h1 className="mx-4 text-xl text-gray-700">What services do your makeup artists provide?</h1>
                        </button>

                        {faqStates.demo1 && (
                            <div className="flex mt-8 md:mx-10">
                                <span className="border border-blue-500"></span>

                                <p className="max-w-3xl px-4 text-gray-500">
                                    Our makeup artists provide a variety of services including bridal makeup, party makeup, and special occasion makeup. They also offer consultations to help you
                                    choose the best look for your event.
                                </p>
                            </div>
                        )}
                    </div>

                    <hr className="my-8 border-gray-200" />

                    {/* Demo 2 */}
                    <div>
                        <button className="flex items-center focus:outline-none" onClick={() => toggleFaqSection('demo2')}>
                            {faqStates.demo2 ? (
                                <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                                </svg>
                            ) : (
                                <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            )}

                            <h1 className="mx-4 text-xl text-gray-700">Are the makeup products used by your artists safe and genuine?</h1>
                        </button>

                        {faqStates.demo2 && (
                            <div className="flex mt-8 md:mx-10">
                                <span className="border border-blue-500"></span>

                                <p className="max-w-3xl px-4 text-gray-500">
                                    Yes, our makeup artists use only genuine, high-quality products that are safe for all skin types. We ensure that all products are verified and tested for safety.
                                </p>
                            </div>
                        )}
                    </div>

                    <hr className="my-8 border-gray-200" />

                    {/* Demo 3 */}
                    <div>
                        <button className="flex items-center focus:outline-none" onClick={() => toggleFaqSection('demo3')}>
                            {faqStates.demo3 ? (
                                <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                                </svg>
                            ) : (
                                <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            )}

                            <h1 className="mx-4 text-xl text-gray-700">How can I book a makeup artist for my event?</h1>
                        </button>

                        {faqStates.demo3 && (
                            <div className="flex mt-8 md:mx-10">
                                <span className="border border-blue-500"></span>

                                <p className="max-w-3xl px-4 text-gray-500">
                                    You can book a makeup artist through our website or mobile app. Simply choose the service you need, select a date and time, and a certified professional will be
                                    assigned to you.
                                </p>
                            </div>
                        )}
                    </div>

                    <hr className="my-8 border-gray-200" />

                    {/* Demo 4 */}
                    <div>
                        <button className="flex items-center focus:outline-none" onClick={() => toggleFaqSection('demo4')}>
                            {faqStates.demo4 ? (
                                <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                                </svg>
                            ) : (
                                <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            )}

                            <h1 className="mx-4 text-xl text-gray-700">Can I request a specific makeup artist?</h1>
                        </button>

                        {faqStates.demo4 && (
                            <div className="flex mt-8 md:mx-10">
                                <span className="border border-blue-500"></span>

                                <p className="max-w-3xl px-4 text-gray-500">
                                    Yes, if you have a preferred makeup artist, you can request their services when booking. We will do our best to accommodate your request based on their
                                    availability.
                                </p>
                            </div>
                        )}
                    </div>

                    <hr className="my-8 border-gray-200" />

                    {/* Demo 5 */}
                    <div>
                        <button className="flex items-center focus:outline-none" onClick={() => toggleFaqSection('demo5')}>
                            {faqStates.demo5 ? (
                                <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                                </svg>
                            ) : (
                                <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            )}

                            <h1 className="mx-4 text-xl text-gray-700">What is your cancellation policy?</h1>
                        </button>

                        {faqStates.demo5 && (
                            <div className="flex mt-8 md:mx-10">
                                <span className="border border-blue-500"></span>

                                <p className="max-w-3xl px-4 text-gray-500">
                                    You can cancel or reschedule your appointment up to 24 hours before the scheduled time without any charges. Cancellations made within 24 hours of the appointment
                                    may incur a fee.
                                </p>
                            </div>
                        )}
                    </div>

                    <hr className="my-8 border-gray-200" />

                    {/* Demo 6 */}
                    <div>
                        <button className="flex items-center focus:outline-none" onClick={() => toggleFaqSection('demo6')}>
                            {faqStates.demo6 ? (
                                <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                                </svg>
                            ) : (
                                <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            )}

                            <h1 className="mx-4 text-xl text-gray-700">Do you offer makeup trials before the event?</h1>
                        </button>

                        {faqStates.demo6 && (
                            <div className="flex mt-8 md:mx-10">
                                <span className="border border-blue-500"></span>

                                <p className="max-w-3xl px-4 text-gray-500">
                                    Yes, we offer makeup trials for bridal and special occasion makeup. This allows you to try out different looks and choose the one that best suits your style for the
                                    big day.
                                </p>
                            </div>
                        )}
                    </div>

                    <hr className="my-8 border-gray-200" />

                    {/* Repeat similar structure for other FAQ items */}
                </div>
            </div>
        </section>
    );
};

export default Faq;
