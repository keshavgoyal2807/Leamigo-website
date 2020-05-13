import React from 'react'
import '../../styles/highlights.css'
import {FaShip,FaCar} from 'react-icons/fa'
import { MdFlight } from 'react-icons/md'

class Highlights extends React.Component{
    render()
    {
        return(
            <div className="highlights">
                <div className="highlights-inner">
                    <div className="highlights-content">
                        <div className="highlights-item">
                            <div className="highlight-item-icon">
                                <MdFlight className="h-i-i rotate-icon" size={100}></MdFlight>
                            </div>
                            <div className="highlight-item-text">
                                <h2>2496</h2>
                                <p>outstanding tours</p>
                            </div>
                        </div>
                        <div className="highlights-item">
                            <div className="highlight-item-icon">
                                <FaShip className="h-i-i" size={100}></FaShip>
                            </div>
                            <div className="highlight-item-text">
                                <h2>1906</h2>
                                <p>worldwide cruise</p>
                            </div>
                        </div>
                        <div className="highlights-item">
                            <div className="highlight-item-icon">
                                <FaCar className="h-i-i" size={100}></FaCar>
                            </div>
                            <div className="highlight-item-text">
                                <h2>2033</h2>
                                <p>luxury car booking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Highlights