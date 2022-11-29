import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories/Categories';
import Statistics from './Statistics/Statistics';

import Advertisement from './Advertisement/Advertisement';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertisement></Advertisement>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;