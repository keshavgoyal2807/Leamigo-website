import React from 'react'
import {MdFlight} from 'react-icons/md'
import {FaHotel,FaSuitcase,FaShip,FaCar,FaMapMarkerAlt,FaRegCalendarAlt,FaAngleDown} from 'react-icons/fa'
import '../styles/carouselsearch.css'
import '../styles/carousel-flight-search.css'
import '../styles/carousel-cruise-search.css'
import '../styles/carousel-hotel-search.css'
import '../styles/carousel-tour-search.css'
import '../styles/carousel-car-search.css'

class Carouselsearch extends React.Component{

    changeTextToDate = (no)=>{
        document.getElementsByClassName('input-field-date')[no].type='date';
        console.log(document.getElementsByClassName('input-field-date')[no])
    }

    showSearchBar = (no)=>{
        var search_types = document.getElementsByClassName('carousel-search-type')

        for(let i=0;i<search_types.length;i++)
        {
            if(i!=no)
            {
                search_types[i].style.backgroundColor='black';
                search_types[i].children[1].style.color = 'white'
            }
            else
            {
                search_types[no].style.backgroundColor='white';
                search_types[no].children[1].style.color = 'gray';
            }
            
        }

        


        var search_bars = document.getElementsByClassName('search-bars');
        console.log(search_bars)

        for(var i=0; i < search_bars[0].children.length;i++)
        {
            if(i!=no)
            {
                search_bars[0].children[i].style.display='none';
            }
            else
            {
                search_bars[0].children[i].style.display='block';
            }
        }

        // search_bars.children[no].style.display='block'

    }

