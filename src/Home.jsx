import React from 'react';
import { Outlet } from 'react-router-dom';
import Counter from './Counter';

const Home = () => {
    return (
        <div>
            <Counter></Counter>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;