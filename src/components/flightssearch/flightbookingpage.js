import React from 'react'
import '../../styles/flightbookingpage.css'
import { FaPlane, FaCircle, FaRegCircle, FaAngleLeft } from 'react-icons/fa';
import indlogo from '../../images/indigo.gif'
import { MdPerson } from 'react-icons/md';
import {Link, Route} from 'react-router-dom'

class FlightBookingPage extends React.Component{
    constructor(props)
    {
        super(props);
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
            }
        }
        this.month_short = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    }

    componentDidMount = ()=>{
        console.log(this.props)
        if(this.props.flight_details.location.state)
        {

            this.setState((prev_state,props)=>{
                return(
                    {
                        ...prev_state,
                        flight:{
                            ...prev_state.flight,
                            src:props.flight_details.location.state.flight_details.src,
                            dest:props.flight_details.location.state.flight_details.dest,
                            dep:props.flight_details.location.state.flight_details.dep,
                            arr:props.flight_details.location.state.flight_details.arr,
                            adults:props.flight_details.location.state.flight_details.adults,
                            depdate: new Date(props.flight_details.location.state.flight_details.dep).getDate(),
                            depmon: new Date(props.flight_details.location.state.flight_details.dep).getMonth(),
                            depyear: new Date(props.flight_details.location.state.flight_details.dep).getFullYear()
                        }
                    }
                )
            })
        }
    }

    render()
    {
        return(

            <div className="flight-booking-page-outer">
                <div className="flight-booking-page-desktop">
                    <div className="flight-booking-page-desktop-left">
                        <div className="flight-booking-page-desktop-left-ticket-details">
                            <div className="flight-booking-page-desktop-left-ticket-details-header">
                                <p>Ticket Details</p>
                            </div>
                            <div className="flight-booking-page-desktop-left-ticket-details-content">
                                <div className="flight-booking-page-desktop-left-ticket-details-content-top">
                                    <div className="flight-booking-page-desktop-left-ticket-details-content-top-left">
                                        <FaPlane className="flight-booking-page-desktop-left-ticket-details-content-top-icon" />
                                        <p>mumbai-</p><p>delhi</p><pre> </pre><p> wednesday,</p><pre> </pre><p>{this.state.flight.depdate} {this.month_short[this.state.flight.depmon]} {this.state.flight.depyear}</p>
                                    </div>
                                    <div className="flight-booking-page-desktop-left-ticket-details-content-top-right">
                                        <p>Partially refundable</p>
                                    </div>
                                </div>
                                <div className="flight-booking-page-desktop-left-ticket-details-content-box">
                                    <div className="flight-booking-page-desktop-left-ticket-details-content-box-halfcircle-down"></div>
                                    <div className="flight-booking-page-desktop-left-ticket-details-content-box-flight-details">
                                        <img src={indlogo} alt="logo" />
                                        <p>indigo</p>
                                        <p>Economy</p>
                                        <p>(G8-119)</p>
                                        <p>(737)</p>
                                    </div>
                                    <div className="flight-booking-page-desktop-left-ticket-details-content-box-flight-departure">
                                        <p>Wed Jul 08 2020</p>
                                        <p>BOM 5:55</p>
                                        <p>Chhatrapati Shivaji International Airport,</p>
                                        <p>Mumbai, India</p>
                                        <p>(Terminal: 2)</p>
                                    </div>     
                                    
                                    <div className="flight-booking-page-desktop-left-ticket-details-content-box-flight-duration">
                                        <div className="flight-booking-page-desktop-left-ticket-details-content-box-flight-duration-time">
                                            <FaCircle className="flight-booking-page-desktop-time-left-icon" />
                                            <span>----</span>
                                            <p>2h 20m</p>
                                            <span>----</span>
                                            <FaPlane className="flight-booking-page-desktop-time-right-icon" />
                                        </div>
                                        <p className="flight-booking-page-desktop-left-ticket-details-content-box-flight-duration-p">Flight Duration</p>
                                    </div>

                                    <div className="flight-booking-page-desktop-left-ticket-details-content-box-flight-arrival">
                                        <p>Wed Jul 08 2020</p>
                                        <p>BOM 5:55</p>
                                        <p>Chhatrapati Shivaji International Airport,</p>
                                        <p>Mumbai, India</p>
                                        <p>(Terminal: 2)</p>
                                    </div>                                
                                    <div className="flight-booking-page-desktop-left-ticket-details-content-box-flight-baggage">
                                        <p>15 Kgs Check-In, 7 Kgs Cabin</p>
                                    </div>
                                    <div className="flight-booking-page-desktop-left-ticket-details-content-box-halfcircle-up"></div>
                                </div>
                            </div>                        
                        </div>
                        <div className="flight-booking-page-desktop-left-traveller-details">
                            <div className="flight-booking-page-desktop-left-traveller-details-header">
                                <p>Traveller Details</p>
                            </div>
                            <div className="flight-booking-page-desktop-left-traveller-details-note">
                                <div className="flight-booking-page-desktop-left-traveller-details-note-sh">
                                    <p>Note:</p>
                                </div>
                                <p>Please make sure you enter the Name as per your govt. photo id.</p>
                            </div>
                            <div className="flight-booking-page-desktop-left-traveller-details-adult">
                                <div className="flight-booking-page-desktop-left-traveller-details-adult-icons">
                                    <MdPerson className="flight-booking-page-desktop-left-traveller-details-adult-icon" />
                                    <p>Adult1</p>
                                </div>
                                <div className="flight-booking-page-desktop-left-traveller-details-adult-name">
                                    <p>Adult name</p>
                                    <input type="text" placeholder="First Name" className="flight-booking-page-desktop-left-traveller-details-adult-name-input" />
                                    <input type="text" placeholder="Middle Name" className="flight-booking-page-desktop-left-traveller-details-adult-name-input" />
                                    <input type="text" placeholder="Last Name" className="flight-booking-page-desktop-left-traveller-details-adult-name-input" />
                                </div>
                                <div className="flight-booking-page-desktop-left-traveller-details-adult-date">
                                    <p>Date of Birth</p>
                                    <input type="date" className="flight-booking-page-desktop-left-traveller-details-adult-date-input" />
                                </div>
                            </div>
                            <div className="flight-booking-page-desktop-left-traveller-details-adult-email">
                                <p>Email address</p>
                                <input type="email" className="flight-booking-page-desktop-left-traveller-details-adult-email-input" placeholder="123@gmail.com" />
                                <p>Your ticket will be sent to this email address</p>
                            </div>
                            <div className="flight-booking-page-desktop-left-traveller-details-adult-number">
                                <p>Mobile Number</p>
                                <input type="email" className="flight-booking-page-desktop-left-traveller-details-adult-number-input" placeholder="1234567890" />
                            </div>
                            <div className="flight-booking-page-desktop-left-traveller-details-proceed-to-next">
                                <div className="flight-booking-page-desktop-left-traveller-details-proceed-button">
                                    <p>Proceed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flight-booking-page-desktop-right">
                        <div className="flight-booking-page-desktop-right-fare-details">
                            <div className="flight-booking-page-desktop-right-fare-details-top">
                                <p>Fare Summary</p>
                                <p>Travelers 1 Adult</p>
                            </div>
                            <div className="flight-booking-page-desktop-right-fare-details-middle">
                                <div className="flight-booking-page-desktop-right-fare-details-fares">
                                    <p>Base Fare</p>
                                    <p>$2,478</p>
                                </div>
                                <div className="flight-booking-page-desktop-right-fare-details-fares">
                                    <p>Fee & Surcharge</p>
                                    <p>$2,478</p>
                                </div>
                                <div className="flight-booking-page-desktop-right-fare-details-fares">
                                    <p>Add Ons</p>
                                    <p>$2</p>
                                </div>
                            </div>
                            <div className="flight-booking-page-desktop-right-fare-details-middle">
                                <div className="flight-booking-page-desktop-right-fare-details-fares">
                                    <p>Wallet Discount</p>
                                    <p>$0</p>
                                </div>
                            </div>
                            <div className="flight-booking-page-desktop-right-fare-details-bottom">
                                <div className="flight-booking-page-desktop-right-fare-details-fares1">
                                    <p>Total Amount</p>
                                    <p>$3000</p>
                                </div>
                            </div>
                        </div>
                        <div className="flight-booking-page-desktop-right-offer-details">
                            <div className="flight-booking-page-desktop-right-offer-details-top">
                                <p>Leamigo Offers</p>
                            </div>
                            <div className="flight-booking-page-desktop-right-offer-details-middle">
                                <FaRegCircle className="flight-booking-page-desktop-right-offer-details-middle-icon" />
                                <p>Use Wallet Discount</p>
                            </div>
                        </div>
                        <div className="flight-booking-page-desktop-right-promo-code-details">
                            <p>Apply Discount</p>
                            <p>Have a discount/ promo code to redeem</p>
                            <div className="flight-booking-page-desktop-right-promo-code-input-apply">
                                <input type="text" className="flight-booking-page-desktop-right-promo-code-input" placeholder="Promo Code"/>
                                <div className="flight-booking-page-desktop-right-promo-code-apply">
                                    <p>Apply</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flight-booking-page-mobile">
                    <div className="flight-booking-page-mobile-header">
                        <FaAngleLeft className="flight-booking-page-mobile-header-icon" onClick={()=>{this.props.flight_details.history.goBack()}} />
                        <p>Flight Review</p>
                    </div>
                    <div className="flight-booking-page-mobile-ticket-details">
                        <div className="flight-booking-page-mobile-ticket-details-header">
                            <p>Mumbai - Delhi</p>
                            <div className="flight-booking-page-mobile-ticket-details-header-right">
                                        <p>Partially refundable</p>
                            </div>
                        </div>
                        <div className="flight-booking-page-mobile-ticket-flight-details">
                            <img src={indlogo} alt="logo" />
                            <p>Indigo</p>
                            <p>(G8-119)</p>
                        </div>
                        <div className="flight-booking-page-mobile-ticket-dep-dur-arr-details">
                            <div className="flight-booking-page-mobile-ticket-dep-details">
                                <p>Wed Jul 08 2020</p>
                                <p>BOM 5:55</p>
                                <p>Chhatrapati Shivaji International Airport,</p>
                                <p>Mumbai, India</p>
                                <p>(Terminal: 2)</p>
                            </div>
                            <div className="flight-booking-page-mobile-ticket-dur-details">
                                <hr></hr>
                                <p>2h 20m</p>
                                <hr></hr>
                            </div>
                            <div className="flight-booking-page-mobile-ticket-arr-details">
                                <p>Wed Jul 08 2020</p>
                                <p>BOM 5:55</p>
                                <p>Chhatrapati Shivaji International Airport,</p>
                                <p>Mumbai, India</p>
                                <p>(Terminal: 2)</p>
                            </div>
                        </div>
                        <div className="flight-booking-page-mobile-ticket-details-flight-baggage">
                                        <p>15 Kgs Check-In, 7 Kgs Cabin</p>
                        </div>
                    </div>
                    <div className="flight-booking-page-mobile-fare-offers">
                        <div className="flight-booking-page-desktop-right-fare-details">
                            <div className="flight-booking-page-desktop-right-fare-details-top">
                                <p>Fare Summary</p>
                                <p>Travelers 1 Adult</p>
                            </div>
                            <div className="flight-booking-page-desktop-right-fare-details-middle">
                                <div className="flight-booking-page-desktop-right-fare-details-fares">
                                    <p>Base Fare</p>
                                    <p>$2,478</p>
                                </div>
                                <div className="flight-booking-page-desktop-right-fare-details-fares">
                                    <p>Fee & Surcharge</p>
                                    <p>$2,478</p>
                                </div>
                                <div className="flight-booking-page-desktop-right-fare-details-fares">
                                    <p>Add Ons</p>
                                    <p>$2</p>
                                </div>
                            </div>
                            <div className="flight-booking-page-desktop-right-fare-details-middle">
                                <div className="flight-booking-page-desktop-right-fare-details-fares">
                                    <p>Wallet Discount</p>
                                    <p>$0</p>
                                </div>
                            </div>
                            <div className="flight-booking-page-desktop-right-fare-details-bottom">
                                <div className="flight-booking-page-desktop-right-fare-details-fares1">
                                    <p>Total Amount</p>
                                    <p>$3000</p>
                                </div>
                            </div>
                        </div>
                        <div className="flight-booking-page-desktop-right-offer-details">
                            <div className="flight-booking-page-desktop-right-offer-details-top">
                                <p>Leamigo Offers</p>
                            </div>
                            <div className="flight-booking-page-desktop-right-offer-details-middle">
                                <FaRegCircle className="flight-booking-page-desktop-right-offer-details-middle-icon" />
                                <p>Use Wallet Discount</p>
                            </div>
                        </div>
                        <div className="flight-booking-page-desktop-right-promo-code-details">
                            <p>Apply Discount</p>
                            <p>Have a discount/ promo code to redeem</p>
                            <div className="flight-booking-page-desktop-right-promo-code-input-apply">
                                <input type="text" className="flight-booking-page-desktop-right-promo-code-input" placeholder="Promo Code"/>
                                <div className="flight-booking-page-desktop-right-promo-code-apply">
                                    <p>Apply</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/flight-traveller" className="flight-booking-page-mobile-next-option-link"><div className="flight-booking-page-mobile-next-option">
                        <p>Procced</p>
                    </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default FlightBookingPage