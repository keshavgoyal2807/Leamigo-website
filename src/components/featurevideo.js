import React from 'react'
import '../styles/featurevideo.css'
import { FaPlay } from 'react-icons/fa'
import Modal from 'react-modal'
import { MdClose } from 'react-icons/md';

class FeatureVideo extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            openModal:false
        }
    }

    openmodal = ()=>{
        this.setState({
            openModal:true
        })
    }

    closemodal = ()=>{
        this.setState({
            openModal:false
        })
    }

    render()
    {
        return(
            <div className="feature-video">
                <div className="feature-video-inner">
                    <div className="feature-video-flex">
                        <div className="feature-video-content">
                            <h2>Take a Video Tour</h2>
                            <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
                            <div className="play-button" onClick={()=>{this.openmodal()}}>
                                <FaPlay size={33} className="play-button-icon"></FaPlay>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal 
                    isOpen={this.state.openModal}
                    contentLabel={"video-label"}
                    onRequestClose={this.closemodal}
                    className="video-modal-main"
                    >
                        <div className="video-modal">
                            <iframe class="video-modal-video" src="https://www.youtube.com/embed/0O2aH4XLbto" allowscriptaccess="always">></iframe>
                            <div className="video-modal-close" onClick={()=>{this.closemodal()}}><MdClose size={20}></MdClose></div>
                        </div>
                        
                    </Modal>
            </div>
        )
    }
}

export default FeatureVideo;