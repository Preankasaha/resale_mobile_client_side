import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hook/useAdmin/useAdmin';
import useSeller from '../../hook/useSeller/useSeller';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user.email);
    const [isSeller] = useSeller(user.email)
    console.log(user);
    //dashboard drwer
    return (
        <div>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        {isAdmin && !isSeller &&
                            <>
                                <li><NavLink to="/dashboard/allbuyers" className='text-xl text-white font-bold uppercase'>All Buyers</NavLink></li>
                                <li><NavLink to="/dashboard/allsellers" className='text-xl text-white font-bold uppercase'>All Sellers</NavLink></li>
                                <li><NavLink to="/dashboard/reporteds" className='text-xl text-white font-bold uppercase'> Reported Items</NavLink></li></>

                        }
                        {
                            isSeller && !isAdmin &&
                            <>
                                <li><NavLink to="/dashboard/addproduct" className='text-xl text-white font-bold uppercase'>Add Product</NavLink></li>
                                <li><NavLink to="/dashboard/myproduct" className='text-xl text-white font-bold uppercase'>My Products</NavLink></li>
                            </>


                        }
                        {

                            !isAdmin && !isSeller &&

                            <>
                                <li><NavLink to="/dashboard/myorders" className='text-xl text-white font-bold uppercase'>My Orders</NavLink></li>
                            </>

                        }

                        {

                        }



                    </ul>

                </div>
            </div>
        </div >
    );
};

export default DashboardLayout;