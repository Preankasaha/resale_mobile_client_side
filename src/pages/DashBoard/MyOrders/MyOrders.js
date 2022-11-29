import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('resaleMobileToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className="text-5xl text-white text-center my-8 uppercase">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full text-white">
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-xl'>Image</th>
                            <th className='text-xl'>Title</th>
                            <th className='text-xl'>Price</th>
                            <th className='text-xl'>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.img}</td>
                                <td>{booking.productName}</td>
                                <td>{booking.resalePrice}</td>

                                <td>


                                    <button
                                        className='btn btn-sm'
                                    >Pay</button>


                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;