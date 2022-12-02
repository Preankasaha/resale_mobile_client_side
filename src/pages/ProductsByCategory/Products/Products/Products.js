import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BookNowModal from '../../BookNowModal/BookNowModal';
import ProductsCard from '../ProductsCard/ProductsCard';

const Products = () => {
    const products = useLoaderData();

    const [productBooking, setProductBooking] = useState(null);



    // fetch(`http://localhost:5000/verifyseller/products/:id`)

    //product card
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center md: mx-0 md:mx-64 my-14 gap-8'>
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



        </div>



    );
};

export default Products;