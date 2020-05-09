import React from 'react';
import $ from 'jquery'
import{Route} from 'react-router-dom'
import '../styles/App.css';
import Header from './Header';
import Navbar from './Navbar';
import Carousel from './carousel'
import Carouselsearch from './carouselsearch';
import HotelOffers from './hoteloffers';
import BestFeatures from './bestfeatures';
import TourOffers from './touroffers';
import CruiseOffers from './cruiseoffers';
import FeatureVideo from './featurevideo';
import FlightOffers from './flightoffers';
import Highlights from './highlights';
import VehicleOffers from './vehicleoffers';
import Testimonials from './testimonials';



class App extends React.Component{
  render(){
    return(
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
        <VehicleOffers />
      </div>
      </Route>
    )
  }
}
export default App;
