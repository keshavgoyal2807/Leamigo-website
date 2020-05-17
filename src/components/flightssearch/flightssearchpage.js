import React from 'react'
import '../../styles/flightsearchpage.css'
import Moment from 'react-moment';
import {FaHotel,FaSuitcase,FaShip,FaCar,FaMapMarkerAlt,FaRegCalendarAlt,FaAngleDown, FaRoad,FaArrowsAltH, FaFilter} from 'react-icons/fa'
import {MdArrowBack} from 'react-icons/md'
import {IoIosArrowRoundForward} from 'react-icons/io'
import FlightSearchPageDesktopFilter from './flightsearchpagedesktopfilter';
import FlightSearchPageMobileFilter from './flightsearchpagemobilefilter';
import FLightSearchPageFlightPricesDays from './flightsearchpageflightpricesdays';


class FlightSearchPage extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            flight:{
                src:props.flight.location.state.flight.src,
                dest:props.flight.location.state.flight.dest,
                dep:props.flight.location.state.flight.dep,
                arr:props.flight.location.state.flight.arr,
                adults:props.flight.location.state.flight.adults,
                depdate:"",
                depmon:"",
                depyear:""
            }
        }
        this.month_short = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    }

    mobilefilteropen = ()=>{
        console.log('enter')
        console.log(document.getElementsByClassName('flight-search-page-mobile-filter')[0].classList)
        document.getElementsByClassName('flight-search-page-mobile-filter')[0].classList.add('flight-search-page-mobile-filter-open')
    }

    componentDidMount = ()=>{
        if(this.props.flight.location.state)
        {

            this.setState((prev_state)=>{
                return(
                    {
                        ...prev_state,
                        flight:{
                            ...prev_state.flight,
                            depdate: new Date(prev_state.flight.dep).getDate(),
                            depmon: new Date(prev_state.flight.dep).getMonth(),
                            depyear: new Date(prev_state.flight.dep).getFullYear()
                        }
                    }
                )
            })
        }
    }

    render()
    {
        return(
            <div className="flight-search-page-main">
                <div className="flight-search-page-top-bar">
                    <div className="flight-search-page-desktop-searchbar">
                    <form className="flight-search-page-flight-form">
                        <div className="flight-search-page-flight-src-and-dest">
                            <div className="flight-search-page-flight-source">
                                <input type="text" className="input-field"  value={this.state.flight.src} onChange={(e)=>{this.flight.src=e.target.value}}></input>
                                <FaMapMarkerAlt size={15} className="flight-search-page-search-bars-icon"></FaMapMarkerAlt>
                            </div>
                            <div className="flight-search-page-flight-destination">
                                <input type="text" className="input-field" placeholder="TO" value={this.state.flight.dest} onChange={(e)=>{this.flight.dest=e.target.value}}></input>
                                <FaMapMarkerAlt size={15} className="flight-search-page-search-bars-icon"></FaMapMarkerAlt>
                            </div>
                        </div>
                        <div className="flight-search-page-flight-check-in-out">
                            <div className="flight-search-page-flight-check-in">
                                <input type="date" className="input-field input-field-date" placeholder="CHECK IN" value={this.state.flight.dep} onChange={(e)=>{this.flight.dep=e.target.value}} ></input>
                                <FaRegCalendarAlt size={15} className="flight-search-page-search-bars-icon"></FaRegCalendarAlt>
                            </div>
                            <div className="flight-search-page-flight-check-out">
                                <input type="date" className="input-field input-field-date" placeholder="CHECK OUT" value={this.state.flight.arr}  onChange={(e)=>{this.flight.arr=e.target.value}}></input>
                                <FaRegCalendarAlt size={15} className="flight-search-page-search-bars-icon"></FaRegCalendarAlt>
                            </div>
                        </div>
                        <div className="flight-search-page-flight-adults">
                            <div className="flight-search-page-flight-adults-counts">
                                <select className="flight-no-of-adults" value={this.state.flight.adults} onChange={(e)=>{this.state.flight.adults=e.target.value}}>
                                    <option value={''}>ADULTS</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                </select>
                                <FaAngleDown size={15} className="flight-search-page-search-bars-icon1"></FaAngleDown>
                            </div>
                        </div>
                        <div className="flight-search-page-flight-submit">
                            <button className="flight-search-page-flight-submit-button" onClick={(e)=>{this.checkflights(e)}}>SEARCH</button>
                        </div>
                    </form>
                </div>
                    <div className="flight-search-page-mobile-displaybar">
                    <div className="flight-search-page-flight-details">
                        <div className="flight-search-page-backpage">
                            <MdArrowBack className="flight-search-page-backpage-icon"></MdArrowBack>
                        </div>
                        <div className="flight-search-page-flight-name-details">
                            <div className="flight-search-page-flight-srcdest-details">
                            <p>{this.state.flight.src}</p>
                            <FaArrowsAltH  size={20}className="flight-search-page-flight-srcdest-icon" />
                            <p>{this.state.flight.dest}</p>
                            </div>
                            <div className="flight-search-page-flight-date-details">
                                <div className="flight-search-page-flight-date-details1">
                                <p>{this.state.flight.depdate} ' </p>
                                <p>{this.month_short[this.state.flight.depmon]}&nbsp;</p>
                                <p>{this.state.flight.depyear}</p>
                                </div>
                                <p>{this.state.flight.adults} ADULTS</p>
                            </div>
                            
                        </div>
                        <div className="flight-search-page-filterpage">
                            <FaFilter className="flight-search-page-filterpage-icon" onClick={()=>{this.mobilefilteropen()}}></FaFilter>
                        </div>
                    </div>
                </div>
                </div>
                <div className="flight-search-page-fliter-and-flight-details">
                    <div className="flight-search-page-fliter-and-flight-details-container">
                        <div className="flight-search-page-desktop-filter">
                            <FlightSearchPageDesktopFilter/>
                        </div>
                        <div className="flight-search-page-mobile-filter">
                            <FlightSearchPageMobileFilter />
                        </div>
                        <div className="flight-search-page-flight-details">
                            <div className="flight-search-page-flight-days-price">
                                <FLightSearchPageFlightPricesDays start_Date = {this.state.flight.dep}/>
                            </div>
                            {/* <div className="flight-search-page-flights-sort-options">
                                <p>Sorted By</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FlightSearchPage