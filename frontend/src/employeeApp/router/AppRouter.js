import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'

// Logo
import Logo from '../../img/logo/chicken-in-logo.png'

// Page Components
import { DashboardPage } from '../dashboardPage/DashboardPage/DashboardPage'
import { SettingsPage } from '../settingsPage/SettingsPage/SettingsPage'

const AppRouter = () => {
  const logout = () => {
    axios.post(`http://${window.location.host}/auth/employee/logout`)
      .then(function (response) {
        window.location.reload()
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <BrowserRouter>
      <div className="maingrid_temporary_to_simulate_mobile_view_that_can_be_easliy_changed_back_later">

        <div className="nav_temporary_to_simulate_mobile_view_that_can_be_easliy_changed_back_later">
          <div className="logo">
            <img src={Logo}/>
          </div>
          <br/>
          <h1>Employee</h1>
          <br/>
          <p><Link to="/">Dashboard Page</Link></p>
          <p><Link to="/settings">Settings Page</Link></p>
          <button onClick={logout}>Logout</button>
          <hr/>
        </div>

        <div className="pagecontent_temporary_to_simulate_mobile_view_that_can_be_easliy_changed_back_later">
          <div className="header_div_with_background_color"></div>

          <div className="usericon_temporary_to_simulate_mobile_view_that_can_be_easliy_changed_back_later">
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
}

export { AppRouter }


