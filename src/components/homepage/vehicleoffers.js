import React from 'react'
import '../../styles/vehicleoffers.css'
import { Link } from 'react-router-dom'
import vehicle1 from '../../images/vehicle-2.jpg'
import { FaStar,FaAngleRight, FaClock} from 'react-icons/fa'
import { Mdvehicle } from 'react-icons/md'

class VehicleOffers extends React.Component{

    constructor(props)
    {
        super(props)
        this.vehicles=[{name:"ferrari",price:99,rating:5},{name:"ferrari",price:99,rating:5},{name:"ferrari",price:99,rating:5}]
    }

    scaleitem = (pos)=>{
        // console.log(document.getElementsByClassName('vehicle-offers-item-image'))
        document.getElementsByClassName('vehicle-offers-item')[pos].classList.add('vehicle-offers-item-hover');
        document.getElementsByClassName('vociii')[pos].classList.add('vehicle-offers-item-image-hover');
    }
    descaleitem =(pos)=>{
        document.getElementsByClassName('vehicle-offers-item')[pos].classList.remove('vehicle-offers-item-hover');
        document.getElementsByClassName('vociii')[pos].classList.remove('vehicle-offers-item-image-hover');
    }

    render()
    {
        return(
            <div className="vehicle-offers">
                <div className="vehicle-offers-container">
                    <div className="vehicle-offers-inner">
                        <div className="vehicle-offers-heading">
                            <h2>vehicle Offers</h2>
                            <hr></hr>
                        </div>
                        <div className="vehicle-offers-items">
                            {this.vehicles.map((vehicle,index)=>{
                                return(
                                    <div className="vehicle-offers-item" onMouseEnter={()=>{this.scaleitem(index)}} onMouseLeave={()=>{this.descaleitem(index)}}>
                                    <div className="vehicle-offers-item-image">
                                        <img src={vehicle1} alt="vehicle" className="vociii"></img>
                                        <div className="vehicle-offers-vehicle-details">
                                                <p>${vehicle.price}</p>
                                            <div className="vehicle-offers-vehicle-fulldetails">
                                            <Link to="/" className="to-link-fulldetails"><FaAngleRight size={15}></FaAngleRight></Link>
                                            </div>
                                        </div>
                                        <div className="vehicle-time">
                                            <FaClock size={15} className="vehicle-time-icon"></FaClock>
                                            <p>22/h</p>
                                        </div>
                                    </div>
                                    <div className="vehicle-offers-item-name">
                                        <p className="vehicle-name">{vehicle.name}</p>
                                        <p className="vehicle-place">Per Day</p>
                                        <div className="vehicle-offers-vehicle-ratings">
                                            <FaStar size={15}></FaStar>
                                            <FaStar size={15}></FaStar>
                                            <FaStar size={15}></FaStar>
                                            <FaStar size={15}></FaStar>
                                            <FaStar size={15}></FaStar>
                                        </div>
                                    </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="vehicle-offers-view-all">
                            <Link to="/" className="to-link-view-all">View All</Link>
                        </div>
                    </div>
                </div>          
            </div>
        )
    }
}

export default VehicleOffers