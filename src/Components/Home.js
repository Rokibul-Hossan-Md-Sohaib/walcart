import React from 'react';
import MainFeatures from './MainFeatures/MaiFeatures';
import Navs from './Navs/Navs';
import Navs2 from './Navs/Navs2';
import Topbar from './Topbar/Topbar';

const Home = () => {
    return (
        <div>
            <Topbar/>
            <Navs/>
            <Navs2/>
            <MainFeatures/>
            
        </div>
    );
};

export default Home;