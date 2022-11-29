import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: myproduct = [], refetch } = useQuery({
        queryKey: ['myproduct', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproduct?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })

    const handleAdvertise = id => {
        fetch(`http://localhost:5000/myproduct/advertise/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('resaleMobile')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('You advertised your product successfully.')
                    refetch();
                }
            })
    }
    return (
        <div>
            <h3 className="text-5xl text-white text-center my-8 uppercase">My Product</h3>
            <div className="overflow-x-auto">
                <table className="table w-full text-white">
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-xl'>Image</th>
                            <th className='text-xl'>Title</th>
                            <th className='text-xl'>Price</th>
                            <th className='text-xl'>Delete</th>
                            <th className='text-xl'>Addvertise Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            myproduct?.map((myproducjt, i) => <tr key={myproducjt._id}>
                                <th>{i + 1}</th>
                                <td><img className='w-1/5 rounded' src={myproducjt.img} alt="" /></td>
                                <td>{myproducjt.productName}</td>
                                <td>{myproducjt.resalePrice}</td>
                                <td>{
                                    <button className='btn btn-sm btn-error'>Delete</button>
                                }</td>
                                <td>
                                    <button onClick={() => handleAdvertise(myproducjt._id)}
                                        className='btn btn-sm btn-success'
                                    >Addvertise</button>
                                </td>

                                <td>

                                    {
                                        user?.role === 'Seller' &&

                                        <button onClick={() => handleAdvertise(myproducjt._id)}
                                            className='btn btn-sm btn-success'
                                        >Addvertise</button>

                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;