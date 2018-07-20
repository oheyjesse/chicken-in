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

  logout = (event) => { // TODO: The logout button was moved. I've copped this function to the new location. Is this still needed here?
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
    return ([
      <div className={ this.state.displayNav ? 'nav active' : 'nav' }>
        <div className="logo">
          <img src={Logo}/>
        </div>

        <div className="nav-buttons">
          {this.props.children}
        </div>
      </div>,

      <div className={ this.state.displayNav ? 'hamburger' : 'hamburger active'}>
        <img src={Menu} alt="menu" onClick={this.toggleNav}/>
      </div>
    ])
  }
}

export { Nav }
