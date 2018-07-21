import React from 'react'
import LocationList from './LocationList'

class StoreLocationsForm extends React.Component {
  // state = {
  //   newLocation: '',
  //   locations: []
  // }

  // onLocationChange = (e) => {
  //   this.setState({newLocations: e.target.value})
  // }

  // handleLocationSubmit = (e) => {
  //   e.preventDefault()
  //   this.setState({
  //     newLocations: '',
  //     locations: [...this.state.locations, this.state.newLocations]
  //   })
  //   console.log(this.state)
  // }

  // handleLocationDelete = (e) => {
  //   const locationToRemove = e.target.value
  //   // e.target.getAttribute('value')

  //   this.setState(() => {
  //     const locations = this.state.locations
  //     const locationsWithoutRemoved = locations.filter(locations => locations !== locationToRemove)
  //     return {
  //       locations: locationsWithoutRemoved
  //     }
  //   })
  // }

  render () {
    return (
      <div className='card-container'>
        <div className="card-header">
          <h2>Current Locations</h2>
        </div>
        <div className="card-content-settings">
          <section className='location-adder'>
            <form onSubmit={this.props.handleCreate}>
              <div className="loc-input">
                <input value={this.props.newLocation} onChange={this.props.handleChange} placeholder='Store location...' type='text' required/>
              </div>
              <div className='loc-submit'>
                <input type='submit' value='Create New Store'/>
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
