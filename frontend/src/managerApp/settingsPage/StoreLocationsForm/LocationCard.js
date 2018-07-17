import React from 'react'

const LocationCard = ({
  id,
  name,
  handleDelete
}) => {
  return <div key={id} className="location-card">
    <div>
      <h2>{name}</h2>
    </div>
    <div className="delete-button">
      <button onClick={() => { handleDelete(id) }}>x</button>
    </div>
  </div>
}

export default LocationCard
