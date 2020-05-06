import React from 'react'
import '../styles/bestfeatures.css'
import {FaDollarSign,FaLock,FaThumbsUp,FaBars, FaTh} from 'react-icons/fa'


class BestFeatures extends React.Component{

    rotateicon = (pos)=>{
        console.log(document.getElementsByClassName('best-features-icon')[pos])
        document.getElementsByClassName('best-features-icon')[pos].classList.add('best-features-icon-hover');
    }

    rerotateicon = (pos)=>{
        document.getElementsByClassName('best-features-icon')[pos].classList.remove('best-features-icon-hover');
    }
    render()
    {
        return(
            <div className="best-features">
                <div className="best-features-inner">
                    <div className="feature">
                        <div className="best-features-icon" onMouseEnter={()=>{this.rotateicon(0)}} onMouseLeave={()=>{this.rerotateicon(0)}}>
                            <FaDollarSign></FaDollarSign>
                        </div>
                        <h3>Best Price Guarantee</h3>
                        <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
                    </div>
                    <div className="feature">
                        <div className="best-features-icon" onMouseEnter={()=>{this.rotateicon(1)}} onMouseLeave={()=>{this.rerotateicon(1)}}>
                            <FaLock></FaLock>
                        </div>
                        <h3>Safe and Secure</h3>
                        <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
                    </div>
                    <div className="feature">
                        <div className="best-features-icon" onMouseEnter={()=>{this.rotateicon(2)}} onMouseLeave={()=>{this.rerotateicon(2)}}>
                            <FaThumbsUp></FaThumbsUp>
                        </div>
                        <h3>Best Travel Agents</h3>
                        <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
                    </div>
                    <div className="feature">
                        <div className="best-features-icon" onMouseEnter={()=>{this.rotateicon(3)}} onMouseLeave={()=>{this.rerotateicon(3)}}>
                            <FaBars></FaBars>
                        </div>
                        <h3>Travel Guidelines</h3>
                        <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BestFeatures