import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BookNowModal from '../../BookNowModal/BookNowModal';
import ProductsCard from '../ProductsCard/ProductsCard';

const Products = () => {
    const products = useLoaderData();
    // const [booking, setBooking] = useState(true);
    const [productBooking, setProductBooking] = useState(null);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center md:mx-64 my-14'>
            {products.length &&
                products?.map(product => <ProductsCard
                    key={product._id}
                    product={product}
                    setProductBooking={setProductBooking}
                ></ProductsCard>)
            }

            {
                productBooking &&
                <BookNowModal
                    productBooking={productBooking}
                    setProductBooking={setProductBooking}
                ></BookNowModal>

            }
            {/* {products.length &&
                products?.map(product => <ProductsCard
                    key={product._id}
                    product={product}
                    setProductBooking={product}
                ></ProductsCard>)
            } */}
            {/* {
                 booking !== null &&
                <BookNowModal
                    productBooking={productBooking}
                    setProductBooking={setProductBooking}
                ></BookNowModal>
            } */}



            {/* {


                products.length &&
                products?.map(product =>
                    <BookNowModal
                        product={product}
                        setProductBooking={setP{roBooking}
                    ></BookNowModal>
                )
            } */}


        </div>



    );
};

export default Products;