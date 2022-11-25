import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { _id, categoryName } = category;
    return (
        <Link to={`/category/${_id}`}>
            <div className={'card text-white p-6 md:card-side shadow-xl glass'}>
                <div className="card-body">
                    <h2 className="card-title text-white text-center">{categoryName}</h2>

                </div>
                <Link to={`/category/${_id}`} className='btn'>Go TO</Link>
            </div>
        </Link>
    );
};

export default CategoryCard;
