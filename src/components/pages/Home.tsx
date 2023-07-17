import "../App/App.css";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import React from 'react';

const Home = () => {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;