import React from 'react'
import '../styles/testimonials.css'
import { FaStar } from 'react-icons/fa';
import client_1 from '../images/client-1.jpg'
import client_2 from '../images/client-2.jpg'
import client_3 from '../images/client-3.jpg'
class Testimonials extends React.Component{

    constructor(props){
        super(props);
        this.timer=null
    }
    
    
    changeSlides=(n,items)=>{
       clearInterval(this.timer);
       var content = document.querySelectorAll('.testimonial-carousel-items');
       var images = document.querySelectorAll('.testimonial-page-image')
       if(n===items)
       {
           content[n-1].classList.remove('active');
           content[n-1].classList.add('prev');
           images[n-1].classList.remove('testimonial-page-image-active')
           content[n].classList.remove('next');
           content[n].classList.add('active');
           images[n].classList.add('testimonial-page-image-active')
           content[0].classList.remove('prev');
           content[0].classList.add('next');
           this.timer = setInterval(()=>{this.changeSlides(0,items)},5000)
       }
       else if(n===0)
       {
           content[items].classList.remove('active')
           content[items].classList.add('prev');
           images[items].classList.remove('testimonial-page-image-active')
           content[n].classList.remove('next');
           content[n].classList.add('active');
           images[n].classList.add('testimonial-page-image-active')
           content[n+1].classList.remove('prev');
           content[n+1].classList.add('next');
           this.timer = setInterval(()=>{this.changeSlides(n+1,items)},5000)
       }
       else
       {
           content[n-1].classList.remove('active');
           content[n-1].classList.add('prev');
           images[n-1].classList.remove('testimonial-page-image-active')
           content[n].classList.remove('next')
           content[n].classList.add('active');
           images[n].classList.add('testimonial-page-image-active')
           content[n+1].classList.remove('prev')
           content[n+1].classList.add('next');
           this.timer = setInterval(()=>{this.changeSlides(n+1,items)},5000)
       }
    
    
    }
    componentDidMount(){
       var items = document.getElementsByClassName('testimonial-carousel-items').length;
       items = items-1;
       var slide = 0;
       document.querySelectorAll('.testimonial-carousel-items')[0].classList.add('active')
       document.querySelectorAll('.testimonial-page-image')[0].classList.add('testimonial-image-active')
       this.timer = setInterval(()=>{this.changeSlides(slide+1,items)},5000)
    }
    render()
    {
        return(
            <div className="testimonial">
                <div className="testimonial-inner">
                    <div className="testimonial-container">
                        <div className="testimonial-page-heading">
                            <h2>Testimonials</h2>
                            <hr></hr>
                        </div>
                        <div className="testimonial-carousel-main">
                            <div className="testimonial-carousel-items item1">
                                <blockquote>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</blockquote>
                                <div className="testimonial-ratings">
                                    <FaStar size={25} className="testimonial-rating-icon"></FaStar>
                                    <FaStar size={25} className="testimonial-rating-icon"></FaStar>
                                    <FaStar size={25} className="testimonial-rating-icon"></FaStar>
                                    <FaStar size={25} className="testimonial-rating-icon"></FaStar>
                                    <FaStar size={25} className="testimonial-rating-icon"></FaStar>
                                </div>
                                <p className="testimonial-name">jhon smith</p>
                            </div>
                            <div className="testimonial-carousel-items item2">
                                <blockquote>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</blockquote>
                                <div className="testimonial-ratings">
                                    <FaStar size={25} className="testimonial-rating-icon"></FaStar>
                                    <FaStar size={25} className="testimonial-rating-icon"></FaStar>
                                    <FaStar size={25} className="testimonial-rating-icon"></FaStar>
                                    <FaStar size={25} className="testimonial-rating-icon"></FaStar>
                                    <FaStar size={25} className="testimonial-rating-icon"></FaStar>
                                </div>
                                <p className="testimonial-name">jhon smith</p>
                            </div>
                            <div className="testimonial-carousel-items item3">
                                <blockquote>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</blockquote>
                                <div className="testimonial-ratings">
                                    <FaStar size={25} className="testimonial-rating-icon"></FaStar>
                                    <FaStar size={25} className="testimonial-rating-icon"></FaStar>
                                    <FaStar size={25} className="testimonial-rating-icon"></FaStar>
                                    <FaStar size={25} className="testimonial-rating-icon"></FaStar>
                                    <FaStar size={25} className="testimonial-rating-icon"></FaStar>
                                </div>
                                <p className="testimonial-name">jhon smith</p>
                            </div>
                        </div>
                        <div className="testimonial-page-images">
                            <div className="testimonial-page-image">
                                <img src={client_1} alt="client" className="testimonial-page-cimage"></img>
                            </div>
                            <div className="testimonial-page-image">
                                <img src={client_2} alt="client" className="testimonial-page-cimage"></img>
                            </div>
                            <div className="testimonial-page-image">
                                <img src={client_3} alt="client" className="testimonial-page-cimage"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonials;