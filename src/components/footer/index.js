import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="ftco-footer ftco-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Vegefoods</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                <li className="ftco-animate"><NavLink to="#"><span className="icon-twitter"></span></NavLink></li>
                                <li className="ftco-animate"><NavLink to="#"><span className="icon-facebook"></span></NavLink></li>
                                <li className="ftco-animate"><NavLink to="#"><span className="icon-instagram"></span></NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4 ml-md-5">
                            <h2 className="ftco-heading-2">Menu</h2>
                            <ul className="list-unstyled">
                                <li><NavLink to="#" className="py-2 d-block">Shop</NavLink></li>
                                <li><NavLink to="#" className="py-2 d-block">About</NavLink></li>
                                <li><NavLink to="#" className="py-2 d-block">Journal</NavLink></li>
                                <li><NavLink to="/group-profile" className="py-2 d-block">Contact Us</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Help</h2>
                            <div className="d-flex">
                                <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                                    <li><NavLink to="#" className="py-2 d-block">Shipping Information</NavLink></li>
                                    <li><NavLink to="#" className="py-2 d-block">Returns &amp; Exchange</NavLink></li>
                                    <li><NavLink to="#" className="py-2 d-block">Terms &amp; Conditions</NavLink></li>
                                    <li><NavLink to="#" className="py-2 d-block">Privacy Policy</NavLink></li>
                                </ul>
                                <ul className="list-unstyled">
                                    <li><NavLink to="#" className="py-2 d-block">FAQs</NavLink></li>
                                    <li><NavLink to="#" className="py-2 d-block">Contact</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Have a Questions?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                                    <li><NavLink to="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></NavLink></li>
                                    <li><NavLink to="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" rel="noopener">Colorlib</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;