import React from 'react'
import './Nav.scss'

// Logo
import Logo from '../../../img/logo/chicken-in-logo.png'

// Hamburger
import MenuDark from '../../../img/hamburger-dark.svg'
import MenuLight from '../../../img/hamburger-light.svg'

class Nav1 extends React.Component {
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

  render () {
    return ([
      <div key={1} className={ this.state.displayNav ? 'nav active' : 'nav' }>
        <div className="logo">
          <img src={Logo}/>
        </div>

        <div className="nav-buttons">
          {this.props.children}
        </div>
      </div>,

      <div key={2} className={ this.state.displayNav ? 'hamburger' : 'hamburger active'}>
        <img src={ this.state.displayNav ? MenuLight : MenuDark } alt="menu" onClick={this.toggleNav}/>
      </div>
    ])
  }
}

export { Nav1 }
