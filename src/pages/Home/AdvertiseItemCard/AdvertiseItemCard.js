import React from 'react';
import Advertisement from '../Home/Advertisement/Advertisement';

const AdvertiseItemCard = (advertise) => {
    console.log(advertise.advertise);
    const { img, productName, description, resalePrice } = advertise.advertise;
    return (
        <div className='p-8'>
            <div className="card card-compact w-96 text-white shadow-xl  glass">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>TK: {resalePrice}</p>
                    <p>{description}</p>

                </div>
            </div>
        </div>
    );
};

export default AdvertiseItemCard;