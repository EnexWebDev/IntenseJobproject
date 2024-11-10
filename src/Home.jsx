import React from 'react'
import Menu from './menupages/menu'
const Home = () => {
    return (
        <div>
            <section className='hero-page'>
                <div className='hero-header'>
                    <img src={"img/hero.jpg"} alt="" />
                </div>
                <div className='header-content text-center Container slide-up-animation'>
                    <div className='bg-overlay-gray-darkest'>
                        <div className='container section-98'>
                            
                            <div class="row justify-content-sm-center">
                                <div className=' col-sm-12 py-5 my-5'>
                                    <div className="shake">
                                        <div className='text-white py-5 lead display-2 shake-animation'>Build Your Future</div>
                                    <h4 className="text-muted offset-top-20 offset-md-top-41">
                                        We offer
                                        <span className=" text-success fw-bold"> 2,989 </span>
                                        job vacancies right now!
                                    </h4>
                                    </div>
                                    <form className=''>
                                        <div className='d-lg-flex justify-content-center gap-lg-3 gap-sm-2'>
                                            <div className='col-lg-4' style={{ maxWidth: "352px" }}>
                                                <div className='form-floating mb-3'>
                                                    <input type="text" class="form-control" id="floatingInput" placeholder="Job title, skills, or company" />
                                                    <label for="floatingInput" className=' text-success '>Job title, skills, or company </label>
                                                </div>
                                            </div>

                                            <div className=''>
                                                <div class="" style={{ maxWidth: "", minWidth: "200px" }}>
                                                    <div class="form-group mb-3">
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
                                            <div class="py-1">
                                                <button class="btn btn-primary element-fullwidth btn-hover-scale" type="button"
                                                    style={{ maxWidth: "352px", minWidth: "170px", minHeight: "50px" }}>Find
                                                    Job</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Menu />
        </div>
    )
}

export default Home