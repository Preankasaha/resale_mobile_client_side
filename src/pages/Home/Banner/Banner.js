import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1607270788732-55d2cdb8f52a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl uppercase font-bold">SELL YOUR SMARTPHONE HERE</h1>
                    <p className="text-3xl text-white font-bold  text-center uppercase my-4">Make quick cash at your door step</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;