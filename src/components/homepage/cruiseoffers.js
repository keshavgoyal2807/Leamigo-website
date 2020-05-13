import React from 'react'
import '../../styles/cruiseoffers.css'
import { Link } from 'react-router-dom'
import cruise1 from '../../images/cruise-1.jpg'
import { FaStar } from 'react-icons/fa';

class CruiseOffers extends React.Component{

    constructor(props)
    {
        super(props);
        this.cruises = [{name:'spain boat tour',from:'italy to spain',stars:4,price:700},{name:'spain boat tour',from:'italy to spain',stars:4,price:700},{name:'spain boat tour',from:'italy to spain',stars:4,price:700},{name:'spain boat tour',from:'italy to spain',stars:4,price:700}]
    }

    itemtranform = (pos)=>{
        document.getElementsByClassName('cruise-offers-item')[pos].classList.add('cruise-offers-item-hover');
        document.getElementsByClassName('cruise-offers-item-photo')[pos].classList.add('cruise-offers-item-photo-hover');
    }

    itemretransform = (pos)=>{
        document.getElementsByClassName('cruise-offers-item')[pos].classList.remove('cruise-offers-item-hover');
        document.getElementsByClassName('cruise-offers-item-photo')[pos].classList.remove('cruise-offers-item-photo-hover');
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
                                <div className="cruise-offers-item" onMouseEnter={()=>{this.itemtranform(index)}} onMouseLeave={()=>{this.itemretransform(index)}}>
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
                                        <img src={cruise1} alt="cruise" className="cruise-offers-item-photo"></img>
                                        <div className="cruise-offers-night-days">
                                            <p>7 Nights,6 Days</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="cruise-offers-view-all">
                            <Link to="/" className="cruise-offers-link-view-all">View All</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CruiseOffers;