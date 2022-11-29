import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const AllSellers = () => {
    // const { user } = useContext(AuthContext)
    const { data: allsellers = [] } = useQuery({
        queryKey: ['allsellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allsellers',);
            const data = await res.json();
            return data;
        }
    });


    return (
        <div>
            <div>
                <h2 className="text-3xl uppercase text-center my-8">All Sellers</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th className=' text-xl'>Name</th>
                                <th className=' text-xl'>Email</th>
                                <th className=' text-xl'>Verify Seller</th>
                                <th className=' text-xl'>Delete</th>



                            </tr>
                        </thead>
                        <tbody>
                            {
                                allsellers.map((seller, i) => <tr key={seller._id}>
                                    <th>{i + 1}</th>
                                    <td className='text-xl text-white'>{seller.name}</td>
                                    <td className='text-xl text-white'>{seller.email}</td>
                                    <td><button className='btn btn-xs btn-success'>Verify Seller</button></td>
                                    <td><button className='btn btn-xs btn-danger'>Delete</button></td>

                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default AllSellers;