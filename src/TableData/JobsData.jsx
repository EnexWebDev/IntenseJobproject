import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import { FaGolfBallTee } from "react-icons/fa6";
import { PiTidalLogoDuotone } from "react-icons/pi";
import Footer from '../Footer/Footer';

const JobsData = () => {
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
                                <div className='col-lg-8 text-center'>
                                    <h1 className=' text-white fw-semibold lead display-1'>Find a Job</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb justify-content-center">
                                            <li class="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                            <li class="breadcrumb-item active text-light" aria-current="page">Find a job</li>
                                        </ol>
                                    </nav>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form className=''>
                <div className='bg-success py-5'>
                    <div className='d-lg-flex justify-content-center gap-lg-3 gap-sm-2'>
                        <div className=' col-lg-3  px-4 px-lg-0' style={{ maxWidth: "352px" }} >
                            <div className='form-floating mb-3'>
                                <input type="text" class="form-control" id="floatingInput" placeholder="Job title, skills, or company" />
                                <label for="floatingInput" className=' text-success '>KeyWords</label>
                            </div>
                        </div>
                        <div className='col-lg-4  px-4' style={{ maxWidth: "352px" }}>
                            <div className='form-floating mb-3'>
                                <input type="text" class="form-control" id="floatingInput" placeholder="Job title, skills, or company" />
                                <label for="floatingInput" className=' text-success '>Location </label>
                            </div>
                        </div>
                        <div className=''>
                            <div class=" col-lg-4  px-4" style={{ maxWidth: "", minWidth: "300px", }}>
                                <div class="form-group mb-3">
                                    <select class="form-control py-3 form-select    " id="form-filter-location" aria-label=".form-select-lg example">
                                        <i></i>
                                        <option value="1">Any Category</option>
                                        <option value="2">New York</option>
                                        <option value="3">Missouri</option>
                                        <option value="4">Los Angeles</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>

                        <div class=" text-center d-lg-block d-none">
                            <button class="btn btn-warning element-fullwidth" type="button"
                                style={{ maxWidth: "352px", minWidth: "170px", minHeight: "50px" }}>Find
                                Job</button>
                        </div>
                    </div>
                    <div className=' container col-lg-8 text-center py-3'>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label class="form-check-label" for="inlineCheckbox1">Freelance</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label class="form-check-label" for="inlineCheckbox2">Full Time </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label class="form-check-label" for="inlineCheckbox2">Intership </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label class="form-check-label" for="inlineCheckbox2">Part Time </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label class="form-check-label" for="inlineCheckbox2">Temporary </label>
                        </div>
                    </div>
                    <div class=" text-center d-lg-none py-2">
                        <button class="btn btn-primary element-fullwidth" type="button"
                            style={{ maxWidth: "352px", minWidth: "170px", minHeight: "50px" }}>Find
                            Job</button>
                    </div>
                </div>
            </form>

            <div className='container-fluid py-5 JobsData overflow-auto'>
                <h3 className=' lead display-5 text-center '>Latest Jobs</h3>
                <p className="divider border-black" />
                <div className='py-5'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Date</th>
                                <th scope="col">Company</th>
                                <th scope="col">Job vacancy</th>
                                <th scope="col">City</th>
                                <th scope="col">Salary</th>
                                <th scope="col">Employment</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"><FaFireAlt color='red' size={20} /></th>
                                <td>11.05.2018, 4:16pm</td>
                                <td><img src={"img/Sticker1.png"} alt="" /></td>
                                <td>Head Manager</td>
                                <td>New York</td>
                                <td>$6000</td>
                                <td>Full time</td>

                            </tr>
                            <tr>
                                <th scope="row"><FaFireAlt color='orange ' size={20} /></th>
                                <td>14.05.2018, 7:16pm</td>
                                <td><img src={"img/Sticker2.png"} alt="" /></td>
                                <td>Head Manager</td>
                                <td>San Diego</td>
                                <td>$4000</td>
                                <td>Full time</td>
                            </tr>
                            <tr>
                                <th scope="row"><MdOutlineAirplanemodeActive color='blue' size={20} /></th>
                                <td>1.05.2018, 5:16pm</td>
                                <td><img src={"img/Sticker3.png"} alt="" /></td>
                                <td>Front End Developer</td>
                                <td>Seattle</td>
                                <td>$7000</td>
                                <td>Full time</td>
                            </tr>
                            <tr>
                                <th scope="row"><FaGolfBallTee size={20} /></th>
                                <td>12.05.2018, 2:16pm</td>
                                <td><img src={"img/Sticker4.png"} alt="" /></td>
                                <td>Js Developer</td>
                                <td>Miami	</td>
                                <td>$3500</td>
                                <td>Full time</td>
                            </tr>
                            <tr>
                                <th scope="row"><PiTidalLogoDuotone color='Yellow' size={20} /></th>
                                <td>11.05.2018, 4:16pm</td>
                                <td><img src={"img/Sticker1.png"} alt="" /></td>
                                <td>Philadelphia	</td>
                                <td>Saettle</td>
                                <td>$2000</td>
                                <td>Full time</td>
                            </tr>
                            <tr>
                                <th scope="row"><PiTidalLogoDuotone color='Yellow' size={20} /></th>
                                <td>11.05.2018, 4:16pm</td>
                                <td><img src={"img/Sticker4.png"} alt="" /></td>
                                <td>Journalist</td>
                                <td>Dallas</td>
                                <td>$2000</td>
                                <td>Full time</td>
                            </tr>
                            <tr>
                                <th scope="row"><PiTidalLogoDuotone color='Yellow' size={20} /></th>
                                <td>11.05.2018, 4:16pm</td>
                                <td><img src={"img/Sticker1.png"} alt="" /></td>
                                <td>Director of Photography</td>
                                <td>Chicago</td>
                                <td>$2000</td>
                                <td>Full time</td>
                            </tr>
                            <tr>
                                <th scope="row"><PiTidalLogoDuotone color='Yellow' size={20} /></th>
                                <td>11.05.2018, 4:16pm</td>
                                <td><img src={"img/Sticker3.png"} alt="" /></td>
                                <td>Bus Driver</td>
                                <td>Washington</td>
                                <td>$2000</td>
                                <td>Full time</td>
                            </tr>
                            <tr>
                                <th scope="row"><PiTidalLogoDuotone color='Yellow' size={20} /></th>
                                <td>11.05.2018, 4:16pm</td>
                                <td><img src={"img/Sticker4.png"} alt="" /></td>
                                <td>Coach</td>
                                <td>New Orleans</td>
                                <td>$2000</td>
                                <td>Full time</td>
                            </tr>
                            <tr>
                                <th scope="row"><PiTidalLogoDuotone color='Yellow' size={20} /></th>
                                <td>11.05.2018, 4:16pm</td>
                                <td><img src={"img/Sticker2.png"} alt="" /></td>
                                <td>Writer</td>
                                <td>Boston</td>
                                <td>$2000</td>
                                <td>Full time</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="py-5 text-center">
                        <button class="btn btn-warning element-fullwidth" type="button"
                            style={{ maxWidth: "170px", minWidth: "170px", minHeight: "50px" }}>VIEW
                            MORE </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default JobsData