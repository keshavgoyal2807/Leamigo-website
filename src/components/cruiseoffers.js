import React from 'react'
import '../styles/cruiseoffers.css'
import { Link } from 'react-router-dom'
import cruise1 from '../images/cruise-1.jpg'
import { FaStar } from 'react-icons/fa';

class CruiseOffers extends React.Component{

    constructor(props)
    {
        super(props);
        this.cruises = [{name:'spain boat tour',from:'italy to spain',stars:4,price:700},{name:'spain boat tour',from:'italy to spain',stars:4,price:700},{name:'spain boat tour',from:'italy to spain',stars:4,price:700},{name:'spain boat tour',from:'italy to spain',stars:4,price:700}]
    }

    render()
    {
        return(
            <div className="cruise-offers">
                <div className="cruise-offers-items">
                    <div className="cruise-offers-container">
                        <div className="cruise-offers-page-heading">
                            <h2>Cruise Offers</h2>
                            <hr></hr>
                        </div>
                        {this.cruises.map((cruise,index)=>{
                            return(
                                <div className="cruise-offers-item">
                                    <div className="cruise-offers-item-details">
                                        <Link to="/" className="cruise-offers-item-name">{cruise.name}</Link>
                                        <p className="cruise-offers-item-from">From:{cruise.from}</p>
                                        <div className="cruise-offers-item-ratings">
                                            <FaStar size={15}></FaStar>
                                            <FaStar size={15}></FaStar>
                                            <FaStar size={15}></FaStar>
                                            <FaStar size={15}></FaStar>
                                            <FaStar size={15}></FaStar>
                                        </div>
                                        <p className="cruise-offers-item-price">${cruise.price}</p>
                                    </div>
                                    <div className="cruise-offers-item-image">
                                        <img src={cruise1} alt="cruise"></img>
                                        <div className="cruise-offers-night-days">
                                            <p>7 Nights,6 Days</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default CruiseOffers;