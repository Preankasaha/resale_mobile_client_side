import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const { data: allbuyers = [], refetch } = useQuery({
        queryKey: ['allbuyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allbuyers');
            const data = await res.json();
            return data;
        }
    });
    return (

        <div>
            <h2 className="text-3xl">All Sellerss</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>


                        </tr>
                    </thead>
                    <tbody>
                        {allbuyers.map((buyer, i) => <tr key={buyer._id}>
                            <th>{i + 1}</th>
                            <td>{buyer.name}</td>
                            <td>{buyer.email}</td>
                        </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default AllBuyers;