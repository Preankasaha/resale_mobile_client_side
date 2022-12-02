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
import Payment from '../../pages/DashBoard/Payment/Payment';
import Reported from '../../pages/DashBoard/Reported/Reported';
import Categories from '../../pages/Home/Categories/Categories/Categories';
import Advertisement from '../../pages/Home/Home/Advertisement/Advertisement';


import Home from '../../pages/Home/Home/Home';
import Products from '../../pages/ProductsByCategory/Products/Products/Products';
import DisplayError from '../../pages/Shared/DisplayError/DisplayError';
import SignIn from '../../pages/SignIn/SignIn';
import SignUp from '../../pages/SignUp/SignUp';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRouter from '../PrivateRoute/PrivateRoute';
import SellerRoute from '../SellerRoute/SellerRoute';


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
                loader: ({ params }) => fetch(` https://resale-mobile-server.vercel.app/category/${params.id}`),
                element: <PrivateRouter><Products></Products></PrivateRouter>
            },
            {
                path: '/advertises',
                element: <Advertisement></Advertisement>
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
                errorElement: <DisplayError></DisplayError>,
                children: [
                    {
                        path: '/dashboard',
                        element: <DashBoard></DashBoard>
                    },
                    {
                        path: '/dashboard/allsellers',
                        element: <AdminRoute>
                            <AllSellers></AllSellers>
                        </AdminRoute>
                        // element: <AllSellers></AllSellers>
                    },
                    {
                        path: '/dashboard/allbuyers',
                        element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>

                    },
                    {

                        path: '/dashboard/addproduct',
                        element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
                        // element: <AddProduct></AddProduct>

                    },
                    {
                        path: '/dashboard/myorders',
                        element: <MyOrders></MyOrders>

                    },
                    {
                        path: '/dashboard/myproduct',
                        element: <SellerRoute>
                            <MyProducts></MyProducts>
                        </SellerRoute>
                        // element: <MyProducts></MyProducts>

                    },
                    {
                        path: '/dashboard/reporteds',
                        element: <Reported></Reported>
                    },
                    {
                        path: '/dashboard/payment/:id',
                        element: <Payment></Payment>,
                        loader: ({ params }) => fetch(`https://resale-mobile.web.app/bookings/${params.id}`)
                    }
                ]
            }

        ]
    }
])



export default router;