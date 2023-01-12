import React from 'react';
import PageTittle from '../../PageTittle/PageTittle';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <PageTittle title={'Home'}></PageTittle>
            <Works></Works>
        </div>
    );
};

export default Home;