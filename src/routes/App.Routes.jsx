/* eslint-disable key-spacing */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable function-paren-newline */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable semi */

import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/pages/Home/Home';
import ContactPage from '../components/pages/Contact/ContactPage';
import Service from '../components/pages/Service/Service';
import Gallery from '../components/pages/Gallery/Gallery';
import AboutUs from '../components/pages/AboutUs/AboutUs';
import QueryFormClient from '../components/pages/QueryForm/QueryFormClient';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <ContactPage />
            },
            {
                path: '/services',
                element: <Service />
            },
            {
                path: '/gallery',
                element: <Gallery/>
            },
            {
                path: '/about',
                element: <AboutUs/>
            },
            {
                path: '/ask',
                element: <QueryFormClient/>
            }
        ]
    }
]);