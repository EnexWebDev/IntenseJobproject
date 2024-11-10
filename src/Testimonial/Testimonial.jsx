import React from 'react'
import Blog from './BlogPost/Blog'
import Typetextwriter from '../Pages/Animations/Typetextwriter'

const Testimonial = () => {
    return (
        <div>
            <div className='container-fluid py-5'>
                <div className='text-center py-2'>
                    <h4 className='lead display-5 fw-bold'>Testimonial</h4>
                </div>
                <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex align-items-center justify-content-center gap-4 d-inline-block">
                                <img src={"img/user1.jpg"} className="rounded-circle img-fluid" alt="" />
                                <div className="py-3">
                                    <div>
                                        <span className="lead fw-bold">Brittany Freeman</span><br />
                                        <span className="opacity-50 fs-6">Manager</span>
                                    </div>
                                </div>
                            </div>

                            <div className="d-lg-flex justify-content-center text-lg-center">
                                <hr className="hr-gradient" />
                                <h4 className="m-auto w-75 text-center"> {/* Updated width */}
                                    <Typetextwriter text={"I  just want to thank you for your help. I was so pleased and grateful. Keep up the excellent work. Your site provides the best support I have ever encountered.  " } className="col-lg-8 col-12"  speed={70}/> {/* Updated col to col-12 */}

                                    <hr className="hr-gradient" />
                                </h4>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex align-items-center justify-content-center gap-4 d-inline-block">
                                <img src={"img/user-jame2.jpg"} className="rounded-circle img-fluid" alt="" />
                                <div className="py-3">
                                    <div>
                                        <span className="lead fw-bold">James Newman</span><br />
                                        <span className="opacity-50 fs-6">Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-lg-flex justify-content-center text-lg-center">
                                <hr className="hr-gradient" />
                                <h4 className="m-auto w-75 text-center"> {/* Updated width */}
                                    <q className="col-lg-8 col-12">
                                        I just want to thank you for your help. I was so pleased and grateful. Keep up the excellent work. Your site provides the best support I have ever encountered.
                                    </q>
                                    <hr className="hr-gradient" />
                                </h4>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex align-items-center justify-content-center gap-4 d-inline-block">
                                <img src={"img/user-jim-johnson.jpg"} className="rounded-circle img-fluid" alt="" />
                                <div className="py-3">
                                    <div>
                                        <span className="lead fw-bold">James Newman</span><br />
                                        <span className="opacity-50 fs-6">Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-lg-flex justify-content-center text-lg-center">
                                <hr className="hr-gradient" />
                                <h4 className="m-auto w-75 text-center"> {/* Updated width */}
                                    <q className="col-lg-8 col-12">
                                        Thank you very much for your rapid response. There's no doubt that your company is worth admiring! I have experienced the fastest support ever.
                                    </q>
                                    <hr className="hr-gradient" />
                                </h4>
                            </div>
                        </div>
                    </div>


                    <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon fade" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon fade" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <Blog />
        </div>
    )
}

export default Testimonial