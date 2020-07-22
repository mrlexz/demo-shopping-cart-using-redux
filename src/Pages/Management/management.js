import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Management from '../../components/management';
const Home = () => {
    return (
        <div className="goto-here">
            <Header />
            <Navbar />
            <Management />
            <Footer />
        </div>
    )
}
export default Home;