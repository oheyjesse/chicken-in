import React from 'react'

// css
import './SettingsPage.scss'

// components
import ChangePasswordForm from './ChangePassword/ChangePasswordForm'
import StoreLocationsForm from './StoreLocationsForm/StoreLocationsForm'
import PayMultiplierForm from './PayMultiplier/PayMultiplier'
import SettingsUpdater from './SettingsUpdater/SettingsUpdater'
import axios from 'axios'
import { hostURL } from '../../../hostUrl'

const URI = 'http://localhost:3000'

class SettingsPage extends React.Component {

  state = {
    name: '',
    address: '',
    newLocation: '',
    locations: [''],
    otRate: 0,
    dtRate: 0,
    oldPassword: null,
    newPassword: null,
    confirmPassword: null
  }

  componentDidMount = () => {
    this.getBusinessData()
  }

  // axios

  getBusinessData = () => {
    axios.get(`http://${hostURL || window.location.host}/api/settings/business`)
      .then(res => {
        const data = res.data
        this.setState(() => {
          return {
            name: data.name,
            address: data.address,
            locations: data.locations,
            otRate: data.overtimeMultiplier,
            dtRate: data.doubleTimeMultiplier
          }
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateNewSettings = (e) => {
    e.preventDefault()
    axios.put(`http://${hostURL || window.location.host}/api/settings/business`, {
      name: this.state.name,
      address: this.state.address,
      locations: this.state.locations,
      overtimeMultiplier: this.state.otRate,
      doubleTimeMultiplier: this.state.dtRate
    })
      .then(() => {
        alert('Settings Updated')
      })
      .catch(err => {
        console.log(err)
      })
  }

  updatePassword = () => {
    axios.put(`http://${hostURL || window.location.host}/auth/manager/updatePassword`, {
      oldPassword: this.state.oldPassword,
      newPassword: this.state.newPassword
    })
      .then(() => {
        alert('Password Updated')
      })
      .catch(err => {
        alert('Password Error')
        console.log(err)
      })
  }
  // location settings

  onLocationChange = (e) => {
    this.setState({newLocation: e.target.value})
  }

  handleLocationCreate = (e) => {
    e.preventDefault()
    this.setState({
      newLocations: '',
      locations: [...this.state.locations, this.state.newLocation]
    })
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

  // pay multiplier

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

  // password change

  confirmOldPassword = (e) => {
    this.setState({
      oldPassword: e.target.value
    })
  }

  handleNewPassword = (e) => {
    this.setState({
      newPassword: e.target.value
    })
  }

  confirmNewPassword = (e) => {
    this.setState({
      confirmNewPassword: e.target.value
    })
  }

  createNewPassword = (e) => {
    e.preventDefault() 
    if (this.state.newPassword !== this.state.confirmNewPassword)
    {
      alert('Passwords Do Not Match')
    } else {
      this.updatePassword()
    }
  }

  render () {
    return (
      <div className="pageContainer">
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
          <ChangePasswordForm
            confirmOld={this.confirmOldPassword}
            handleNew={this.handleNewPassword}
            confirmNew={this.confirmNewPassword}
            createNew={this.createNewPassword}
          />
        </section>
      </div>
    )
  }
}
export { SettingsPage }
