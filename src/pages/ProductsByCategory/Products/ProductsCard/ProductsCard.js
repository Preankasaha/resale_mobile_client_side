import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';


const ProductsCard = ({ product, setProductBooking }) => {
    console.log(product);
    // const { img, productName, categoryId, categoryName, originalPrice, resalePrice, yearsOfUse, sellerName, location } = product;
    const { user } = useContext(AuthContext);

    return (
        // <div className='text-white bg-gradient-to-r from-sky-900 to-cyan-500'>
        //     <div className="hero glass mb-8">
        //         <div className="hero-content flex-col lg:flex-row">
        //             <img src={product?.img} className="max-w-sm rounded-lg shadow-2xl" />
        //             <div>
        //                 <h1 className="text-5xl font-bold mb-1">Product Name: {product?.productName}</h1>


        <div className="card w-96 text-white shadow-xl bg-gradient-to-r from from-emerald-500 to-sky-500 glass">
            <figure><img src={product?.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Product Name: {product?.productName}</h2>
                <p className="text-3xl font-bold my-2">Brand: {product?.categoryId}</p>
                <p className="text-2xl my-2">Original Price: {product?.originalPrice}</p>
                <p className="text-2xl my-2">Resale Price: {product?.resalePrice}</p>
                <p className="text-2xl my-2">Years of Use: {product?.yearsOfUse}</p>
                <p className="text-2xl my-2">Saller Name: {product?.sellerName}</p>
                <p className="text-2xl my-2">Location: {product?.location}</p>
                <p className="text-2xl my-2">Description: {product?.description}</p>
                <div className="card-actions justify-center">
                    <label onClick={() => setProductBooking(product)}
                        htmlFor="booking-modal"
                        className=" btn bg-gradient-to-r from from-emerald-500 to-sky-500 text-white my-2"

                    >Book Now</label>


                </div>
            </div>
        </div>



        //     {/* </div>

        //         </div>
        //     </div>
        // </div> */}
    );
};

export default ProductsCard;