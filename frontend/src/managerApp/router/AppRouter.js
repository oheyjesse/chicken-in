import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'

// Pages
import { ReportPage } from '../reportPage/ReportPage/ReportPage'
import { ApprovePage } from '../approvePage/ApprovePage/ApprovePage'
import { ManageEmployeesPage } from '../manageEmployeesPage/ManageEmployeesPage/ManageEmployeesPage'
import { SettingsPage } from '../settingsPage/SettingsPage/SettingsPage'

// Components
import { Nav1 } from './Nav/Nav'

class AppRouter1 extends React.Component {
  state = {
    navState: false
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

  logout = (event) => {
    event.preventDefault()

    axios.post(`http://${window.location.host}/auth/employee/logout`)
      .then(function (response) {
        window.location.href = '/'
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
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

          <Nav1>
            <Link className="nav-element" to="/"><h1>Reports</h1></Link>
            <Link className="nav-element" to="/approve"><h1>Approve Shifts</h1></Link>
            <Link className="nav-element" to="/manage"><h1>Manage Team</h1></Link>
            <Link className="nav-element" to="/settings"><h1>Business Settings</h1></Link>
            <div className="nav-element"><a href='"#logout"' className="nav-link" onClick={this.logout}><h1>Logout</h1></a></div>
          </Nav1>

        </div>
      </BrowserRouter>
    )
  }
}

export { AppRouter1 }
