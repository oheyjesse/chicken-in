import React from 'react'
import './StoreLocationsForm.scss'

const LocationList = props => (
  <ul>
    {
      props.locations.map((location, id) =>
        <div className="location-card" key={id}>
          <header className="location-header">
            <h2>{location}</h2>
          </header>
          <div className="button-container" >
            <button className="delete-button" onClick={props.handleDelete} value={location}>
              <h1>X</h1>
            </button>
          </div>
        </div>
      )}
  </ul>
)

export default LocationList
