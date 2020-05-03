import React from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import Header from './Header';
import Navbar from './Navbar';
import Carousel from './carousel'

class App extends React.Component{
  render(){
    return(
      <div className="main">
        <Header />
        <Navbar />
        <Carousel />
      </div>
    )
  }
}
export default App;
