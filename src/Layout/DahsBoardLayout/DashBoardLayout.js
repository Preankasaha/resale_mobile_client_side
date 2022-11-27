import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);

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

                        {
                            <>
                                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/allSellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/addproduct" className='text-xl text-white font-bold uppercase'>Add Product</Link></li>
                                <li><Link to="/dashboard/myorders" className='text-xl text-white font-bold uppercase'>My Orders</Link></li>
                                <li><Link to="/dashboard/myporduct" className='text-xl text-white font-bold uppercase'>My Products</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;