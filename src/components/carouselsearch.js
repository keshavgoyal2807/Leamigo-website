import React from 'react'
import {MdFlight} from 'react-icons/md'
import {FaHotel,FaSuitcase,FaShip,FaCar} from 'react-icons/fa'
import '../styles/carouselsearch.css'

class Carouselsearch extends React.Component{
    render()
    {
        return(
            <div className="carousel-search">
                <div className="carousel-search-inner">
                    <div className="carousel-search-items">
                        <div className="carousel-search-types">
                            <div className="carousel-search-type">
                                <MdFlight size={20} className="carousel-search-type-icon"></MdFlight>
                                <p>FLIGHTS</p>
                            </div>
                            <div className="carousel-search-type">
                                <FaHotel size={20} className="carousel-search-type-icon"></FaHotel>
                                <p>HOTELS</p>
                            </div>
                            <div className="carousel-search-type">
                                <FaSuitcase size={20} className="carousel-search-type-icon"></FaSuitcase>
                                <p>TOURS</p>
                            </div>
                            <div className="carousel-search-type">
                                <FaShip size={20} className="carousel-search-type-icon"></FaShip>
                                <p>CRUISE</p>
                            </div>
                            <div className="carousel-search-type">
                                <FaCar size={20} className="carousel-search-type-icon"></FaCar>
                                <p>CARS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carouselsearch