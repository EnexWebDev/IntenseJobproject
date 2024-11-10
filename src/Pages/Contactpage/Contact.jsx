import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Calendar2, Clock, Facebook, Tag, Telephone, Twitter, Youtube, } from 'react-bootstrap-icons'
import Footer from '../../Footer/footer'
import { FaGooglePlus } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import Map, { Marker } from 'react-map-gl'
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';

const Contact = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError('Unable to retrieve location. Please enable location access.');
          console.error(error);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  }, []);
  const mapSrc = location.latitude && location.longitude
    ? `https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${location.latitude},${location.longitude}&zoom=14`
    : '';
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
                <div className='col-lg-12 text-center'>
                  <h1 className=' text-white fw-semibold lead display-1'>Contact Us </h1>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                      <li class="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                      <li class="breadcrumb-item active text-light" aria-current="page">Contact Us</li>
                    </ol>
                  </nav>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='row gap-5'>
          <div className='Contactpage py-lg-5 col-lg-8 col-12'>
            <div className=''>
              <h2 className='lead display-2 l text-light-emphasis mx-lg-0 mx-2'>Get In Touch</h2>

            </div>
            <div className=' container'>
              <div className=''>
                <p>You can contact us any way that is convenient for you. We are available 24/7 via fax, email or telephone. You can also use a quick contact form located on this page to ask a question about our services and current offers. We would be happy to answer your questions or offer any help.</p>
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
              <div class="py-5">
                <button class="btn btn-outline-success element-fullwidth fw-bolder shadow-lg" type="button"
                  style={{ maxWidth: "170px", minWidth: "170px", minHeight: "50px" }}>
                  SEND
                </button>
              </div>
            </div>
          </div>
          <div className='blog-search col '>
            <div className='py-lg-4'>
              <a className='my-5 text-success ' href=''>
                <p className=''>Social</p>
                <p className='hr-gradient' />
                <ul className=' list-inline gap-2 d-flex'>
                  <li className='list-inline-item'>
                    <span className='icons'><Facebook size={40} /></span>

                  </li>
                  <li className=' list-inline-item'>
                    <span className='icons'><Twitter size={40} /></span>
                  </li>

                  <li className=' list-inline-item'>
                    <span className='icons'><FaGooglePlus size={40} /></span>
                  </li>
                  <li className=' list-inline-item'>
                    <span className='icons'><Youtube size={40} /></span>
                  </li>
                </ul>
              </a>
              <div className='Categories py-lg-4'>
                <p>Phones</p>
                <hr className='hr-gradient' />
                <ul className=' list-inline text-success '>
                  <li className=' list-inline-item'>
                    <span className='icons'><Telephone /></span>
                    <span className='icons'>1-800-1234-567</span>
                  </li>
                </ul>
              </div>
              <div className='Categories py-lg-4'>
                <p>Address</p>
                <hr className='hr-gradient' />
                <ul className=' list-inline'>
                  <li className=' list-inline-item'>
                    <span className='icons'><FaLocationPin /></span>
                    <span>
                      455 Sasha Rd, Off Dopemu D04 Block 8D
                    </span>
                  </li>
                </ul>
              </div>
              <div className='py-lg-4'>
                <p>Open Hours</p>
                <hr className='hr-gradient' />
                <ul className='list-inline'>
                  <li className='  list-inline-item'>
                    <span className='icons'><Clock /></span>
                    <span>Monday–Friday: 9:00am–6:00pm</span>
                    <div>Saturday:8:00am–6:00pm</div>
                    <span>Sundat:11:00am–6:00pm</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        {error && <p>{error}</p>}
        {mapSrc ? (
          <iframe
            title="User Location Map"
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        ) : (
          <p>Loading map...</p>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Contact