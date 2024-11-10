import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <header>
                <nav className={`navbar navbar-expand-lg py-3 ${scrolled ? 'scrolled' : ''}`}>
                    <div className="container px-4">
                        <a className="navbar-brand text-light lead display-5 fs-2 fw-bold" href="#">INTENSE</a>

                        <button
                            className="navbar-toggler bg-body-secondary"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <Link className="nav-link active text-light fw-semibold fs-6 mx-lg-3" to={'/'}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/jobs'} className="nav-link text-light fw-semibold fs-6 mx-lg-3">Find a job</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/jobspost" className="nav-link text-light fw-semibold fs-6 mx-lg-3">Post a job</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link text-light fw-semibold fs-6 mx-lg-3"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Pages
                                    </Link>
                                    <ul className="dropdown-menu bg-subtle">
                                        <li><Link className="dropdown-item" to={'/AboutUs'}>About Us</Link></li>
                                        <li><Link className="dropdown-item" to={"/carrer-starts-here"}>Your Career Starts Here</Link></li>
                                        <li><Link className="dropdown-item" to={"/ResumePage"}>Resume Page</Link></li>
                                        <li><Link className="dropdown-item" to={"/Project Manager"}>Project Manager</Link></li>
                                        <li><Link className="dropdown-item" to={"/Our-FAQ-page"}>FAQ</Link></li>
                                        <li><Link className="dropdown-item" to={"/Contact-us-page"}>Contact Us</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/Blogpost'} className="nav-link text-light fw-semibold fs-6 mx-lg-3">Blog</Link>
                                </li>
                            </ul>

                            <div className="d-lg-flex">
                                <Link className="nav-link text-light fw-semibold fs-6 text-white link-underline-info mx-lg-3 mb-3" to={'/Loginpage'}>Login</Link>
                                <span className='text-light fw-semibold fs-6 d-none d-lg-inline'>or</span>
                                <Link className="nav-link text-light fw-semibold fs-6 text-white link-underline-info mx-lg-3" to={'/register-login'}>Register</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                

            </header>






        </>
    )
}

export default Navbar