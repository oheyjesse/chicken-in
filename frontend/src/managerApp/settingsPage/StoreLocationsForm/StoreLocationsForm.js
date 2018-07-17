import React from 'react'
import LocationCard from './LocationCard'

class StoreLocationsForm extends React.Component {

  state = {
    locations: ['Highvale', 'Doncaster', 'Springvale'],
    otRate: 1.5,
    dtRate: 2.0
  }

  handleNewStore = (e) => {
    this.setState({
      locations: [...this.state.locations, e.target.value]
    })
  }

  handleSubmit = (e) => {
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
            <input onChange={this.handleNewStore} placeholder='Store location...' type='text' name='newStore' required/>
            <br/>
            <input type='submit' value='Create New Store'/>
          </form>
        </section>
        <section className='locations-list'>
          <ul><LocationCard /></ul>
        </section>
      </div>
    )
  }
}

export default StoreLocationsForm
