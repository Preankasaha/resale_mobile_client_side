import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from '../ProductsCard/ProductsCard';

const Products = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <h3>{products.length}</h3>
            {
                products.map(product => <ProductsCard
                    key={product._id}
                    product={product}
                ></ProductsCard>)
            }
        </div>
    );
};

export default Products;