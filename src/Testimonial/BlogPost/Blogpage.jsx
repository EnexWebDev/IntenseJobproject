import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { MdSearch } from 'react-icons/md'
import Footer from '../../Footer/footer'
import { Cloud, Pen } from 'react-bootstrap-icons'
MdSearch
const Blogpage = () => {
  return (
    <>
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
                    <h1 className=' text-white fw-semibold lead display-1'>Blog</h1>
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                        <li class="breadcrumb-item active text-light" aria-current="page">Blog</li>
                      </ol>
                    </nav>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='d-lg-flex gap-5 py-lg-5 my-lg-5 py-5 container overflow-hidden'>
          <div className='col-lg-4 mb-4'>
            <div className='row mb-4'>
              <ReactPlayer
                className='react-player'
                url={"https://youtu.be/-AhmuMqZB0s"} />
            </div>
            <div class=" card mb-4" style={{ maxWidth: '617px ' }}>
              <div class=" card-body shadow">
                <div class="btn-group my-2 card-title">
                  <a href="#" class="btn btn-primary my-3">
                    <small className='card-text fs-6'>Business</small>
                  </a>
                </div>
                <div className=' card-title'>
                  <h5>
                    Intense tutorial: Writing a proper resume and autobiography for young specialists
                  </h5>
                  <small className="">Nowadays many companies are looking for young specialists that have some professional potential. Young graduates can easily attract employer’s attention by writing a proper resume. </small>
                  <p className='py-1 fade'> invicible</p>
                </div>
              </div>
            </div>
            <div className='card shadow' style={{ maxWidth: '617px' }}>
              <div className='row'>
                <img src={"img/blogpost.jpg"} alt="" className='' />
              </div>

              <div class="card-body" style={{ maxWidth: '617px' }}>
                <div class="px-4">
                  <div class="btn-group my-2">
                    <a href="#" class="btn btn-primary my-3">
                      <small className='card-title fs-6'>LIFESTYLE</small>
                    </a>
                  </div>
                  <p className="fw-bold fs-6 card-text">How to impress your future employer </p>
                  <p className='py-1 fade'> invicible</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 mb-4'>
            <div className=''>
              <div class="card shadow-sm" style={{ maxWidth: '617px ' }}>
                <div className="card-body " >
                  <div class="card-title ">
                    <span className='gap-3 d-flex'>
                      <a href="#" className="btn btn-primary  gap-5">
                        <small className='card-text fs-6'>NEWS</small>
                      </a>
                      <i className='py-lg-2'><Pen className='text-black-50' /></i>
                    </span>
                  </div>
                  <h5 className=' card-text'>
                    Top 50 international companies to consider your potential employer.
                  </h5>
                  <small className="">There are thousands of possibilities that can help you find the job of your dream. But how many of them will really lead you to the success of working at the well-known international company? Let’s find it out. </small>
                  <p className='py-1 fade'> invicible</p>
                </div>
              </div>
            </div>

            <div className='card shadow-sm my-4' style={{ maxWidth: '617px' }}>
              <div className='row'>
                <ReactPlayer
                  className='react-player'
                  url={"https://soundcloud.com/rafi-ki"} style={{ maxHeight: "180px" }} />
              </div>
              <div class=" card-body">
                <div class=" card-title">
                  <span class=" d-lg-flex gap-3 my-lg-3">
                    <a href="#" class="btn btn-primary ">
                      <small className='card-text fs-6'>Music</small>
                    </a>
                    <Cloud />
                  </span>
                  <p className=" card-title fw-bold fs-6">Top 5 tracks to enhance your working process: from rock to electronic music. </p>
                  <p className='py-1 fade'> invicible</p>
                </div>
              </div>
            </div>

            <div className='card bg-white shadow' style={{ maxWidth: '617px' }}>
              <div className=''>
                <img src={"img/Blogs.jpg"} alt="" className='card-img' />
              </div>
              <div class=" card-text shadow-lg" style={{ maxWidth: '617px' }}>
                <div class="px-4">
                  <div class="btn-group my-2">
                    <a href="#" class="btn btn-primary my-3">
                      <small className='fs-6'>LIFESTYLE</small>
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

          <div className='blog-search'>
            <h2>search</h2>
            <hr className='hr-gradient' />
            <div className="position-relative" style={{ maxWidth: '617px ' }}>
              <div className='' style={{ maxWidth: "352px" }}>
                <div className='form-floating mb-3'>
                  <input type="text" class="form-control" id="floatingInput" placeholder="Job title, skills, or company" />
                  <label for="floatingInput" className=' text-success '>Search</label>
                </div>
              </div>
              <Link href='' className='position-absolute text-black w-100 justify-content-center top-50'>
                <MdSearch size={23} />
              </Link>
            </div>
            <div className=''>
              <div className='my-5'>
                <h2 className=''>Twitter Feed</h2>
                <hr className='hr-gradient' />
              </div>
              <div className='Categories'>
                <h2>Categories</h2>
                <hr className='hr-gradient' />
                <ul>
                  <li>Job (37)</li>
                  <li>Employers (211)</li>
                  <li>Resume (12)</li>
                  <li>Finance (7)</li>
                  <li>Vacancy (15)</li>
                </ul>
              </div>
              <div className='Categories my-lg-5'>
                <h2>Archive</h2>
                <hr className='hr-gradient' />
                <ul>
                  <li>January 2018 (17)</li>
                  <li>December 2017 (121)</li>
                  <li>November 2017 (19)</li>
                  <li>October 2017 (9)</li>
                  <li>September 2017 (25)</li>
                </ul>
              </div>
              <div className='mb-4'>
                <h2>Tags</h2>
                <hr className='hr-gradient' />
                <span className=''>
                  <button className='shadow-sm btn btn-outline-dark mx-1'>RESUME</button>
                  <button className='shadow-sm btn btn-outline-dark mx-1'>EMPLOYERS</button>
                  <button className='shadow-sm btn btn-outline-dark'>JOB</button>
                  <button className='shadow-sm btn btn-outline-dark mx-2 my-2'>VACANCY</button>
                  <button className='shadow-sm btn btn-outline-dark'>FINANCE</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Blogpage