import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="ftco-footer ftco-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Beer club</h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Member</h2>
                            <div className="d-flex">
                                <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                                    <li><NavLink to="#" className="py-2 d-block">Dat Vu</NavLink></li>
                                    <li><NavLink to="#" className="py-2 d-block">Van Quy</NavLink></li>
                                    <li><NavLink to="#" className="py-2 d-block">Trung Hau</NavLink></li>
                                    <li><NavLink to="#" className="py-2 d-block">Thanh Nhu</NavLink></li>
                                </ul>
                                <ul className="list-unstyled">
                                    <li><NavLink to="#" className="py-2 d-block">Thuy Ngoc</NavLink></li>
                                    <li><NavLink to="#" className="py-2 d-block">Quang</NavLink></li>
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