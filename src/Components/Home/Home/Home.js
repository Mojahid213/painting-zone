import React from 'react';
import Contact from '../Contact/Contact';
import Footers from '../Footers/Footers';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Progress from '../Progress/Progress';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Services></Services>
            <Progress></Progress>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footers></Footers>
        </div>
    );
};

export default Home;