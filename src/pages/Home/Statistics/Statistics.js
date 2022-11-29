import React from 'react';

const Statistics = () => {
    return (
        <div className='bg-neutral-500s p-32'>
            <div className='flex justify-center gap-32'>
                <div className='flex flex-col justify-center'>
                    <h3 className='text-2xl font-bold'>Products</h3>
                    <p className='text-white text-xl font-bold'>1500+</p>
                </div>
                <div className=' flex flex-col justify-center'>
                    <h3 className='text-2xl font-bold'>Seller</h3>
                    <p className='text-white text-xl font-bold'>1500+</p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>Buyer</h3>
                    <p className='text-white text-xl font-bold'>1550000+</p>
                </div>
            </div>
        </div >
    );
};

export default Statistics;