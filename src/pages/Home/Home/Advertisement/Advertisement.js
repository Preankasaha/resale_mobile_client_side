import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AdvertiseItemCard from '../../AdvertiseItemCard/AdvertiseItemCard';

const Advertisement = () => {
    // const advertises = useLoaderData();

    const { data: advertises = [] } = useQuery({
        queryKey: ['advertises'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertises', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });
    console.log(advertises.length);
    return (
        <div className='bg-gradient-to-r from-sky-900 to-cyan-500'>
            <h3 className='text-5xl text-white font-bold text-center uppercase'>Advertisement</h3>
            <p className='text-2xl text-white  text-center my-4'>Advertise Your Product Here</p>
            <p className='text-white text-2xl text-center my-2'>Total Advertisement: {advertises.length}</p>
            {advertises &&
                advertises?.map(advertise => <AdvertiseItemCard
                    key={advertise._id}
                    advertise={advertise}
                ></AdvertiseItemCard>)
            }
        </div>
    );
};

export default Advertisement;