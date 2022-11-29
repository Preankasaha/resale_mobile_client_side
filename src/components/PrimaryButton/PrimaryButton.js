import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className='btn btn-primary bg-gradient-to-r from from-emerald-500 to-sky-500'>{children}</button>
        </div>
    );
};

export default PrimaryButton;