import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Banner from '../../components/banner';
import GroupProfile from '../../components/GroupProfile';
const Home = () => {
    return (
        <div className="goto-here">
            <Navbar />
            <GroupProfile />
            <Footer />
        </div>
    )
}
export default Home;