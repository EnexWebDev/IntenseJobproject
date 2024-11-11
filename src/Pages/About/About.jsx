import React from 'react'
import { useStat, useEffect } from 'react';
import { MdAccountBox } from "react-icons/md";
import { Facebook, Folder, People } from 'react-bootstrap-icons';
import { Google } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { IoMdCheckmark } from "react-icons/io";
import { FaChartBar, FaSmile } from "react-icons/fa";
import { MdOutlineNewspaper } from "react-icons/md";
import Navbar from '../../Header/Navbar'
import { Link } from 'react-router-dom'
import Counter from '../Counter/Counter';
import { PiNotepad } from 'react-icons/pi';
import Footer from '../../Footer/Footer';

const About = () => {
  return (
    <>
      <div className='Aboutsection'>
        <div className='hero-section'>
          <div className='hero-content '>
            <img src={"img/Quiz.jpg"} alt="img not found" />
          </div>
          <div className='header-content text-center Container'>
            <div className='bg-overlay-gray-darkest'>
              <div className='container section-98'>
                <div className='row justify-content-sm-center'>
                  <div className='col-lg-8 text-center'>
                    <h1 className=' text-white fw-semibold lead display-1'>About Us</h1>
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                        <li class="breadcrumb-item active text-light" aria-current="page">About Us</li>
                      </ol>
                    </nav>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=' container-fluid py-lg-5'>
          <div className='row justify-content-center py-lg-5'>
            <div className=' col-lg'>
              <div>
                <h2 className=' display-5 lead  fw-bold'>
                  Who We Are
                  <p className='text-start divide' />
                </h2>
              </div>

              <span className=''>
                <p>
                  Intense is a professional recruitment agency with a rich history. It started as a small business in Oakville and has grown enough to successfully occupy two large buildings in two different cities offering people hot vacancies.
                </p>
                <p>The range of our services includes not only free access to the list of America’s featured and popular jobs but also additional support in the job search. Start building your career with us today!</p>
              </span>
              <button class=" btn btn-primary element-fullwidth shadow-lg mb-4" type="button"
                style={{ maxWidth: "200px", minWidth: "180px", minHeight: "50px" }}>LEARN MORE
              </button>
            </div>

            <div className='col-lg'>
              <div className='my-lg-3 mb-4'>
                <img src={"img/aboutpage.jpg"} alt="" className='img-fluid' />
              </div>
            </div>
          </div>
        </div>

        <div className=' container-fluid bg-body-secondary py-5'>
          <div className='text-center py-5'>
            <h2 className='lead display-5 opacity-100 fw-bold'> Our advantages</h2>
            <p className="divider border-black" />
          </div>
          <div className=' container-fluid'>
            <div className='justify-content-center text-start row align-items-center '>
              <div className='col-lg-4  text-center text-lg-start'>
                <div className=' d-lg-flex gap-3 align-items-center py-lg-3'>
                  <span><MdAccountBox size={40} /></span>
                  <h5 className='text-uppercase fw-bold'>Extensive database</h5>
                </div>
                <p className='lead fs-6'>We dispose a vast database of various vacancies available for applying all over the USA. Our consultants will take all your wishes concerning the job of your dream into consideration to find a proper vacancy.</p>
              </div>
              <div className='col-lg-4  text-center text-lg-start'>
                <div className=' d-lg-flex gap-3 align-items-center py-4'>
                  <span><FaChartBar size={40} /></span>
                  <h5 className='text-uppercase fw-bold'>DEDICATED TEAM</h5>
                </div>
                <p className='lead fs-6'>
                  Dedicated team
                  Intense team is known for dedication to its customers. We will not only give you a list of recommended vacancies based on your personal profile but support you with some professional advice as well.</p>
              </div>

              <div className='col-lg-4  text-center text-lg-start'>
                <div>
                  <div className='d-lg-flex gap-3 align-items-center py-4'>
                    <span><MdOutlineNewspaper size={40} /></span>
                    <h5 className='text-uppercase fw-bold'>ADDITIONAL SUPPORT</h5>
                  </div>
                  <p className='lead fs-6'>Consultants of Intense will be glad to offer you additional support and even pick suitable refresher courses for increasing your skill level. We also offer vocational guidance services for the unemployed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=' container-fluid py-5'>
          <div className='text-center py-5'>
            <h2 className='lead display-5 opacity-100 fw-bold'> Our Team</h2>
            <p className="divider border-black" />
          </div>
          <div className=' '>
            <div className='row justify-content-center'>
              <div className='row align-content-center align-items-center'>
                <div className='col-12 col-sm-6 col-lg-3 d-flex justify-content-center'>
                  <div className=' box-member'>
                    <img src={"img/user-john-doe.jpg"} alt="" />
                    <h5 className=' fw-bold'>
                      <Link to={''} className=' text-black'>
                        John Doe
                      </Link>
                      <small className=' text-primary mx-lg-2'>Founder</small>
                    </h5>
                    <div className='box-member-wrap'>
                      <div className='box-member-caption'>
                        <div className='box-member-caption-inner'>
                          <ul className=' list-inline list-inline-xs'>
                            <li className='list-inline-item'>
                              <Link className=' icon-link'><i><Facebook size={40} /></i></Link>
                            </li>
                            <li className='list-inline-item-'>
                              <Link><i><Twitter size={40} /></i></Link>
                            </li>
                            <li className='list-inline-item-'>
                              <Link><i><Google size={40} /></i></Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-sm-6 col-lg-3 d-flex justify-content-center'>
                  <div className=' box-member'>
                    <img src={"img/user-july-mao.jpg"} alt="" />
                    <h5 className=' fw-bold'>
                      <Link to={''} className=' text-black'>
                        July Mao
                      </Link>
                      <small className=' text-primary mx-lg-2'>Consultant</small>
                    </h5>
                    <div className='box-member-wrap'>
                      <div className='box-member-caption'>
                        <div className='box-member-caption-inner'>
                          <ul className=' list-inline list-inline-xs'>
                            <li className='list-inline-item'>
                              <Link className=' icon-link'><i><Facebook size={40} /></i></Link>
                            </li>
                            <li className='list-inline-item-'>
                              <Link><i><Twitter size={40} /></i></Link>
                            </li>
                            <li className='list-inline-item-'>
                              <Link><i><Google size={40} /></i></Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-sm-6 col-lg-3 d-flex justify-content-center'>
                  <div className=' box-member'>
                    <img src={"img/user-bernard-show.jpg"} alt="" />
                    <h5 className=' fw-bold'>
                      <Link to={''} className=' text-black'>
                        Bernard Show
                      </Link>
                      <small className=' text-primary mx-lg-2'>
                        Co-Founder
                      </small>
                    </h5>
                    <div className='box-member-wrap'>
                      <div className='box-member-caption'>
                        <div className='box-member-caption-inner'>
                          <ul className=' list-inline list-inline-xs'>
                            <li className='list-inline-item'>
                              <Link className=' icon-link'><i><Facebook size={40} /></i></Link>
                            </li>
                            <li className='list-inline-item'>
                              <Link>
                                <i><Twitter size={40} /></i>
                              </Link>
                            </li>
                            <li className='list-inline-item'>
                              <Link>
                                <i><Google size={40} /></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-sm-6 col-lg-3 d-flex justify-content-center'>
                  <div className=' box-member'>
                    <img src={"img/user-ronald-oswald.jpg"} alt="" />
                    <h5 className=' fw-bold'>
                      <Link to={''} className=' text-black'>
                        John Doe
                      </Link>
                      <small className=' text-primary mx-lg-2'>Recruiter</small>
                    </h5>
                    <div className='box-member-wrap'>
                      <div className='box-member-caption'>
                        <div className='box-member-caption-inner'>
                          <ul className=' list-inline list-inline-xs'>
                            <li className='list-inline-item'>
                              <Link className=' icon-link'><i className=''><Facebook size={40} /></i></Link>
                            </li>
                            <li className='list-inline-item-'>
                              <Link><i><Twitter size={40} /></i></Link>
                            </li>
                            <li className='list-inline-item-'>
                              <Link><i><Google size={40} /></i></Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='counterPage bg-black m-auto'>
        <div className='container'>
          <div className=' row justify-content-center align-items-center py-lg-5'>
            <div className=''>
              <div className='d-lg-flex align-items-center py-lg-5 gap-5 overflow-hidden'>
                <div className='col-12 col-lg-3 col-sm-6 align-items-center'>
                  <div className='counter-type-1'>
                    <span className=''> <PiNotepad size={70} className=' text-success' /></span>
                    <div className=' offset-top-10'>
                      <Counter from={0} to={5824} duration={3000} />
                      <p className='' />
                      <hr className='divider divider-vertical  text-light dropdown-divider' />
                      <h6 class="text-uppercase text-light fw-bold text-spacing-60 offset-top-20">job vacancies</h6>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-lg-3 col-sm-6 align-items-center'>
                  <div className='counter-type-2'>
                    <span className=''> <FaSmile size={50} className=' text-primary' /></span>
                    <div className=' offset-top-10'>
                      <Counter from={0} to={246} duration={3000} keySuffix={"K"} />
                      <hr className='divider divider-vertical  text-light dropdown-divider' />
                      <h6 class="text-uppercase text-light fw-bold text-spacing-60 offset-top-20">Happy Clients</h6>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-lg-3 col-sm-6'>
                  <div className='counter-type-3'>
                    <span className=''><People size={50} className='text-warning' /></span>
                    <div className=' offset-top-10'>
                      <Counter from={0} to={1200} duration={3000} keySuffix='K' />
                      <p className='' />
                      <hr className='divider divider-vertical  text-light dropdown-divider' />
                      <h6 class="text-uppercase text-light fw-bold text-spacing-60 offset-top-20">employers</h6>
                    </div>
                  </div>
                </div>
                <div className=' col-12 col-lg-3 col-sm-6 align-items-center'>
                  <div className='counter-type-4'>
                    <span className=''> <Folder size={50} className=' text-danger' /></span>
                    <div className=' offset-top-10'>
                      <Counter from={0} to={320} duration={3000} />
                      <hr className='divider divider-vertical  text-light dropdown-divider' />
                      <h6 class="text-uppercase text-light fw-bold offset-top-20">Resumes</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='Contactpage py-lg-5 m-auto  mt-5 px-4'>
        <div className="mx-auto" style={{ maxWidth: '500px' }}>
          <div className=' container-fluid'>
            <h2 className='lead display-2 l text-light-emphasis text-center'>Contact Us</h2>
            <p className='divider border-black' />
          </div>
          <div className=' container'>
            <div className='col-lg-12'>
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
          </div>
          <div class="py-5 text-center">
            <button class="btn btn-outline-success element-fullwidth fw-bolder shadow-lg" type="button"
              style={{ maxWidth: "170px", minWidth: "170px", minHeight: "50px" }}>
              SEND
            </button>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default About