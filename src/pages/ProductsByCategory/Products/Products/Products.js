import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BookNowModal from '../../BookNowModal/BookNowModal';
import ProductsCard from '../ProductsCard/ProductsCard';

const Products = () => {
    const products = useLoaderData();
    const [booking, setBooking] = useState(true);

    return (
        <div>
            {products.length &&
                products?.map(product => <ProductsCard
                    key={product._id}
                    product={product}
                ></ProductsCard>)
            }
            {
                products?.map(product =>
                    booking &&

                    <BookNowModal
                        product={product}
                        setBooking={setBooking}
                    ></BookNowModal>

                )
            }
        </div>
    );
};

export default Products;