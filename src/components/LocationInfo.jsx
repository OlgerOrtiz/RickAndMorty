import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <article className='LocationInfo__Content'>
        <h2 className='LocationInfo__Title'>{location?.name}</h2> 
        <ul className='LocationInfo__List'>
            <li className='LocationInfo__List--Data'>Type<span>{location?.type}</span></li>
            <li className='LocationInfo__List--Data'>Dimension<span>{location?.dimension}</span></li>
            <li className='LocationInfo__List--Data'>Residents<span>{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationInfo