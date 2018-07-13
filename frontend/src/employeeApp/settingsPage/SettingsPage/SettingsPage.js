import React from 'react';

class SettingsPage extends React.Component {
  state = {
    oldPassword: null,
    retypePassword: null,
    newPassword: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.oldPassword !== this.state.retypePassword) {
      console.log("Passwords do not match")
    } else {
      console.log(this.state)
    }
  }

  render() {
    return (
      <div>
        <h2>Change password</h2>
        <form onSubmit={this.handleSubmit}>
          Old password
          <input name="oldPassword" type="text" onChange={this.handleChange} required />
          Retype Old password
          <input name="retypePassword" type="text" onChange={this.handleChange} required />
          New password
          <input name="newPassword" type="text" onChange={this.handleChange} required />
          <input type="submit" value="Change Password"/>
        </form>
      </div>
    )
  }
  
}

export { SettingsPage }