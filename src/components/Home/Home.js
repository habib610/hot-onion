import React from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Cards></Cards>
        </div>
    );
};

export default Home;