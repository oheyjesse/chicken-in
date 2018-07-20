import React from 'react'
import './StoreLocationsForm.scss'

const LocationList = props => (
  <ul>
    {
      props.locations.map((location, id) =>
        <div className="location-card" key={id}>
          <header className="location-header">
            <h3>{location}</h3>
          </header>
          <div className="button-container" >
            <button className="delete-button" onClick={props.handleDelete} value={location}>
              X
            </button>
          </div>
        </div>
      )}
  </ul>
)

export default LocationList
