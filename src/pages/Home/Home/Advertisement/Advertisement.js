import { useQuery } from '@tanstack/react-query';
import React from 'react';
// import { useLoaderData } from 'react-router-dom';
import AdvertiseItemCard from '../../AdvertiseItemCard/AdvertiseItemCard';

const Advertisement = () => {
    // const advertises = useLoaderData();

    //advertise get api

    const { data: advertises = [] } = useQuery({
        queryKey: ['advertises'],
        queryFn: async () => {
            const res = await fetch('https://resale-mobile.web.app/advertises',
                {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('resaleMobileToken')}`
                    }
                });
            const data = await res.json();
            return data;
        }
    });
    console.log(advertises.length);
    return (
        <div className='bg-gradient-to-r from from-emerald-500 to-sky-500 text-black md:p-14'>

            <h3 className='text-5xl font-bold text-center uppercase'>Advertisement</h3>
            <p className='text-2xl text-center my-4'>Advertise Your Product Here</p>
            <p className='text-2xl text-center my-2'>Total Advertisement: {advertises.length}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {advertises?.length &&
                    advertises?.map(advertise => <AdvertiseItemCard
                        key={advertise._id}
                        advertise={advertise}
                    ></AdvertiseItemCard>)
                }
            </div>

        </div>
    );
};

export default Advertisement;