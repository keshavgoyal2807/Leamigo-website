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
      </Switch>
    )
  }
}
export default App;
