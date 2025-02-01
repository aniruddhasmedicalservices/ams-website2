import React from 'react'
import "./trustedBy.css"
import TrustedBy from '../components/OurServicesCard'

const BASE_URL = process.env.BASE_URL || '';

async function getOurServices() {
  const response = await fetch(`${BASE_URL}/pages/api/ourservices`)
  const services = await response.json()
  return services
}

export default async function OurServices() {
  const items : [] = await getOurServices();

  return (
    <section id='our-services' className='our-services'>
      <div className='container'>
        {/* <div className='row'>
          {items && 
          items.length > 0 && 
          items.map((item: {id: number; title: string; content: string}) => (
            < OurServicesCard key={item.id} item={item} /> ))}
        </div> */}
      </div>
    </section>
  )
}
