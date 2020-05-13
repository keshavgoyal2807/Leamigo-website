import React from 'react'
import '../../styles/footer.css'
import {MdLocalPhone,MdMail} from 'react-icons/md'
import {FiMail} from 'react-icons/fi'
import {FaMapMarkerAlt,FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube} from 'react-icons/fa'
import {Link} from 'react-router-dom'

class Footer extends React.Component{
    render()
    {
        return(
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-top-container">
                        <div className="footer-top-content">
                            <div className="f-contact-us">
                                <h3>contact us</h3>
                                <div className="f-cu-location f-cu-items">
                                    <FaMapMarkerAlt size={20} className="f-cu-icon"></FaMapMarkerAlt>
                                    <p>29 Land St, Lorem City, CA</p>
                                </div>
                                <div className="f-cu-mobile f-cu-items">
                                    <MdLocalPhone size={20} className="f-cu-icon"></MdLocalPhone>
                                    <p>+00 123 4567</p>
                                </div>
                                <div className="f-cu-mail f-cu-items">
                                    <FiMail size={20} className="f-cu-icon f-cu-mail-icon"></FiMail>
                                    <p>info@starhotel.com</p>
                                </div>
                            </div>
                            <div className="f-company">
                                <h3>company</h3>
                                <Link to="/" className="f-company-items" >home</Link>
                                <Link to="/" className="f-company-items" >flight</Link>
                                <Link to="/" className="f-company-items" >hotel</Link>
                                <Link to="/" className="f-company-items" >tours</Link>
                                <Link to="/" className="f-company-items" >cruise</Link>
                                <Link to="/" className="f-company-items" >cars</Link>
                            </div>
                            <div className="f-resources">
                                <h3>resources</h3>
                                <Link to="/" className="f-resources-items" >blogs</Link>
                                <Link to="/" className="f-resources-items" >contact us</Link>
                                <Link to="/" className="f-resources-items" >login</Link>
                                <Link to="/" className="f-resources-items" >register</Link>
                                <Link to="/" className="f-resources-items" >site map</Link>
                            </div>
                            <div className="f-about-us">
                                <h3>about us</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</p>
                                <div className="f-about-us-icons">
                                    <FaFacebookF size={20} className="f-about-us-icon"></FaFacebookF>
                                    <FaInstagram size={20} className="f-about-us-icon"></FaInstagram>
                                    <FaTwitter size={20} className="f-about-us-icon"></FaTwitter>
                                    <FaLinkedinIn size={20} className="f-about-us-icon"></FaLinkedinIn>
                                    <FaYoutube size={20} className="f-about-us-icon"></FaYoutube>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-container">
                        <div className="footer-bottom-content">
                            <div className="footer-bottom-item1">
                                <p>© 2017 <Link to="/" className="footer-bottom-link">StarTravel.</Link> All rights reserved.</p>
                            </div>
                            <div className="footer-bottom-item2">
                                <p> <Link to="/" className="footer-bottom-link">Terms & Condition</Link> | <Link to="/" className="footer-bottom-link">Privacy Policy</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer