import React from 'react'
import axios from 'axios'
import { hostURL } from '../../../hostUrl'
import './SettingsPage.scss'

class SettingsPage extends React.Component {
  state = {
    oldPassword: null,
    retypePassword: null,
    newPassword: null,
    showMessage: false,
    updatingPassword: false,
    incorrectPassword: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    if (this.state.oldPassword !== this.state.retypePassword) {
      console.log('Passwords do not match')
    } else {
      try {
        this.setState(() => {
          return {
            updatingPassword: true
          }
        })

        console.log(this.state)
        await axios.put('http://localhost:3000/auth/employee/updatePassword', this.state)

        this.setState(() => {
          return {
            showMessage: true,
            updatingPassword: false
          }
        })

        setTimeout(() => {
          this.setState(() => {
            return {
              showMessage: false
            }
          })
        }, 5000)
      } catch (error) {
        this.setState(() => {
          return {
            updatingPassword: false,
            showMessage: false,
            incorrectPassword: true
          }
        })

        setTimeout(() => {
          this.setState(() => {
            return {
              incorrectPassword: false
            }
          })
        }, 5000)
      }
    }
  }

  render () {
    return (
      <div>
        <h2>Change password</h2>
        <form onSubmit={this.handleSubmit}>
          Old password
          <input name='oldPassword' type='text' onChange={this.handleChange} required />
          Retype Old password
          <input name='retypePassword' type='text' onChange={this.handleChange} required />
          New password
          <input name='newPassword' type='text' onChange={this.handleChange} required />
          <input type='submit' value={this.state.updatingPassword ? 'Updating password...' : 'Change Password'}/>
        </form>
        <p className={this.state.showMessage ? 'password_update_message_active' : 'password_update_message_hidden'} >Password updated!</p>
        <p className={this.state.incorrectPassword ? 'incorrect_password_message_active' : 'incorrect_password_message_hidden'} >Incorrect Password Provided</p>
      </div>
    )
  }
  
}

export { SettingsPage }