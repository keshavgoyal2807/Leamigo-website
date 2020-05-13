import React from 'react'
import '../../styles/subscribe.css'
import {MdEmail} from 'react-icons/md'

class Subscribe extends React.Component{
    render()
    {
        return(
            <div className="subscribe">
                <div className="subscribe-container">
                    <div className="subscribe-content">
                        <div className="subscribe-item">
                            <h2>subscribe our newsletter</h2>
                            <p>subscribe to recieve our interesting updates</p>
                            <form className="subscribe-email">
                                <input type="email" className="s-input-email" placeholder="Enter Your Email address" />
                                <MdEmail className="s-email-icon" size={30}></MdEmail>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Subscribe