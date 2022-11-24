import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import SignUP from '../../pages/SignUp&LogIn/SignUp/SignUP';
import Home from '../../pages/Home/Home/Home';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categroy/:id',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUP></SignUP>
            },

        ]
    }
])



export default router;