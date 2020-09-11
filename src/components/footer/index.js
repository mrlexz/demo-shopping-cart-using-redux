import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="ftco-footer ftco-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Beer Club</h2>
                            <div className="block-23 mb-3" style={{ marginTop: '30px' }}>
                                <ul>
                                    <li><span className="text">Where there is a will, there is a way</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Member</h2>
                            <div className="d-flex">
                                <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                                    <li><NavLink to="#" className="py-2 d-block">Dat Vu</NavLink></li>
                                    <li><NavLink to="#" className="py-2 d-block">Van Qui</NavLink></li>
                                    <li><NavLink to="#" className="py-2 d-block">Trung Hau</NavLink></li>
                                </ul>
                                <ul className="list-unstyled">
                                    <li><NavLink to="#" className="py-2 d-block">Thuy Ngoc</NavLink></li>
                                    <li><NavLink to="#" className="py-2 d-block">Quang Thanh</NavLink></li>
                                    <li><NavLink to="#" className="py-2 d-block">Thanh Nhu</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Contact us</h2>
                            <div className="block-23 mb-3" style={{ marginTop: '30px' }}>
                                <ul>
                                    <li><NavLink to="#"><span className="icon icon-map-marker"></span><span className="text">Thu Duc district, Ho Chi Minh city, Viet Nam</span></NavLink></li>
                                    <li><NavLink to="#"><span className="icon icon-phone"></span><span className="text">0999999999</span></NavLink></li>
                                    <li><NavLink to="#"><span className="icon icon-envelope"></span><span className="text">beerclub@gmail.com</span></NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;