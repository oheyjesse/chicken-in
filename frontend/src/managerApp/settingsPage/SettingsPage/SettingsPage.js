import React from 'react'
import ChangePasswordForm from '../ChangePassword/ChangePasswordForm'
import StoreLocationsForm from '../StoreLocationsForm/StoreLocationsForm'
import PayMultiplierForm from '../PayMultiplier/PayMultiplier'

const SettingsPage = () => (
  <div>
    <h1>Settings Page</h1>
    <ChangePasswordForm />
    <StoreLocationsForm />
    <PayMultiplierForm />
  </div>
)

export { SettingsPage }
