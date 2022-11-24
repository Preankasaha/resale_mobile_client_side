import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import DashBoard from '../../pages/DashBoard/DashBoard';
import Home from '../../pages/Home/Home/Home';
import SignIn from '../../pages/SignIn/SignIn';
import SignUp from '../../pages/SignUp/SignUp';
import PrivateRouter from '../PrivateRoute/PrivateRoute';




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
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/dashboard',
                element: <PrivateRouter><DashBoard></DashBoard></PrivateRouter>
            }

        ]
    }
])



export default router;