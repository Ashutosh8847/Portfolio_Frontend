import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css"
import { SlUserFollow } from "react-icons/sl";
import { RiUserFollowFill } from "react-icons/ri";
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footerContainer' style={{ height: "500px" }}>
            <h2 style={{ textAlign: "center", marginTop: "50px" }}><b> <span style={{ marginRight: "10px" }}><RiUserFollowFill /></span>FOLLOW ME</b><hr /></h2>
            <div div className='icons' style={{ backgroundColor: "whitesmoke", paddingLeft: "30px", paddingRight: "30px", borderRadius: "20px", height: "400px" }}>
                <h3 style={{ textAlign: "center", marginTop: "20px", paddingTop: "20px" }}><b>Get In Touch</b></h3>
                <h4 style={{ textAlign: "center", marginTop: "20px" }}><FaPhoneAlt /><b>(+91) 884-786-7700</b></h4>
                <h4 style={{ textAlign: "center", marginTop: "20px", marginLeft: "-20px", color: "black" }}><a style={{ color: "black" }} href="mailto:ashutoshpattanayak444@gmail.com"><MdEmail /><b>ashutoshpattanayak444@gmail.com</b></a></h4>
                <h4 style={{ textAlign: "center", marginTop: "20px" }}> <a style={{ color: "black" }} href="https://www.google.com/maps/place/Hyderabad,+Telangana,+India" target="_blank" rel="noopener noreferrer"><MdLocationOn /><b>Hyderabad, Telangana, India</b></a></h4>

                <div className='iconpic' style={{ marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "25px", paddingLeft: "30px", paddingRight: "30px" }}>
                    <span>
                        <Link><FaFacebook className='icon' /></Link>
                        <Link><FaTwitter className='icon' style={{ marginLeft: "20px" }} /></Link>
                        <Link><FaInstagram className='icon' style={{ marginLeft: "20px" }} /></Link>
                        <Link to={`https://github.com/Ashutosh8847`} target='_blank'> <FaGithub className='icon' style={{ marginLeft: "20px" }} /></Link>
                        <Link to={`https://www.linkedin.com/in/ashutosh-pattanayak-4b06a3214`} target='_blank'><FaLinkedin className='icon' style={{ marginLeft: "20px" }} /></Link>
                    </span>
                </div>
                <h4 style={{ textAlign: "center", marginTop: "20px", fontSize: "20px" }}><b>Copyright © 2023 All rights reserved.</b></h4>
            </div>



        </div>
    )
}

export default Footer
