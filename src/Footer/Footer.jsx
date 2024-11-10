import React from 'react'
import './Footer.css'
import { FaEnvelope, FaAddressCard, FaPhoneSlash, FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdConstruction, MdHealthAndSafety } from 'react-icons/md'
import { BriefcaseFill, TruckFlatbed } from 'react-bootstrap-icons'
import { PiFootballDuotone } from 'react-icons/pi'
import { GiFoodChain } from 'react-icons/gi'
const Footer = () => {
    return (
        <footer className='ontainer'>
            <div className='footer_container footer-columns'>
                <div className='wrapper  py-lg-5 ' >
                    <div className='footer_tab1 colum'>
                        <img src={"img/logo.png"} alt="" />
                        <div class="d-lg-flex gap-5 ">
                            <div class=" container-lg d-flex gap-4 py-4 ">
                                <a href="https://web.facebook.com/UberSSA/?brand_redir=120945717945722&uclick_id=caba91ac-c5ae-47d5-8586-2f852fb7ac0f" id="" target='blank' className='text-light text-white link-success link-underline link-underline-opacity-25 link-underline-opacity-75-hover fw-light'>
                                    <FaFacebook size={20} />
                                </a>

                                <a href="https://www.youtube.com/channel/UCgnxoUwDmmyzeigmmcf0hZA?uclick_id=caba91ac-c5ae-47d5-8586-2f852fb7ac0f" className='text-light link-success link-underline link-underline-opacity-0 link-underline-opacity-75-hover fw-light' target='blank'>
                                    <FaYoutube size={20} />
                                </a>
                                <a href="https://x.com/uber?uclick_id=caba91ac-c5ae-47d5-8586-2f852fb7ac0f&mx=2" className='text-light text-white link-success link-underline link-underline-opacity-0 link-underline-opacity-75-hover fw-light' target='blank'>
                                    <FaTwitter size={20} />
                                </a>
                                <a href="https://www.instagram.com/uber/?uclick_id=caba91ac-c5ae-47d5-8586-2f852fb7ac0f" className='text-light text-success link-success link-underline link-underline-opacity-0 link-underline-opacity-75-hover fw-light' target='blank'>
                                    <FaInstagram size={20} />
                                </a>
                                <a href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F1815218%3Fuclick_id%3Dcaba91ac-c5ae-47d5-8586-2f852fb7ac0f" target='blank' className='text-light text-white link-success link-underline link-underline-opacity-0 link-underline-opacity-75-hover fw-light'>
                                    <FaLinkedin size={20} />
                                </a>
                            </div>

                        </div>
                        <div className='copy_right opacity-25'>
                            <p>©Intense JB © 2024. Privacy Policy</p>
                        </div>
                    </div>
                    <div className='footer_tab2  column'>
                        <h2>Newsletter</h2>
                        <p>Keep up with our always upcoming news and updates. Enter your e-mail and subscribe to our newsletter.</p>
                        <form action="">
                            <div class="mb-4 input-group">
                                <span class="input-group-text bg-success border">
                                    <FaEnvelope />
                                </span>
                                <input type="email" className="form-control" id="email" placeholder="E-mail" />
                                <button class="input-group-text bg-success w">
                                    <span className="tt " data-bs-placement="right"
                                        title="Enter an email address we can reply to">
                                        <small className='fs-6'>SUBSCRIBE</small>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <a className='footer_tab3  column' href=''>
                        <h2> Cities</h2>
                        <div className=''>
                            <ul className=' list-inline'>
                                <li id="" className='list-inline-item'>
                                    <span className=' text-success'>New York</span>

                                </li>
                                <li id="" className='list-inline-item'>
                                    <span className=' text-success'>Los Angeles</span>
                                </li>
                                <li id="" className='list-inline-item'>
                                    <span className='text-success'>Washington</span>
                                </li>
                            </ul>

                        </div>

                    </a>
                    <div className='footer_tab4  column'>
                        <h2>Categories</h2>

                        <p class=""><i><MdHealthAndSafety/></i> Healthcare</p>
                        <p class=""><i><TruckFlatbed /></i> Automobile Jobs</p>
                        <p class=""><i><GiFoodChain/></i> Food Services</p>
                        <p class=""><i><MdConstruction/></i> Construction Logistics</p>
                        <p class=""><i><BriefcaseFill/></i> Finance</p>

                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer