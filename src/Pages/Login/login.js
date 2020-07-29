import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import LoginFrom from '../../components/loginForm';
const Login = () => {
    return (
        <div className="goto-here">
            <Header />
            <Navbar />
            <LoginFrom />
            <Footer />
        </div>
    )
}

export default Login;