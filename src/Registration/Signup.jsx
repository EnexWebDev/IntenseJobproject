import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/footer'
import "./Login.css"
const Signup = () => {
  return (
    <div>
      <div>
        <div className='hero-section'>
          <div className='hero-content'>
            <img src={"img/Quiz.jpg"} alt="img not found" />
          </div>
          <div className='header-content text-center Container'>
            <div className='bg-overlay-gray-darkest'>
              <div className='container section-98'>
                <div className='row justify-content-sm-center align-items-lg-center'>
                  <div className='py-lg-5 text-center'>
                    <h1 className=' text-white fw-bold lead display-2'>Login or Registration</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                        <li className="breadcrumb-item active text-light" aria-current="page">Login or Registration</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='sign_in  m-auto w-50 mt-5 px-4  py-lg-5'>
          <div className=' container'>
            <h3 className='lead display-5 opacity-100  text-lg-center fw-bold'> Sign In</h3>
            <p className="divider border-black" />

            <div className=' tab-class text-center' data-wow-delay="0.1s">
              <ul className=' nav nav-pills d-inline-flex justify-content-center'>
                <div className='d-flex gap-4 py-lg-4'>
                  <li className=' nav-item'>
                    <a className='active text-decoration-none nav-link' data-bs-toggle="pill" href='#tab-1'>
                      <h2 className='lead fs-4'> Login</h2>
                    </a>
                  </li>
                  <h1>/</h1>
                  <li className=' nav-item'>
                    <a className=' text-decoration-none nav-link' data-bs-toggle="pill" href='#tab-2'>
                      <h2 className='lead fs-4'>SignUp </h2>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
            <form className='tab-content'>
              <div id='tab-1' className=' tab-pane fade show p-0 active'>
                <div>
                  <label className=' form-label'>Name:</label>
                  <div className="mb-4">
                    <input type="email" className="form-control"></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="" className='form-label'>Email:</label>
                  <div className="mb-4">
                    <input type="email" name='email' className="form-control mail-validation" placeholder='input your email' required></input>
                  </div>
                </div>
                <div>
                  <label className='form-label'>Password:</label>
                  <div className="mb-4">
                    <input type='password' className="form-control"></input>
                  </div>
                </div>
                <div>
                  <label className='form-label'>Confirm Password:</label>
                  <div className="mb-3">
                    <input type="email" className="form-control"></input>
                  </div>
                </div>
                <div className=' py-4'>
                  <button className="btn btn-primary py-lg-3 w-100" style={{}}>
                    <span className='lead fs-4'>SIGN IN</span>
                  </button>
                </div>
              </div>
              <div id='tab-2' className=' tab-pane fade show p-0 '>
                <div>
                  <div className="mb-4">
                    <label className=' form-label'>Username or e-mail:</label>
                    <input type="email" className="form-control"></input>
                  </div>
                </div>

                <div className="mb-4">
                  <label className='form-label'>Password:</label>
                  <input type='password' className="form-control"></input>
                </div>
                <div className=' py-4'>
                  <button className="btn btn-primary py-lg-3 w-100" style={{}}>
                    <span className='lead fs-4'>SIGN IN</span>
                  </button>
                </div>
              </div>
            </form>
          </div>


        </div>
        <Footer />
       
      </div>
    </div>
  )
}

export default Signup