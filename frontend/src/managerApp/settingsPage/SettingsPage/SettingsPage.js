import React from 'react'

// css
import './SettingsPage.scss'

// components
import ChangePasswordForm from './ChangePassword/ChangePasswordForm'
import StoreLocationsForm from './StoreLocationsForm/StoreLocationsForm'
import PayMultiplierForm from './PayMultiplier/PayMultiplier'
import axios from 'axios'

// Dummy Data
import { dummyBusiness } from '../../../dummyData'

const URI = 'http://localhost:3000'

class SettingsPage extends React.Component {

  state = {
    businessData: dummyBusiness[0]
  }

  componentDidMount = () => {
    this.getBusinessData()
  }

  getBusinessData = () => {
    axios.get(URI + '/api/settings/business')
      .then(res => {
        const businessdata = res.data
        this.setState(businessdata)
        console.log(this.state)
      })
      .then(

      )
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <div className="pageContainer">
        <header className="header">
          <h1></h1>
        </header>
        <section className="StoreLocationsForm">
          <StoreLocationsForm />
        </section>
        <section className="PayMultiplierForm">
          <PayMultiplierForm />
        </section>
        <section className="ChangePasswordForm">
          <ChangePasswordForm />
        </section>
      </div>
    )
  }
}
export { SettingsPage }
