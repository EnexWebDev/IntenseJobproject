import React from 'react'
import { Link } from 'react-router-dom'

const Projectmanger = () => {
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
                                    <h1 className=' text-white fw-semibold lead display-1'>Project Managers</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb justify-content-center">
                                            <li class="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                            <li class="breadcrumb-item active text-light" aria-current="page">Job Page </li>
                                            <li class="breadcrumb-item active text-light" aria-current="page">Houshold Page</li>
                                            <li class="breadcrumb-item active text-light" aria-current="page">Project Managers </li>
                                        </ol>
                                    </nav>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projectmanger