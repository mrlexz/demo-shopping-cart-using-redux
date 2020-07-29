import React from 'react';
const Header = () => {
    return (
        <div className="py-1 bg-primary">
            <div className="container">
                <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                    <div className="col-lg-12 d-block">
                        <div className="row d-flex">
                            <div className="col-md pr-4 d-flex topper align-items-center">
                                <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
                                <span className="text">Ho Chi Minh city</span>
                            </div>
                            <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                                <span className="text">Where there is a will, there is a way</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;