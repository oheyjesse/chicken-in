import React from 'react'
import './SettingsPage.scss'
// TODO: Import axios from 'axios'

// components
import ChangePasswordForm from './ChangePassword/ChangePasswordForm'
import StoreLocationsForm from './StoreLocationsForm/StoreLocationsForm'
import PayMultiplierForm from './PayMultiplier/PayMultiplier'

// Dummy Data
import { dummyShifts } from '../../../dummyData'

const URI = 'http://localhost:3000'

class SettingsPage extends React.Component {
  state = {
    locations: null,
    otRate: null,
    dtRate: null
  }

  render () {
    return (
      <div className="pageContainer">
        <header className="header">
          <h1>Settings Page</h1>
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
