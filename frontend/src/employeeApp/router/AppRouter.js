import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// Logo
import Logo from '../../img/logo/chicken-in-logo.png'

// Page Components
import { DashboardPage } from '../dashboardPage/DashboardPage/DashboardPage'
import { SettingsPage } from '../settingsPage/SettingsPage/SettingsPage'

const AppRouter = () => (

  <BrowserRouter>
    <div className="maingrid">

      <div className="nav">
        <div className="logo">
          <img src={Logo}/>
        </div>
        <br/>
        <h1>Employee</h1>
        <br/>
        <p><Link to="/">Dashboard Page</Link></p>
        <p><Link to="/settings">Settings Page</Link></p>
        <hr/>
      </div>

      <div className="pagecontent">

        <div className="usericon">
          U
        </div>

        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/settings" component={SettingsPage} />
        </Switch>
      </div>

    </div>
  </BrowserRouter>
)

export { AppRouter }


