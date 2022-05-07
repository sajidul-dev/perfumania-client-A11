import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import ItemsSummary from '../ItemsSummary/ItemsSummary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <ItemsSummary></ItemsSummary>
        </div>
    );
};

export default Home;