import React from 'react'
import {FaStar,FaAngleRight, FaAngleLeft} from 'react-icons/fa'
import $ from 'jquery'
import '../styles/hoteloffers.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import hotel1 from '../images/hotel-1.jpg'

window.jQuery = window.$ = $;

class HotelOffers extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            hotels:[{name:'herta berlin hotel',stars:'4',price:'568',place:'scotland'},{name:'herta berlin hotel',stars:'4',price:'568',place:'scotland'},{name:'herta berlin hotel',stars:'4',price:'568',place:'scotland'},{name:'herta berlin hotel',stars:'4',price:'568',place:'scotland'},{name:'herta berlin hotel',stars:'4',price:'568',place:'scotland'}]
        }
    }

    componentDidMount = ()=>{
        // document.querySelector('.owl-carousel').owlCarousel();
    }
    render()
    {
        const options={
            margin:15,
            rewind:true,
            autoplay:true,
            autoplaySpeed:800,
            autoplayTimeout:5000,
            nav:true,
            dots:false,
            autoplayHoverPause:true,
            responsiveClass:true,
            rewindNav:true,
            // navText : ['<i class="fa fa-angle-left" style="font-size:30px"></i>','<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                },
                1199:{
                    items:3
                }

            },
            responsiveRefreshRate : 200,
		    responsiveBaseWidth: window,
        }
        return(
            <div className="hotel-offers">
                <div className="hotel-offers-items">
                    <div className="hotel-offers-container">
                        <div className="hotel-offers-page-heading">
                            <h2>Hotels Offers</h2>
                            <hr></hr>
                        </div>
                        <div className="hotel-offers-carousel-outer">
                        <OwlCarousel className="hotel-offers-carousel owl-theme" {...options}>
                            {this.state.hotels.map((hotel)=>{
                                return(
                                    <div className="hotel-offers-carousel-item">
                                    <div className="hotel-offers-carouel-item-image">
                                    <img src={hotel1} alt="hotel"></img>
                                    <div className="hotel-offers-hotel-details">
                                        <div className="hotel-offers-hotel-price">
                                            <p>${hotel.price}</p>
                                            <p>|</p>
                                            <p>avg | night</p>
                                        </div>
                                        <div className="hotel-offers-hotel-ratings">
                                            <FaStar size={15}></FaStar>
                                            <FaStar size={15}></FaStar>
                                            <FaStar size={15}></FaStar>
                                            <FaStar size={15}></FaStar>
                                            <FaStar size={15}></FaStar>
                                        </div>
                                    </div>
                                </div>
                                <div className="hotel-offers-carousel-item-name">
                                    <div className="hotel-offers-hotel-name">
                                        <p>{hotel.name}</p>
                                        <p>From:{hotel.place}</p>
                                    </div>
                                    <div className="hotel-offers-hotel-fulldetails">
                                        <FaAngleLeft size={15}></FaAngleLeft>
                                    </div>
                                </div>
                            </div>
                                )
                            })}
                        </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HotelOffers;