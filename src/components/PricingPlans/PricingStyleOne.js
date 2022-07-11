import React from 'react';
import { Link } from "gatsby";

// Shape Images
import Shape1 from "../../assets/images/shape2.svg";
import Shape2 from "../../assets/images/shape2.svg";
import Shape3 from "../../assets/images/shape4.svg";
import Shape4 from "../../assets/images/shape4.svg";

const PricingStyleOne = () => {
    return (
        <div className="pricing-area pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Website Plans</h2>
                    <div className="bar"></div>
                    <p>All prices below are One-Time development fees. Web hosting is included & managed by us for £6/Month (or £60/Year).</p>
                    <p></p>
                    <p>The prices below do not include any monthly/yearly costs from features clients may want added during the development process.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-table">
                            <div className="pricing-header">
                                <h3>Landing Page</h3>
                                <p>Perfect for service-based businesses or informational websites.</p>
                            </div>

                            <div className="content">
                                <div className="price">
                                    <span><sup>$</sup>15.00 <span>/Month</span></span>
                                    <span><sup>£</sup>4</span>/Month
                                </div>
                                
                                <div className="pricing-features">
                                    <ul>
                                        <li className="active">5 GB Bandwidth</li>
                                        <li className="active">Highest Speed</li>
                                        <li className="active">1 GB Storage</li>
                                        <li className="active">Unlimited Website</li>
                                        <li className="active">Unlimited Users</li>
                                        <li className="active">24x7 Great Support</li>
                                        <li>Data Security and Backups</li>
                                        <li>Monthly Reports and Analytics</li>
                                    </ul>
                                </div>
                                
                                <div className="pricing-footer">
                                    <Link to="/login" className="btn btn-primary">
                                        Select Plan
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-table active-plan">
                            <div className="pricing-header">
                                <h3>E-Commerce</h3>
                                <p>Perfect for any business that sells products online.</p>
                            </div>
                            
                            <div className="content">
                                <div className="price">
                                    <span><sup>$</sup>35.00 <span>/Mon</span></span>
                                </div>
                                
                                <div className="pricing-features">
                                    <ul>
                                        <li className="active">10 GB Bandwidth</li>
                                        <li className="active">Highest Speed</li>
                                        <li className="active">3 GB Storage</li>
                                        <li className="active">Unlimited Website</li>
                                        <li className="active">Unlimited Users</li>
                                        <li className="active">24x7 Great Support</li>
                                        <li className="active">Data Security and Backups</li>
                                        <li>Monthly Reports and Analytics</li>
                                    </ul>
                                </div>
                                
                                <div className="pricing-footer">
                                    <Link to="/login" className="btn btn-primary">
                                        Select Plan
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-table">
                            <div className="pricing-header">
                                <h3>Custom Websites</h3>
                                <p>For any sites that doesn't fall into the <strong>Landing Page</strong> or <strong>E-Commerce</strong> categories.</p>
                            </div>
                            
                            <div className="content">
                                <div className="price">
                                    <span><sup>$</sup>65.00 <span>/Mon</span></span>
                                </div>
                                
                                <div className="pricing-features">
                                    <ul>
                                        <li className="active">15 GB Bandwidth</li>
                                        <li className="active">Highest Speed</li>
                                        <li className="active">5 GB Storage</li>
                                        <li className="active">Unlimited Website</li>
                                        <li className="active">Unlimited Users</li>
                                        <li className="active">24x7 Great Support</li>
                                        <li className="active">Data Security and Backups</li>
                                        <li className="active">Monthly Reports and Analytics</li>
                                    </ul>
                                </div>
                                
                                <div className="pricing-footer">
                                    <Link to="/login" className="btn btn-primary">
                                        Select Plan
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape8 rotateme">
                <img src={Shape1} alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape7">
                <img src={Shape3} alt="shape" />
            </div>
            <div className="shape4">
                <img src={Shape4} alt="shape" />
            </div>
        </div>
    );
    
}

export default PricingStyleOne;
