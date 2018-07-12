import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { DashboardPage } from '../dashboardPage/DashboardPage/DashboardPage'
import { SettingsPage } from '../settingsPage/SettingsPage/SettingsPage'

const AppRouter = () => (

  <BrowserRouter>
    <div>

      <h1>Welcome to the Employee App!</h1>
      <p><Link to="/">Dashboard Page</Link></p>
      <p><Link to="/settings">Settings Page</Link></p>
      <hr/>

      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route path="/settings" component={SettingsPage} />
      </Switch>

    </div>
  </BrowserRouter>
)

export { AppRouter }


