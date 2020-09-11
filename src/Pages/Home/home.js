import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Banner from '../../components/banner';
import Sub from '../../components/subcribe';
const Home = () => {
    return (
        <div className="goto-here">
            <Header />
            <Navbar />
            <Banner />
            <Footer />
        </div>
    )
}
export default Home;