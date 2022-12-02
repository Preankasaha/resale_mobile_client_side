import React, { useEffect, useState } from 'react';


import CategoryCard from '../CategoryCard/CategoryCard';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetch(' https://resale-mobile-server.vercel.app/products-category')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])


    // console.log(categories);
    return (

        <div className='bg-neutral-500 md:p-14'>
            <h3 className='text-4xl text-white font-bold text-center uppercase sm:py-4'>Product category</h3>
            <p className='text-2xl text-white text-center uppercase my-4'> Go To Category to watch Products</p>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {categories.length &&
                    categories?.map(category =>
                        <CategoryCard
                            key={category._id}
                            category={category}
                        ></CategoryCard>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;
