import React from 'react'
import '../../styles/flightsearchpage.css'
import Moment from 'react-moment';
import {FaHotel,FaSuitcase,FaShip,FaCar,FaMapMarkerAlt,FaRegCalendarAlt,FaAngleDown, FaRoad,FaArrowsAltH, FaFilter, FaLongArrowAltDown} from 'react-icons/fa'
import {MdArrowBack} from 'react-icons/md'
import {IoIosArrowRoundForward} from 'react-icons/io'
import FlightSearchPageDesktopFilter from './flightsearchpagedesktopfilter';
import FlightSearchPageMobileFilter from './flightsearchpagemobilefilter';
import FLightSearchPageFlightPricesDays from './flightsearchpageflightpricesdays';
import indlogo from '../../images/indigo.gif'
import { Link } from 'react-router-dom';


class FlightSearchPage extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            flight:{
                src:'',
                dest:'',
                dep:'',
                arr:'',
                adults:'',
                depdate:"",
                depmon:"",
                depyear:""
            },
            flights:[{flight_no:'G8-119',flight_name:'Indigo',dep_time:new Date(),arr_time:new Date(),stops:0,price:'2,599'}]
        }
        this.month_short = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
        this.flight_details_options=0
    }

    mobilefilteropen = ()=>{
        console.log('enter')
        console.log(document.getElementsByClassName('flight-search-page-mobile-filter')[0].classList)
        document.getElementsByClassName('flight-search-page-mobile-filter')[0].classList.add('flight-search-page-mobile-filter-open')
    }

    showDetails = ()=>{
        document.querySelector('.flight-search-page-flights-flight-more-details-details').classList.toggle('flight-search-page-flights-flight-more-details-details-active')
        document.querySelectorAll('.flight-search-page-flights-flight-more-details-details-option')[this.flight_details_options].classList.toggle('flight-search-page-flights-flight-more-details-details-option-active')
        document.querySelectorAll('.flight-search-page-flights-flight-more-details-details-details1')[this.flight_details_options].classList.toggle('flight-search-page-flights-flight-more-details-details-details1-active')
    }

    changeDetailOption = (index)=>{
        document.querySelectorAll('.flight-search-page-flights-flight-more-details-details-option')[this.flight_details_options].classList.toggle('flight-search-page-flights-flight-more-details-details-option-active')
        document.querySelectorAll('.flight-search-page-flights-flight-more-details-details-details1')[this.flight_details_options].classList.toggle('flight-search-page-flights-flight-more-details-details-details1-active')
        this.flight_details_options = index;
        document.querySelectorAll('.flight-search-page-flights-flight-more-details-details-option')[this.flight_details_options].classList.toggle('flight-search-page-flights-flight-more-details-details-option-active')
        document.querySelectorAll('.flight-search-page-flights-flight-more-details-details-details1')[this.flight_details_options].classList.toggle('flight-search-page-flights-flight-more-details-details-details1-active')
    }


    componentDidMount = ()=>{
        if(this.props.flight.location.state)
        {

            this.setState((prev_state,props)=>{
                return(
                    {
                        ...prev_state,
                        flight:{
                            ...prev_state.flight,
                            src:props.flight.location.state.flight.src,
                            dest:props.flight.location.state.flight.dest,
                            dep:props.flight.location.state.flight.dep,
                            arr:props.flight.location.state.flight.arr,
                            adults:props.flight.location.state.flight.adults,
                            depdate: new Date(props.flight.location.state.flight.dep).getDate(),
                            depmon: new Date(props.flight.location.state.flight.dep).getMonth(),
                            depyear: new Date(props.flight.location.state.flight.dep).getFullYear()
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
                                <input type="text" className="input-field1"  value={this.state.flight.src} onChange={(e)=>{this.flight.src=e.target.value}}></input>
                                <FaMapMarkerAlt size={15} className="flight-search-page-search-bars-icon"></FaMapMarkerAlt>
                            </div>
                            <div className="flight-search-page-flight-destination">
                                <input type="text" className="input-field1" placeholder="TO" value={this.state.flight.dest} onChange={(e)=>{this.flight.dest=e.target.value}}></input>
                                <FaMapMarkerAlt size={15} className="flight-search-page-search-bars-icon"></FaMapMarkerAlt>
                            </div>
                        </div>
                        <div className="flight-search-page-flight-check-in-out">
                            <div className="flight-search-page-flight-check-in">
                                <input type="date" className="input-field1 input-field-date" placeholder="CHECK IN" value={this.state.flight.dep} onChange={(e)=>{this.flight.dep=e.target.value}} ></input>
                                <FaRegCalendarAlt size={15} className="flight-search-page-search-bars-icon"></FaRegCalendarAlt>
                            </div>
                            <div className="flight-search-page-flight-check-out">
                                <input type="date" className="input-field1 input-field-date" placeholder="CHECK OUT" value={this.state.flight.arr}  onChange={(e)=>{this.flight.arr=e.target.value}}></input>
                                <FaRegCalendarAlt size={15} className="flight-search-page-search-bars-icon"></FaRegCalendarAlt>
                            </div>
                        </div>
                        <div className="flight-search-page-flight-adults">
                            <div className="flight-search-page-flight-adults-counts">
                                <select className="flight-no-of-adults1" value={this.state.flight.adults} onChange={(e)=>{this.state.flight.adults=e.target.value}}>
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
                                <FLightSearchPageFlightPricesDays start_Date = {()=>{if(this.props.flight.location.state){return(this.props.flight.location.state.flight.dep)}else{return(new Date())}}}/>
                            </div>
                            <div className="flight-search-page-flights-sort-options">
                                <div className="flight-search-page-flights-sort-names">
                                    <p>Sorted By:</p>
                                </div>
                                <div className="flight-search-page-flights-sort-options-all">
                                    <div className="flight-search-page-flights-sort-option-1">
                                       <p>Departure</p>
                                       <FaLongArrowAltDown />
                                    </div>
                                    <div className="flight-search-page-flights-sort-option-2">
                                        <p>Duration</p>
                                        <FaLongArrowAltDown />
                                    </div>
                                    <div className="flight-search-page-flights-sort-option-3">
                                        <p>Arrival</p>
                                        <FaLongArrowAltDown />
                                    </div>
                                </div>
                                <div className="flight-search-page-flights-sort-option-4">
                                    <p>Price</p>
                                    <FaLongArrowAltDown />
                                </div>
                            </div>
                            <div className="flight-search-page-flights">
                                <div className="flight-search-page-flights-flight-logo-name-number">
                                    <div className="flight-search-page-flights-flight-logo">
                                        <img src={indlogo} alt="logo" />
                                    </div>
                                    <div className="flight-search-page-flights-flight-name-number">
                                        <p>{this.state.flights[0].flight_name}</p>
                                        <p>{this.state.flights[0].flight_no}</p>
                                    </div>
                                </div>
                                <div className="flight-search-page-flights-flight-dep-dur-arr">
                                    <div className="flight-search-page-flights-flight-departure">
                                        <p>{this.state.flights[0].dep_time.getHours()}:{this.state.flights[0].dep_time.getMinutes()}</p>
                                        <p>{this.state.flight.src}</p>
                                    </div>
                                    <div className="flight-search-page-flights-flight-duration">
                                        <p>{this.state.flights[0].arr_time.getHours()-this.state.flights[0].dep_time.getHours()+3} hrs {this.state.flights[0].arr_time.getMinutes()-this.state.flights[0].dep_time.getMinutes()+20} mins</p>
                                    </div>
                                    <div className="flight-search-page-flights-flight-arrival">
                                        <p>{this.state.flights[0].dep_time.getHours()}:{this.state.flights[0].dep_time.getMinutes()}</p>
                                        <p>{this.state.flight.dest}</p>
                                    </div>
                                </div>
                                <div className="flight-search-page-flights-flight-price-book">
                                    <div className="flight-search-page-flights-flight-price">
                                        <p>${this.state.flights[0].price}</p>
                                    </div>
                                    <Link to={{pathname:"/flight-book",state:{flight_details:this.state}}}className="flight-search-page-flights-flight-book">
                                            <p>BOOK</p>
                                    </Link>
                                </div>
                                <div className="flight-search-page-flights-flight-more-details">
                                    <div className="flight-search-page-flights-flight-more-details-button" onClick={()=>this.showDetails()}>
                                        <p>Flight Details</p>
                                        <FaAngleDown className="flight-search-page-flights-flight-more-details-button-icon" />
                                    </div>
                                    <div className="flight-search-page-flights-flight-more-details-details">
                                        <div className="flight-search-page-flights-flight-more-details-details-options">
                                            <div className="flight-search-page-flights-flight-more-details-details-option" onClick={()=>{this.changeDetailOption(0)}}>
                                                <p>Flight Details</p>
                                            </div>
                                            <div className="flight-search-page-flights-flight-more-details-details-option" onClick={()=>{this.changeDetailOption(1)}}>
                                                <p>Baggage Rules</p>
                                            </div>
                                            <div className="flight-search-page-flights-flight-more-details-details-option" onClick={()=>{this.changeDetailOption(2)}}>
                                                <p>Fare Details</p>
                                            </div>
                                            <div className="flight-search-page-flights-flight-more-details-details-option" onClick={()=>{this.changeDetailOption(3)}}>
                                                <p>Cancellation Rules</p>
                                            </div>
                                        </div>
                                        <div className="flight-search-page-flights-flight-more-details-details-details">
                                            <div className="flight-search-page-flights-flight-more-details-details-details1 flight-search-page-flights-flight-more-details-details-details1-border ">
                                                <div className="flight-search-page-flights-flight-more-details-details-details-name-logo">
                                                    <img src={indlogo} alt="logo"/>
                                                    <p>{this.state.flights[0].flight_name}</p>
                                                    <p>{this.state.flights[0].flight_no}</p>
                                                </div>
                                                <div className="flight-search-page-flights-flight-more-details-details-details-flightd">
                                                    <div className="flight-search-page-flights-flight-departure">
                                                        <p>{this.state.flights[0].dep_time.getHours()}:{this.state.flights[0].dep_time.getMinutes()}</p>
                                                        <p>{this.state.flight.src}</p>
                                                    </div>
                                                    <div className="flight-search-page-flights-flight-duration1">
                                                        <p>{this.state.flights[0].arr_time.getHours()-this.state.flights[0].dep_time.getHours()+3} hrs {this.state.flights[0].arr_time.getMinutes()-this.state.flights[0].dep_time.getMinutes()+20} mins</p>
                                                        <hr></hr>
                                                        <p>Total Duration</p>
                                                    </div>
                                                    <div className="flight-search-page-flights-flight-arrival">
                                                        <p>{this.state.flights[0].dep_time.getHours()}:{this.state.flights[0].dep_time.getMinutes()}</p>
                                                        <p>{this.state.flight.dest}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flight-search-page-flights-flight-more-details-details-details1">
                                                <img src={indlogo} className="baggage-image"/>
                                                <table className="bagagge-table">
                                                    <tr>
                                                        <th>Baggage Type</th>
                                                        <th>Check-In</th>
                                                        <th>Cabin</th>
                                                    </tr>
                                                    <tr>
                                                        <td>Adult</td>
                                                        <td>15kgs</td>
                                                        <td>7kgs</td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div className="flight-search-page-flights-flight-more-details-details-details1">
                                                <table className="fare-details">
                                                    <tr>
                                                        <td>Base Fare (1 Adult)</td>
                                                        <td>$2,320</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Taxes and Fees (1 Adult)</td>
                                                        <td>$2,320</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total Fare (1 Adult)</td>
                                                        <td>$2,320</td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div className="flight-search-page-flights-flight-more-details-details-details1">
                                                <p>To be Added</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FlightSearchPage