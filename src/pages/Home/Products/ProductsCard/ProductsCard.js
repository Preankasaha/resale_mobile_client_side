import React from 'react';

const ProductsCard = ({ product }) => {
    console.log(product);
    const { productName, categoryName, originalPrice, resalePrice, yearsOfUse, sellerName, location } = product;
    return (
        <div className='text-white bg-gradient-to-r from-sky-900 to-cyan-500'>
            <div className="hero glass mb-8">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold mb-1">Product Name: {productName}</h1>
                        <p className="text-3xl font-bold my-2">Brand: {categoryName}</p>
                        <p className="text-2xl my-2">Original Price: {originalPrice}</p>
                        <p className="text-2xl my-2">Resale Price: {resalePrice}</p>
                        <p className="text-2xl my-2">Years of Use: {yearsOfUse}</p>
                        <p className="text-2xl my-2">Saller Name: {sellerName}</p>
                        <p className="text-2xl my-2">Location: {location}</p>
                        <button className="btn btn-primary">BOOk NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;