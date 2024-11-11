import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
const JobPost = () => {
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
                                <div className='col-lg-8 text-center'>
                                    <h1 className=' text-white fw-semibold lead display-1'>Post a Job</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb justify-content-center">
                                            <li class="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                            <li class="breadcrumb-item active text-light" aria-current="page">post a job</li>
                                        </ol>
                                    </nav>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' py-5'>
                <div className='text-center py-5 '>
                    <h2 className='lead display-5 opacity-100 fw-bold'> Post a Job in Minutes </h2>
                    <p className="divider border-black" />
                    <div className=' justify-content-center align-content-center text-center'>
                        <p className=' '>Have an account? If you don’t have an account you can create one below by entering your email <br /> address/username. Your account details will be confirmed via email.</p>
                    </div>
                </div>
            </div>
            <form className='g-3 container px-5'>
                <div class=" container d-lg-flex" >
                    <div class=" row g-3" >
                        <div>
                            <label for="validationCustom03" class="form-label">Email</label>
                            <input type="text" class="form-control" id="validationCustom03" required style={{ maxWidth: "500px", minHeight: "50px", minWidth: "250px" }} />
                            <div class="invalid-feedback">
                                Please provide your Email
                            </div>
                        </div>
                        <div>
                            <label for="validationCustom03" class="form-label">Location <span className=' opacity-25'>(optional)</span></label>
                            <input type="text" class="form-control" id="validationCustom03" required style={{ maxWidth: "500px", minHeight: "50px", minWidth: "250px" }} />
                            <div class="invalid-feedback">
                                Please provide a Location
                            </div>
                        </div>
                        <div>
                            <label for="validationCustom03" class="form-label">Job Category</label>
                            <input type="text" class="form-control" id="validationCustom03" required style={{ maxWidth: "500px", minHeight: "50px", minWidth: "250px" }} />
                            <div class="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                    </div>
                    <div class=" row g-3" >
                        <div>
                            <label for="validationCustom03" class="form-label">Job Title</label>
                            <input type="text" class="form-control" id="validationCustom03" required style={{ maxWidth: "500px", minHeight: "50px", minWidth: "250px" }} />
                            <div class="invalid-feedback">
                                Please provide your  required field
                            </div>
                        </div>
                        <div>
                            <label for="validationCustom03" class="form-label">Job Type <span className=' opacity-25'>(optional)</span></label>
                            <div class="" style={{ maxWidth: "500px", minWidth: "250px" }}>
                                <div class="form-group mb-">
                                    <select class="form-control py-3 form-select    " id="form-filter-location" aria-label=".form-select-lg example">
                                        <i></i>
                                        <option value="1">City or state</option>
                                        <option value="2">New York</option>
                                        <option value="3">Missouri</option>
                                        <option value="4">Los Angeles</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label for="validationCustom03" class="form-label">Job Tags</label>
                            <input type="text" class="form-control" id="validationCustom03" required style={{ maxWidth: "500px", minHeight: "50px", minWidth: "250px" }} />
                            <div class="invalid-feedback">
                                The text field is required .
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' container'>
                    <div class="mb-3 col">
                        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{ minHeight: '200px', minWidth: "250px" }} ></textarea>
                    </div>
                </div>

                <div class=" container d-lg-flex" >
                    <div class=" row g-3" >
                        <div>
                            <label for="validationCustom03" class="form-label">Application Email/URL</label>
                            <input type="text" class="form-control" id="validationCustom03" required style={{ maxWidth: "500px", minHeight: "50px", minWidth: "250px" }} />
                            <div class="invalid-feedback">
                                Please provide your Email
                            </div>
                        </div>
                        <div>
                            <label for="validationCustom03" class="form-label">   Maximum Rate/h ($) <span className=' opacity-25'>(optional)</span></label>
                            <input type="text" class="form-control" id="validationCustom03" required style={{ maxWidth: "500px", minHeight: "50px", minWidth: "250px" }} />
                            <div class="invalid-feedback">
                                Please provide a Location
                            </div>
                        </div>
                        <div>
                            <label for="validationCustom03" class="form-label">Maximum Salary ($) <span className=' opacity-25'>(optional)</span> </label>
                            <input type="text" class="form-control" id="validationCustom03" required style={{ maxWidth: "500px", minHeight: "50px", minWidth: "250px" }} />
                            <div class="invalid-feedback">
                                The text field is required .
                            </div>
                        </div>
                    </div>
                    <div class=" row g-3" >
                        <div>
                            <label for="validationCustom03" class="form-label">Maximum Rate/h ($) <span className=' opacity-25'>(optional)</span></label>
                            <input type="text" class="form-control" id="validationCustom03" required style={{ maxWidth: "500px", minHeight: "50px", minWidth: "250px" }} />
                            <div class="invalid-feedback">
                                The text field is required .
                            </div>
                        </div>
                        <div>
                            <label for="validationCustom03" class="form-label">Minimum Salary ($) <span className=' opacity-25'>(optional)</span> </label>
                            <input type="text" class="form-control" id="validationCustom03" required style={{ maxWidth: "500px", minHeight: "50px", minWidth: "250px" }} />
                            <div class="invalid-feedback">
                                The text field is required .
                            </div>
                        </div>
                        <div>
                            <label for="validationCustom03" class="form-label">Hours per week<span className=' opacity-25'>(optional)</span></label>
                            <input type="text" class="form-control" id="validationCustom03" required style={{ maxWidth: "500px", minHeight: "50px", minWidth: "250px" }} />
                            <div class="invalid-feedback">
                                The text field is required .
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-5'>
                    <div className='lead fs-1 opacity-100 fw-bold'>Company Details</div>
                    <hr className="" />
                    <div className='  gap-5 d-lg-flex '>
                        <div class=" row g-3" >
                            <div>
                                <label for="validationCustom03" class="form-label">Company Name</label>
                                <input type="text" class="form-control" id="validationCustom03" required style={{ maxWidth: "500px", minHeight: "50px", minWidth: "250px" }} />
                                <div class="invalid-feedback">
                                    The text field is required .
                                </div>
                            </div>
                            <div>
                                <label for="validationCustom03" class="form-label">Video<span className=' opacity-25'>(optional)</span> </label>
                                <input type="text" class="form-control" id="validationCustom03" required style={{ maxWidth: "500px", minHeight: "50px", minWidth: "250px" }} />
                                <div class="invalid-feedback">
                                    The text field is required .
                                </div>
                            </div>

                        </div>
                        <div class=" row g-3" >
                            <div>
                                <label for="validationCustom03" class="form-label">Website<span className=' opacity-25'>(optional)</span></label>
                                <input type="text" class="form-control" id="validationCustom03" required style={{ maxWidth: "500px", minHeight: "50px", minWidth: "250px" }} />
                                <div class="invalid-feedback">
                                    The text field is required .
                                </div>
                            </div>
                            <div>
                                <label for="validationCustom03" class="form-label">Tagline<span className=' opacity-25'>(optional)</span> </label>
                                <input type="text" class="form-control" id="validationCustom03" required style={{ maxWidth: "500px", minHeight: "50px", minWidth: "250px" }} />

                                <div class="invalid-feedback">
                                    The text field is required .
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=' d-lg-flex py-5 gap-5 text-center text-lg-start '>
                        <button class=" btn btn-primary element-fullwidth mb-3 mb-lg-0 " type="button"
                            style={{ maxWidth: "200px", minWidth: "180px", minHeight: "50px" }}>DOWNLOAD
                            LOGO</button>
                        <button class=" btn btn-outline-warning element-fullwidth" type="button"
                            style={{ maxWidth: "200px", minWidth: "180px", minHeight: "50px" }}>PREVIEW
                        </button>
                    </div>

                </div>
            </form>
            <Footer />
        </div>
    )
}

export default JobPost