import React from 'react'
import './StoreLocationsForm.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

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
              <FontAwesomeIcon className="remove" icon={faTimes} />
            </button>
          </div>
        </div>
      )}
  </ul>
)

export default LocationList
