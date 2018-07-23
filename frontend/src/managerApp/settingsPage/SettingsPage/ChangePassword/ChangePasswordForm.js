import React from 'react'
import './ChangePasswordForm.scss'

class ChangePasswordForm extends React.Component {

  render () {
    return (
      <div className='card-container'>
        <header className="card-header">
          <h2>Change Password</h2>
        </header>
        <div className='card-content-pass'>
          <form onSubmit={this.props.createNew}>
            <div className="old-pass">
              <input placeholder="Enter original password..." onChange={this.props.confirmOld} type='text' name='oldPassword' required/>
            </div>
            <div className='new-pass'>
              <input placeholder="Enter new password..." onChange={this.props.handleNew} type='text' name='newPassword' required/>
            </div>
            <div className='conf-new-pass'>
              <input placeholder="Confirm new password..." onChange={this.props.confirmNew} type='text' name='confirmPassword' required/>
            </div>
            <div>
              <input className='submit-new-pass' type='submit' value='Confirm Change'/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ChangePasswordForm
