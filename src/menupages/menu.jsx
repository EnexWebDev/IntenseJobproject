import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { FaCar } from "react-icons/fa6";
import { GiHealthNormal } from "react-icons/gi";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import Data from '../TableData/Data';
const Menu = () => {
    return (
        <>
            <div className='bg-success'>
                <div className='container py-4'>
                    <div className='text-center carousel slide overflow-hidden' id="menuCarousel" data-bs-ride="carousel" >
                        <div className=' d-lg-flex gap-5 '>
                            <div className=' carousel-item  active'>
                                <div className=' d-lg-flex align-items-center justify-content-between'>
                                    <span href="" className=' text-decoration-none'>
                                        <span className=' d-flex gap-4 justify-content-center align-items-center'>
                                            <GiHealthNormal color='white' size={50} className='' />
                                        </span>
                                        <h3 className='my-4 text-light'>Health Care</h3>
                                        <p className="divider" />
                                    </span>
                                    <span href="" className=' text-decoration-none'>
                                        <span className=''>
                                            <FaCar color='white' size={50} />
                                            <h3 className='my-4 text-light'>Automobile Jobs</h3>
                                            <p className="divider" />
                                        </span>
                                    </span>
                                    <span href="" className=' text-decoration-none'>
                                        <span className=''>
                                            <FaBuilding color='white' size={50} />
                                            <h3 className='my-4 text-light'>Construction</h3>
                                            <p className="divider" />
                                        </span>
                                    </span>

                                </div>

                            </div>

                            <div className="carousel-item">
                                <div className=' d-lg-flex align-items-center justify-content-between'>
                                    <span href="" className=' text-decoration-none'>
                                        <span className=''>
                                            <MdFastfood color='white' size={50} />
                                            <h4 className='my-4 text-light'>Food Service</h4>
                                            <p className="divider" />
                                        </span>
                                    </span>
                                    <span href="" className=' text-decoration-none'>
                                        <span className=''>
                                            <FaGlobeAmericas color='white' size={50} />
                                            <h3 className='my-4 text-light'>Logistics</h3>
                                            <p className="divider" />

                                        </span>
                                    </span>
                                    <span href="" className=' text-decoration-none'>
                                        <span className=''>
                                            <a href="">
                                                <FaMoneyBills color='white' size={50} />
                                                <h3 className='my-4 text-light'>Finance</h3>
                                                <p className="divider" />
                                            </a>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Data />
        </>
    )
}

export default Menu