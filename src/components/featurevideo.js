import React from 'react'
import '../styles/featurevideo.css'
import { FaPlay } from 'react-icons/fa'

class FeatureVideo extends React.Component{
    render()
    {
        return(
            <div className="feature-video">
                <div className="feature-video-inner">
                    <div className="feature-video-flex">
                        <div className="feature-video-content">
                            <h2>Take a Video Tour</h2>
                            <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
                            <div className="play-button">
                                <FaPlay size={33} className="play-button-icon"></FaPlay>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeatureVideo;