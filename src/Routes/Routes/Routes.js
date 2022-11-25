import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DahsBoardLayout/DashBoardLayout';
import Main from '../../Layout/Main';
import { categoryeDataLoader } from '../../Loader/CategoryDataLoader';
import Blog from '../../pages/Blog/Blog';
import AddProduct from '../../pages/DashBoard/AddProduct/AddProduct';


import DashBoard from '../../pages/DashBoard/DashBoard/DashBoard';
import Categories from '../../pages/Home/Categories/Categories/Categories';


import Home from '../../pages/Home/Home/Home';
import Products from '../../pages/Home/Products/Products/Products';
import DisplayError from '../../pages/Shared/DisplayError/DisplayError';
import SignIn from '../../pages/SignIn/SignIn';
import SignUp from '../../pages/SignUp/SignUp';
import PrivateRouter from '../PrivateRoute/PrivateRoute';




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/products-category',
                element: <Categories></Categories>
            },

            {
                path: '/categroy/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Products></Products>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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
                element: <PrivateRouter> <DashboardLayout></DashboardLayout></PrivateRouter>,
                children: [
                    {
                        path: '/dashboard/addproduct',
                        element: <AddProduct></AddProduct>
                    },
                ]
            }

        ]
    }
])



export default router;