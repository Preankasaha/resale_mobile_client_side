import React from 'react';
import { BallTriangle } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <div className='flex justify-center'>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#2766c4"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    );
};

export default Spinner;
