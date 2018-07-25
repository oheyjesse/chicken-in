import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { hostURL } from '../../hostUrl'

// Logo
import Logo from '../../img/logo/chicken-in-logo.png'

// Page Components
import { DashboardPage } from '../dashboardPage/DashboardPage/DashboardPage'
import { SettingsPage } from '../settingsPage/SettingsPage/SettingsPage'
import { Nav } from './Nav/Nav'

const AppRouter = () => {
  const logout = () => {
    axios.post(`http://${hostURL || window.location.host}/auth/employee/logout`)
      .then(function (response) {
        window.location.href = '/'
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <BrowserRouter>
      <div className="maingrid">

        <div className="pagecontent">
          <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route path="/settings" component={SettingsPage} />
          </Switch>
        </div>

        <Nav>
          <Link className="nav-element" to="/"><h1>Dashboard</h1></Link>
          <Link className="nav-element" to="/settings"><h1>Settings</h1></Link>
          <div className="nav-element"><a href="#logout" className="nav-link" onClick={logout}><h1>Logout</h1></a></div>
        </Nav>

      </div>
    </BrowserRouter>
  )
}

export { AppRouter }
