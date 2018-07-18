import React from 'react'
import './StoreLocationsForm.scss'

const LocationList = props => (
  <ul>
    {
      props.locations.map((location, index) => 
        <div className="location-card" key={index}>
          <div>
            <h2>{location}</h2>
          </div>
          <div className="delete-button">
            <button onClick={props.handleDelete} value={location}>x</button>
          </div>
        </div>
        
      )}
  </ul>
)

export default LocationList
