import React from 'react'
import LocationList from './LocationList'

class StoreLocationsForm extends React.Component {

  state = {
    newLocations: '',
    locations: ['Highvale', 'Doncaster', 'Springvale']
  }

  onChange = (e) => {
    this.setState({newLocations: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      newLocations: '',
      locations: [...this.state.locations, this.state.newLocations]
    })
    console.log(this.state)
  }

  handleDelete = (e) => {
    const locationToRemove = e.target.value

    this.setState(() => {
      const locations = this.state.locations
      const locationsWithoutRemoved = locations.filter(locations => locations !== locationToRemove)
      return {
        locations: locationsWithoutRemoved
      }
    })
  }

  checkState = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render () {
    return (
      <div className='form-container'>
        <section className='location-adder'>
          <h2>Store Locations</h2>
          <br/>
          <form onSubmit={this.handleSubmit}>
            <label>New Store...</label>
            <br/>
            <input value={this.state.newLocations} onChange={this.onChange} placeholder='Store location...' type='text' required/>
            <br/>
            <input type='submit' value='Create New Store'/>
          </form>
        </section>
        <section className='locations-list'>
          <LocationList locations={this.state.locations} handleDelete={this.handleDelete} />
        </section>
        <button onClick={this.checkState}>check state</button>
      </div>
    )
  }
}

export default StoreLocationsForm
