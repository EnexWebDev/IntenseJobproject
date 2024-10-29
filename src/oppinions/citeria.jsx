import React from 'react'
import { MdAccountBox } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { FaChartBar } from "react-icons/fa";
import { MdOutlineNewspaper } from "react-icons/md";
import Carrer from '../Carrer_page/Carrer';
const Citeria = () => {
  return (
    <div>
      <div className=' container-fluid bg-body-secondary py-5'>
        <div className='text-center py-5'>
          <h2 className='lead display-5 opacity-100 fw-bold'> Why People Choose Us</h2>
          <p className="divider border-black" />
        </div>
        <div className=' container-fluid'>
          <div className='justify-content-center text-start row align-items-center '>
            <div className='col-lg-4  text-center text-lg-start'>
              <div className=' d-lg-flex gap-3 align-items-center py-4'>
                <span><MdAccountBox size={40} /></span>
                <h5 className='text-uppercase fw-bold'>Verified employers</h5>
              </div>
              <p className='lead fs-6 opacity-50'>We e contains only the most demanded vacancies from American and international companies with offices in the US.</p>
            </div>
            <div className='col-lg-4  text-center text-lg-start'>
              <div className=' d-lg-flex gap-3 align-items-center py-4'>
                <span><FaChartBar size={40} /></span>
                <h5 className='text-uppercase fw-bold'>Demanded Vacancies</h5>
              </div>
              <p className='lead fs-6 opacity-50'>Our catalog contains only the most demanded vacancies from American and international companies with offices in the US.</p>
            </div>

            <div className='col-lg-4  text-center text-lg-start'>
              <div>
                <div className='d-lg-flex gap-3 align-items-center py-4'>
                  <span><MdOutlineNewspaper size={40} /></span>
                  <h5 className='text-uppercase fw-bold'>Employment Blog</h5>
                </div>
                <p className='lead fs-6 opacity-50 '>We have recently launched our employment blog where we review top
                  rated vacancies and give useful advice to our readers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carrer/>
    </div>
  )
}

export default Citeria