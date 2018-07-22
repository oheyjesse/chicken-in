import React from 'react'
import './SettingsUpdater.scss'

class SettingsUpdater extends React.Component {

  render () {
    return (
      <div className='card-container'>
        <header className="card-header">
          <h2>Business Settings</h2>
        </header>
        <div className="card-centent-settings">
          <div className="body-card">
            <p>Create and update your business settings. When you're finished, confirm changes with the button below</p>
          </div>
          <div className="bus-submit">
            <input onClick={this.props.handleUpdate} type='submit' value='Confirm Change'/>
          </div>
        </div>
      </div>
    )
  }
}

export default SettingsUpdater
