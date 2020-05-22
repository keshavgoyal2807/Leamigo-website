import React from 'react';
import $ from 'jquery'
import{Route,Switch} from 'react-router-dom'
import '../styles/App.css';
import Header from './homepage/Header';
import Navbar from './homepage/Navbar';
import Carousel from './homepage/carousel'
import Carouselsearch from './homepage/carouselsearch';
import HotelOffers from './homepage/hoteloffers';
import BestFeatures from './homepage/bestfeatures';
import TourOffers from './homepage/touroffers';
import CruiseOffers from './homepage/cruiseoffers';
import FeatureVideo from './homepage/featurevideo';
import FlightOffers from './homepage/flightoffers';
import Highlights from './homepage/highlights';
import VehicleOffers from './homepage/vehicleoffers';
import Testimonials from './homepage/testimonials';
import Blogs from './homepage/blogs';
import Subscribe from './homepage/subscribe';
import Footer from './homepage/footer';
import FlightSearchPage from './flightssearch/flightssearchpage';
import FlightBookingPage from './flightssearch/flightbookingpage';
import { MdPerson } from 'react-icons/md';
import { FaPlane, FaCircle, FaRegCircle, FaAngleLeft } from 'react-icons/fa';
import {Link} from 'react-router-dom'


class App extends React.Component{
  render(){
    return(
      <Switch>
        <Route exact path="/">
        <div className="main">
          <Header />
          <Navbar />
          <div className="carousel-and-search">
              <Carousel />
              <Carouselsearch />
          </div>
          <HotelOffers />
          <BestFeatures />
          <TourOffers />
          <CruiseOffers />
          <FeatureVideo />
          <FlightOffers />
          <Highlights />
          <VehicleOffers />
          <Testimonials />
          <Blogs />
          <Subscribe />
          <Footer />
        </div>
        </Route>

        <Route exact path="/flights" render={(props)=>{
          return(
            <div className="flight-search-page-outer">
              <Header />
              <FlightSearchPage flight={props}/>
            </div>
          )
        }} />

        <Route exact path="/flight-book" render={(props)=>{
         return(
           <div className="flight-booking-apge-main">
            <Header />
              <FlightBookingPage flight_details={props}/>
           </div>
         )
        }} />

        <Route exact path="/flight-traveller" render={(props)=>{
          return(
            <div>
            <div className="flight-booking-page-mobile-header">
            <FaAngleLeft className="flight-booking-page-mobile-header-icon" onClick={()=>{props.history.goBack()}} />
            <p>Traveller Details</p>
            </div>
            <div className="flight-booking-page-mobile-traveller-details">
                  <div className="flight-booking-page-mobile-traveller-details-header">
                      <p>Traveller Details</p>
                  </div>
                  <div className="flight-booking-page-mobile-traveller-details-note">
                      <div className="flight-booking-page-mobile-traveller-details-note-sh">
                          <p>Note:</p>
                      </div>
                      <p>Please make sure you enter the Name as per your govt. photo id.</p>
                  </div>
                  <div className="flight-booking-page-mobile-traveller-details-adult">
                      <div className="flight-booking-page-mobile-traveller-details-adult-icons">
                          <MdPerson className="flight-booking-page-mobile-traveller-details-adult-icon" />
                          <p>Adult1</p>
                      </div>
                      <div className="flight-booking-page-mobile-traveller-details-adult-name">
                          <p>Adult name</p>
                          <input type="text" placeholder="First Name" className="flight-booking-page-mobile-traveller-details-adult-name-input" />
                          <input type="text" placeholder="Middle Name" className="flight-booking-page-mobile-traveller-details-adult-name-input" />
                          <input type="text" placeholder="Last Name" className="flight-booking-page-mobile-traveller-details-adult-name-input" />
                      </div>
                      <div className="flight-booking-page-mobile-traveller-details-adult-date">
                          <p>Date of Birth</p>
                          <input type="date" className="flight-booking-page-mobile-traveller-details-adult-date-input" />
                      </div>
                  </div>
                  <div className="flight-booking-page-mobile-traveller-details-adult-email">
                      <p>Email address</p>
                      <input type="email" className="flight-booking-page-mobile-traveller-details-adult-email-input" placeholder="123@gmail.com" />
                      <p>Ticket will be sent to this email</p>
                  </div>
                  <div className="flight-booking-page-mobile-traveller-details-adult-number">
                      <p>Mobile Number</p>
                      <input type="email" className="flight-booking-page-mobile-traveller-details-adult-number-input" placeholder="1234567890" />
                  </div>
                </div>
                <Link to="/flight-traveller" className="flight-booking-page-mobile-next-option-link"><div className="flight-booking-page-mobile-next-option">
                          <p>Payment</p>
                      </div>
                </Link>
                </div>
          )}
        } />
      </Switch>
    )
  }
}
export default App;
