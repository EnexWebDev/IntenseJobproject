import React from 'react'
import Testimonial from '../Testimonial/Testimonial'
import { Link } from 'react-router-dom'

const Carrer = () => {
    return (
        <div className=''>
            <div className='hero-section'>
                <div className='hero-content'>
                    <img src={"img/Quiz.jpg"} alt="img not found" />
                </div>
                <div className='header-content text-center Container'>
                    <div className='bg-overlay-gray-darkest'>
                        <div className='container section-98'>
                            <div className='row justify-content-sm-center'>
                                <div className='col-lg-8 text-center'>
                                    <h1 className=' text-white fw-semibold'>Start Building Your Own Career Now</h1>
                                </div>
                                <div className='col-lg-4 my-4 my-lg-0'>
                                    <Link to={'/carrer-starts-here'}>
                                        <button class="btn btn-primary element-fullwidth" type="button"
                                            style={{ maxWidth: "170px", minWidth: "170px", minHeight: "50px" }}>GET STARTED
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Testimonial />
        </div>
    )
}

export default Carrer