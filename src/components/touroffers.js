import React from 'react'
import {FaStar,FaAngleRight, FaAngleLeft} from 'react-icons/fa'
import $ from 'jquery'
import '../styles/touroffers.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import tour1 from '../images/hotel-1.jpg'
import {Link} from 'react-router-dom' 

window.jQuery = window.$ = $;

class TourOffers extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            tours:[{name:'herta berlin tour',stars:'4',price:'568',place:'scotland'},{name:'herta berlin tour',stars:'4',price:'568',place:'scotland'},{name:'herta berlin tour',stars:'4',price:'568',place:'scotland'},{name:'herta berlin tour',stars:'4',price:'568',place:'scotland'},{name:'herta berlin tour',stars:'4',price:'568',place:'scotland'}]
        }
    }

    

    componentDidMount = ()=>{
        // document.querySelector('.owl-carousel').owlCarousel();
    }

    scaleitem = (pos)=>{
        // console.log(document.getElementsByClassName('tour-offers-carousel-item-image'))
        document.getElementsByClassName('tour-offers-carousel-item')[pos].classList.add('tour-offers-carousel-item-hover');
        document.getElementsByClassName('tociii')[pos].classList.add('tour-offers-carousel-item-image-hover');
    }
    descaleitem =(pos)=>{
        document.getElementsByClassName('tour-offers-carousel-item')[pos].classList.remove('tour-offers-carousel-item-hover');
        document.getElementsByClassName('tociii')[pos].classList.remove('tour-offers-carousel-item-image-hover');
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
                },
                1200:{
                    items:3
                }

            },
            responsiveRefreshRate : 200
        }
        return(
            <div className="tour-offers">
                <div className="tour-offers-items">
                    <div className="tour-offers-container">
                        <div className="tour-offers-page-heading">
                            <h2>tours Offers</h2>
                            <hr></hr>
                        </div>
                        <div className="tour-offers-carousel-outer">
                        <OwlCarousel className="tour-offers-carousel owl-theme" {...options}>
                            {this.state.tours.map((tour,index)=>{
                                return(
                                    <div className="tour-offers-carousel-item" onMouseEnter={()=>{this.scaleitem(index)}} onMouseLeave={()=>{this.descaleitem(index)}}>
                                    <div className="tour-offers-carousel-item-image">
                                    <img src={tour1} alt="tour" className="tociii"></img>
                                    <div className="tour-offers-tour-details">
                                            <p>${tour.price}</p>
                                        <div className="tour-offers-tour-fulldetails">
                                        <Link to="/" className="to-link-fulldetails"><FaAngleRight size={15}></FaAngleRight></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="tour-offers-carousel-item-name">
                                        <p className="tour-name">{tour.name}</p>
                                        <p className="tour-place">From:{tour.place}</p>
                                        <div className="tour-offers-tour-ratings">
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
                        </OwlCarousel>
                        </div>
                        <div className="tour-offers-view-all">
                            <Link to="/" className="to-link-view-all">View All</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TourOffers;