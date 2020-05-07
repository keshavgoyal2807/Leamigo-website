import React from 'react'
import {MdFlight,MdClose} from 'react-icons/md'
import {FaAngleDown,FaSearch,FaHome} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'
import '../styles/navbar.css'

class Navbar extends React.Component{
    showinneritems = (e)=>{
        // console.log(e)
        document.querySelectorAll('.sidebar-inner')[e].classList.toggle('sidebar-inner-show')
    }
    showsidenavbar = ()=>{
        // console.log(document.querySelector('.main-nav-items-sidebar'))
        document.querySelector('.main-nav-items-sidebar').classList.add('main-nav-items-sidebar-show')
    }
    closesidenavbar = ()=>{
        document.querySelector('.main-nav-items-sidebar').classList.remove('main-nav-items-sidebar-show')
    }
    render()
    {
        return(
            <div className="main-nav-bar">
                <div className="main-nav-bar-logo">
                    <MdFlight size={25} color={'orange'}></MdFlight>
                    <h1>STARTRAVELS</h1>
                </div>
                <div className="main-nav-items-desktop">
                    <ul>
                        <li>
                            <div className="home-icon">
                                <p>HOME</p>
                                <FaAngleDown size={20}></FaAngleDown>
                            </div>
                        </li>
                        <li>
                            <div className="home-icon">
                                <p>HOME</p>
                                <FaAngleDown size={20}></FaAngleDown>
                            </div>
                        </li>
                        <li>
                            <div className="home-icon">
                                <p>HOME</p>
                                <FaAngleDown size={20}></FaAngleDown>
                            </div>
                        </li>
                        <li>
                            <div className="home-icon">
                                <p>HOME</p>
                                <FaAngleDown size={20}></FaAngleDown>
                            </div>
                        </li>
                        <li>
                            <div className="home-icon">
                                <p>HOME</p>
                                <FaAngleDown size={20}></FaAngleDown>
                            </div>
                        </li>
                        <li>
                            <div className="home-icon">
                                <p>HOME</p>
                                <FaAngleDown size={20}></FaAngleDown>
                            </div>
                        </li>
                        <li>
                            <div className="home-icon">
                                <p>HOME</p>
                                <FaAngleDown size={20}></FaAngleDown>
                            </div>
                        </li>
                        <li>
                            <div className="home-icon">
                                <p>HOME</p>
                                <FaAngleDown size={20}></FaAngleDown>
                            </div>
                        </li>
                    </ul>
                    <div className="search-icon">
                        <FaSearch size={30}></FaSearch>
                    </div>
                </div>
                <div className="main-nav-items-mobile">
                    <div className="search-icon">
                        <FaSearch size={30}></FaSearch>
                    </div>
                    <div className="main-navopen-icon" onClick={this.showsidenavbar}>
                        <GoThreeBars size={30}></GoThreeBars>
                    </div>
                </div>
                <div className="main-nav-items-sidebar">
                    <div className="sidebar-header">
                        <MdFlight size={35} className="side-bar-logo-icon"></MdFlight>
                        <h1>STARTRAVELS</h1>
                        <MdClose size={35} className="sside-bar-logo-icon" onClick={this.closesidenavbar}></MdClose>
                    </div>
                    <div className="sidebar-items">
                    <div className="sidebar-item">
                            <div className="sidebar-main" onClick={()=>{
                                this.showinneritems(0)
                            }}>
                                <div className="sidebar-item-name">
                                    <FaHome size={20} className="sidebar-item-logo"></FaHome>
                                    <p>HOME</p>
                                </div>
                                <FaAngleDown size={20} className="sidebar-home-down-icon"></FaAngleDown>
                            </div>
                            <div className="sidebar-inner">
                                <ul>
                                    <li><p>MainPage</p></li>
                                    <li><p>MainPage</p></li>
                                    <li><p>MainPage</p></li>
                                    <li><p>MainPage</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-main" onClick={()=>{
                                this.showinneritems(1)
                            }}>
                                <div className="sidebar-item-name">
                                    <FaHome size={20} className="sidebar-item-logo"></FaHome>
                                    <p>HOME</p>
                                </div>
                                <FaAngleDown size={20} className="sidebar-home-down-icon"></FaAngleDown>
                            </div>
                            <div className="sidebar-inner">
                                <ul>
                                    <li><p>MainPage</p></li>
                                    <li><p>MainPage</p></li>
                                    <li><p>MainPage</p></li>
                                    <li><p>MainPage</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-main" onClick={()=>{
                                this.showinneritems(2)
                            }}>
                                <div className="sidebar-item-name">
                                    <FaHome size={20} className="sidebar-item-logo"></FaHome>
                                    <p>HOME</p>
                                </div>
                                <FaAngleDown size={20} className="sidebar-home-down-icon"></FaAngleDown>
                            </div>
                            <div className="sidebar-inner">
                                <ul>
                                    <li><p>MainPage</p></li>
                                    <li><p>MainPage</p></li>
                                    <li><p>MainPage</p></li>
                                    <li><p>MainPage</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-main" onClick={()=>{
                                this.showinneritems(3)
                            }}>
                                <div className="sidebar-item-name">
                                    <FaHome size={20} className="sidebar-item-logo"></FaHome>
                                    <p>HOME</p>
                                </div>
                                <FaAngleDown size={20} className="sidebar-home-down-icon"></FaAngleDown>
                            </div>
                            <div className="sidebar-inner">
                                <ul>
                                    <li><p>MainPage</p></li>
                                    <li><p>MainPage</p></li>
                                    <li><p>MainPage</p></li>
                                    <li><p>MainPage</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-main" onClick={()=>{
                                this.showinneritems(4)
                            }}>
                                <div className="sidebar-item-name">
                                    <FaHome size={20} className="sidebar-item-logo"></FaHome>
                                    <p>HOME</p>
                                </div>
                                <FaAngleDown size={20} className="sidebar-home-down-icon"></FaAngleDown>
                            </div>
                            <div className="sidebar-inner">
                                <ul>
                                    <li><p>MainPage</p></li>
                                    <li><p>MainPage</p></li>
                                    <li><p>MainPage</p></li>
                                    <li><p>MainPage</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-main" onClick={()=>{
                                this.showinneritems(5)
                            }}>
                                <div className="sidebar-item-name">
                                    <FaHome size={20} className="sidebar-item-logo"></FaHome>
                                    <p>HOME</p>
                                </div>
                                <FaAngleDown size={20} className="sidebar-home-down-icon"></FaAngleDown>
                            </div>
                            <div className="sidebar-inner">
                                <ul>
                                    <li><p>MainPage</p></li>
                                    <li><p>MainPage</p></li>
                                    <li><p>MainPage</p></li>
                                    <li><p>MainPage</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;