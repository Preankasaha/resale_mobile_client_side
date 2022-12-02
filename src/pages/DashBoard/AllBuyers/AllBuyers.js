import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllBuyers = () => {
    const [deletingBuyer, setDeletingBuyer] = useState(null);
    const { user } = useContext(AuthContext);

    const closeModal = () => {
        setDeletingBuyer(null);
    }
    const { data: allbuyers = [], isLoaading, refetch } = useQuery({
        queryKey: ['allbuyers'],
        queryFn: async () => {
            const res = await fetch(' https://resale-mobile-server.vercel.app/allbuyers', {

                headers: {
                    authorization: `bearer ${localStorage.getItem('resaleMobileToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteBuyer = buyer => {
        fetch(` https://resale-mobile-server.vercel.app/allbuyers/${buyer._id}`, {
            method: 'DELETE',

        })

            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success("You have deleteted the buyer successfully")

                }
            })
    }
    if (isLoaading) {
        return <spinner></spinner>
    }
    return (

        <div>
            <h2 className="text-3xl uppercase py-8 text-center">All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-xl'></th>
                            <th className='text-xl'>Name</th>
                            <th className='text-xl'>Email</th>
                            <th className='text-xl'>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {allbuyers.map((buyer, i) => <tr key={buyer._id}>
                            <th>{i + 1}</th>
                            <td>{buyer.name}</td>
                            <td>{buyer.email}</td>
                            <td>
                                <label onClick={() => setDeletingBuyer(buyer)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
                            </td>
                        </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingBuyer && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete, It cannot be undone.`}
                    successAction={handleDeleteBuyer}
                    successButtonName="Delete"
                    modalData={deletingBuyer}
                    closeModal={closeModal}

                >

                </ConfirmationModal>
            }
        </div>

    );
};

export default AllBuyers;