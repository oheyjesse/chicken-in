import React from 'react'
import { Link } from 'react-router-dom'
import './GuestNavigation.scss'
import MenuDark from '../../../img/hamburger-dark.svg'
import MenuLight from '../../../img/hamburger-light.svg'

class GuestNavigation extends React.Component {
  state = {
    displayMenu: false
  }

  toggleDisplayMenu = () => {
    this.setState((prevState) => {
      return {
        displayMenu: !prevState.displayMenu
      }
    })
  }

  render () {
    return (
      <div className="GuestNavigation">
        <img src={ this.state.displayMenu ? MenuDark : MenuLight } alt="menu" onClick={this.toggleDisplayMenu}/>
        <ul className={this.state.displayMenu ? 'GuestNavigation__active' : 'GuestNavigation__not_active'}>
          <li><Link onClick={this.toggleDisplayMenu} to="/">Login Page</Link></li>
          <li><Link onClick={this.toggleDisplayMenu} to="/about">About Page</Link></li>
          <li><Link onClick={this.toggleDisplayMenu} to="/contact">Contact Page</Link></li>
        </ul>
      </div>
    )
  }
}

export { GuestNavigation }
