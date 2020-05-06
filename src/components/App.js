import React from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import Header from './Header';
import Navbar from './Navbar';
import Carousel from './carousel'
import Carouselsearch from './carouselsearch';
import HotelOffers from './hoteloffers';
import $ from 'jquery'
import{Route} from 'react-router-dom'
import BestFeatures from './bestfeatures';
import TourOffers from './touroffers';

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
      </div>
      </Route>
    )
  }
}
export default App;
