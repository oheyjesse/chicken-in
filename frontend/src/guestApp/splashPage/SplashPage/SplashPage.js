import React from 'react'
import Logo from '../../../img/logo/chicken-in-logo.png'
import axios from 'axios'
import './SplashPage.scss'

class SplashPage extends React.Component {
  state = {
    logInAs: 'employee',
    email: null,
    password: null,
    loginError: false,
    attempts: 0
  }

  handleSwitchManager = () => {
    this.setState((prevState) => {
      if(prevState.logInAs === 'employee') {
        return {
          logInAs: 'manager'
        }
      }
    })
  }

  handleSwitchEmployee = () => {
    this.setState((prevState) => {
      if(prevState.logInAs === 'manager') {
        return {
          logInAs: 'employee'
        }
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    axios.post(`http://${window.location.host}/auth/${this.state.logInAs}/login`, {
      email: this.state.email,
      password: this.state.password
    })
      .then((response) => {
        window.location.href = '/'
      })
      .catch((error) => {
        console.log(error)
        this.setState((prevState) => {
          return {
            loginError: true,
            attempts: prevState.attempts + 1
          }
        })
      })

    // console.log(this.state)
  }

  render () {
    return  (
      <div className='SplashPage'>
        
        <div className='logo_container'>
          <img src={Logo} alt='Logo' />
        </div>

        <div className='form_container'>
          <button className="button_employee" onClick={this.handleSwitchEmployee} type='button'>Employee</button>
          <button className="button_manager" onClick={this.handleSwitchManager} type='button'>Manager</button>
          <div className={this.state.loginError ? 'login_error_message_active' : 'login_error_message_hidden'}>Wrong email or password {`(${this.state.attempts})`}</div>
          <form className={this.state.logInAs + '_active login_form'} onSubmit={this.handleSubmit}>
            <label>Email</label>
            <input
              onChange={this.handleChange}
              type='email'
              name='email'
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'
              title='Invalid email address'
              required/>
            <label>Password</label>
            <input onChange={this.handleChange} type='password' name='password' required/>
            <input className='button_submit' type='submit' value='Sign In'/>
            <p className='forgot_password'>Can't remember your password?</p>
          </form>
        </div>

      </div>
    )
  }
}

export { SplashPage }
