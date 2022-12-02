import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../../components/Spinner/Spinner';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import { MdVerified } from "react-icons/md";

const AllSellers = () => {
    const [deletingSeller, setDeletingSeller] = useState(null);
    const { user } = useContext(AuthContext);

    const closeModal = () => {
        setDeletingSeller(null);
    }

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(' https://resale-mobile-server.vercel.app/sellers',);
            const data = await res.json();
            return data;
        }
    });


    const handleDelete = seller => {

        fetch(` https://resale-mobile-server.vercel.app/sellers/${seller._id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`seller deleted successfully`)

                }
            })
    }
    //verify seller
    const handleVerifySeller = id => {
        fetch(` https://resale-mobile-server.vercel.app/sellers/verify/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('You verified the seller successfully.')
                    refetch();
                }
            })
    }

    const { data: verifyseller = [] } = useQuery({
        queryKey: ['verifyseller'],
        queryFn: async () => {
            const res = await fetch(' https://resale-mobile-server.vercel.app/verifyseller')
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Spinner></Spinner>
    }
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
                                sellers?.map((seller, i) => <tr key={seller._id}>
                                    <th>{i + 1}</th>
                                    <td className='text-xl text-white'>{seller.name}</td>
                                    <td className='text-xl text-white'>{seller.email}</td>

                                    {
                                        seller?.verify === 'verify' ?
                                            // <td><button onClick={() => handleVerifySeller(seller._id)} className='btn btn-xs btn-accent'><MdVerified /></button></td>
                                            <span className='text-sky-500 mx-8'><MdVerified /></span> :
                                            <td><button onClick={() => handleVerifySeller(seller._id)} className='btn btn-xs btn-success'>Verify Seller</button></td>}
                                    {/* <td><button className='btn btn-xs btn-danger'>Delete</button></td> */}
                                    <td>
                                        <label onClick={() => setDeletingSeller(seller)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            {
                deletingSeller && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete, It cannot be undone.`}
                    successAction={handleDelete}
                    successButtonName="Delete"
                    modalData={deletingSeller}
                    closeModal={closeModal}

                >

                </ConfirmationModal>

            }
        </div >
    );
};

export default AllSellers;