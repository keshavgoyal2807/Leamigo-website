import React from 'react'
import {FaMapMarkerAlt,FaPhone,FaLock,FaPlus,FaDollarSign,FaAngleDown} from 'react-icons/fa'
import '../styles/header.css'


class Header extends React.Component{
    render()
    {
        return(
            <div className="header">
                <div className="contact">
                    <div className="address">
                        <div className="header-icon"><FaMapMarkerAlt size={12} color={'white'}></FaMapMarkerAlt></div>
                        <p>29 Land St, Lorem City, CA</p>
                    </div>
                    <div className="phone">
                        <div className="header-icon"><FaPhone size={12} color={'white'}></FaPhone></div>
                        <p>+00 1234567890</p>
                    </div>
                </div>
                <div className="details">
                    <div className="user">
                        <div className="login">
                            <div className="header-icon"><FaLock size={12} color={'white'}></FaLock></div>
                            <p>Login</p>
                        </div>
                        <div className="signup">
                            <div className="header-icon"><FaPlus size={12} color={'white'}></FaPlus></div>
                            <p>Signup</p>
                        </div>
                    </div>
                    <div className="units">
                        <div className="currency">
                            <select className="curr-types">
                                <option value={'Dollar'}>$</option>
                                <option value={'Euro'}>$</option>
                            </select>
                            <div className="select-icon"><FaAngleDown color={'white'} size={10}></FaAngleDown></div>
                        </div>
                        <div className="language">
                            <select className="lang-types">
                                <option value={'English'}>EN</option>
                                <option value={'English'}>EN</option>
                                <option value={'English'}>EN</option>
                            </select>
                            <div className="select-icon"><FaAngleDown color={'white'} size={10}></FaAngleDown></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header