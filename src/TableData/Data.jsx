import React from 'react'
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import { FaGolfBallTee } from "react-icons/fa6";
import { PiTidalLogoDuotone } from "react-icons/pi";
import Citeria from '../oppinions/citeria';
import { Link } from 'react-router-dom';
const Data = () => {
    return (
        <>
            <div className='container-fluid py-5  jobsData overflow-auto'>
                <h3 className=' lead display-5 text-center '>Latest Jobs</h3>
                <p className="divider border-black" />
                <div className='py-5' >
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
                                <td>Developer</td>
                                <td>New York</td>
                                <td>$6000</td>
                                <td>Full time</td>

                            </tr>
                            <tr>
                                <th scope="row"><FaFireAlt color='orange ' size={20} /></th>
                                <td>14.05.2018, 7:16pm</td>
                                <td><img src={"img/Sticker2.png"} alt="" /></td>
                                <td>Project Manager</td>
                                <td>San Diego</td>
                                <td>$4000</td>
                                <td>Full time</td>
                            </tr>
                            <tr>
                                <th scope="row"><MdOutlineAirplanemodeActive color='blue' size={20} /></th>
                                <td>1.05.2018, 5:16pm</td>
                                <td><img src={"img/Sticker3.png"} alt="" /></td>
                                <td>Js programmer</td>
                                <td>Dallas</td>
                                <td>$7000</td>
                                <td>Full time</td>
                            </tr>
                            <tr>
                                <th scope="row"><FaGolfBallTee size={20} /></th>
                                <td>12.05.2018, 2:16pm</td>
                                <td><img src={"img/Sticker4.png"} alt="" /></td>
                                <td>Truck Driver</td>
                                <td>San Fransico</td>
                                <td>$3500</td>
                                <td>Full time</td>
                            </tr>
                            <tr>
                                <th scope="row"><PiTidalLogoDuotone color='Yellow' size={20} /></th>
                                <td>11.05.2018, 4:16pm</td>
                                <td><img src={"img/Sticker1.png"} alt="" /></td>
                                <td>Developer</td>
                                <td>Saettle</td>
                                <td>$2000</td>
                                <td>Full time</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="py-5 text-center">
                        <button class="btn btn-primary element-fullwidth" type="button" style={{ maxWidth: "170px", minWidth: "170px", minHeight: "50px" }}><Link to={'/jobs'}>View All</Link></button>
                    </div>
                </div>
            </div>
           <Citeria/>
        </>

    )
}

export default Data