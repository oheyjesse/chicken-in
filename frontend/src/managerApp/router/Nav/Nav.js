import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

// Logo
import Logo from '../../../img/logo/chicken-in-logo.png'
import Menu from '../../../img/hamburger_menu.svg'

import axios from 'axios'

class Nav extends React.Component {
  state = {
    displayNav: false
  }

  toggleNav = () => {
    this.setState((prevState) => {
      return {
        displayNav: !prevState.displayNav
      }
    })
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

  render () {
    return ([
      <div className={ this.state.displayNav ? 'nav active' : 'nav' }>
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
        <button onClick={this.logout}>Logout</button><br/>
      </div>,

      <div className={ this.state.displayNav ? 'hamburger' : 'hamburger active'}>
        <img src={Menu} alt="menu" onClick={this.toggleNav}/>
      </div>
    ])
  }
}

export { Nav }
