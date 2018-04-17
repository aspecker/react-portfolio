import React from 'react';
import Hero from '../components/Hero';
import InfoText from '../components/InfoText';
import Wrapper from '../components/Wrapper';


const Home = props =>(
    <Wrapper>
            <Hero />
            <div>
            <InfoText />
            </div>
    </Wrapper>
)

export default Home;