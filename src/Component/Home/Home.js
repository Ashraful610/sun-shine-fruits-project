import React from 'react';
import Banner from '../Banner/Banner';
import ExtraSectionOne from '../ExtraSectionOne/ExtraSectionOne';
import ExtraSectionTwo from '../ExtraSectionTwo/ExtraSectionTwo';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Banner />
            <ExtraSectionOne></ExtraSectionOne>
            <Items></Items>
            <ExtraSectionTwo></ExtraSectionTwo>
        </div>
    );
};

export default Home;