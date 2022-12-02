import React from 'react';

const Statistics = () => {
    return (
        <div className='bg-neutral-500s lg:p-32'>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-center lg:gap-32 md:mx-44'>
                <div className='flex flex-col justify-center gap-4'>
                    <h3 className='text-2xl font-bold uppercase'>Products</h3>
                    <p className='text-white text-xl font-bold'>15500+</p>
                </div>
                <div className='flex flex-col justify-center gap-4'>
                    <h3 className='text-2xl font-bold uppercase'>Sellers</h3>
                    <p className='text-white text-xl font-bold'>555000+</p>
                </div>
                <div className='flex flex-col justify-center gap-4'>
                    <h3 className='text-2xl font-bold uppercase'>Buyers</h3>
                    <p className='text-white text-xl font-bold'>1550000+</p>
                </div>
            </div>
        </div >
    );
};

export default Statistics;