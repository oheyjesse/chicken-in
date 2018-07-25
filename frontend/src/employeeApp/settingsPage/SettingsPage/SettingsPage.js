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
    incorrectPassword: false,
    incorrectConfirmPassword: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    if (this.state.newPassword !== this.state.retypePassword) {
      this.setState(() => {
        return {
          updatingPassword: false,
          incorrectConfirmPassword: true
        }
      })
      setTimeout(() => {
        this.setState(() => {
          return {
            incorrectConfirmPassword: false
          }
        })
      }, 5000)
      console.log('hey!')
    } else {
      try {
        this.setState(() => {
          return {
            updatingPassword: true
          }
        })

        console.log(this.state)
        await axios.put(`http://${hostURL || window.location.host}/auth/employee/updatePassword`, this.state)

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
      <div className='settings-page-container'>
        <div className="card-container">
          <h2 className='title-card'>Change password</h2>
          <form className="employee-settings-form"onSubmit={this.handleSubmit}>
            <input placeholder='Enter old password...'name='oldPassword' type='text' onChange={this.handleChange} required />
            <input placeholder='Enter new password...' name='newPassword' type='text' onChange={this.handleChange} required />
            {/* TODO: Change to confirm new not old */}
            <input placeholder='Confirm new password...' name='retypePassword' type='text' onChange={this.handleChange} required />
            <input className='submit-new-pass' type='submit' value={this.state.updatingPassword ? 'Updating password...' : 'Change Password'}/>
          </form>
          <p className={this.state.showMessage ? 'password_update_message_active' : 'password_update_message_hidden'} >Password updated!</p>
          <p className={this.state.incorrectPassword ? 'incorrect_password_message_active' : 'incorrect_password_message_hidden'} >Your old password is incorrect</p>
          {/* TODO: */}
          <p className={this.state.incorrectConfirmPassword ? 'incorrect_confirm_password_message_active' : 'incorrect_confirm_password_message_hidden'} >Your confirm password does not match</p>
        </div>
      </div>
    )
  }
}

export { SettingsPage }
