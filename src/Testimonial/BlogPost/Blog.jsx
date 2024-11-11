import React from 'react'
import ReactPlayer from 'react-player'
import Footer from '../../Footer/Footer'
import { Link } from 'react-router-dom'
const Blog = () => {
    return (
        <>
            <div className='py-5 container-fluid bg-body-secondary'>
                <div className='text-center py-5'>
                    <h4 className='lead display-5 fw-bold'>Latest Blog Posts</h4>
                    <p className="divider border-black" />
                </div>

                <div className=' d-lg-flex gap-4 container'>
                    <div>
                        <div className='row'>
                            <ReactPlayer
                                className='react-player'
                                url={"https://youtu.be/-AhmuMqZB0s"} />
                        </div>
                        <div class="" style={{ maxWidth: '617px ' }}>
                            <div class=" bg-white shadow-lg px-4">
                                <div class="btn-group my-2">
                                    <a href="#" class="btn btn-primary my-3">
                                        <small className='card-text fs-6'>Business</small>
                                    </a>
                                </div>
                                <h5>
                                    Intense tutorial: Writing a proper resume and autobiography for young specialists
                                </h5>
                                <small className="">Nowadays many companies are looking for young specialists that have some professional potential. Young graduates can easily attract employer’s attention by writing a proper resume. </small>
                                <p className='py-1 fade'> invicible</p>
                            </div>
                        </div>
                        <div className='' style={{ maxWidth: '617px' }}>
                            <div className='row'>
                                <img src={"img/blogpost.jpg"} alt="" className='' />
                            </div>

                            <div class="bg-white shadow-lg" style={{ maxWidth: '617px' }}>
                                <div class="px-4">
                                    <div class="btn-group my-2">
                                        <a href="#" class="btn btn-primary my-3">
                                            <small className='card-text fs-6'>LIFESTYLE</small>
                                        </a>
                                    </div>
                                    <p className="  fw-bold fs-6">How to impress your future employer </p>
                                    <p className='py-1 fade'> invicible</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' overflow-hidden'>
                        <div class="  " style={{ maxWidth: '617px ' }}>
                            <div class=" bg-white shadow-lg px-4">
                                <div class="btn-group my-2">
                                    <a href="#" class="btn btn-primary my-3">
                                        <small className='card-text fs-6'>Business</small>
                                    </a>
                                </div>
                                <h5>
                                    Top 50 international companies to consider your potential employer.
                                </h5>
                                <small className="">There are thousands of possibilities that can help you find the job of your dream. But how many of them will really lead you to the success of working at the well-known international company? Let’s find it out. </small>
                                <p className='py-1 fade'> invicible</p>
                            </div>
                        </div>
                        <div className='row card'>
                            <ReactPlayer
                                className='react-player'
                                url={"https://soundcloud.com/rafi-ki"} style={{ maxHeight: "180px" }} />
                        </div>
                        <div className=' ' style={{ maxWidth: '617px' }}>
                            <div class="bg-white shadow-lg" style={{ maxWidth: '617px' }}>
                                <div class="px-4">
                                    <div class="btn-group my-2">
                                        <a href="#" class="btn btn-primary my-3">
                                            <small className='card-text fs-6'>Music</small>
                                        </a>
                                    </div>
                                    <p className="  fw-bold fs-6">Top 5 tracks to enhance your working process: from rock to electronic music. </p>
                                    <p className='py-1 fade'> invicible</p>
                                </div>
                            </div>
                        </div>
                        <div className=' ' style={{ maxWidth: '617px' }}>
                            <div className='row'>
                                <img src={"img/Blogs.jpg"} alt="" className='' />
                            </div>

                            <div class="bg-white shadow-sm" style={{ maxWidth: '617px' }}>
                                <div class="px-4">
                                    <div class="btn-group my-2">
                                        <a href="#" class="btn btn-primary my-3">
                                            <small className='card-text fs-6'>LIFESTYLE</small>
                                        </a>
                                    </div>
                                    <h5>
                                        Teamwork as a vital element of your own success and career promotion.
                                    </h5>
                                    <small className="">Nowadays many companies are looking for young specialists that have some professional potential. Young graduates can easily attract employer’s attention by writing a proper resume. </small>
                                    <p className='py-1 fade'> invicible</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="py-5 text-center">
                    <button class="btn btn-primary element-fullwidth" type="button"
                        style={{ maxWidth: "220px", minWidth: "180px", minHeight: "50px" }}>
                        <Link to={"/Blogpost"}>VIEW ALL BLOG POST</Link>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog