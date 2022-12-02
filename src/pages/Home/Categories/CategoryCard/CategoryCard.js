import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { _id, catImg, categoryId, categoryName } = category;

    return (
        <Link to={`/category/${categoryId}`}>
            <div className={'card text-white sm:py-4 md:card-side shadow-xl glass'}>

                <div>

                    <div className="card-body grid grid-cols-2 h-[195px]">
                        <img className='rounded-xl w-[155px]' src={catImg} alt="" />
                        <h2 className="card-title flex justify-center text-2xl text-white uppercase">{categoryName}</h2>

                    </div>
                    {/* <div className='flex justify-center'>
                        <Link to={`/category/${_id}`} className='btn btn-sm'>Go TO</Link>
                    </div> */}

                    {/* <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={catImg} alt='' /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-white uppercase px-14">{categoryName}</h2>
                        </div>
                    </div> */}
                </div>

            </div >
        </Link>
    );
};

export default CategoryCard;
