import React from 'react'
import '../../styles/flightsearchpagedesktopfilter.css'
import { FaAngleDown } from 'react-icons/fa'
import SliderUi from './sliderui';


class FlightSearchPageDesktopFilter extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            min_price:2000,
            max_price:6000,
            new_min_price:2000,
            new_max_price:6000
        }
    }

    changeMinMax = (newvalue)=>{
        this.setState({
            new_min_price : newvalue[0],
            new_max_price : newvalue[1]
        })
    }

    render()
    {
        return(
            <div className="flight-search-page-filter">
                <div className="f-s-p-f-header">
                    <h2>Filters</h2>
                    <p>reset all</p>
                </div>


                <div className="f-s-p-f-bydep">
                    <div className="f-s-p-f-bydep-header">
                        <h2>departure</h2>
                    </div>
                    <div className="f-s-p-f-bydep-time">
                        <div className="f-s-p-f-bydep-deptime">
                            <p>4am - 11am</p>
                        </div>
                        <div className="f-s-p-f-bydep-deptime">
                            <p>11am - 4pm</p>
                        </div>
                        <div className="f-s-p-f-bydep-deptime">
                            <p>4pm - 9pm</p>
                        </div>
                        <div className="f-s-p-f-bydep-deptime">
                            <p>9pm - 4am</p>
                        </div>
                    </div>
                </div>

               <div className="f-s-p-f-underline"></div>
               
                <div className="f-s-p-f-bystops">
                    <div className="f-s-p-f-bystops-header">
                        <h2>stops</h2>
                    </div>
                    <div className="f-s-p-f-bystops-outer">
                        <select className="f-s-p-f-bystops-stops">
                            <option value={0}>0 Stops</option>
                            <option value={1}>1 Stops</option>
                            <option value={2}>2 Stops</option>
                            <option value={3}>3 Stops</option>
                        </select>
                        <FaAngleDown className="f-s-p-f-dropdownicon"></FaAngleDown>
                    </div>
                </div>

                <div className="f-s-p-f-underline"></div>
                
                <div className="f-s-p-f-byprice">
                    <div className="f-s-p-f-byprice-header">
                        <h2>Onward price</h2>
                        <p>reset</p>
                    </div>
                    <div className="f-s-p-f-byprice-slider">
                        <SliderUi 
                            min={this.state.min_price}
                            max={this.state.max_price}
                            changeMinMax = {this.changeMinMax}
                        />
                        <div className="f-s-p-f-byprice-max-min">
                            <p>${this.state.new_min_price}</p>
                            <p>${this.state.new_max_price}</p>
                        </div>
                    </div>
                </div>

                <div className="f-s-p-f-underline"></div>
               
               
                <div className="f-s-p-f-byprice">
                    <div className="f-s-p-f-byprice-header">
                        <h2>Onward duration</h2>
                        <p>reset</p>
                    </div>
                    <div className="f-s-p-f-byprice-slider">
                        <SliderUi 
                            min={this.state.min_price}
                            max={this.state.max_price}
                            changeMinMax = {this.changeMinMax}
                        />
                        <div className="f-s-p-f-byprice-max-min">
                            <p>${this.state.new_min_price}</p>
                            <p>${this.state.new_max_price}</p>
                        </div>
                    </div>
                </div>

            
            </div>
        )
    }
}

export default FlightSearchPageDesktopFilter;