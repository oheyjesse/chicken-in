import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'

// Logo
import Logo from '../../img/logo/chicken-in-logo.png'

// Pages
import { ReportPage } from '../reportPage/ReportPage/ReportPage'
import { ApprovePage } from '../approvePage/ApprovePage/ApprovePage'
import { ManageEmployeesPage } from '../manageEmployeesPage/ManageEmployeesPage/ManageEmployeesPage'
import { SettingsPage } from '../settingsPage/SettingsPage/SettingsPage'

// Grid
import { Maingrid } from './Maingrid/Maingrid'

class AppRouter extends React.Component {
  state = {
    navState: false
  }

  logout = () => {
    axios.post(`http://${window.location.host}/auth/employee/logout`)
      .then(function (response) {
        window.location.reload()
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  toggleNav = (event) => {
    event.preventDefault()
    console.log('!!!')
    if (this.state.navState === false) {
      this.setState(() => {
        return {
          navState: true
        }
      })
    } else {
      this.setState(() => {
        return {
          navState: false
        }
      })
    }
  }

  render () {
    return (
      <BrowserRouter>
        <div className="maingrid">

          <div className="pagecontent">
            <Switch>
              <Route exact path="/" component={ReportPage} />
              <Route path="/approve" component={ApprovePage}/>
              <Route path="/manage" component={ManageEmployeesPage}/>
              <Route path="/settings" component={SettingsPage}/>
            </Switch>
          </div>

          <div className={ this.state.navState ? 'nav active' : 'nav' }>
            <div className="logo">
              <img src={Logo}/>
            </div>
            <br/>
            <h1>Manager</h1>
            <br/>
            <p><Link to="/">Report Page</Link></p>
            <p><Link to="/approve">Approve Page</Link></p>
            <p><Link to="/manage">Manage Employees Page</Link></p>
            <p><Link to="/settings">Settings</Link></p>
            <button onClick={this.logout}>Logout</button>
            <a href="#" onClick={this.toggleNav}>Toggle Nav</a>
          </div>

          <div className="hamburger">
            <a href="#" onClick={this.toggleNav}>Toggle Nav</a>
          </div>

        </div>
      </BrowserRouter>
    )
  }
}

export { AppRouter }
