import React from 'react';
import { NavLink } from 'react-router-dom';
const style = {
    backgroundImage: "url('images/bg_1.jpg')"
}
const Banner = () => {
    return (
        <div className="hero-wrap hero-bread" style={style}>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                        <p className="breadcrumbs"><span className="mr-2"><NavLink to="/">Home</NavLink></span> <span>Products</span></p>
                        <h1 className="mb-0 bread">Products</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;