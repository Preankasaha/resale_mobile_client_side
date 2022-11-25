import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductsCard from '../ProductsCard/ProductsCard';

const Products = () => {
    const products = useLoaderData();
    // console.log(products);

    return (
        <div>
            {products.length &&
                products?.map(product => <ProductsCard
                    key={product._id}
                    product={product}
                ></ProductsCard>)
            }
        </div>
    );
};

export default Products;