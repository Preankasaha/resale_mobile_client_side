import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DahsBoardLayout/DashBoardLayout';
import Main from '../../Layout/Main';
import { categoryeDataLoader } from '../../Loader/CategoryDataLoader';
import Blog from '../../pages/Blog/Blog';
import AddProduct from '../../pages/DashBoard/AddProduct/AddProduct';
import AllBuyers from '../../pages/DashBoard/AllBuyers/AllBuyers';
import AllSellers from '../../pages/DashBoard/AllSellers/AllSellers';
import DashBoard from '../../pages/DashBoard/DashBoard/DashBoard';



import MyOrders from '../../pages/DashBoard/MyOrders/MyOrders';
import MyProducts from '../../pages/DashBoard/MyProducts/MyProducts';
import Categories from '../../pages/Home/Categories/Categories/Categories';


import Home from '../../pages/Home/Home/Home';
import Products from '../../pages/ProductsByCategory/Products/Products/Products';
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
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <PrivateRouter><Products></Products></PrivateRouter>
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
                        path: '/dashboard',
                        element: <DashBoard></DashBoard>
                    },
                    {
                        path: '/dashboard/allsellers',
                        element: <AllSellers></AllSellers>

                    },
                    {
                        path: '/dashboard/allbuyers',
                        element: <AllBuyers></AllBuyers>

                    },
                    {

                        path: '/dashboard/addproduct',
                        element: <AddProduct></AddProduct>
                    },
                    {
                        path: '/dashboard/myorders',
                        element: <MyOrders></MyOrders>

                    },
                    {
                        path: '/dashboard/myproduct',
                        element: <MyProducts></MyProducts>

                    }

                ]
            }

        ]
    }
])



export default router;