import React from "react";
import {Link} from 'gatsby';
import * as Icon from 'react-feather';

import Logo from "../../assets/images/logo.png"

const Navbar = () => {
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("header");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0); 
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <header id="header" className="headroom">
            <div className="startp-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link to="/" onClick={toggleNavbar} className="navbar-brand">
                            <img src={Logo} alt="logo" />
                        </Link>

                        <button 
                            onClick={toggleNavbar} 
                            className={classTwo}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link to="/" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                        Home
                                    </Link>


                                </li>

                                <li className="nav-item">
                                    <Link to="/pricing" onClick={toggleNavbar} className="nav-link">
                                        Pricing
                                    </Link> 
                                </li>

                                <li className="nav-item">
                                    <Link to="/portfolio" onClick={toggleNavbar} className="nav-link">
                                        Portfolio <Icon.ChevronDown />
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to="#" activeClassName="active" onClick={e => e.preventDefault()} className="nav-link">
                                                Landing Pages <Icon.ChevronDown />
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link to="/features" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                        Features
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link to="/feature-details" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                        Features Details
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link to="#" activeClassName="active" onClick={e => e.preventDefault()} className="nav-link">
                                                E-Commerce <Icon.ChevronDown />
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link to="/services-1" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                        Shakes N' Bakes
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link to="/services-2" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                        So Habibi
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link to="/services-5" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                        Services Style 5
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link to="/service-details" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                        Services Details
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link to="#" activeClassName="active" onClick={e => e.preventDefault()} className="nav-link">
                                                Charity Work <Icon.ChevronDown />
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link to="/projects-1" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                        Friends of Rescue
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link to="/projects-2" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                        Project Style 2
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link to="/project-details" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                        Project Details
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link to="#" activeClassName="active" onClick={e => e.preventDefault()} className="nav-link">
                                                Other <Icon.ChevronDown />
                                            </Link>

                                            <ul className="dropdown-menu">

                                                <li className="nav-item">
                                                    <Link to="#" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                        Sign Up
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link to="/blog" className="nav-link">
                                        Blog
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/about" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="others-option">

                            <Link to="https://talismanwebs.hipporello.net/desk" target="_blank" className="btn btn-light">
							    Support
                            </Link>

                            <Link to="/contact" className="btn btn-primary">
							    Get Started
                            </Link>
						</div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;