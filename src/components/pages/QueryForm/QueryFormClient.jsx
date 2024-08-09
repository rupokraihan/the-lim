/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable eol-last */
import React from 'react';

const services = [
    { title: 'Bridal Makeup' },
    { title: 'Party Makeup' },
    { title: 'Advertisement Makeup' },
    { title: 'Hair Styling' },
    { title: 'Garments Draping' },
    { title: 'Prewedding Makeup' },
    { title: 'Makeup for Friends and Family' }
];

const QueryFormClient = () => {
    return (
        <div className="">
            <div className="mx-auto px-5 flex justify-center">
                <div className="pt-10">
                    <h1 className="font-bold tracking-[2px] text-3xl mb-8 text-center">Query Form</h1>
                    <form className="gap-20 mb-12">
                        <div>
                            <div>
                                <input
                                    type="text"
                                    name="user_name"
                                    className="w-96 bg-white px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-400 mb-4"
                                    placeholder="NAME"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="user_email"
                                    className="w-full bg-white px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-400 mb-4"
                                    placeholder="EMAIL"
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    name="user_phone"
                                    className="w-full bg-white px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-400 mb-4"
                                    placeholder="MOBILE"
                                />
                            </div>
                            <div>
                                <select
                                    name="service"
                                    className="w-full bg-white px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-400 mb-4">
                                    <option value="" disabled selected>
                                        SERVICE
                                    </option>
                                    {services.map((service, index) => (
                                        <option key={index} value={service.title}>
                                            {service.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    className="w-full bg-white px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-400 mb-4"
                                    placeholder="MESSAGE"
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    value="Send"
                                    className="inline-flex items-center h-12 px-6 mb-3 font-bold text-black tracking-widest transition duration-200 rounded shadow-md md:mb-0 bg-amber-400 hover:bg-gray-300 mt-4">
                                    SEND MESSAGE
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default QueryFormClient;
