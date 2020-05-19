import React from 'react'
import '../../styles/flightsearchpageflightpricesdays.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

class FLightSearchPageFlightPricesDays extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            price_per_day:[],
            date_of_flight:new Date(this.props.start_Date())
        }
        this.days_in_week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        this.months_in_year = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
        this.translate_pos = 0;
        this.slide_Ref = React.createRef();
        this.xpos = -100;
        this.throtteltimer = null
    }

    componentDidMount = ()=>{
        
        var days1 =[];
        var price = [2000,3000,4000];
        var j=0;
        for(var i = 0 ;i<=365;i++)
        {
            var d1 = new Date()
            d1.setDate(d1.getDate()+i);
            var d2 = new Date(d1);
            days1.push({date:d2,price:price[j]});
            j = j+1;
            j = j%3;
            if(d2.getDate() === this.state.date_of_flight.getDate() && d2.getMonth() === this.state.date_of_flight.getMonth() && d2.getYear() === this.state.date_of_flight.getYear() )
            {
                this.translate_pos = -110*i
            }
        }

        this.setState((prev_state,props)=>{
            return(
                {
                    ...prev_state,
                    price_per_day:days1
                }
            )
        })

        // console.log(this.slide_Ref.current)

        if(this.slide_Ref.current.clientWidth == 770)
        {
            this.translate_pos = this.translate_pos +330;
            var slider = document.querySelector('.f-s-p-prices-and-days-slider');
            slider.style.transform = `translate3d(${this.translate_pos}px,0,0)`;
        }
        else if(this.slide_Ref.current.clientWidth == 660)
        {
            this.translate_pos = this.translate_pos +220;
            var slider = document.querySelector('.f-s-p-prices-and-days-slider');
            slider.style.transform = `translate3d(${this.translate_pos}px,0,0)`;
        }

        else if(this.slide_Ref.current.clientWidth == 440)
        {
            this.translate_pos = this.translate_pos +110;
            var slider = document.querySelector('.f-s-p-prices-and-days-slider');
            slider.style.transform = `translate3d(${this.translate_pos}px,0,0)`;
        }

        else if(this.slide_Ref.current.clientWidth == 330)
        {
            this.translate_pos = this.translate_pos ;
            var slider = document.querySelector('.f-s-p-prices-and-days-slider');
            slider.style.transform = `translate3d(${this.translate_pos}px,0,0)`;
        }
        


    }

    scrollLeft = ()=>{
        var slider = document.querySelector('.f-s-p-prices-and-days-slider');
        if(this.translate_pos <= -39820)
        {
            return;
        }
        slider.style.transform = `translate3d(${this.translate_pos-110}px,0,0)`;
        this.translate_pos = this.translate_pos-110
    }

    scrollRight = ()=>{
        var slider = document.querySelector('.f-s-p-prices-and-days-slider');
        if(this.translate_pos == 0)
        {
            return;
        }
        slider.style.transform = `translate3d(${this.translate_pos+110}px,0,0)`;
        this.translate_pos = this.translate_pos+110
    }

    scrollslider = (index)=>{
        var index1 = index
        if(this.slide_Ref.current.clientWidth == 770)
        {
            index = index-3;
            if(index<0)
            {
                this.translate_pos = 0;
            }
            else
            {
                this.translate_pos = index*-110;
            }
            document.querySelector('.f-s-p-price-and-day-active').classList.remove('f-s-p-price-and-day-active');
            document.querySelectorAll('.f-s-p-price-and-day')[index1].classList.add('f-s-p-price-and-day-active')
            var slider = document.querySelector('.f-s-p-prices-and-days-slider');
            slider.style.transform = `translate3d(${this.translate_pos}px,0,0)`;
        }
        else if(this.slide_Ref.current.clientWidth == 660)
        {
            index = index-2;
            if(index<0)
            {
                this.translate_pos = 0;
            }
            else
            {
                this.translate_pos = index*-110;
            }
            document.querySelector('.f-s-p-price-and-day-active').classList.remove('f-s-p-price-and-day-active');
            document.querySelectorAll('.f-s-p-price-and-day')[index1].classList.add('f-s-p-price-and-day-active')
            var slider = document.querySelector('.f-s-p-prices-and-days-slider');
            slider.style.transform = `translate3d(${this.translate_pos}px,0,0)`;
        }

        else if(this.slide_Ref.current.clientWidth == 440)
        {
            index = index-1;
            if(index<0)
            {
                this.translate_pos = 0;
            }
            else
            {
                this.translate_pos = index*-110;
            }
            document.querySelector('.f-s-p-price-and-day-active').classList.remove('f-s-p-price-and-day-active');
            document.querySelectorAll('.f-s-p-price-and-day')[index1].classList.add('f-s-p-price-and-day-active')
            var slider = document.querySelector('.f-s-p-prices-and-days-slider');
            slider.style.transform = `translate3d(${this.translate_pos}px,0,0)`;
        }

        else if(this.slide_Ref.current.clientWidth == 330)
        {
            index = index-1;
            if(index<0)
            {
                this.translate_pos = 0;
            }
            else
            {
                this.translate_pos = index*-110;
            }
            document.querySelector('.f-s-p-price-and-day-active').classList.remove('f-s-p-price-and-day-active');
            document.querySelectorAll('.f-s-p-price-and-day')[index1].classList.add('f-s-p-price-and-day-active')
            var slider = document.querySelector('.f-s-p-prices-and-days-slider');
            slider.style.transform = `translate3d(${this.translate_pos}px,0,0)`;
        }
    }

    moveslider = (e)=>{
        e.persist();
        // console.log(e.changedTouches[0].screenX);
        if(this.xpos === -100)
        {
            return;
        }
        else
        {
            if(this.throtteltimer!=null)
            {
                return;
            }
            else
            {
                this.throtteltimer = setTimeout(() => {
                    var check;
                    check = e.changedTouches[0].screenX;
                    check = check - this.xpos;
                    var slider = document.querySelector('.f-s-p-prices-and-days-slider');
                    this.translate_pos = this.translate_pos + check;
                    slider.style.transform = `translate3d(${this.translate_pos}px,0,0)`;
                    this.throtteltimer = null;
                }, 100);
            }
        }
    }

    setxvalue = (e)=>{
        e.persist();
        this.xpos = e.changedTouches[0].screenX;
    }

    resetxvalue = (e)=>{
        e.persist();
        this.xpos = -100;
        clearTimeout(this.throtteltimer);
        this.throtteltimer = null
    }

    render()
    {
        return(
            <div className="f-s-p-prices-and-days" ref={this.slide_Ref}>
                <div className="f-s-p-prices-and-days-inner">
                <div className="f-s-p-prices-and-days-slider" onTouchMove={(e)=>{this.moveslider(e)}} onTouchStart={(e)=>{this.setxvalue(e)}}  onTouchEnd={(e)=>{this.resetxvalue(e)}}>
                    {this.state.price_per_day.map((day,index)=>{
                        {/* console.log(this.state.date_of_flight,day.date); */}
                        if(day.date.getDate() === this.state.date_of_flight.getDate() && day.date.getMonth() === this.state.date_of_flight.getMonth() && day.date.getYear() === this.state.date_of_flight.getYear() )
                        {
                            return(
                                <div className="f-s-p-price-and-day f-s-p-price-and-day-active " onClick={()=>{this.scrollslider(index)}}>
                                <p>{this.days_in_week[day.date.getDay()]},{day.date.getDate()} {this.months_in_year[day.date.getMonth()]}</p>
                                <p>$ {day.price}</p>
                                </div>
                            )
                        }

                        return(
                            <div className="f-s-p-price-and-day" onClick={()=>{this.scrollslider(index)}}>
                            <p>{this.days_in_week[day.date.getDay()]},{day.date.getDate()} {this.months_in_year[day.date.getMonth()]}</p>
                            <p>$ {day.price}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="f-s-p-left-dates" onClick={()=>{this.scrollRight()}}>
                    <FaAngleLeft className="f-s-p-dates-scroll-icon"></FaAngleLeft>
                </div>
                <div className="f-s-p-right-dates" onClick={()=>{this.scrollLeft()}}>
                    <FaAngleRight className="f-s-p-dates-scroll-icon"></FaAngleRight>
                </div>  
                </div>
            </div>
        )
    }
}

export default FLightSearchPageFlightPricesDays