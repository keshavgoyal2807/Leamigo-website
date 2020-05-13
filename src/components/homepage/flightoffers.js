import React from 'react'
import '../../styles/flightoffers.css'
import { Link } from 'react-router-dom'
import flight_image from '../../images/flight-1.jpg'
import { FaStar } from 'react-icons/fa'
import { MdFlight } from 'react-icons/md'

class FlightOffers extends React.Component{

    constructor(props)
    {
        super(props)
        this.flights=[{to:"spain",direction:1,departure_time:"Aug,02-2017(8:40 PM)",arrival_time:"Aug,03-2017(8:40 PM)",price:548,stars:4},{to:"spain",direction:1,departure_time:"Aug,02-2017(8:40 PM)",arrival_time:"Aug,03-2017(8:40 PM)",price:548,stars:4},{to:"spain",direction:1,departure_time:"Aug,02-2017(8:40 PM)",arrival_time:"Aug,03-2017(8:40 PM)",price:548,stars:4},{to:"spain",direction:1,departure_time:"Aug,02-2017(8:40 PM)",arrival_time:"Aug,03-2017(8:40 PM)",price:548,stars:4},{to:"spain",direction:1,departure_time:"Aug,02-2017(8:40 PM)",arrival_time:"Aug,03-2017(8:40 PM)",price:548,stars:4},{to:"spain",direction:1,departure_time:"Aug,02-2017(8:40 PM)",arrival_time:"Aug,03-2017(8:40 PM)",price:548,stars:4}]
    }

    flight_transform = (pos)=>{
        document.getElementsByClassName('flight-offers-item')[pos].classList.add('flight-offers-item-hover');
    }

    flight_retransform = (pos)=>{
        document.getElementsByClassName('flight-offers-item')[pos].classList.remove('flight-offers-item-hover');
    }

    render()
    {
        return(
            <div className="flight-offers">
                <div className="flight-offers-container">
                    <div className="flight-offers-inner">
                        <div className="flight-offers-heading">
                            <h2>flight Offers</h2>
                            <hr></hr>
                        </div>
                        <div className="flight-offers-items">
                                {this.flights.map((flight,index)=>{
                                    return(
                                        <div className="flight-offers-item" onMouseEnter={()=>{this.flight_transform(index)}} onMouseLeave={()=>{this.flight_retransform(index)}}>
                                        <Link to="/" className="flight-offers-item-link">
                                            <div className="flight-offers-item-image">
                                                <img src={flight_image} alt="item"></img>
                                            </div>
                                            <div className="flight-offers-item-info">
                                                <div className="flight-offers-item-title">
                                                    <h3>
                                                        <span className="flight-item-destination">{flight.to}</span>
                                                        |
                                                        {(flight.direction === 1) ? (<span className="flight-item-ways">oneway flight</span>) : (<span className="flight-item-ways">twoway flight</span>)}
                                                    </h3>
                                                </div>
                                                <div className="flight-offers-item-timings">
                                                    <div className="flight-departure-time">
                                                        <MdFlight size={20} className="flight-timing-icon"></MdFlight>
                                                        <p>{flight.departure_time}</p>
                                                    </div>
                                                    <div className="flight-departure-time">
                                                        <MdFlight size={20} className="flight-timing-icon"></MdFlight>
                                                        <p>{flight.arrival_time}</p>
                                                    </div>
                                                </div>
                                                <div className="flight-offers-item-price-ratings">
                                                    <div className="flight-item-price">
                                                        <p><span className="f-i-p">${flight.price}</span> Avg/person</p>
                                                    </div>
                                                    <div className="flight-item-ratings">
                                                        <FaStar size={15} className="flight-rating-icon"></FaStar>
                                                        <FaStar size={15} className="flight-rating-icon"></FaStar>
                                                        <FaStar size={15} className="flight-rating-icon"></FaStar>
                                                        <FaStar size={15} className="flight-rating-icon"></FaStar>
                                                        <FaStar size={15} className="flight-rating-icon"></FaStar>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        </div>
                                    )
                                })}
                        </div>
                        <div className="flight-offers-view-all">
                            <Link to="/" className="flight-offers-link-view-all">View All</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FlightOffers