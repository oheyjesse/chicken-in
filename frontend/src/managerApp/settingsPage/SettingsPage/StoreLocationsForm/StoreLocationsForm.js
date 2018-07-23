import React from 'react'
import LocationList from './LocationList'

class StoreLocationsForm extends React.Component {

  render () {
    return (
      <div className='card-container'>
        <div className="card-header">
          <h2>Store Locations</h2>
        </div>
        <div className="card-content-locations">
          <section className='location-adder'>
            <form onSubmit={this.props.handleCreate}>
              <div className="loc-input">
                <input value={this.props.newLocation} onChange={this.props.handleChange} placeholder='Store location...' type='text' required/>
              </div>
              <div className='loc-submit'>
                <input type='submit' value='Add New Store'/>
              </div>
            </form>
          </section>
          <section className='locations-list'>
            <div className="title-card">
              <h2>Current Locations</h2>
            </div>
            <LocationList className='loc-list' locations={this.props.locations} handleDelete={this.props.handleDel} />
          </section>
        </div>
      </div>
    )
  }
}

export default StoreLocationsForm
