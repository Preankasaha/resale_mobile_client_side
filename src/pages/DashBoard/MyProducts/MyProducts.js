import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../../components/Spinner/Spinner';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MyProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const { user } = useContext(AuthContext);

    const closeModal = () => {
        setDeletingProduct(null);
    }
    const { data: myproduct = [], refetch, isLoading } = useQuery({
        queryKey: ['myproduct', user?.email],
        queryFn: async () => {
            const res = await fetch(` https://resale-mobile-server.vercel.app/myproduct?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })

    //advertise button
    const handleAdvertise = id => {
        console.log(id);
        fetch(`https://resale-mobile.web.app/myproduct/advertise/${id}`, {
            method: 'PUT',
            // headers: {
            //     "content-type": "application/json",
            //     authorization: `bearer ${localStorage.getItem('resaleMobileToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('You advertised your product successfully.')
                    refetch();
                }
            })
    }




    //dlete product button
    const handleDeleteProduct = myproduct => {
        console.log(myproduct);
        fetch(` https://resale-mobile-server.vercel.app/myproduct/${myproduct}`, {
            method: 'DELETE',

        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success("You have deleteted the product successfully")

                }
            })
    }
    //loader
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className=''>
            <h3 className="text-5xl text-white text-center my-8 uppercase">My Product</h3>

            <div className="overflow-x-auto sm:w-96 md:w-full">
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
                                <td>${myproducjt.productName}</td>
                                <td>${myproducjt.resalePrice}</td>
                                <td>{
                                    <button onClick={() => handleDeleteProduct(myproducjt._id)} className='btn btn-sm btn-error'>Delete</button>
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
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure you want to delete the product?`}
                    message={`If you delete, It cannot be undone.`}
                    successAction={handleDeleteProduct}
                    successButtonName="Delete"
                    modalData={deletingProduct}
                    closeModal={closeModal}

                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;