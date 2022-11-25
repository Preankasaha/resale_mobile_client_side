import React, { useEffect, useState } from 'react';


import CategoryCard from '../CategoryCard/CategoryCard';



const Categories = () => {

    const [categories, setCategories] = useState([]);



    useEffect(() => {

        fetch('http://localhost:5000/products-category')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])


    console.log(categories);
    return (

        <div>
            <h3>{categories.length}</h3>

            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
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
