import React from 'react'
import { Envelope, Facebook, Inbox, Linkedin, Mailbox, PhoneLandscape, Twitter } from 'react-bootstrap-icons'
import { FaGooglePlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/footer'
const Resume = () => {
  return (
    <div>
      <div className='hero-section'>
        <div className='hero-content bg-black'>

        </div>
        <div className='header-content text-center Container'>
          <div className='bg-overlay-gray-darkest'>
            <div className='container section-98'>
              <div className='row justify-content-sm-center'>
                <div className='col-lg-7 text-center'>
                  <h1 className=' text-white fw-semibold lead display-1'>Resume Page</h1>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                      <li class="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                      <li class="breadcrumb-item active text-light" aria-current="page">Resume Page</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' col-lg-12 container-fluid'>
        <div className='row py-lg-5 '>
          <div className='col'>
            <div>
              <img src={"img/resumepagerep.jpg"} alt="" />
            </div>
            <span>
              <div class="text-center my-lg-4">
                <button class="btn btn-primary element-fullwidth" type="button" style={{ minWidth: "250px", minHeight: "50px" }}><Link to={'/jobs'}>GET IN TOUCH</Link></button>
              </div>
            </span>
            <ul className=' list-inline d-flex gap-4 justify-content-center'>
              <li className='list-inline-item'>
                <span className=' icons'><Facebook size={40} /></span>
              </li>
              <li className='list-inline-item'>
                <span className=' icons'><Twitter size={40} /></span>
              </li>
              <li className='list-inline-item'>
                <span className=' icons'><FaGooglePlus size={40} /></span>
              </li>
              <li className='list-inline-item'>
                <span className=' icons'><Linkedin size={40} /></span>
              </li>
            </ul>
            <ul className=' list-inline d-flex justify-content-center'>
              <li className=' list-inline-item'>
                <span><PhoneLandscape /></span>
                <span className=''> <>+234-70-62-300-213</></span>
              </li>

            </ul>
            <ul className=' list-inline d-flex justify-content-center gap-2'>
              <li className=' list-inline-item'>
                <span><Envelope /></span>
                <span className=''>EnexD@Yahoo.com</span>
              </li>

            </ul>
          </div>

          <div className='col-8'>
            <div className=' mb-4'>
              <h3>John Doe</h3>
              <p>Senior advisor for an independently owned financial planning company Intense</p>
            </div>
            <div className=' mb-4'>
              <p>John is a senior advisor for a number of financial planning companies. He has previously owned a financial consulting company in the USA with offices in multiple jurisdictions over the world. According to his own words, working as a financial advisor gives him the ability to advise international business clients living worldwide while also increasing his experience.</p>
            </div>
            <div className='fs-3 mb-4'>
              <p>
                My job is to help professionals achieve their financial goals whilst having adequate protection along the way. I do this by tailor making financial solutions that suit my clients' individual needs.</p>
            </div>
            <div className=' row justify-content-center py-lg-3'>
              <div className='col-6 col-md-3'>
                <a className='thumbnail' href='img/resume.jpg'>
                  <figure>
                    <span> <img src={"img/resume.jpg"} alt="" /></span>
                  </figure>
                </a>
              </div>
              <div className='col-6 col-md-3'>
                <a className='thumbnail' href='img/resume.jpg'>
                  <figure>
                    <span> <img src={"img/resume.jpg"} alt="" /></span>
                  </figure>
                </a>
              </div>
              <div className='col-6 col-md-3'>

                <a className='thumbnail' href='img/resume.jpg'>
                  <figure>
                    <span> <img src={"img/resume.jpg"} alt="" /></span>
                  </figure>
                </a>
              </div>
              <div className='col-6 col-md-3'>
                <a className='thumbnail' href='img/resume.jpg'>
                  <figure>
                    <span> <img src={"img/resume.jpg"} alt="" /></span>
                  </figure>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' container-fluid py-lg-5  bg-body-tertiary'>
        <div className=' container py-lg-5 '>
          <div className=' d-lg-flex justify-content-center gap-4 mb-3'>
            <div className=' col-1'>
              <div className=''>
                <span>2009</span>
              </div>
            </div>
            <span>
              <h5 className=' fw-semi-bold fs-5 '>Bestselling Author</h5>
              <p className='lead fs-6'>John is a #1 New York Times bestselling author. With more than 1 million copies collectively in print, his seven books on personal finance have been translated into several languages and educated countless people worldwide. The Truth About Money was recognized with an Excellence in Financial Literacy Education (EIFLE) Book of the Year Award from the Institute for Financial Literacy (March 2007), a Gold Medal Axiom Award (March 2008).</p>
            </span>
          </div>
          <div className=' d-lg-flex justify-content-center gap-4 mb-3'>
            <div className=' col-1'>
              <div className=''>
                <span>2015</span>
              </div>
            </div>
            <span>
              <h5 className='fw-semi-bold fs-5'>Award-Winning Host of Radio and Television Shows</h5>
              <p className=' fs-6 lead'>John's radio show has been on the air for more than 20 years and is heard throughout the country, enjoying more than 1 million listeners every week. In 2011, John was named among the "Heavy Hundred" in the radio industry by TALKERS magazine.</p>
            </span>
          </div>
          <div className=' d-lg-flex justify-content-center gap-4 mb-3'>
            <div className=' col-1'>
              <div className=''>
                <span>2016</span>
              </div>
            </div>
            <span>
              <h5 className='fw-semi-bold fs-5'>Award-Winning Educator</h5>
              <p className=' fs-6 lead'>john appears on stage frequently, talking to thousands of people every year, and is widely acknowledged as an entertaining and informative speaker. He has testified before Congress three times, participated in an SEC Roundtable and appointed by Presidents Bill Clinton and George W. Bush as a delegate to all three National Summits on Retirement Savings.</p>
            </span>
          </div>
          <div className=' d-lg-flex justify-content-center gap-4'>
            <div className=' col-1'>
              <div className=''>
                <span>2017</span>
              </div>
            </div>
            <span>
              <h5 className='fw-semi-bold fs-5'>Philanthropic Activities</h5>
              <p className=' fs-6 lead'>John is active in community service. He served five years on the board of the United Way of the National Capital Area, including two years as Chairman. He serves on the Southeast Board of The Boys and Girls Clubs of America, is a member of The Boys and Girls Clubs of Greater Washington Foundation Board and served on the BGCGW Metropolitan Board of Directors for seven years and serves on the BGCGW Leadership Council.</p>
            </span>
          </div>
        </div>
      </div>
      <div className='hero-section'>
        <div className='header-content text-center Container'>
          <div className='bg-success'>
            <div className='container section-98'>
              <div className='d-flex justify-content-sm-center gap-5'>
                <div className=''>
                  <p className='text-white fw-semibold fs-2'>Hire a professional financial advisor in a couple of clicks!</p>
                </div>
                <div className='my-4 my-lg-0'>
                  <button class="btn btn-warning element-fullwidth" type="button"
                    style={{ maxWidth: "170px", minWidth: "170px", minHeight: "50px" }}>GET IN TOUCH
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Resume