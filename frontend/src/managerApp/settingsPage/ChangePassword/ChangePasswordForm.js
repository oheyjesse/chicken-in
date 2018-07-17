import React from 'react'

class ChangePasswordForm extends React.Component {
  state = {
    password: 'blahblah'
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
    if (this.state.newPassword != this.state.confirmPassword) {
      alert('Passwords Do Not Match');
    } else {
      console.log({oldPassword: this.state.oldPassword, newPassword: this.state.newPassword})
    // TODO: Axios PUT req new pass old pass to auth/business/updatePassword
    }
  }

  render () {
    return (
      <div className='password-form-container'>
        <h2>Change Password</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Old Password</label>
          <input onChange={this.handleOld} type='text' name='oldPassword' required/>
          <br/>
          <label>New Password</label>
          <input onChange={this.handleNew} type='text' name='newPassword' required/>
          <br/>
          <label>Confirm Password</label>
          <input onChange={this.confirmNew} type='text' name='confirmPassword' required/>
          <br/>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}

export default ChangePasswordForm
