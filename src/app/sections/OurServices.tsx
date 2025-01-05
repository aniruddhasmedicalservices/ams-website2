import React from 'react'
import "./ourServices.css"
import OurServicesCard from '../components/OurServicesCard'

async function getOurServices() {
  const response = await fetch('http://localhost:3000/api/ourservices')
  const services = await response.json()
  return services
}

export default async function OurServices() {
  const items : [] = await getOurServices();

  return (
    <section id='our-services' className='our-services'>
      <div className='container'>
        <div className='row'>
          <div className='slider'>
            <div className='slide-track'>
              {items && 
              items.length > 0 && 
              items.map((item: {id: number; title: string; content: string}) => (
                < OurServicesCard key={item.id} item={item} /> ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
