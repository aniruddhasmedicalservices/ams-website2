import React from 'react'
import "./ourServicesCard.css"
import { Content } from 'next/font/google'

function ServicesCard({
    item,
} : {
    item: {id: number; title: string; content: string},
})  {
    return (
    <div className="col-md-3 col-sm-6">
        <div className="card card-block">
            <div className='slide'>
                <img src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg" alt="Photo of sunset" />
                <h4 className="card-title">{item.title}</h4>
                <p className="card-text">{item.content}</p>
            </div> 
            {/* <h5 className="card-title mt-3 mb-3">Sierra Web Development • Owner</h5>
            <p className="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> */}
        </div>
    </div>
  )
}

export default ServicesCard;