import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';


const ProductsCard = ({ product, setProductBooking }) => {
    console.log(product);
    // const { img, productName, categoryId, categoryName, originalPrice, resalePrice, yearsOfUse, sellerName, location } = product;
    const { user } = useContext(AuthContext);


    const handleReported = id => {
        fetch(` https://resale-mobile-server.vercel.app/products/reporteds/${id}`, {
            method: 'PUT',
        })

            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('You reported the product.')
                }
            })

    }

    return (


        <div className="card w-96 text-white shadow-xl bg-gradient-to-r from-emerald-500 to-sky-500 glass">
            <figure><img src={product?.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Product Name: {product?.productName}</h2>
                <p className="text-3xl font-bold my-2">Brand: {product?.categoryId}</p>
                <p className="text-2xl my-2">Original Price: ${product?.originalPrice}</p>
                <p className="text-2xl my-2">Resale Price: ${product?.resalePrice}</p>
                <p className="text-2xl my-2">Years of Use: {product?.yearsOfUse}</p>
                <p className="text-2xl my-2">Saller Name: {product?.sellerName}</p>
                <p className="text-2xl my-2">Location: {product?.location}</p>
                <p className="text-2xl my-2">Description: {product?.description}</p>
                <p className="text-2xl my-2">Posted on {product?.date} {product?.time}</p>
                <div className="card-actions justify-center">
                    <label onClick={() => setProductBooking(product)}
                        htmlFor="booking-modal"
                        className=" btn bg-gradient-to-r from from-emerald-500 to-sky-500 text-white my-2"

                    >Book Now</label>


                </div>

                <button onClick={() => handleReported(product._id)} className='btn btn-xs btn-error'>Report Product</button>

            </div>
        </div>



        //     {/* </div>

        //         </div>
        //     </div>
        // </div> */}
    );
};

export default ProductsCard;