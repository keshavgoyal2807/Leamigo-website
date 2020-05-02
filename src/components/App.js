import React from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import Header from './Header';
import Navbar from './Navbar';

class App extends React.Component{
  render(){
    return(
      <div className="main">
        <Header />
        <Navbar />
      </div>
    )
  }
}
export default App;
