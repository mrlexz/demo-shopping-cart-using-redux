import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import UserProfile from '../../components/userProfile';
const Home = () => {
    return (
        <div className="goto-here">
            <Header />
            <Navbar />
            <UserProfile />
            <Footer />
        </div>
    )
}
export default Home;