import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Login = () => {
    return (
        <div>
            <div className='hero-section'>
                <div className='hero-content'>
                    <img src={"img/Quiz.jpg"} alt="img not found" />
                </div>
                <div className='header-content text-center Container'>
                    <div className='bg-overlay-gray-darkest'>
                        <div className='container section-98'>
                            <div className='row justify-content-sm-center align-items-lg-center'>
                                <div className='py-lg-5 text-center'>
                                    <h1 className='text-white fw-bold lead display-2'>Login or Register</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                            <li className="breadcrumb-item active text-light" aria-current="page">Login or Registration</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sign_in m-auto mt-5 px-3 px-lg-4 py-4 py-lg-5 container">
                <div className="mx-auto" style={{ maxWidth: '500px' }}>
                    <h3 className="display-6 text-center fw-bold mb-4">Sign In</h3>

                    {/* Tabs for Login and SignUp */}
                    <div className="tab-class text-center" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex justify-content-center mb-4">
                            <li className="nav-item">
                                <a className="nav-link active text-decoration-none" data-bs-toggle="pill" href="#tab-1">
                                    <span className="lead fs-5">Sign Up</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-decoration-none" data-bs-toggle="pill" href="#tab-2">
                                    <span className="lead fs-5">Login</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <form className="tab-content">
                        {/* Login Form */}
                        <div id="tab-1" className="tab-pane fade show active p-0">
                            <div className="mb-3">
                                <label className="form-label">Name:</label>
                                <input type="text" className="form-control" required />
                                <div className="invalid-feedback">The name field is required.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email:</label>
                                <input type="email" name="email" className="form-control" placeholder="Enter your email" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password:</label>
                                <input type="password" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm Password:</label>
                                <input type="password" className="form-control" required />
                            </div>
                            <div className="py-3">
                                <button type="submit" className="btn btn-primary w-100 rounded-pill">
                                    <span className="lead fs-5">Sign In</span>
                                </button>
                            </div>
                        </div>

                        {/* SignUp Form */}
                        <div id="tab-2" className="tab-pane fade p-0">
                            <div className="mb-3">
                                <label className="form-label">Username or Email:</label>
                                <input type="email" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password:</label>
                                <input type="password" className="form-control" required />
                            </div>
                            <div className="py-3">
                                <button type="submit" className="btn btn-primary w-100">
                                    <span className="lead fs-5">Sign Up</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Login