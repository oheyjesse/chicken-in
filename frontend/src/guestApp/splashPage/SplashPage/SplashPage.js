import React from 'react';
import Logo from '../../../img/logo/chicken-in-logo.png'

class SplashPage extends React.Component {
  state = {
    logInAs: "employee",
    email: '',
    password: '' 
  }

  handleSwitchManager = () => {
    this.setState((prevState) => {
      if(prevState.logInAs === "employee") {
        return {
          logInAs: "manager"
        }
      }
    })
  }

  handleSwitchEmployee = () => {
    this.setState((prevState) => {
      if(prevState.logInAs === "manager") {
        return {
          logInAs: "employee"
        }
      }
    })
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return  (
      <div>
        <img src={Logo} alt="Logo" height="250" width="250" /> <br/>
        <button onClick={this.handleSwitchEmployee} type="button">Employee</button>
        <button onClick={this.handleSwitchManager} type="button">Manager</button> <br/>
        <form onSubmit={this.handleSubmit}>
          Email <br/>
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            title="Invalid email address"
            required/> <br/>
          Password <br/>
          <input onChange={this.handleChange} type="text" name="password" required/> <br/>
          <input type="submit" value="Submit"/> <br/>
          Can't remember your password?
        </form>
      </div>
    )
  }

}

export { SplashPage }