import React from 'react'
import '../styles/carousel.css'

class Carousel extends React.Component{

     constructor(props){
         super(props);
         this.timer=null
     }


    changeSlides=(n,items)=>{
        clearInterval(this.timer);
        var content = document.querySelectorAll('.carousel-items');
        var item_content = document.querySelectorAll('.item-contents');
        if(n===items)
        {
            let k = (n-1)*3;
            let k1 = n*3;
            item_content[k].classList.remove('item-contents-active');
            item_content[k+1].classList.remove('item-contents-active');
            item_content[k+2].classList.remove('item-contents-active');
            content[n-1].classList.remove('active');
            content[n-1].classList.add('prev');
            content[n].classList.remove('next');
            content[n].classList.add('active');
            item_content[k1].classList.add('item-contents-active');
            item_content[k1+1].classList.add('item-contents-active');
            item_content[k1+2].classList.add('item-contents-active');
            content[0].classList.remove('prev');
            content[0].classList.add('next');
            this.timer = setInterval(()=>{this.changeSlides(0,items)},5000)
        }
        else if(n===0)
        {
            let k = items*3
            let k1=n*3;
            item_content[k].classList.remove('item-contents-active');
            item_content[k+1].classList.remove('item-contents-active');
            item_content[k+2].classList.remove('item-contents-active');
            content[items].classList.remove('active')
            content[items].classList.add('prev');
            content[n].classList.remove('next');
            content[n].classList.add('active');
            item_content[k1].classList.add('item-contents-active');
            item_content[k1+1].classList.add('item-contents-active');
            item_content[k1+2].classList.add('item-contents-active');
            content[n+1].classList.remove('prev');
            content[n+1].classList.add('next');
            this.timer = setInterval(()=>{this.changeSlides(n+1,items)},5000)
        }
        else
        {
            let k = (n-1)*3
            let k1=n*3;
            item_content[k].classList.remove('item-contents-active');
            item_content[k+1].classList.remove('item-contents-active');
            item_content[k+2].classList.remove('item-contents-active');
            content[n-1].classList.remove('active');
            content[n-1].classList.add('prev');
            content[n].classList.remove('next')
            content[n].classList.add('active');
            item_content[k1].classList.add('item-contents-active');
            item_content[k1+1].classList.add('item-contents-active');
            item_content[k1+2].classList.add('item-contents-active');
            content[n+1].classList.remove('prev')
            content[n+1].classList.add('next');
            this.timer = setInterval(()=>{this.changeSlides(n+1,items)},5000)
        }


    }
    componentDidMount(){
        var items = document.getElementsByClassName('carousel-items').length;
        items = items-1;
        var slide = 0;
        document.querySelectorAll('.item-contents')[0].classList.add('item-contents-active')
        document.querySelectorAll('.item-contents')[1].classList.add('item-contents-active')
        document.querySelectorAll('.item-contents')[2].classList.add('item-contents-active')
        document.querySelectorAll('.carousel-items')[0].classList.add('active')
        this.timer = setInterval(()=>{this.changeSlides(slide+1,items)},5000)
    }
    render()
    {
        return(
            <div className="carousel-main">
                <div className="carousel-items item1">
                    <div className="item-content">
                        <h2 className="item-contents">Discover</h2>
                        <h1 className="item-contents">Australia</h1>
                        <button className="item-contents">ViewMore</button>
                    </div>
                </div>

                <div className="carousel-items item2">
                    <div className="item-content">
                        <h2 className="item-contents">Discover</h2>
                        <h1 className="item-contents">Europe</h1>
                        <button className="item-contents">ViewMore</button>
                    </div>
                </div>

                <div className="carousel-items item3">
                    <div className="item-content">
                        <h2 className="item-contents">Discover</h2>
                        <h1 className="item-contents">India</h1>
                        <button className="item-contents">ViewMore</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel