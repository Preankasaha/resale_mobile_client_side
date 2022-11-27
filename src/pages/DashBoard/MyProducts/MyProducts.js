import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: myproduct = [] } = useQuery({
        queryKey: ['myproduct', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproduct?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })
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
                            <th className='text-xl'>Addvertise Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            myproduct?.map((myproduct, i) => <tr key={myproduct._id}>
                                <th>{i + 1}</th>
                                <td><img className='w-1/5 rounded' src={myproduct.img} alt="" /></td>
                                <td>{myproduct.productName}</td>
                                <td>{myproduct.resalePrice}</td>
                                <td>


                                    <button
                                        className='btn btn-sm'
                                    >Addvertise</button>


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