    componentDidMount = ()=>
    {
        var search_types = document.getElementsByClassName('carousel-search-type')
        search_types[0].style.backgroundColor='white';
        search_types[0].children[1].style.color = 'gray'
    }
    render()
    {
        return(
            <div className="carousel-search">
                <div className="carousel-search-inner">
                    <div className="carousel-search-items">
                        <div className="carousel-search-types">
                            <div className="carousel-search-type" onClick={()=>{this.showSearchBar(0)}}>
                                <MdFlight size={20} className="carousel-search-type-icon"></MdFlight>
                                <p>FLIGHTS</p>
                            </div>
                            <div className="carousel-search-type" onClick={()=>{this.showSearchBar(1)}}>
                                <FaHotel size={20} className="carousel-search-type-icon"></FaHotel>
                                <p>HOTELS</p>
                            </div>
                            <div className="carousel-search-type" onClick={()=>{this.showSearchBar(2)}}>
                                <FaSuitcase size={20} className="carousel-search-type-icon"></FaSuitcase>
                                <p>TOURS</p>
                            </div>
                            <div className="carousel-search-type" onClick={()=>{this.showSearchBar(3)}}>
                                <FaShip size={20} className="carousel-search-type-icon"></FaShip>
                                <p>CRUISE</p>
                            </div>
                            <div className="carousel-search-type" onClick={()=>{this.showSearchBar(4)}}>
                                <FaCar size={20} className="carousel-search-type-icon"></FaCar>
                                <p>CARS</p>
                            </div>
                        </div>
                        <div className="search-bars">
                            <div className="flight-search-bar">
                                <form className="flight-form">
                                    <div className="flight-src-and-dest">
                                        <div className="flight-source">
                                            <input type="text" className="input-field" placeholder="FORM"></input>
                                            <FaMapMarkerAlt size={15} className="search-bars-icon"></FaMapMarkerAlt>
                                        </div>
                                        <div className="flight-destination">
                                            <input type="text" className="input-field" placeholder="TO"></input>
                                            <FaMapMarkerAlt size={15} className="search-bars-icon"></FaMapMarkerAlt>
                                        </div>
                                    </div>
                                    <div className="flight-check-in-out">
                                        <div className="flight-check-in">
                                            <input type="date" className="input-field input-field-date" placeholder="CHECK IN"></input>
                                            <FaRegCalendarAlt size={15} className="search-bars-icon"></FaRegCalendarAlt>
                                        </div>
                                        <div className="flight-check-out">
                                            <input type="date" className="input-field input-field-date" placeholder="CHECK OUT"></input>
                                            <FaRegCalendarAlt size={15} className="search-bars-icon"></FaRegCalendarAlt>
                                        </div>
                                    </div>
                                    <div className="flight-adults">
                                        <div className="flight-adults-counts">
                                            <select className="flight-no-of-adults">
                                                <option value={''}>ADULTS</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                            </select>
                                            <FaAngleDown size={15} className="search-bars-icon1"></FaAngleDown>
                                        </div>
                                    </div>
                                    <div className="flight-submit">
                                        <button className="flight-submit-button">SEARCH</button>
                                    </div>
                                </form>
                            </div>
                            <div className="hotel-search-bar">
                                <form className="hotel-form">
                                    <div className="hotel-check-in-out">
                                        <div className="hotel-check-in">
                                            <input type="date" className="input-field input-field-date" placeholder="CHECK IN"></input>
                                            <FaRegCalendarAlt size={15} className="search-bars-icon"></FaRegCalendarAlt>
                                        </div>
                                        <div className="hotel-check-out">
                                            <input type="date" className="input-field input-field-date" placeholder="CHECK OUT"></input>
                                            <FaRegCalendarAlt size={15} className="search-bars-icon"></FaRegCalendarAlt>
                                        </div>
                                    </div>
                                    <div className="hotel-rooms">
                                        <div className="hotel-rooms-counts">
                                            <select className="hotel-no-of-rooms">
                                                <option value={''}>ROOMS</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                            </select>
                                            <FaAngleDown size={15} className="search-bars-icon1"></FaAngleDown>
                                        </div>
                                    </div>
                                    <div className="hotel-adults-and-kids">
                                        <div className="hotel-adults">
                                        <select className="hotel-no-of-adults">
                                                <option value={''}>ADULTS</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                            </select>
                                            <FaAngleDown size={15} className="search-bars-icon1"></FaAngleDown>
                                        </div>
                                        <div className="hotel-kids">
                                            <select className="hotel-no-of-kids">
                                                <option value={''}>KIDS</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                            </select>
                                            <FaAngleDown size={15} className="search-bars-icon1"></FaAngleDown>
                                        </div>
                                    </div>
                                    <div className="hotel-submit">
                                        <button className="hotel-submit-button">SEARCH</button>
                                    </div>
                                </form>
                            </div>
                            <div className="tour-search-bar">
                                <form className="tour-form">
                                    <div className="tour-city-and-country">
                                        <div className="tour-city-country">
                                            <input type="text" className="input-field input-field-date" placeholder="CITY,COUNTRY"></input>
                                            <FaMapMarkerAlt size={15} className="search-bars-icon"></FaMapMarkerAlt>
                                        </div>
                                    </div>
                                    <div className="tour-rooms">
                                        <div className="tour-rooms-counts">
                                            <select className="tour-no-of-rooms">
                                                <option value={''}>ROOMS</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                            </select>
                                            <FaAngleDown size={15} className="search-bars-icon1"></FaAngleDown>
                                        </div>
                                    </div>
                                    <div className="tour-adults-and-kids">
                                        <div className="tour-adults">
                                        <select className="tour-no-of-adults">
                                                <option value={''}>ADULTS</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                            </select>
                                            <FaAngleDown size={15} className="search-bars-icon1"></FaAngleDown>
                                        </div>
                                        <div className="tour-kids">
                                            <select className="tour-no-of-kids">
                                                <option value={''}>KIDS</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                            </select>
                                            <FaAngleDown size={15} className="search-bars-icon1"></FaAngleDown>
                                        </div>
                                    </div>
                                    <div className="tour-submit">
                                        <button className="tour-submit-button">SEARCH</button>
                                    </div>
                                </form>
                            </div>
                            <div className="cruise-search-bar">
                                <form className="cruise-form">
                                    <div className="cruise-src-and-dest">
                                        <div className="cruise-source">
                                            <input type="text" className="input-field" placeholder="FORM"></input>
                                            <FaMapMarkerAlt size={15} className="search-bars-icon"></FaMapMarkerAlt>
                                        </div>
                                        <div className="cruise-destination">
                                            <input type="text" className="input-field" placeholder="TO"></input>
                                            <FaMapMarkerAlt size={15} className="search-bars-icon"></FaMapMarkerAlt>
                                        </div>
                                    </div>
                                    <div className="cruise-check-in-out">
                                        <div className="cruise-check-in">
                                            <input type="date" className="input-field input-field-date" placeholder="CHECK IN"></input>
                                            <FaRegCalendarAlt size={15} className="search-bars-icon"></FaRegCalendarAlt>
                                        </div>
                                        <div className="cruise-check-out">
                                            <input type="date" className="input-field input-field-date" placeholder="CHECK OUT"></input>
                                            <FaRegCalendarAlt size={15} className="search-bars-icon"></FaRegCalendarAlt>
                                        </div>
                                    </div>
                                    <div className="cruise-adults">
                                        <div className="cruise-adults-counts">
                                            <select className="cruise-no-of-adults">
                                                <option value={''}>ADULTS</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                            </select>
                                            <FaAngleDown size={15} className="search-bars-icon1"></FaAngleDown>
                                        </div>
                                    </div>
                                    <div className="cruise-submit">
                                        <button className="cruise-submit-button">SEARCH</button>
                                    </div>
                                </form>
                            </div>
                            <div className="car-search-bar">
                                <form className="car-form">
                                    <div className="car-src-and-dest">
                                        <div className="car-source">
                                            <input type="text" className="input-field" placeholder="COUNTRY"></input>
                                            <FaMapMarkerAlt size={15} className="search-bars-icon"></FaMapMarkerAlt>
                                        </div>
                                        <div className="car-destination">
                                            <input type="text" className="input-field" placeholder="CITY"></input>
                                            <FaMapMarkerAlt size={15} className="search-bars-icon"></FaMapMarkerAlt>
                                        </div>
                                    </div>
                                    <div className="car-adults">
                                        <div className="car-adults-counts">
                                            <input type="text" className="input-field" placeholder="LOCATION"></input>
                                            <FaAngleDown size={15} className="search-bars-icon"></FaAngleDown>
                                        </div>
                                    </div>
                                    <div className="car-check-in-out">
                                        <div className="car-check-in">
                                            <input type="date" className="input-field input-field-date" placeholder="CHECK IN"></input>
                                            <FaRegCalendarAlt size={15} className="search-bars-icon"></FaRegCalendarAlt>
                                        </div>
                                        <div className="car-check-out">
                                            <input type="date" className="input-field input-field-date" placeholder="CHECK OUT"></input>
                                            <FaRegCalendarAlt size={15} className="search-bars-icon"></FaRegCalendarAlt>
                                        </div>
                                    </div>
                                    <div className="car-submit">
                                        <button className="car-submit-button">SEARCH</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carouselsearch