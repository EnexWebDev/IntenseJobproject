import React from 'react'
import { Calendar, Calendar2, Clock, Facebook, Tag, Telephone, Twitter, Youtube, } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/footer'
import { FaGooglePlus } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'

const CarrerPage = () => {
    return (
        <div className=' carrerpage_section'>
            <div className='hero-section'>
                <div className='hero-content'>
                    <img src={"img/Quiz.jpg"} alt="img not found" />
                </div>
                <div className='header-content text-center Container'>
                    <div className='bg-overlay-gray-darkest'>
                        <div className='container section-98'>
                            <div className='row justify-content-sm-center'>
                                <div className='col-lg-12 text-center'>
                                    <h1 className=' text-white fw-semibold lead display-1'>Your Career Starts Here</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb justify-content-center">
                                            <li class="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                            <li class="breadcrumb-item active text-light" aria-current="page">Employers Page</li>
                                        </ol>
                                    </nav>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' container-fluid bg-body-secondary '>
                <div className='text-center py-lg-5'>
                    <div className='container py-lg-5'>
                        <div>
                            <img src={"img/Sticker1.png"} alt="" className='figure-img' width={60} />
                            <div className=''>
                                <img src={"img/logo (1).png"} alt="" className='figure-img' width={200} />
                            </div>
                        </div>
                        <h2 className='display-5 lead fw-semibold'></h2>
                        <p className='divider border-black'></p>
                        <p className='col-12  d-inline-block'>Take a job opportunity of a lifetime – join the team of TemplateMonster. Located in New York, this company cherishes active tech savvies willing to work on projects of any type and complexity. If you are enthusiastic about tech innovations and ready to make impactful decisions, feel free to send your CV. The company is interested in hiring professionals for a long term and also provides a remote work opportunity.</p>
                    </div>
                </div>
                <div className=' row py-lg-5'>
                    <div className='col-md-6 my-2'>
                        <a href="" className='post-vacation text-start'>
                            <h3 className=' text-dark'>Front end developer</h3>
                            <div className=' post-meta '>
                                <ul className=' list-inline list-inline-sm p'>
                                    <li className=' list-inline-item mx-lg-1'>
                                        <span className=' text-success'> <Tag /></span>
                                        <span className=' text-dark-emphasis'>New York</span>
                                    </li>
                                    <li className=' list-inline-item mx-lg-1'>
                                        <span className='text-success'><Clock /></span>
                                        <span className='text-dark-emphasis'>Full Time</span>
                                    </li>
                                    <li className=' list-inline-item mx-lg-2'>
                                        <span className=' text-success'><Calendar2 /></span>
                                        <span className=' text-dark-emphasis'>October 20, 2024</span>
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </div>
                    <div className='col-md-6 my-2'>
                        <a href="" className='post-vacation text-start'>
                            <h3 className=' text-dark'>PHP developer</h3>
                            <div className=' post-meta'>
                                <ul className=' list-inline list-inline-sm p'>
                                    <li className=' list-inline-item mx-lg-1'>
                                        <span className=' text-success'> <Tag /></span>
                                        <span className=' text-dark-emphasis'>New York</span>
                                    </li>
                                    <li className=' list-inline-item mx-lg-1 '>
                                        <span className='text-success'><Clock /></span>
                                        <span className='text-dark-emphasis'>Full Time</span>
                                    </li>
                                    <li className=' list-inline-item mx-lg-2'>
                                        <span className=' text-success'><Calendar2 /></span>
                                        <span className=' text-dark-emphasis'>October 20, 2024</span>
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </div>
                    <div className='col-md-6 my-2'>
                        <a href="" className='post-vacation text-start'>
                            <h3 className=' text-dark'>System administrator</h3>
                            <div className=' post-meta'>
                                <ul className=' list-inline list-inline-sm p'>
                                    <li className=' list-inline-item mx-lg-1 '>
                                        <span className=' text-success'> <Tag /></span>
                                        <span className=' text-dark-emphasis'>New York</span>
                                    </li>
                                    <li className=' list-inline-item mx-lg-1 '>
                                        <span className='text-success'><Clock /></span>
                                        <span className='text-dark-emphasis'>Full Time</span>
                                    </li>
                                    <li className=' list-inline-item mx-lg-2'>
                                        <span className=' text-success'><Calendar2 /></span>
                                        <span className=' text-dark-emphasis'>October 20, 2024</span>
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </div>
                    <div className='col-md-6 my-2'>
                        <a href="" className='post-vacation text-start'>
                            <h3 className=' text-dark'>Designer</h3>
                            <div className=' post-meta'>
                                <ul className=' list-inline list-inline-sm p'>
                                    <li className=' list-inline-item mx-lg-1'>
                                        <span className=' text-success'> <Tag /></span>
                                        <span className=' text-dark-emphasis'>New York</span>
                                    </li>
                                    <li className=' list-inline-item mx-lg-1'>
                                        <span className='text-success'><Clock /></span>
                                        <span className='text-dark-emphasis'>Full Time</span>
                                    </li>
                                    <li className=' list-inline-item mx-lg-2'>
                                        <span className=' text-success'><Calendar2 /></span>
                                        <span className=' text-dark-emphasis'>October 20, 2024</span>
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </div>
                    <div className='col-md-6 my-2'>
                        <a href="" className='post-vacation text-start'>
                            <h3 className=' text-dark'>Copywriter</h3>
                            <div className=' post-meta'>
                                <ul className=' list-inline list-inline-sm p'>
                                    <li className=' list-inline-item mx-lg-1'>
                                        <span className=' text-success'> <Tag /></span>
                                        <span className=' text-dark-emphasis'>New York</span>
                                    </li>
                                    <li className=' list-inline-item mx-lg-1'>
                                        <span className='text-success'><Clock /></span>
                                        <span className='text-dark-emphasis'>Full Time</span>
                                    </li>
                                    <li className=' list-inline-item mx-lg-2'>
                                        <span className=' text-success'><Calendar2 /></span>
                                        <span className=' text-dark-emphasis'>October 20, 2024</span>
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </div>
                    <div className='col-md-6 my-2'>
                        <a href="" className='post-vacation text-start'>
                            <h3 className=' text-dark'>Outreach Manager</h3>
                            <div className=' post-meta'>
                                <ul className=' list-inline list-inline-sm p'>
                                    <li className=' list-inline-item mx-lg-1'>
                                        <span className=' text-success'> <Tag /></span>
                                        <span className=' text-dark-emphasis'>New York</span>
                                    </li>
                                    <li className=' list-inline-item mx-lg-1'>
                                        <span className='text-success'><Clock /></span>
                                        <span className='text-dark-emphasis'>Full Time</span>
                                    </li>
                                    <li className=' list-inline-item mx-lg-2'>
                                        <span className=' text-success'><Calendar2 /></span>
                                        <span className=' text-dark-emphasis'>October 20, 2024</span>
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row gap-5'>
                    <div className='Contactpage py-lg-5 col-lg-8 col-12 py-5'>
                        <div className='col-lg'>
                            <h2 className='lead display-2 mx-3 mx-lg-0 text-light-emphasis'>Get In Touch</h2>
                        </div>
                        <div className=' container'>
                            <div className=''>
                                <p>You can contact us any way that is convenient for you. We are available 24/7 via fax, email or telephone. You can also use a quick contact form located on this page to ask a question about our services and current offers. We would be happy to answer your questions or offer any help.</p>
                                <div className='row'>
                                    <div className='col'>
                                        <label for="validationCustom03" class="form-label">First Name</label>
                                        <input type="text" class="form-control" id="validationCustom03" required />
                                        <div class="invalid-feedback">
                                            Please provide your Email
                                        </div>
                                    </div>
                                    <div className='col mb-4'>
                                        <label for="validationCustom03" class="form-label">Last Name</label>
                                        <input type="text" class="form-control" id="validationCustom03" required />
                                        <div class="invalid-feedback">
                                            Provide the reqiured data
                                        </div>
                                    </div>
                                </div>
                                <div className='col mb-4'>
                                    <label for="validationCustom03" class="form-label">Email</label>
                                    <input type="text" class="form-control" id="validationCustom03" required />
                                    <div class="invalid-feedback">
                                        Please provide your Email
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div class="">
                                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{ minHeight: '220px' }}></textarea>
                                </div>
                            </div>
                            <div class="py-5">
                                <button class="btn btn-outline-success element-fullwidth fw-bolder shadow-lg" type="button"
                                    style={{ maxWidth: "170px", minWidth: "170px", minHeight: "50px" }}>
                                    SEND
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='blog-search col '>
                        <div className='py-lg-4'>
                            <a className='my-5 text-success ' href=''>
                                <p className=''>Social</p>
                                <p className='hr-gradient' />
                                <ul className=' list-inline gap-2 d-flex'>
                                    <li className='list-inline-item'>
                                        <span className='icons'><Facebook size={40} /></span>

                                    </li>
                                    <li className=' list-inline-item'>
                                        <span className='icons'><Twitter size={40} /></span>
                                    </li>

                                    <li className=' list-inline-item'>
                                        <span className='icons'><FaGooglePlus size={40} /></span>
                                    </li>
                                    <li className=' list-inline-item'>
                                        <span className='icons'><Youtube size={40} /></span>
                                    </li>
                                </ul>
                            </a>
                            <div className='Categories py-lg-4'>
                                <p>Phones</p>
                                <hr className='hr-gradient' />
                                <ul className=' list-inline text-success '>
                                    <li className=' list-inline-item'>
                                        <span className='icons'><Telephone /></span>
                                        <span className='icons'>1-800-1234-567</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='Categories py-lg-4'>
                                <p>Address</p>
                                <hr className='hr-gradient' />
                                <ul className=' list-inline'>
                                    <li className=' list-inline-item'>
                                        <span className='icons'><FaLocationPin /></span>
                                        <span>
                                            455 Sasha Rd, Off Dopemu D04 Block 8D
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className='py-lg-4'>
                                <p>Open Hours</p>
                                <hr className='hr-gradient' />
                                <ul className='list-inline'>
                                    <li className='  list-inline-item'>
                                        <span className='icons'><Clock/></span>
                                        <span>Monday–Friday: 9:00am–6:00pm</span>
                                        <div>Saturday:8:00am–6:00pm</div>
                                        <span>Sundat:11:00am–6:00pm</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CarrerPage