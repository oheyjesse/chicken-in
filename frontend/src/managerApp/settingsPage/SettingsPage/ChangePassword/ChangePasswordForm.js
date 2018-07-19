import React from 'react'
import './ChangePasswordForm.scss'

class ChangePasswordForm extends React.Component {
  state = {
    password: ''
  }

  // TODO: Create handleChange

  handleOld = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // TODO: Create handleChange

  handleNew = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // TODO: Create confirmChange

  confirmNew = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  // TODO: Create handleSubmit

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.newPassword !== this.state.confirmPassword) {
      alert('Passwords Do Not Match')
    } else {
      console.log({oldPassword: this.state.oldPassword, newPassword: this.state.newPassword})
    // TODO: Axios PUT req new pass old pass to auth/business/updatePassword
    }
  }

  render () {
    return (
      <div className='card-container'>
        <header className="card-header">
          <h2>Change Password</h2>
        </header>
        <div className='card-content-pass'>
          <form onSubmit={this.handleSubmit}>
            <div className="old-pass">
              <input placeholder="Enter original password..." onChange={this.handleOld} type='text' name='oldPassword' required/>
            </div>
            <div className='new-pass'>
              <input placeholder="Enter new password..." onChange={this.handleNew} type='text' name='newPassword' required/>
            </div>
            <div className='conf-new-pass'>
              <input placeholder="Confirm new password..." onChange={this.confirmNew} type='text' name='confirmPassword' required/>
            </div>
            <div>
              <input className='submit-new-pass' type='submit' value='Submit'/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ChangePasswordForm
