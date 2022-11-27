import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { _id, id, categoryName } = category;

    return (
        <Link to={`/category/${_id}`}>
            <div className={'card text-white p-6 md:card-side shadow-xl glass'}>

                <div>
                    <div className="card-body">
                        <h2 className="card-title text-5xl text-white uppercase px-14">{categoryName}</h2>

                    </div>
                    {/* <div className='flex justify-center'>
                        <Link to={`/category/${_id}`} className='btn btn-sm'>Go TO</Link>
                    </div> */}
                </div>

            </div >
        </Link>
    );
};

export default CategoryCard;
