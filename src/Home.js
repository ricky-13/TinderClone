import React, {useEffect, useState} from 'react';
import Header from './Header';
import TinderCard from 'react-tinder-card';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <TinderCards />
            {/* <SwipeButtons /> */}
        </div>
    )
}

export default Home;