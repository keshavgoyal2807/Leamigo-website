import React from 'react'
import '../../styles/blogs.css'
import {Link} from 'react-router-dom'
import {FaAngleRight,FaRegCalendarAlt} from 'react-icons/fa'
import blog1 from '../../images/latest-blog-1.jpg'

class Blogs extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            blogs:[{author:'jhon smith',date:'29 April,2017',header:'travel insurance benfits',brief:'Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.'},{author:'jhon smith',date:'29 April,2017',header:'travel insurance benfits',brief:'Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.'},{author:'jhon smith',date:'29 April,2017',header:'travel insurance benfits',brief:'Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.'}]
        }
    }
    render()
    {
        return(
            <div className="blogs">
                <div className="blogs-container">
                    <div className="blogs-content">
                        <div className="blogs-heading">
                            <h2>our latest blogs</h2>
                            <hr></hr>
                        </div>
                        <div className="blogs-blogcontent">
                            {this.state.blogs.map((blog,index)=>{
                                    return(
                                        <div className="blog-item">
                                        <div className="blog-item-image">
                                        <img src={blog1} alt="blog" className="bociii"></img>
                                        <div className="blog-details">
                                            <div className="blog-date">
                                                <FaRegCalendarAlt size={15} className="blog-cal-icon"></FaRegCalendarAlt>
                                                <p>{blog.date}</p>
                                            </div>
                                            <p>by: <span className="blog-author">{blog.author}</span></p>
                                        </div>
                                    </div>
                                    <div className="blog-item-name">
                                        <div className="blog-name">
                                            <p className="blog-header">{blog.header}</p>
                                            <p className="blog-brief">{blog.brief}</p>
                                        </div>
                                        <div className="blog-fulldetails">
                                            <Link to="/" className="bo-link-fulldetails"><FaAngleRight size={15}></FaAngleRight></Link>
                                        </div>
                                    </div>
                                </div>
                                    )
                                })}
                        </div>
                        <div className="blogs-view-all">
                            <Link to="/" className="blogs-link-view-all">View All</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blogs