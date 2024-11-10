import React from 'react'
import { Calendar, Calendar2Date, Cash, CashCoin, Clock, Cookie, GeoAltFill, Globe, Kanban, Map, Phone, PinMap, PinMapFill, Tag, UniversalAccess } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/footer'

const Projectmanger = () => {
    return (
        <div>
            <div className='hero-section'>
                <div className='hero-content'>
                    <img src={"img/Quiz.jpg"} alt="img not found" />
                </div>
                <div className='header-content text-center Container'>
                    <div className='bg-overlay-gray-darkest'>
                        <div className='container section-98'>
                            <div className='row justify-content-sm-center'>
                                <div className='col-lg-12 text-center'>
                                    <h1 className=' text-white fw-semibold lead display-1'>Project Managers</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb justify-content-center">
                                            <li class="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                            <li class="breadcrumb-item active text-light" aria-current="page">Job Page </li>
                                            <li class="breadcrumb-item active text-light" aria-current="page">Houshold Page</li>
                                            <li class="breadcrumb-item active text-light" aria-current="page">Project Managers </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' container-fluid py-lg-5'>
                <div className=' container-fluid py-lg-5'>
                    <h3 className=' fs-1 fw-bold lead opacity-100'>House Hold</h3>
                    <div className=' mb-4'>
                        <ul className=' list-inline'>
                            <li className=' list-inline-item'>
                                <span> Job Categories:</span>
                            </li>
                            <li className=' list-inline-item'>
                                <span> <i><Tag className=' text-success' /></i>Project </span>
                                <span><i><Tag className='text-success' /></i>Managers</span>
                            </li>
                        </ul>
                    </div>
                    <hr />

                    <div>
                        <div className=' d-lg-flex gap-5'>
                            <div className='px-lg-3 list-inline'>
                                <div className=''><Calendar2Date className=' text-success' />
                                    <span className=' fw-bold'> Date Posted:</span>
                                    <p className='opacity-50'> Posted 7 months ago</p>
                                </div>
                            </div>

                            <ul className='list-inline'>
                                <div className='px-lg-3  list-inline-item'>
                                    <div>
                                        <Clock className=' text-success' />
                                        <span className=' fw-bold'> Employment Type:</span>
                                        <p className='opacity-50'> Full Time</p>
                                    </div>
                                </div>
                            </ul>

                            <ul className=' list-inline'>
                                <div className='px-lg-3  list-inline-item'>
                                    <span><Globe className='text-success' />
                                        <span className=' fw-bold'> Website</span>
                                        <p className='opacity-50'>Demolink.org</p>
                                    </span>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className=' d-lg-flex gap-5'>
                            <ul className=' list-inline'>
                                <div className='px-lg-3 list-inline'>
                                    <div className=''><GeoAltFill className='text-success' />
                                        <span className=' fw-bold'> Location:</span>
                                        <p className='opacity-50'>Aurora, Colorado</p>
                                    </div>
                                </div>
                            </ul>

                            <ul className='list-inline'>
                                <div className='px-lg-5 list-inline-item'>
                                    <div>
                                        <CashCoin className='text-success' />
                                        <span className=' fw-bold'> Salary:</span>
                                        <p className='opacity-50'>$35000 - 38000</p>
                                    </div>
                                </div>
                            </ul>
                            <ul className=' list-inline'>
                                <div className=' px-lg-5 list-inline-item'>
                                    <div><Phone className='text-success' />
                                        <span className=' fw-bold'> Pone</span>
                                        <p className='opacity-50'>(800) 1234567 </p>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className=''>
                            <h5 className=' mb-3'>Description:</h5>
                            <p>Project managers ensure that a project is completed on time and within budget, that the project's objectives are met and that everyone is doing their job properly. Projects are usually separate to usual day-to-day business activities and require a group of people to work together to achieve a set of specific objectives. Project managers oversee the project to ensure the desired result is achieved, the most efficient resources are used and the different interests involved are satisfied.</p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className='accountability-asset'>
                            <h5 className=''>Primary Areas of Accountability:</h5>
                            <div className=' d-lg-flex gap-lg-5 py-lg-4'>
                                <div className='Categories'>
                                    <ul className=' mx-3'>
                                        <li>Agreeing project objectives;</li>
                                        <li>Overseeing the accounting, costing and billing;</li>
                                        <li>Carrying out risk assessment;</li>
                                        <li>Monitoring sub-contractors;</li>
                                    </ul>
                                </div>

                                <div className='Categories'>
                                    <ul className='mx-3'>
                                        <li>Agreeing project objectives;</li>
                                        <li>Overseeing the accounting, costing and billing;</li>
                                        <li>Carrying out risk assessment;</li>
                                        <li>Monitoring sub-contractors;</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' d-lg-flex py-5 gap-5 text-center text-lg-start '>
                        <button class=" btn btn-outline-primary element-fullwidth mb-lg-0 mb-3" type="button"
                            style={{ maxWidth: "250px", minWidth: "180px", minHeight: "50px" }}>APPLY
                            WITH FACEBOOK</button>
                        <button class=" btn btn-outline-warning element-fullwidth" type="button"
                            style={{ maxWidth: "200px", minWidth: "180px", minHeight: "50px" }}>APPLY FOR A JOB
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projectmanger