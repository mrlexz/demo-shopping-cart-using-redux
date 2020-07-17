import React from 'react';
import { NavLink } from 'react-router-dom';
const style = {
    backgroundImage: "url('images/img_bg_1.jpg')"
}
const Banner = () => {
    return (
        <div className="hero-wrap hero-bread" style={style}>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                        {/* <h1 className="mb-0 bread">BEER</h1> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;