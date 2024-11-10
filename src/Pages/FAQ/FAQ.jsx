import React from 'react'
import { Link } from 'react-router-dom'
const FAQ = () => {
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
                                    <h1 className=' text-white fw-semibold lead display-1'>FAQ</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb justify-content-center">
                                            <li class="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                            <li class="breadcrumb-item active text-light" aria-current="page">FAQ</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className=' text-center my-lg-5'>
                    <h2 className=' fw-bold display-5 lead'>General Questions
                        <p className=' text-start divide border-black'></p>
                    </h2>
                </div>

                <div className='row my-5 justify-content-around align-items-center'>
                    <div className='col-lg-6 mb-3'>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        HOW CAN I LEARN ABOUT OPEN POSITIONING MY WEBSITE
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show bg-body-tertiary" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>The fastest way to acquire information about our current positions is to use our vacancy catalog located on our website.</strong> It is updated daily and contains only the most called-for positions submitted by industry leading companies and international corporations. You can find out more information about them in our database. <code>Intense_board</code>,
                                        <div>
                                            <a href={"/"}>
                                                <img src={"img/logo (1).png"} alt="" className=' text-black' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        CAN I SEND MY RESUME VIA E-MAIL TO THE EMPLOYER
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        If you have your resume as a text file, you can attach it to the employer contact form without being registered as a client on our website. This is the fastest way to apply for a job you select on Intense job board. If you would like to receive additional benefits, please consider registering and uploading your resume to our database.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        WHAT SHOULD I DO IF I CANNOT ACCESS MY VACANCY DATABASE
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        In case our website is unavailable and you cannot access our database of employers and vacancies, contact our managers using our phone number. You can also visit our central office to fill out the registration form and publish your resume via our terminals. Our administrators will be glad to help you with any issue you may have.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        HOW CAN I APPLY FOR A CHOSEN POSITION
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        To apply for any vacancy listed on Intense website, you must have a resume in a Microsoft Word format with a valid e-mail address and mobile phone number. If you use any of the modern social networks, you can become our registered user in a few moments and easily contact the chosen employer or read vacancy details.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-6 col-lg-6'>
                        <div>
                            <img src={"img/faq-site.webp"} alt="" className=' img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