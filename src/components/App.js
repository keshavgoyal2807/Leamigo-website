import React from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import Header from './Header';
import Navbar from './Navbar';
import Carousel from './carousel'
import Carouselsearch from './carouselsearch';

class App extends React.Component{
  render(){
    return(
      <div className="main">
        <Header />
        <Navbar />
        <div className="carousel-and-search">
            <Carousel />
            <Carouselsearch />
        </div>
      </div>
    )
  }
}
export default App;
