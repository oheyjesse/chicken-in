import React from 'react'

// css
import './SettingsPage.scss'

// components
import ChangePasswordForm from './ChangePassword/ChangePasswordForm'
import StoreLocationsForm from './StoreLocationsForm/StoreLocationsForm'
import PayMultiplierForm from './PayMultiplier/PayMultiplier'
import SettingsUpdater from './SettingsUpdater/SettingsUpdater'
import axios from 'axios'

const URI = 'http://localhost:3000'

class SettingsPage extends React.Component {

  state = {
    newLocation: '',
    locations: [''],
    otRate: 0,
    dtRate: 0
  }

  componentDidMount = () => {
    this.getBusinessData()
  }

  getBusinessData = () => {
    axios.get(URI + '/api/settings/business')
      .then(res => {
        const data = res.data[0]
        this.setState(() => {
          return {
            locations: data.locations,
            otRate: data.overtimeMultiplier,
            dtRate: data.doubleTimeMultiplier
          }
        })
      })
      .then(() => {
        console.log(this.state)
      })
      .catch(err => {
        console.log(err)
      })
  }

    updateNewSettings = (e) => {
      e.preventDefault()
      console.log(this.state)
    }

    // businessData {
    //   locations: []
    // }

    // axios.put(URI + '/api/settings/business')
    //     .then(res => {
    //       const businessdata = res.data[0]
    //       this.setState(() => {
    //         return {
    //           locations: businessdata.locations,
    //           otRate: businessdata.overtimeMultiplier,
    //           dtRate: businessdata.doubleTimeMultiplier
    //         }
    //       }
    //       )
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    
  // postBusinessData 

  onLocationChange = (e) => {
    this.setState({newLocation: e.target.value})
  }

  handleLocationCreate = (e) => {
    e.preventDefault()
    this.setState({
      newLocations: '',
      locations: [...this.state.businessData.locations, this.state.newLocation]
    })
    console.log(this.state)
  }

  handleLocationDelete = (e) => {
    const locationToRemove = e.target.value

    this.setState(() => {
      const locations = this.state.locations
      const locationsWithoutRemoved = locations.filter(locations => locations !== locationToRemove)
      return {
        locations: locationsWithoutRemoved
      }
    })
  }

  handleOtChange = (e) => {
    this.setState({
      otRate: e.target.value
    })
  }

  handleDtChange = (e) => {
    this.setState({
      dtRate: e.target.value
    })
  }

  render () {
    return (
      <div className="pageContainer">
        <header className="header">
          <h1></h1>
        </header>
        <section className="StoreLocationsForm">
          <StoreLocationsForm
            handleChange={this.onLocationChange}
            handleCreate={this.handleLocationCreate}
            handleDel={this.handleLocationDelete}
            locations={this.state.locations}
            newLocation={this.state.newLocation}
          />
        </section>

        <section className="PayMultiplierForm">
          <PayMultiplierForm
            handleOtChange={this.handleOtChange}
            handleDtChange={this.handleDtChange}
            otRate={this.state.otRate}
            dtRate={this.state.dtRate}
          />
        </section>

        <section className="confirmChanges">
          <SettingsUpdater handleUpdate={this.updateNewSettings}/>
        </section>

        <section className="ChangePasswordForm">
          <ChangePasswordForm />
        </section>
      </div>
    )
  }
}
export { SettingsPage }
