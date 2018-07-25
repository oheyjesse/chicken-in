import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import '../ManageEmployeesPage/ManageEmployeeModal.scss'

class AddEmployeeModal extends React.Component {
  componentWillMount () {
    Modal.setAppElement('body')
  }

  render () {
    return (
      <Modal
        isOpen={this.props.addEmployeeForm}
        contentLabel="AddEmployeeForm"
        className="modal"
      >
        <form onSubmit={this.props.handleCreate}>
          <div className="modal-container">
            <input
              className="firstname"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name..."
              required
            />
            <input
              className="lastname"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name..."
              required
            />
            <input
              className="email"
              type="email"
              name="email"
              id="email"
              placeholder="Email..."
              required
            />
            <input
              className="st"
              type="number"
              step="0.5"
              name="standardRate"
              id="standardRate"
              min={1900 / 100} // cent to doller
              placeholder="Paymemt Rate..."
              required
            />
            <div className="location">
              <div className="location-button" type="button" onClick={this.props.toggleLocationCheckbox}>{this.props.displayLocationCheckbox ? 'Close' : 'Location'} &#x25BC; </div>
              <div className={this.props.displayLocationCheckbox ? 'location_checkbox_active' : 'location_checkbox_hidden'}>
                { this.props.businessLocations.map((location, index) => {
                  return (
                    <label key={index} className="checkbox" htmlFor={location}>
                      <input
                        type="checkbox"
                        name="location"
                        value={location}
                      />{location}
                    </label>
                  )
                })}
              </div>
            </div>
            <input
              className="submit"
              type="submit"
              value="CreateNew"
            />
            <button className="cancel" onClick={this.props.closeAddEmployeeModal}>Cancel</button>
          </div>
        </form>
      </Modal>
    )
  }
}

export default AddEmployeeModal
